import './ExploreContainer.css';
import emojis from '../assets/emojis.json'
// import '../assets/images'
import { useState, useEffect, useRef } from 'react';
import { IonContent, IonSearchbar, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';

// At some stage will need to stop the name prop being passed to
// each page

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');


  // mount the icons container to try and load in the images in the emoji folder
  const iconsContainer = useRef<HTMLDivElement>(null);

  // might be better to use "useRef" for this 
  useEffect(() => {

    var divElement = iconsContainer.current;

    // divElement.innerHTML += `<img src="../assets/emojis/ure.png"></img>`
    // append images here might have to chuck in the other fetch data in here too then just put it all togher
    // for i in amount of files in emoji directory, loop through and append to the div element

  }, []);



  // get array of emoji json object keys before using map method
  const result: any = Object.keys(emojis).map((key) => {
    return { [key]: emojis[key as keyof typeof emojis] };
  });

  var obj: any = emojis
  var arr: any = obj.emojis
  console.log(arr)

  return (

    < IonContent >
      {/* hmm might pull this out to its own component, keeping here for the moment so that it will be easier to search */}
      {/* the text from the json  */}

      <div className='container'>


        {/*  i think i definitely need to have search bar as seperate component so that it doesn't update state */}
        {/* of the container */}

        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonGrid>
          <IonRow>

            {/* map emoji images here, then on click load modal with larger emoji, translation options, audio, and share button*/}
            {arr.map((emoji: any) => (

              <IonCol>
                <IonImg src={emoji.file} />
              </IonCol>

            ))}

            {/* keep this here so that emojis on the bottom row are gridded correctly */}
            <IonCol></IonCol>

          </IonRow>
        </IonGrid>
      </div>
    </IonContent >

  );
};

export default ExploreContainer;
