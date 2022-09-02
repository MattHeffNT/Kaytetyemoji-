import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
// import '../assets/images'
import { useEffect, useState } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonPage, IonContent, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
// At some stage will need to stop the name prop being passed to
// each page

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

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
                <IonImg src={emoji.file} onClick={() => { setMyModal({ isOpen: true }); setEmojisData(emoji); console.log(emoji) }} />
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

// Modal function
const MyModal: React.FC<any> = ({ initialData, isOpen, onClose }) => {

  const emoji = initialData


  return (

    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent >

        <div className="modal-container">

          <IonImg src={emoji.file} alt={emoji.name} id="modalImg" />
          {/* need to makes the h1 switch between arrernte(katj and english) */}
          <h1> {emoji.name_arrernte}</h1>
          <IonChip>Arrernte</IonChip>
          <IonChip>English</IonChip>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
            reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
            Eaque, dicta.
          </p>
        </div>
      </IonContent>
    </IonModal >

  )
}
