import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
// import '../assets/images'
import { useEffect, useState, useRef } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonPage, IonContent, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
import IonIcon from '@reacticons/ionicons'

// At some stage will need to stop the name prop being passed to
// each page


const ExploreContainer: React.FC<any> = () => {

  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');

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
        onClose={() => setMyModal({ isOpen: false })}
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
      e.nativeEvent.srcElement.style = "background:#f4bd29;"

      // grab the inactive chip and change its colour to default 
      EnglishChip.current.style = "background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12)"

    } else if (languageChoice == "English") {

      setName(emoji.name)
      e.nativeEvent.srcElement.style = "background:#f4bd29;"

      // grab the inactive chip and change its colour to default 
      ArrernteChip.current.style = "background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12)"
    }
  }


  return (

    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">

            {/* I think a "close" works better here than the back icon */}
            <IonButton onClick={onClose} >Close</IonButton>

          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent >

        <div className="modal-container">

          <IonImg src={emoji.file} alt={emoji.name} id="modalImg" />

          {/* need to makes the h1 switch between arrernte(katj and english) */}
          {/* might be easier to do this with a React state? or maybe i dunno an array?*/}
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
              <IonRow>
                <IonIcon className="modal-icon" name='play-circle-outline' size="large" /> <h4> Play </h4>
              </IonRow>
            </IonCol>
          </IonGrid>
          {/* </div> */}
        </div>

      </IonContent>
    </IonModal >

  )
}
