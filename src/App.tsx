import React, { lazy, Suspense } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
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
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { SplashScreen } from '@capacitor/splash-screen';

setupIonicReact();

// Lazy load your components
const Home = lazy(() => import('./components/Home'));
const Info = lazy(() => import('./components/Info'));
const Faq = lazy(() => import('./components/Faq'));
const Team = lazy(() => import('./components/Team'));

const App: React.FC = () => {
  SplashScreen.hide();
  SplashScreen.show({
    showDuration: 1500,
    autoHide: true,
  });

  // Define your routes
  const routes = [
    { path: '/page/Home', component: Home },
    { path: '/page/Info', component: Info },
    { path: '/page/Faq', component: Faq },
    { path: '/page/Team', component: Team },
  ];

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          {/* route/render respective component based on url */}
          <IonRouterOutlet id="main">
            <Route path="/page/Home" component={Home} exact />
            <Route path="/page/Info" component={Info} exact />
            <Route path="/page/Faq" component={Faq} exact />
            <Route path="/page/Team" component={Team} exact />
            <Route path="/" exact={true}>
              <Redirect to="/page/Home" />
            </Route>

            <Route path="/page/:name" component={Page} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
