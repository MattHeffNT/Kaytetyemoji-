import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
import { useState } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonContent } from '@ionic/react';

// import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import Info from './Info'
import Home from './Home'
import Faq from './Faq'
import Team from './Team'

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {


  // // get array of emoji json object keys before using map method
  // const result: any = Object.keys(emojis).map((key) => {
  //   return { [key]: emojis[key as keyof typeof emojis] };
  // });

  // // variables to map in the component
  // var obj: any = emojis
  // var arr: any = obj.emojis


  const location = useLocation();

  return (

    < IonContent >



      {/* render component based on rest */}
      {(name == "Home") && <Home />}
      {(name == "Information") && <Info />}
      {(name == "Faq") && <Faq />}
      {(name == "Team") && <Team />}



    </IonContent >

  );
};
export default ExploreContainer;

