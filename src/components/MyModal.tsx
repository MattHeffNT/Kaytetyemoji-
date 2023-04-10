import { useEffect, useState, useRef, useCallback } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
import IonIcon from '@reacticons/ionicons';

// social sharing library
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing';
import './styles/MyModal.css';

const MyModal: React.FC<any> = ({ isOpen, onClose, initialData }) => {
  const KaytetyeChip = useRef<any>();
  const EnglishChip = useRef<any>();
  const Share = useRef<any>();
  const audioRow = useRef<any>();
  const phraseRow = useRef<any>();
  const playEvent = useRef<any>();
  const playPhraseEvent = useRef<any>();
  const emoji = initialData;
  var [name, setName]: any = useState(emoji.name_kaytetye);
  var [phrase, setPhrase]: any = useState(emoji.phrases_kaytetye);
  const [isPlaying, setIsPlaying] = useState(false);
  const [phrasePlaying, setPhrasePlaying] = useState(false);
  const audio = new Audio(emoji.audio);
  audio.preload = 'metadata';
  audio.controls = true;
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

  //play audio and function so that the colour of the play button stays yellow until end of audio
  const playAudio = (e: any) => {
    // depending on whether play/phrase was pressed set the States for the respective element
    const audioPhrase = e.currentTarget.id;
    let prevValue: any;

    // toggle play/ pause
    // grab previous value when state updated, which we can use to keep track
    if (audioPhrase === 'audio') {
      prevValue = isPlaying;
      setIsPlaying(true);
      setIsPlaying(!prevValue);
    } else if (audioPhrase === 'phrase') {
      prevValue = phrasePlaying;
      setPhrasePlaying(true);
      setPhrasePlaying(!prevValue);
    }

    // check if not the previous value then play and on toggle, pause and reset audio
    // then remove css class from icon
    if (!prevValue) {
      if (audioPhrase === 'audio') {
        // play the Emoji audio
        playEvent.current.play();
        // change color of play icon to ochre yellow
        audioRow.current.classList.add('audio-active');
        // grey out the non-playing row
        if (phrase) {
          phraseRow.current.classList.add('ghost');
        }
      } else if (audioPhrase === 'phrase') {
        playPhraseEvent.current.play();
        // grey out the non-playing row
        phraseRow.current.classList.add('audio-active');
        audioRow.current.classList.add('ghost');
      }
    } else {
      if (audioPhrase === 'audio') {
        playEvent.current.pause();
        playEvent.current.currentTime = 0;
        audioRow.current.classList.remove('audio-active');
        if (phrase) {
          phraseRow.current.classList.remove('ghost');
        }
      } else {
        playPhraseEvent.current.pause();
        playPhraseEvent.current.currentTime = 0;
        audioRow.current.classList.remove('ghost');
        if (phrase) {
          phraseRow.current.classList.remove('audio-active');
        }
      }
    }

    // once audio has finished, set playing back to false and reset play icon style to default state
    // ghostout the other play button until respective audio finished playing
    playEvent.current.onended = () => {
      audioRow.current.classList.remove('audio-active');
      setIsPlaying(false);
      if (phrase) {
        phraseRow.current.classList.remove('ghost');
      }
    };
    // once audio has finished, set playing back to false and reset play icon style to default state
    playPhraseEvent.current.onended = () => {
      phraseRow.current.classList.remove('audio-active');
      setPhrasePlaying(false);
      audioRow.current.classList.remove('ghost');
    };
  };

  // modal close event handler
  const Close = useCallback(() => {
    // stop the audio
    setIsPlaying(false);

    // we need to check if phrase is loaded on the emoji otherwise the close button won't work
    // because below statement depends on it
    if (phrase) {
      setPhrasePlaying(false);
      phraseRow.current.classList.remove('audio-active');
      phraseRow.current.classList.remove('ghost');
    }
    // remove ochre styling from audio/phrase rows
    audioRow.current.classList.remove('audio-active');
    // set timer on modal so that you don't see the name of the emoji change straight away when you close it
    setTimeout(() => {
      setName(emoji.name_kaytetye);
      if (phrase) {
        setPhrase(emoji.phrases_kaytetye);
      }
    }, 200);
    // close the modal
    onClose();
  }, [onClose, phrase, emoji.name_kaytetye, emoji.phrases_kaytetye]);

  const shareButton = async () => {
    // debounce function so that user can't spam share button
    const currentTime = Date.now();
    if (currentTime - lastCalled < 1000) {
      // delay of 1000 ms
      return;
    }
    lastCalled = currentTime;

    // button press animation for share button
    setTimeout(() => {
      Share.current.classList.remove('modal-icon-pressed');
    }, 260);
    Share.current.classList.add('modal-icon-pressed');

    // our json doesn't have this line in front of the base64 so just prepending to be
    // able to use this social share plugin. We will also style the button when it's pressed
    const prependData = 'data:image/png;base64,' + emoji.data;

    // params @message, @subject, @file, @url
    SocialSharing.share(
      `${emoji.name_kaytetye} | ${emoji.name}`,
      '',
      prependData
    );
  };

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

          {/* delete the line breaks and do this with css  */}
          <br />
          <br />

          <IonGrid>
            <IonCol>
              <IonRow ref={Share} onClick={shareButton} className='iconRow'>
                {/* social share  */}
                <IonIcon
                  name='share-social-outline'
                  className='modal-icon'
                  size='large'
                />
                <h4> share </h4>
              </IonRow>

              <audio src={emoji.audio} ref={playEvent}></audio>
              <IonRow
                ref={audioRow}
                onClick={playAudio}
                className='iconRow'
                id='audio'>
                {/* onClick (it's more a toggle than a click event) play audio, change inner color to active yellow*/}
                {isPlaying ? (
                  <IonIcon
                    name='stop-circle'
                    className='modal-icon'
                    size='large'
                  />
                ) : (
                  <IonIcon
                    name='play-circle-outline'
                    className='modal-icon'
                    size='large'
                  />
                )}
                <h4> word </h4>
              </IonRow>

              <audio src={emoji.phrases} ref={playPhraseEvent}></audio>
              {/* if phrase in the object then render it in the modal otherwise don't show anything */}
              {phrase ? (
                <IonRow
                  ref={phraseRow}
                  onClick={playAudio}
                  className='iconRow'
                  id='phrase'>
                  {/* change icon depending on whether the button is playing or not */}
                  {phrasePlaying ? (
                    <IonIcon
                      name='stop-circle'
                      className='modal-icon'
                      size='large'
                    />
                  ) : (
                    <IonIcon
                      name='play-circle-outline'
                      className='modal-icon'
                      size='large'
                    />
                  )}
                  <h4> phrase </h4>
                  <br />
                </IonRow>
              ) : (
                <></>
              )}
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
