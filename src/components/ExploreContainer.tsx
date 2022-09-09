import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
import { useState } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonPage, IonContent, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
import MyModal from './MyModal'

import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

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


  const location = useLocation();

  console.log(name)

  return (

    < IonContent >


      {/* to keep the code clean i should put the other pages in their own component  */}

      {(name == "Home") && <h1>This is Home </h1>}
      {(name == "Information") && <h1>Info</h1>}



      {/* ok .....so maybe instead of page conditonals can put a conditional here to render a different container depending on  */}
      {/* url  */}

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

