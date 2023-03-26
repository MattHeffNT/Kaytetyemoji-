import './styles/ExploreContainer.css';
import emojis from '../assets/emojis.json';
import { useState, useRef, useMemo } from 'react';
import { useIonViewWillEnter, IonContent, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import MyModal from './MyModal';
import Slides from './Slides';
import Search from './Search';
import { nanoid } from 'nanoid';

const Home: React.FC = () => {
    const [emojisData, setEmojisData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [myModal, setMyModal] = useState({ isOpen: false });
    const [isOpen, setIsOpen] = useState(false);

    // variables to map in the component
    var obj: any = emojis;
    var arr: any = obj.emojis;
    const emojiColumn: any = useRef();
    const emojiArray: any | undefined = useRef();

    // show welcome slides if the user hasn't opened the app before
    useIonViewWillEnter(() => {
        const openedBefore = localStorage.getItem('openedBefore');
        if (!openedBefore || openedBefore == null) {
            setIsOpen(true);
            localStorage.setItem('openedBefore', 'true');
        }
    });

    const emojiElements = useMemo(
        () =>
            arr.map((emoji: any) => {
                const id = nanoid();
                return (
                    <IonCol size="3" key={id} ref={emojiColumn}>
                        <IonImg
                            key={id}
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
            }),
        [arr, setMyModal, setEmojisData]
    );

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
