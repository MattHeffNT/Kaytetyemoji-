import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
//@ts-ignore
import homeIcon from '../assets/images/start_header_no.webp';
import { Route } from 'react-router-dom';

import Info from '../components/Info';
import Faq from '../components/Faq';
import Team from '../components/Team';
import Home from '../components/Home';

const Page: React.FC = () => {
  // this grabs the link name/title and puts it as  the page title
  var { name } = useParams<{ name: string }>();

  // Determine which component to render based on the route parameter
  let componentToRender: React.ReactNode;

  switch (name) {
    case 'Information':
      componentToRender = <Info />;
      break;
    case 'Faq':
      componentToRender = <Faq />;
      break;
    case 'Team':
      componentToRender = <Team />;
      break;
    default:
      // componentToRender = <ExploreContainer name={name} />;
      componentToRender = <Home />;
      break;
  }

  return (
    <IonPage>
      <IonHeader id='header'>
        <IonToolbar>
          <IonButtons slot='end'>
            {/* side menu hamburger button  */}
            <IonMenuButton />
          </IonButtons>

          {/* Logo/Icon   */}
          <IonButtons slot='start'>
            <IonButton
              routerLink='/page/Home'
              routerDirection='none'
              id='home-icon-button'>
              <img src={homeIcon} alt='home icon' id='homeIcon' />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar></IonToolbar>
        </IonHeader>
        {componentToRender}
      </IonContent>
    </IonPage>
  );
};

export default Page;
