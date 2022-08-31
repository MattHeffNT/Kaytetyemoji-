import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
// import '../assets/images'
import { useState } from 'react';
import { IonContent, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonImg, IonGrid, IonRow, IonButtons, IonButton, IonCol, IonModal } from '@ionic/react';

// At some stage will need to stop the name prop being passed to
// each page

interface ContainerProps {
  name: string;
}

var localArr: any = []
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');
  //modal state
  const [isOpen, setIsOpen] = useState(false);

  // get array of emoji json object keys before using map method
  const result: any = Object.keys(emojis).map((key) => {
    return { [key]: emojis[key as keyof typeof emojis] };
  });

  var obj: any = emojis
  var arr: any = obj.emojis



  // write function to open modal here...maybe?
  const modal = (emojiObject: any) => {

    console.log(emojiObject);
    setIsOpen(true)

    localArr.push(emojiObject)

    return emojiObject

    //option 1:
    // pass value/object into array then just pull it out in the modal JSX? (will be agnostic to device constraints)

    // option 2:
    // one option here is to pass in variable into session storage then just retrieve in the modal jsx? not sure if this will
    // work in IOS/Android once built

    // option 3:
    // map the json again in the modal jsx

  }



  return (

    < IonContent >
      {/* hmm might pull this out to its own component, keeping here for the moment so that it will be easier to search */}
      {/* the text from the json  */}

      <div className='container'>

        <IonSearchbar id="search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showClearButton="always" ></IonSearchbar>


        {/*  i think i definitely need to have search bar as seperate component so that it doesn't update state */}
        {/* of the container.... also maybe put into the toolbar so that it's fixed when user scrolls down*/}


        <IonGrid>
          <IonRow>

            {/* map emoji images here, then on click load modal with larger emoji, translation options, audio, and share button*/}
            {arr.map((emoji: any) => (
              <IonCol>
                <IonImg src={emoji.file} onClick={() => modal(emoji)} />
              </IonCol>
            ))}

            {/* keep this here so that emojis on the bottom row are gridded correctly */}
            <IonCol></IonCol>

          </IonRow>
        </IonGrid>
      </div>


      {/* Modal  */}
      <IonModal isOpen={isOpen} >
        <IonHeader>
          <IonToolbar>
            {/* <IonTitle>Modal</IonTitle> */}
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* {emojiObject} */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
            reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
            Eaque, dicta.
          </p>

        </IonContent>
      </IonModal>
    </IonContent >

  );
};

export default ExploreContainer;
