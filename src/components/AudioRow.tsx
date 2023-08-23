import { useState, useRef } from 'react';
import { IonRow } from '@ionic/react';

const AudioRow: React.FC<any> = ({ emoji, icon, onClose }) => {
  const audioRow = useRef<any>();
  const phraseRow = useRef<any>();
  const playEvent = useRef<any>();
  const playPhraseEvent = useRef<any>();
  const IonIcon = icon;

  const phrase = emoji.phrases;
  const [isPlaying, setIsPlaying] = useState(false);
  const [phrasePlaying, setPhrasePlaying] = useState(false);

  const audio: HTMLAudioElement = new Audio(emoji.audio);

  // const audio: HTMLAudioElement = new Audio(emoji.audio) as HTMLAudioElement;
  audio.preload = 'metadata';
  audio.controls = true;

  // //play audio and function so that the colour of the play button stays yellow until end of audio
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

    // audio on ended functions
    playEvent.current.onended = () => {
      audio.currentTime = audio.duration;
      audioRow.current.classList.remove('audio-active');
      setIsPlaying(false);
      if (phrase) {
        phraseRow.current.classList.remove('ghost');
      }
    };
    playPhraseEvent.current.onended = () => {
      audio.currentTime = audio.duration;
      setPhrasePlaying(false);
      phraseRow.current.classList.remove('audio-active');
      audioRow.current.classList.remove('ghost');
    };
  };

  // once audio has finished, set playing back to false and reset play icon style to default state
  // modal close event handler
  // const Close = () => {
  //   // stop the audio
  //   setIsPlaying(false);

  //   // we need to check if phrase is loaded on the emoji otherwise the close button won't work
  //   // because below statement depends on it1
  //   if (phrase) {
  //     setPhrasePlaying(false);
  //     phraseRow.current.classList.remove('audio-active');
  //     phraseRow.current.classList.remove('ghost');
  //   }
  //   // remove ochre styling from audio/phrase rows
  //   audioRow.current.classList.remove('audio-active');
  //   audioRow.current.classList.remove('ghost');

  //   // close the modal
  //   onClose();
  // };

  return (
    <div>
      <audio src={emoji.audio} ref={playEvent}></audio>
      <IonRow ref={audioRow} onClick={playAudio} className="iconRow" id="audio">
        {isPlaying ? (
          <IonIcon name="stop-circle" className="modal-icon" size="large" />
        ) : (
          <IonIcon name="play-circle-outline" className="modal-icon" size="large" />
        )}
        <h4> word </h4>
      </IonRow>
      <audio src={emoji.phrases} ref={playPhraseEvent}></audio>
      {/* // if phrase in the object then render it in the modal otherwise don't show anything */}
      {phrase ? (
        <IonRow ref={phraseRow} onClick={playAudio} className="iconRow" id="phrase">
          {/* change icon depending on whether the button is playing or not */}
          {phrasePlaying ? (
            <IonIcon name="stop-circle" className="modal-icon" size="large" />
          ) : (
            <IonIcon name="play-circle-outline" className="modal-icon" size="large" />
          )}

          <h4> phrase </h4>
          <br />
        </IonRow>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AudioRow;
