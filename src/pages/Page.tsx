import {
    IonButtons,
    IonButton,
    // IonItem,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonImg,
    IonToolbar,
    // IonRouterLink,
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import homeIcon from '../assets/images/start_header_no.png';
// import background from '../assets/images/background.png';
// import Home from '../components/Home';
// import { useState } from 'react';

// import { Redirect, Route } from 'react-router-dom';

const Page: React.FC = () => {
    // this grabs the link name/title and puts it as  the page title
    var { name } = useParams<{ name: string }>();

    return (
        <IonPage>
            <IonHeader id="header">
                <IonToolbar>
                    <IonButtons slot="end">
                        {/* side menu hamburger button  */}
                        <IonMenuButton />
                    </IonButtons>

                    {/* Logo/Icon   */}
                    <IonButtons slot="start">
                        {/* side menu hamburger button  */}
                        <IonButton
                            routerLink="/page/Home"
                            routerDirection="none"
                            id="home-icon-button"
                        >
                            <IonImg src={homeIcon} id="homeIcon" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar></IonToolbar>
                </IonHeader>
                <ExploreContainer name={name} />
            </IonContent>
        </IonPage>
    );
};

export default Page;
