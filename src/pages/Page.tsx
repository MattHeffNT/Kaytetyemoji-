import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import homeIcon from '../assets/images/start_header_no.png';
import background from '../assets/images/background.png';
import Home from '../components/Home';

import { Redirect, Route } from 'react-router-dom';

const Page: React.FC = () => {
  // this grabs the link name/title and puts it as  the page title
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader id="header">
        <IonToolbar>
          <IonButtons slot="end">
            {/* side menu hamburger button  */}
            <IonMenuButton />
          </IonButtons>
          {/* put the indigemoji icon on the toolbar */}
          <IonTitle>
            <img src={homeIcon} id="homeIcon" alt="icon"></img>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar></IonToolbar>
        </IonHeader>

        {/* component could make this a conditonal...so depending on what url input is called, then call a different 
        component? */}

        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
