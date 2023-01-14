import './styles/ExploreContainer.css';
import emojis from '../assets/emojis.json';
import { useState, useEffect, useRef, useMemo, useCallback, ChangeEvent } from 'react';
// import { useLocation } from 'react-router';
// import Ion components (seperated into two lines for readability)
import {
    IonLoading,
    useIonViewWillEnter,
    IonContent,
    IonSearchbar,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/react';
import MyModal from './MyModal';
import Slides from './Slides';

const Home: React.FC = () => {
    const [emojisData, setEmojisData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [myModal, setMyModal] = useState({ isOpen: false });

    const [isOpen, setIsOpen] = useState(false);
    // variables to map in the component
    var obj: any = emojis;
    var arr: any = obj.emojis;
    const searchBar: any = useRef();
    const emojiColumn: any = useRef();
    const emojiArray: any | undefined = useRef();

    const imageHandler = () => {
        console.log('finished loading images');
    };

    // show welcome slides if the user hasn't opened the app before
    useIonViewWillEnter(() => {
        const openedBefore = localStorage.getItem('openedBefore');
        if (!openedBefore || openedBefore == null) {
            setIsOpen(true);
            localStorage.setItem('openedBefore', 'true');
        }
    });

    // search bar
    useEffect(() => {
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

    // map the emojis to the homescreen and pass values onto modal on click
    // maybe i can add a function here to double check whether the emojis have loaded in or not
    // then to just load the ones already there, and or render if they haven't

    const emojiElements = arr.map((emoji: any, index: number) => (
        <IonCol size="3" key={index} ref={emojiColumn}>
            <IonImg
                key={index}
                src={emoji.file}
                id={emoji.name}
                className="emoji"
                onClick={() => {
                    setMyModal({ isOpen: true });
                    setEmojisData(emoji);
                }}
                onIonImgDidLoad={() => {
                    imageHandler();
                }}
            />
        </IonCol>
    ));

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
                <IonSearchbar
                    ref={searchBar}
                    id="search"
                    value={searchText}
                    onIonChange={(e) => setSearchText(e.detail.value!)}
                    searchIcon="none"
                    showClearButton="always"
                ></IonSearchbar>
                {/* map the emojis  */}
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
