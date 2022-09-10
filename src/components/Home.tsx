import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
import { useState } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonPage, IonContent, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
// import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
import MyModal from './MyModal'



const Home: React.FC<any> = () => {

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

  // const location = useLocation();

  return (

    < IonContent>

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

          </IonRow>
        </IonGrid>
      </div>

      <MyModal
        isOpen={myModal.isOpen}
        onClose={(e: Event) => { setMyModal({ isOpen: false }); return e }}
        initialData={emojisData}
      />

    </IonContent>

  );
};
export default Home;

