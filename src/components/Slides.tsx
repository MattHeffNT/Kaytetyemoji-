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
    autoHeight: 20,
    // spaceBetween: 30,
    initialSlide: 0,
    speed: 300,
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

        <IonSlides pager={true} options={slideOpts} >
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


            <IonCol></IonCol>
            <IonCol>
              <div className="slide-container">
                <IonImg src='../assets/screen1_header.png' id="drawing" />
                <h1>Werte!</h1>

                <strong><p>Anwerne akangentye arrantherre apetyeke Indigemoji-kenhe aretyeke. Arne-nhenhe-areye arrekantherre ileme anwerne-akerte, altyerre, arne, awelhentye-areye, angkentye anwernekenhe-uthene. Impene anthurre kwenhe arrantherre angkentye akaltye-irretyeke, angkentye anwernekenhe akwete-ante rlterrke antirrkwetyeke. </p></strong>
                <p>Welcome to the Indiemoji app! This sticker set represents life, culture and language in our part of Central Australia, the traditional land of the Arrernte people. It is important you learn so that we hold our language strong, forever.</p>
              </div>
            </IonCol>
          </IonSlide>
          <IonSlide>
          </IonRow>
          <div className="slide-container">
            <IonImg src='../assets/screen2_header.png' id="drawing" />
            <strong><p>Tyerretye anwerkenhe-arle itnhenhe-areye mpwareke. Arrernte ilyernpenye-areye help-me-ileme angkentye arratye arrerneke.</p></strong>
            <p>These emoji stickers were made by hundreds of young people with senior Arrernte cultural advisers, for you to use.</p>
          </div>
        </IonRow>
      </IonSlide>
      <IonSlide>
        <div className="slide-container">
          <IonImg src='../assets/screen3_header.png' id="drawing" />
          <h1>Antherreme!</h1>
          <strong><p>Unte apeke emoji renhe yernetyeke, app nhenhe altywere-ilaye, kele emoji unte ahentye-aneme uthemele, kele imernte antherreme-kenhe-button ulthemele.</p></strong>
          <p>To share an emoji sticker, just open this app, select the sticker you want to use and then tap the share button. You can then choose which platform you want to share the sticker on.</p>
        </div>
      </IonSlide>
      <IonSlide>
        <div className="slide-container">
          <IonImg src='../assets/screen5_header.png' id="drawing" />
          <h1>Awaye!</h1>
          <p>New audio! Press the play button to learn to pronounce the Arrernte emojis</p>
        </div>
      </IonSlide>
    </IonSlides>
      </IonContent >
    </IonModal >
  )
};
export default Slides;
