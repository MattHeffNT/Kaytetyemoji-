import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
// import '../assets/images'
import { useEffect, useState, useRef } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonPage, IonContent, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
import IonIcon from '@reacticons/ionicons'
// import { image } from 'ionicons/icons';



const ExploreContainer: React.FC<any> = () => {

  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');


  // maybe have another name setter here so i can call it on a close modal function
  const [myModal, setMyModal] = useState({ isOpen: false })

  // get array of emoji json object keys before using map method
  const result: any = Object.keys(emojis).map((key) => {
    return { [key]: emojis[key as keyof typeof emojis] };
  });


  // variables to map in the component
  var obj: any = emojis
  var arr: any = obj.emojis


  return (

    < IonContent >
      {/* hmm might pull this out to its own component, keeping here for the moment so that it will be easier to search */}
      {/* the text from the json  */}

      <div className='container'>

        {/*  i think i definitely need to have search bar as seperate component so that it doesn't update state */}
        {/* of the container.... also maybe put into the toolbar so that it's fixed when user scrolls down*/}
        <IonSearchbar id="search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showClearButton="always" ></IonSearchbar>

        <IonGrid>
          <IonRow>

            {/* map emoji images here, then on click open and load modal with larger emoji, translation options, audio, and share button*/}
            {arr.map((emoji: any) => (
              <IonCol>
                <IonImg src={emoji.file} onClick={() => { setMyModal({ isOpen: true }); setEmojisData(emoji); }} />
              </IonCol>
            ))}

            {/* keep this here so that emojis on the bottom row are gridded correctly */}
            <IonCol></IonCol>

          </IonRow>
        </IonGrid>
      </div>

      <MyModal
        isOpen={myModal.isOpen}
        onClose={(e: Event) => { setMyModal({ isOpen: false }); return e }}
        initialData={emojisData}
      />

    </IonContent >

  );
};
export default ExploreContainer;

// Modal component 
const MyModal: React.FC<any> = ({ isOpen, onClose, initialData }) => {

  const emoji = initialData
  var [name, setName]: any = useState(emoji.name_arrernte);

  const ArrernteChip = useRef<any>()
  const EnglishChip = useRef<any>()
  const AudioIconOn = '../assets/images/audio-on.png'


  // add eventlistener so that if clsoe button pressed, it reloads name state to arrente and stops audio


  // set the default title to arrernte when modal opened
  useEffect(() => {

    setName(emoji.name_arrernte)

  }, [emoji.name_arrernte])


  // change active color and setName when Arrernte or English is selected in the modal
  const modalName = (e: any) => {

    const languageChoice = e.nativeEvent.srcElement.innerText


    // will obviously need to change these names when populating with Katyetye
    // will also need to add fade animation to match IndigEmoji
    if (languageChoice == "Arrernte") {

      setName(emoji.name_arrernte)
      e.nativeEvent.srcElement.style = "background:#f4bd29;transition:1.5s;"

      // grab the inactive chip and change its colour to default 
      EnglishChip.current.style = "background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12)"

    } else if (languageChoice == "English") {


      setName(emoji.name)
      e.nativeEvent.srcElement.style = "background:#f4bd29;transition:1.5s;"

      // grab the inactive chip and change its colour to default 
      ArrernteChip.current.style = "background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12)"
    }
  }

  // const [emojiAudio,setEmojiAudio] = useState('')

  const audio = new Audio(
    emoji.audio
  )

  audio.preload = "metadata"
  audio.controls = true


  // add function so that the colour of the play button stays yellow until end of audio
  const playAudio = (e: any) => {

    // if audio already streaming, a second click will pause it 
    console.log(audio)

    if (audio.ended == false) {
      console.log("audio playing")
    }


    const duration = audio.duration * 1000

    // audio.onclick(() => { console.log("sup") })

    if (!audio.paused) {
      audio.pause();
    }

    audio.onclick = () => { console.log("sup") }

    const icon = e.currentTarget.children[0]
    icon.classList.add('audio-active')


    // timer function to change play icon to yellow when audio is playing and switch it back to default color when it stops
    setTimeout(() => {
      icon.classList.remove('audio-active')
    }, duration);

    audio.play()
  }

  // add code to toggle play/stop of audio
  // it should also stop when we close the modal
  // resets name to default arrente
  const Close = (e: any) => {

    // currently a bug where if you click the language switch as audio is playing, it continues to play if you hit close
    audio.pause()
    // set timer on this so that you don't see the name of the emoji change straight away
    setTimeout(() => {

      setName(emoji.name_arrernte)

    }, 200);

    // need a better way to stop the audio completely 
    onClose()

  }

  return (

    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">

            {/* I think a "close" works better here than the back icon */}
            <IonButton onClick={Close}>Close</IonButton>

          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent >

        <div className="modal-container">

          <IonImg src={emoji.file} alt={emoji.name} id="modalImg" />

          <h1> {name}</h1>

          <IonChip ref={ArrernteChip} id="aChip" onClick={modalName}>Arrernte</IonChip>
          <IonChip ref={EnglishChip} onClick={modalName}>English</IonChip>

          {/* delete the line breaks and do this with css  */}
          <br />
          <br />

          <IonGrid>
            <IonCol>
              <IonRow>
                <IonIcon name="share-social-outline" className="modal-icon" size="large" /><h4> Share </h4>
              </IonRow>

              <IonRow onClick={playAudio}>
                {/* onClick (it's more a toggle than a click event?) play audio, change inner color to active yellow*/}
                <IonIcon name='play-circle-outline' className="modal-icon" size="large" />
                <h4> Play </h4>
              </IonRow>

            </IonCol>
          </IonGrid>
        </div>

      </IonContent>
    </IonModal >

  )
}
// each page
