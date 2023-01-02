import './styles/ExploreContainer.css';
import emojis from '../assets/emojis.json';
import { useState, useEffect, useRef, useMemo, ChangeEvent } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonContent, IonSearchbar, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import MyModal from './MyModal';
// import Search from './Search';

const Home: React.FC = () => {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [myModal, setMyModal] = useState({ isOpen: false });

  // variables to map in the component
  var obj: any = emojis;
  var arr: any = obj.emojis;
  const searchBar: any = useRef();
  const emojiColumn: any = useRef();
  const emojiArray: any | undefined = useRef();
  // const emojiArray = useRef<HTMLIonRowElement>(null);
  /// search function need to wait until all components mounted to then search (i should chuck the search in its own component)
  //
  useEffect(() => {
    // need to grab details from HOME CSS and paste into the theme css to flatten
    //search input

    const rows = Array.from(emojiArray.current.children);

    // listen for search bar input then call function
    searchBar.current.addEventListener('ionInput', handleInput);

    function handleInput(event: React.MouseEvent<HTMLInputElement, ChangeEvent>) {
      const query = (event.target as HTMLInputElement).value.toLowerCase();

      requestAnimationFrame(() => {
        rows.forEach((col: any) => {
          const emoji = col.firstElementChild;

          const shouldShow = emoji.id.toLowerCase().indexOf(query) > -1;

          // change container and emoji display status depending on whether input detected
          if (shouldShow) {
            // reset gridded emojis to default style
            col.style = 'display:flex';
            emoji.style = 'display:inherit;';
            col.style =
              'flex: 0 0 calc(calc(3 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(3 / var(--ion - grid - columns, 12)) * 100 %); max - width: calc(calc(3 / var(--ion - grid - columns, 12)) * 100 %);';
          } else {
            // don't display other emoji's when searching
            col.style =
              'flex: 0 0 calc(calc(3 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(3 / var(--ion - grid - columns, 12)) * 100 %); max - width: calc(calc(3 / var(--ion - grid - columns, 12)) * 100 %);';
            emoji.style = 'display:none;';
            col.style = 'display:none';
          }
        });
      });
    }
  }, []);

  // map emojis to home screen and send data to modal component on click
  const emojiElements = useMemo(() => {
    return arr.map((emoji: any, index: number) => (
      <IonCol size="3" ref={emojiColumn} key={index}>
        <IonImg
          src={emoji.file}
          id={emoji.name}
          className="emoji"
          onClick={() => {
            setMyModal({ isOpen: true });
            setEmojisData(emoji);
          }}
        />
      </IonCol>
    ));
  }, [arr, emojiColumn]);

  return (
    <IonContent>
      <div className="container">
        {/* search */}
        <IonSearchbar
          ref={searchBar}
          id="search"
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          searchIcon="none"
          showClearButton="always"
        ></IonSearchbar>

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
