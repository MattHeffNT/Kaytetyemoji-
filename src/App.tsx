import { IonApp, IonLoading, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

import { SplashScreen } from '@capacitor/splash-screen';

setupIonicReact();

const App: React.FC = () => {
    // Hide the splash (you should do this on app launch)
    SplashScreen.hide();

    // Show the splash for three and a half seconds and then automatically hide it:
    SplashScreen.show({
        showDuration: 4000,
        autoHide: true,
    });

    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <Menu />
                    <IonRouterOutlet id="main">
                        <Route path="/" exact={true}>
                            <Redirect to="/page/Home" />
                        </Route>

                        <Route path="/page/:name" exact={true}>
                            <Page />
                        </Route>
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
