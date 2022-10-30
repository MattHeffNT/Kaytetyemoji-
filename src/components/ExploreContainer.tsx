import './styles/ExploreContainer.css';
// import emojis from '../assets/emojis.json'
// import { useState } from 'react';

// import Ion components (seperated into two lines for readability)
import { IonContent } from '@ionic/react';
// import { SplashScreen } from '@awesome-cordova-plugins/splash-screen';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { useParams } from 'react-router';
// import { useLocation } from 'react-router-dom';
import Info from './Info';
import Home from './Home';
import Faq from './Faq';
import Team from './Team';

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <IonContent>
            {/* render component based on url */}
            {name === 'Home' && <Home />}
            {name === 'Information' && <Info />}
            {name === 'Faq' && <Faq />}
            {name === 'Team' && <Team />}
        </IonContent>
    );
};
export default ExploreContainer;
