import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
// import '../assets/images'
import { useEffect, useState, useRef } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonPage, IonContent, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
// import IonIcon from '@reacticons/ionicons'
import MyModal from './MyModal'
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
              <IonCol size="3">
                <IonImg src={emoji.file} onClick={() => { setMyModal({ isOpen: true }); setEmojisData(emoji); }} />
              </IonCol>
            ))}

            {/* keep this here so that emojis on the bottom row are gridded correctly */}
            {/* <IonCol></IonCol> */}

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

// // Modal component 
// const MyModal: React.FC<any> = ({ isOpen, onClose, initialData }) => {

//   const emoji = initialData
//   var [name, setName]: any = useState(emoji.name_arrernte);

//   const ArrernteChip = useRef<any>()
//   const EnglishChip = useRef<any>()
//   const [isPlaying, setIsPlaying] = useState(false)

//   const playEvent = useRef<any>()

//   // Set the default title to arrernte when modal opened
//   useEffect(() => {

//     setName(emoji.name_arrernte)

//   }, [emoji.name_arrernte])


//   // change active chip color and setName when Arrernte or English is selected in the modal
//   const modalName = (e: any) => {

//     const languageChoice = e.nativeEvent.srcElement.innerText

//     // will obviously need to change these names when populating with Katyetye
//     // will also need to add fade animation to match IndigEmoji
//     if (languageChoice == "Arrernte") {

//       setName(emoji.name_arrernte)
//       e.nativeEvent.srcElement.style = "background:#f4bd29;transition:1.5s;"

//       // grab the inactive chip and change its colour to default 
//       EnglishChip.current.style = "background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12)"

//     } else if (languageChoice == "English") {

//       setName(emoji.name)
//       e.nativeEvent.srcElement.style = "background:#f4bd29;transition:1.5s;"

//       // grab the inactive chip and change its colour to default 
//       ArrernteChip.current.style = "background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12)"
//     }
//   }

//   const audio = new Audio(
//     emoji.audio
//   )

//   audio.preload = "metadata"
//   audio.controls = true

//   //play audio and function so that the colour of the play button stays yellow until end of audio
//   const playAudio = (e: any) => {

//     const icon = e.currentTarget.children[0]

//     setIsPlaying(true)


//     // toggle play/ pause
//     const prevValue = isPlaying;
//     setIsPlaying(!prevValue);

//     if (!prevValue) {

//       // play the Emoji audio
//       playEvent.current.play()

//       // change color of play icon to ochre yellow
//       icon.classList.add('audio-active')

//     } else {
//       playEvent.current.pause()
//       playEvent.current.currentTime = 0
//       icon.classList.remove('audio-active')
//     }

//     // once audio has finished, set playing back to false and reset play icon style to default state
//     playEvent.current.onended = () => {
//       console.log("ended")
//       icon.classList.remove('audio-active')
//       setIsPlaying(false)
//     }

//   }

//   // add code to toggle play/stop of audio
//   // it should also stop when we close the modal
//   // resets name to default arrente
//   const Close = (e: any) => {

//     // stop the audio
//     setIsPlaying(false)

//     // set timer on modal so that you don't see the name of the emoji change straight away when you close it
//     setTimeout(() => {

//       setName(emoji.name_arrernte)

//     }, 200);

//     // close the modal 
//     onClose()
//   }

//   return (

//     <IonModal isOpen={isOpen}>
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">

//             {/* I think a "close" works better here than the back icon */}
//             <IonButton onClick={Close}>Close</IonButton>

//           </IonButtons>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent >

//         <div className="modal-container">

//           <IonImg src={emoji.file} alt={emoji.name} id="modalImg" />

//           <h1> {name}</h1>

//           <IonChip ref={ArrernteChip} id="aChip" onClick={modalName}>Arrernte</IonChip>
//           <IonChip ref={EnglishChip} onClick={modalName}>English</IonChip>

//           {/* delete the line breaks and do this with css  */}
//           <br />
//           <br />

//           <IonGrid>
//             <IonCol>
//               <IonRow>
//                 <IonIcon name="share-social-outline" className="modal-icon" size="large" /><h4> Share </h4>
//               </IonRow>
//               <audio src={emoji.audio} ref={playEvent}></audio>
//               <IonRow onClick={playAudio} >
//                 {/* onClick (it's more a toggle than a click event) play audio, change inner color to active yellow*/}
//                 {isPlaying ? <IonIcon name='play-circle' className="modal-icon" size="large" /> : <IonIcon name='play-circle-outline' className="modal-icon" size="large" />
//                 }

//                 <h4> Play </h4>
//               </IonRow>
//             </IonCol>
//           </IonGrid>
//         </div>
//       </IonContent>
//     </IonModal >
//   )
// }
