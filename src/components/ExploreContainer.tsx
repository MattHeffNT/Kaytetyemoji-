import './ExploreContainer.css';
import { useState, useEffect, useRef } from 'react';


// At some stage will need to stop the name prop being passed to
// each page

interface ContainerProps {
  name: string;
}


const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const [emojisData, setEmojisData] = useState([]);

  //Just using the indigEmoji JSON at the moment, will need to replace this in prod
  const url = 'https://raw.githubusercontent.com/Indigemoji-Australia/indigemoji-app/master/assets/emojis.json';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(res => setEmojisData(res))
      .catch(err => console.log(err))
  }, []);


  // img.src = "../assets/emojis/"
  // document.body.appendChild(img)


  const iconsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = iconsContainer.current;
    console.log(divElement);


    // append images here might have to chuck in the other fetch data in here too then just put it all togher


    // for i in amount of files in emoji directory, loop through and append to the div element

    // divElement += ``



  }, []);

  // call fetch once image clicked and populate modal with respective data

  // grab all emojis from folder and place them in the container
  // for (let i = 0; i < img.length; i++) {
  //   const element = img[i];
  //   console.log(element)
  // }



  return (
    <div className="container">

      <div id="icons-container" ref={iconsContainer}>
        <strong>search bar </strong>
        <br />

      </div>
      <br />

      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>




    </div >
  );
};

export default ExploreContainer;
