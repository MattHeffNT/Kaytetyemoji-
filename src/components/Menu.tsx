import { IonContent, IonItem, IonList, IonMenu, IonMenuToggle, IonImg } from '@ionic/react';

import homeIcon from '../assets/images/homeIcon.png';
import exclaimIcon from '../assets/images/infoIcon.png';
import questionIcon from '../assets/images/icon4.png';
import peopleIcon from '../assets/images/icon5.png';
import { useLocation } from 'react-router-dom';
import './styles/Menu.css';

import IonIcon from '@reacticons/ionicons';
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
    // add darkmode switch, icon changes on press betweeen moon/sun
    // {
    //     title: 'darkMode',
    //     // link to onclick function
    //     url: '/page/Team',
    //     image: `<IonIcon name="moon-outline"/>`,
    // },
];

const Menu: React.FC = () => {
    const location = useLocation();

    function darkMode() {
        // Use matchMedia to check the user preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Query for the toggle that is used to change between themes
        const toggle = document.querySelector('#themeToggle');

        // Listen for the toggle check/uncheck to toggle the dark class on the <body>
        //@ts-ignore
        toggle.addEventListener('ionChange', (ev) => {
            // document.body.classList.toggle('dark', ev.detail.checked);
            console.log(ev);
        });

        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Listen for changes to the prefers-color-scheme media query
        // prefersDark.addListener((e) => checkToggle(e.matches));

        // Called when the app loads
        // function loadApp() {
        //     checkToggle(prefersDark.matches);
        // }

        // Called by the media query to check/uncheck the toggle
        // function checkToggle(shouldCheck) {
        //     toggle.checked = shouldCheck;
        // }
    }

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
                    {/* <IonIcon */}
                    {/*     name="moon-outline" */}
                    {/*     className="modal-icon" */}
                    {/*     size="large" */}
                    {/*     onClick={darkMode} */}
                    {/* /> */}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
