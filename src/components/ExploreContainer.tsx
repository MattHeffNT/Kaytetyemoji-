import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
import { useState } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonPage, IonContent, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonModal, IonChip, IonButtons, IonButton } from '@ionic/react';
// import MyModal from './MyModal'

// import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import Info from './Info'
import Home from './Home'


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

  return (

    < IonContent >



      {/* render component based on rest */}
      {(name == "Home") && <Home />}
      {(name == "Information") && <Info />}



    </IonContent >

  );
};
export default ExploreContainer;

