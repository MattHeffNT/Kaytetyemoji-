import { IonContent } from '@ionic/react';
import { Suspense } from 'react';
import React, { lazy } from 'react';
import Home from './Home';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const Info = lazy(() => import('./Info'));
  const Faq = lazy(() => import('./Faq'));
  const Team = lazy(() => import('./Team'));

  return (
    <IonContent>
      {/* render component based on url */}
      {name === 'Home' && <Home />}
      {name === 'Information' && (
        <Suspense fallback={<div></div>}>
          <Info />
        </Suspense>
      )}
      {name === 'Faq' && (
        <Suspense fallback={<div></div>}>
          <Faq />
        </Suspense>
      )}
      {name === 'Team' && (
        <Suspense fallback={<div></div>}>
          <Team />
        </Suspense>
      )}
    </IonContent>
  );
};

export default ExploreContainer;
