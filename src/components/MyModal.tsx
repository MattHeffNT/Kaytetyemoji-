import { useEffect, useState, useRef, useCallback } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonImg,
  IonGrid,
  IonCol,
  IonModal,
  IonChip,
  IonButtons,
  IonButton,
} from '@ionic/react';
import React from 'react';

import './styles/MyModal.css';
import IonIcon from '@reacticons/ionicons';

import ShareButton from './ShareButton';
import AudioRow from './AudioRow';

const MyModal: React.FC<any> = ({ isOpen, onClose, initialData, index }) => {
  const KaytetyeChip = useRef<any>();
  const EnglishChip = useRef<any>();
  const emoji = initialData;
  const [name, setName]: any = useState(emoji.name_kaytetye);
  const [phrase, setPhrase]: any = useState(emoji.phrases_kaytetye);

  let lastCalled = 0;

  // Set the default title to Kaytetye when modal opened
  useEffect(() => {
    setName(emoji.name_kaytetye);
    setPhrase(emoji.phrases_kaytetye);
  }, [emoji.name_kaytetye, emoji.phrases_kaytetye]);

  // change active chip color and setName when Kaytetye or English is selected in the modal
  const modalName = (e: any) => {
    const languageChoice = e.nativeEvent.srcElement.innerText;

    // will need to change these names when populating with Katyetye
    if (languageChoice === 'Kaytetye') {
      setName(emoji.name_kaytetye);
      setPhrase(emoji.phrases_kaytetye);
      // if Katyetye chosen, change to ochre yellow
      KaytetyeChip.current.style = 'background:#d47732;';
      // grab the inactive chip and change its colour to default
      EnglishChip.current.style = 'background:#646466';
    } else if (languageChoice === 'English') {
      setName(emoji.name);
      setPhrase(emoji.phrases_english);
      //if english chosen, change english to ochre yellow
      EnglishChip.current.style = 'background:#d47732;';
      // grab the inactive chip and change its colour to default
      KaytetyeChip.current.style = 'background:#646466';
    }
  };

  // modal close event handler
  const Close = useCallback(() => {
    setName(emoji.name_kaytetye);
    if (phrase) {
      setPhrase(emoji.phrases_kaytetye);
    }
    // close the modal
    onClose();
    // return () => {
    //   clearTimeout(timeoutId);
    // };
  }, [onClose, phrase, emoji.name_kaytetye, emoji.phrases_kaytetye]);

  // enable the hardware back button to close the modal
  useEffect(() => {
    const backButtonHandler = () => {
      // debounce function so that user can't spam back button
      const currentTime = Date.now();
      if (currentTime - lastCalled < 1000) {
        // delay of 1000 ms
        return;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lastCalled = currentTime;

      Close();
    };
    // if you press back, make sure you can click on modals again
    if (isOpen) {
      document.addEventListener('ionBackButton', backButtonHandler);
    } else {
      document.removeEventListener('ionBackButton', backButtonHandler);
    }
    return () => {
      document.removeEventListener('ionBackButton', backButtonHandler);
    };
  }, [isOpen, Close]);

  const i = index;
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar color='none'>
          <IonButtons slot='start'>
            {/* close button */}
            <IonButton onClick={Close} style={{ color: 'black' }}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='modal-container'>
          <IonImg src={emoji.file} alt={emoji.name} id='modalImg' />

          <h1> {name}</h1>

          <IonChip ref={KaytetyeChip} id='aChip' onClick={modalName}>
            Kaytetye
          </IonChip>
          <IonChip ref={EnglishChip} onClick={modalName}>
            English
          </IonChip>

          <br />
          <br />

          <IonGrid>
            <IonCol>
              {/* share button and audio buttons */}
              <ShareButton emoji={emoji} icon={IonIcon} />
              <AudioRow emoji={emoji} icon={IonIcon} />
            </IonCol>
            {/* on english/kaytetye click change phrase language */}
            <p className='phraseText'> {phrase}</p>
          </IonGrid>
        </div>
      </IonContent>
    </IonModal>
  );
};
export default MyModal;
