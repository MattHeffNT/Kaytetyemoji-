import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
import { useState, useEffect, useRef } from 'react';
import { IonContent, IonHeader, IonSearchbar, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/react';

// At some stage will need to stop the name prop being passed to
// each page

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const [emojisData, setEmojisData] = useState([]);


  // mount the icons container to try and load in the images in the emoji folder
  const iconsContainer = useRef<HTMLDivElement>(null); const [searchText, setSearchText] = useState('');

  useEffect(() => {

    // console.log(emojis[1])
    var divElement = iconsContainer.current;
    // console.log(divElement);

    // divElement.innerHTML += `<img src="../assets/emojis/ure.png"></img>`
    // append images here might have to chuck in the other fetch data in here too then just put it all togher
    // for i in amount of files in emoji directory, loop through and append to the div element

  }, []);

  // call fetch once image clicked and populate modal with respective data

  return (
    < IonContent >


      {/* hmm might pull this out to its own component, keeping here for the moment so that it will be easier to search */}
      {/* the text from the json  */}

      {/* insert the emojis into their own column */}
      <div className='container'>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonGrid>
          <IonRow>
            <IonCol>

              col1

            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent >

  );
};

export default ExploreContainer;
