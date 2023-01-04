import './styles/MyModal.css';
import { useEffect, useState, useRef } from 'react';
// import Ion components (seperated into two lines for readability)
import { IonContent, IonHeader, IonToolbar, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';

import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
import IonIcon from '@reacticons/ionicons';

// social sharing library
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing';

const MyModal: React.FC<any> = ({ isOpen, onClose, initialData }) => {
  const ArrernteChip = useRef<any>();
  const EnglishChip = useRef<any>();
  const Share = useRef<any>();
  const audioRow = useRef<any>();
  const playEvent = useRef<any>();
  const emoji = initialData;
  var [name, setName]: any = useState(emoji.name_arrernte);
  const [isPlaying, setIsPlaying] = useState(false);

  // Set the default title to arrernte when modal opened
  useEffect(() => {
    setName(emoji.name_arrernte);
  }, [emoji.name_arrernte]);

  // change active chip color and setName when Arrernte or English is selected in the modal
  const modalName = (e: any) => {
    const languageChoice = e.nativeEvent.srcElement.innerText;

    // will obviously need to change these names when populating with Katyetye
    // will also need to add fade animation to match IndigEmoji
    if (languageChoice === 'Arrernte') {
      setName(emoji.name_arrernte);
      e.nativeEvent.srcElement.style = 'background:#f4bd29;';
      // grab the inactive chip and change its colour to default
      EnglishChip.current.style = 'background:#646466';
    } else if (languageChoice === 'English') {
      setName(emoji.name);
      e.nativeEvent.srcElement.style = 'background:#f4bd29;';

      // grab the inactive chip and change its colour to default
      ArrernteChip.current.style = 'background:#646466';
    }
  };

  const audio = new Audio(emoji.audio);

  audio.preload = 'metadata';
  audio.controls = true;

  //play audio and function so that the colour of the play button stays yellow until end of audio
  const playAudio = () => {
    setIsPlaying(true);

    // toggle play/ pause
    // grab previous value (because setting state updates the state)
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    // check if not the previous value then play and on toggle, pause and reset audio
    // then remove css class from icon
    if (!prevValue) {
      // play the Emoji audio
      playEvent.current.play();

      // change color of play icon to ochre yellow
      audioRow.current.classList.add('audio-active');
    } else {
      playEvent.current.pause();
      playEvent.current.currentTime = 0;
      audioRow.current.classList.remove('audio-active');
    }

    // once audio has finished, set playing back to false and reset play icon style to default state
    playEvent.current.onended = () => {
      audioRow.current.classList.remove('audio-active');
      setIsPlaying(false);
    };
  };

  // modal close event handler
  const Close = () => {
    // stop the audio
    setIsPlaying(false);

    // set timer on modal so that you don't see the name of the emoji change straight away when you close it
    setTimeout(() => {
      setName(emoji.name_arrernte);
    }, 200);

    // close the modal
    onClose();
  };

  const shareButton = async () => {
    // button press animation for share button
    setTimeout(() => {
      Share.current.classList.remove('modal-icon-pressed');
    }, 260);
    Share.current.classList.add('modal-icon-pressed');

    // our json doesn't have this line in front of the base64 so just prepending to be
    // able to use this social share plugin. We will also style the button when it's pressed
    var prependData = 'data:image/png;base64,' + emoji.data;

    // params @message, @subject, @file, @url
    SocialSharing.share(`${emoji.name_arrernte} | ${emoji.name}`, '', prependData);
  };

  // enable the hardware back button to close the modal
  useEffect(() => {
    if (isOpen) {
      console.log('modal opened');
      const backButtonHandler = (e: any) => {
        e.detail.register(100, () => {
          console.log('event listener added');
          Close();
        });
      };
      document.addEventListener('ionBackButton', backButtonHandler);
      return () => {
        document.removeEventListener('ionBackButton', backButtonHandler);
        onClose();
      };
    }
  }, [onClose]);

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar color="none">
          <IonButtons slot="start">
            {/* I think a "close" works better here than the back icon */}
            <IonButton onClick={Close}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="modal-container">
          <IonImg src={emoji.file} alt={emoji.name} id="modalImg" />

          <h1> {name}</h1>

          <IonChip ref={ArrernteChip} id="aChip" onClick={modalName}>
            Arrernte
          </IonChip>
          <IonChip ref={EnglishChip} onClick={modalName}>
            English
          </IonChip>

          {/* delete the line breaks and do this with css  */}
          <br />
          <br />

          <IonGrid>
            <IonCol>
              <IonRow ref={Share} onClick={shareButton}>
                {/* social share  */}
                <IonIcon name="share-social-outline" className="modal-icon" size="large" />
                <h4> share </h4>
              </IonRow>

              <audio src={emoji.audio} ref={playEvent}></audio>
              <IonRow ref={audioRow} onClick={playAudio}>
                {/* onClick (it's more a toggle than a click event) play audio, change inner color to active yellow*/}
                {isPlaying ? (
                  <IonIcon name="play-circle" className="modal-icon" size="large" />
                ) : (
                  <IonIcon name="play-circle-outline" className="modal-icon" size="large" />
                )}
                <h4> play </h4>
              </IonRow>
            </IonCol>
          </IonGrid>
        </div>
      </IonContent>
    </IonModal>
  );
};
export default MyModal;
