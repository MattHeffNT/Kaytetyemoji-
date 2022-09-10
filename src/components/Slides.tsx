import React from 'react';
import { IonModal, IonToolbar, IonButtons, IonSlides, IonSlide, IonContent, IonButton, IonImg } from '@ionic/react';
import { IonGrid, IonCol, IonRow } from '@ionic/react';
import IonIcon from '@reacticons/ionicons';
import './Slides.css';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.

// ok so... i might just chuck the slide component inside another modal
// that way we can get the same animation when we open it.


const Slides: React.FC<any> = ({ isOpen, onClose }) => {

  const slideOpts = {
    // arrays start at 0 remember, so 0 is the first one lol 
    initialSlide: 0,
    speed: 400,
  };

  return (

    <IonModal isOpen={isOpen}>
      <IonContent>

        {/* close button  */}
        <IonToolbar color="none">
          <IonButtons slot='end'>
            <IonButton onClick={onClose}>
              <IonIcon
                name='close'
                className='modal-icon'
                size='large'
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol></IonCol>
                <IonCol>
                  <IonImg src='../assets/start_header.png' id="welcomeIcon" />
                </IonCol>
                <IonCol></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="slide-container">
                    <h1>Indigemoji</h1>
                    <strong><p> Emoji nhenhe-areye arrwekele anthurre Australia-kenhe. Tyerretye Arrernte-areye itnenhe mpwareke, Arrernte-kenhe apmerenge </p></strong>
                    <p>Australia’s first set of Indigenous emojis made on Arrernte country in Mparntwe / Alice Springs.</p>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <div className="slide-container">
              <IonImg src='../assets/screen1_header.png' id="AusMap" />
              <h1>Werte!</h1>

              <strong><p> </p></strong>

              <p></p>
            </div>
          </IonSlide>
          <IonSlide>
            <h1>Slide 3</h1>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonModal >
  )
};
export default Slides;
