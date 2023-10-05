import { useEffect, useState, useRef } from 'react';
import { IonRow } from '@ionic/react';

const AudioRow: React.FC<any> = ({ emoji, icon, onClose, onAudioLoaded }) => {
  const IonIcon = icon;
  const audioRow = useRef<any>();
  const phraseRow = useRef<any>();

  const playEvent = useRef<HTMLAudioElement>(new Audio(emoji.audio));
  const playPhraseEvent = useRef<HTMLAudioElement>(new Audio(emoji.phrases));

  const phrase = emoji.phrases;
  const [isPlaying, setIsPlaying] = useState(false);
  const [phrasePlaying, setPhrasePlaying] = useState(false);

  useEffect(() => {
    // Add an event listener for the "canplaythrough" event
    playEvent.current.addEventListener('canplaythrough', () => {
      // Audio is ready to play, trigger the callback function
      onAudioLoaded();
    });
  }, [onAudioLoaded]);

  const playAudio = (e: any) => {
    const audioPhrase = e.currentTarget.id;
    let prevValue: any;

    if (audioPhrase === 'audio') {
      prevValue = isPlaying;
      setIsPlaying(true);
      setIsPlaying(!prevValue);
      setPhrasePlaying(false);

      if (!prevValue) {
        playEvent.current.play();
        audioRow.current.classList.add('audio-active');
        if (phrase) {
          phraseRow.current.classList.add('ghost');
        }
      } else {
        playEvent.current.pause();
        playEvent.current.currentTime = 0;
        audioRow.current.classList.remove('audio-active');
        if (phrase) {
          phraseRow.current.classList.remove('ghost');
        }
      }

      playEvent.current.onended = () => {
        setIsPlaying(false);
        console.log('audio ended');
        audioRow.current.classList.remove('audio-active');
        if (phrase) {
          phraseRow.current.classList.remove('ghost');
        }
      };
    } else if (audioPhrase === 'phrase') {
      // Handle phrase audio similarly using playPhraseEvent
    }
  };

  useEffect(() => {
    // Ensure that the component is mounted
    let isMounted = true;

    const cleanup = () => {
      if (isMounted) {
        // Remove event listeners
        if (playEvent.current) {
          playEvent.current.pause();
          playEvent.current.currentTime = 0;
          playEvent.current.onended = null;
        }
        if (playPhraseEvent.current) {
          playPhraseEvent.current.pause();
          playPhraseEvent.current.currentTime = 0;
          playPhraseEvent.current.onended = null;
        }
        isMounted = false;
      }
    };

    return cleanup;
  }, []);

  return (
    <div>
      {/* Render the audio row */}
      <IonRow
        ref={audioRow}
        onClick={() => playAudio({ currentTarget: { id: 'audio' } })}
        className='iconRow'
        id='audio'>
        {isPlaying ? (
          // Render the stop icon when audio is playing
          <IonIcon name='stop-circle' className='modal-icon' size='large' />
        ) : (
          // Render the play icon when audio is not playing
          <IonIcon
            name='play-circle-outline'
            className='modal-icon'
            size='large'
          />
        )}
        <h4> word </h4>
      </IonRow>

      {/* Render the phrase audio row */}
      {phrase ? (
        <IonRow
          ref={phraseRow}
          onClick={() => playAudio({ currentTarget: { id: 'phrase' } })}
          className='iconRow'
          id='phrase'>
          {phrasePlaying ? (
            // Render the stop icon when phrase audio is playing
            <IonIcon name='stop-circle' className='modal-icon' size='large' />
          ) : (
            // Render the play icon when phrase audio is not playing
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
    </div>
  );
};

export default AudioRow;
