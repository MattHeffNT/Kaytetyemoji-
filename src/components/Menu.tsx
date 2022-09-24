import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonImg,
} from '@ionic/react';

import homeIcon from '../assets/images/homeIcon.png';
import exclaimIcon from '../assets/images/infoIcon.png';
import questionIcon from '../assets/images/icon4.png';
import peopleIcon from '../assets/images/icon5.png';

import { useLocation } from 'react-router-dom';
import {
    archiveOutline,
    archiveSharp,
    bookmarkOutline,
    heartOutline,
    heartSharp,
    mailOutline,
    mailSharp,
    paperPlaneOutline,
    paperPlaneSharp,
    trashOutline,
    trashSharp,
    warningOutline,
    warningSharp,
} from 'ionicons/icons';
import './styles/Menu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
    image: string;
}

const appPages: AppPage[] = [
    {
        title: 'Home',
        url: '/page/Home',
        iosIcon: homeIcon,
        mdIcon: homeIcon,
        image: homeIcon,
    },
    {
        title: 'Information',
        url: '/page/Information',
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp,
        image: exclaimIcon,
    },
    {
        title: 'FAQ',
        url: '/page/Faq',
        iosIcon: heartOutline,
        mdIcon: heartSharp,
        image: questionIcon,
    },
    {
        title: 'Team',
        url: '/page/Team',
        iosIcon: archiveOutline,
        mdIcon: archiveSharp,
        image: peopleIcon,
    },
];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu
            contentId="main"
            type="overlay"
            side="end"
            className="my-custom-menu"
        >
            <IonContent>
                {/* </IonList> */}
                <IonList id="sideMenu">
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={true}>
                                <IonItem
                                    className={
                                        location.pathname === appPage.url
                                            ? 'selected'
                                            : ''
                                    }
                                    routerLink={appPage.url}
                                    routerDirection="none"
                                    lines="none"
                                    detail={false}
                                >
                                    {/* <IonIcon slot="start" ios={appPage.image} md={appPage.image} /> */}
                                    <IonImg src={appPage.image}></IonImg>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
