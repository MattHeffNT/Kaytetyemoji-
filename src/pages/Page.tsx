import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import homeIcon from '../assets/icon.png'
import background from '../assets/images/background.png'


const Page: React.FC = () => {

  // this grabs the link name/title and puts it as  the page title
  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>{/* color="light" */}


          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>

          {/* put the indigemoji icon on the toolbar */}
          <IonTitle><a href='/'><img src={homeIcon} id="homeIcon" alt="icon"></img></a></IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            {/* put search bar here maybe? */}

          </IonToolbar>
        </IonHeader>

        {/* Remove name prop from being passed each page  */}
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage >
  );
};

export default Page;
