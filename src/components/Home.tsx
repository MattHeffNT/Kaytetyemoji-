import './styles/ExploreContainer.css';
import emojis from '../assets/emojis.json';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useIonViewWillEnter, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import MyModal from './MyModal';
import Slides from './Slides';
import Search from './Search';
import { nanoid } from 'nanoid';
import { App } from '@capacitor/app';
import { useLocation } from 'react-router';

const Home: React.FC = () => {
  const [emojisData, setEmojisData] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState('');
  const [myModal, setMyModal] = useState({ isOpen: false });
  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = myModal.isOpen;
  // variables to map in the component
  var obj: any = emojis;
  var arr: any = obj.emojis;
  const emojiColumn: any = useRef();
  const emojiArray: any | undefined = useRef();
  const location = useLocation();

  // show welcome slides if the user hasn't opened the app before
  useIonViewWillEnter(() => {
    const openedBefore = localStorage.getItem('openedBefore');
    if (!openedBefore || openedBefore == null) {
      setIsOpen(true);
      localStorage.setItem('openedBefore', 'true');
    }
  });

  // if user presses back on home screen exit app
  const handleBackButton = () => {
    App.exitApp();
  };

  useEffect(() => {
    if (!isModalOpen) {
      document.addEventListener('ionBackButton', handleBackButton);
    } else {
      document.removeEventListener('ionBackButton', handleBackButton);
    }
    return () => {
      document.removeEventListener('ionBackButton', handleBackButton);
    };
  }, [isModalOpen, location.pathname]);

  const emojiElements = useMemo(() => {
    return arr.map((emoji: any) => {
      const id = nanoid();
      return (
        <IonCol size="3" key={id} ref={emojiColumn}>
          <img
            key={id}
            alt={emoji.name}
            src={emoji.file}
            id={emoji.name}
            className="emoji"
            onClick={() => {
              setMyModal({ isOpen: true });
              setEmojisData(emoji);
            }}
          />
        </IonCol>
      );
    });
  }, [arr, setEmojisData, setMyModal]);

  return (
    <IonContent>
      {/* welcome slides */}
      <Slides
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />

      <div className="container">
        {/* search */}
        <Search setSearchText={setSearchText} emojiArray={emojiArray} />

        {/*  emojis  */}
        <IonGrid>
          <IonRow ref={emojiArray}>{emojiElements}</IonRow>
        </IonGrid>
      </div>
      <MyModal
        isOpen={myModal.isOpen}
        onClose={(e: Event) => {
          setMyModal({ isOpen: false });
          return e;
        }}
        initialData={emojisData}
      />
    </IonContent>
  );
};
export default Home;
