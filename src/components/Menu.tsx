import { IonContent, IonItem, IonList, IonMenu, IonMenuToggle, IonImg } from '@ionic/react';

import homeIcon from '../assets/images/homeIcon.png';
import exclaimIcon from '../assets/images/infoIcon.png';
import questionIcon from '../assets/images/icon4.png';
import peopleIcon from '../assets/images/icon5.png';
import { useLocation } from 'react-router-dom';
import './styles/Menu.css';

interface AppPage {
    url: string;
    title: string;
    image: string;
}

const appPages: AppPage[] = [
    {
        title: 'Home',
        url: '/page/Home',
        image: homeIcon,
    },
    {
        title: 'Information',
        url: '/page/Information',
        image: exclaimIcon,
    },
    {
        title: 'FAQ',
        url: '/page/Faq',
        image: questionIcon,
    },
    {
        title: 'Team',
        url: '/page/Team',
        image: peopleIcon,
    },
];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay" side="end" className="my-custom-menu">
            <IonContent>
                {/* </IonList> */}
                <IonList id="sideMenu">
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={true}>
                                <IonItem
                                    className={location.pathname === appPage.url ? 'selected' : ''}
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
                    {/* should probably just keep this as it's normal color as the other menu icons are */}
                    {/* actually dark and will probably need a light version */}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
