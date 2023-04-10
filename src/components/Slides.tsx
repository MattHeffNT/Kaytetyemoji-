import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { IonModal, IonToolbar, IonButtons, IonContent, IonButton, IonImg } from '@ionic/react';
import { isPlatform, IonGrid, IonCol, IonRow } from '@ionic/react';
import IonIcon from '@reacticons/ionicons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './styles/Slides.css';
import '../theme/variables.css';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.

interface SlidesProps {
  isOpen: boolean;
  onClose: () => void;
}

const Slides = React.memo(({ isOpen, onClose }: SlidesProps) => {
  const slidesRef = useRef<any>();
  const contentRef = useRef<HTMLIonContentElement>(null);
  const closeButton = useRef<any>();
  const history = useHistory();

  // this function controlls the scroll on some slides, the transition effects,
  // as well as making sure between each slide the scroll position is reset
  const resetSlideScroll = useCallback(async () => {
    // on smaller content pages disable scroll
    if (contentRef.current) {
      contentRef.current.scrollY = true;
      contentRef.current.scrollToTop();
    }
  }, []);

  // on about link click come back to about page
  const handleLink = useCallback(() => {
    const content = document.querySelector('.info-container');

    history.push('/page/Information');

    onClose();

    if (content) {
      content.scrollIntoView();
    }
  }, [history, onClose]);

  // enable the hardware back button to close the modal
  useEffect(() => {
    if (isOpen) {
      const backButtonHandler = (e: any) => {
        e.detail.register(100, () => {
          onClose();
        });
      };
      document.addEventListener('ionBackButton', backButtonHandler);
      return () => {
        document.removeEventListener('ionBackButton', backButtonHandler);
        onClose();
      };
    }
  }, [isOpen, onClose]);

  return (
    <IonModal isOpen={isOpen}>
      <IonContent ref={contentRef} id="slide-content">
        <IonToolbar color="none">
          <IonButtons slot="end">
            <IonButton onClick={onClose} ref={closeButton} style={{ marginTop: '3rem' }}>
              <IonIcon name="close" className="modal-icon" size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <Swiper
          ref={slidesRef}
          modules={[Pagination, EffectFade]}
          pagination={true}
          onSlideChange={resetSlideScroll}
        >
          {/* @ts-ignore */}

          <SwiperSlide>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonImg
                    src="../assets/welcome/Welcome1_Arnke_withwhitebackground.png"
                    id="drawing"
                  />
                </IonCol>
                <IonCol>
                  <div className="slide-container">
                    <h1 style={{ color: 'white' }}>Kaytetyemoji</h1>
                    <strong>
                      <p>
                        Emoji nyamernarte Kaytetye inenge Barrow Creek arenye inengele mpwarenhe.
                        Nyartepe apmere Artnke, Barrow Creek. Nte apeke ahentye arrewethe
                        kaltyarrewethe Kaytetye angkewe. Ethwene nte arrkantele ngkeyenge inengewe.
                      </p>
                    </strong>
                    <p style={{ color: 'white' }}>
                      The Kaytetyemoji app was made by Kaytetye people from Barrow Creek. The Barrow
                      Creek emoji represents this app. These emojis are for you to learn Kaytetye
                      language and send to your friends and family for fun whenever you like.
                    </p>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
          <SwiperSlide>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonImg src="../assets/welcome/Welcome2_KayeteyeMap.png" id="drawing" />
                </IonCol>
                <IonCol>
                  <div className="slide-container">
                    <h1 style={{ color: 'white' }}>Nthakenhaye!</h1>
                    <strong>
                      <p>
                        Emoji nyamernarte angke Kaytetye apmere Thangkenharenge (Barrow Creek),
                        altyerre inenge, altye inenge. Arrernte inengele arrwekele arle mpwarenhe,
                        aynanthelke Kaytetye theye ngwarenhe.
                      </p>
                    </strong>
                    <p style={{ color: 'white' }}>
                      This sticker set represents life, culture and language on Kaytetye Country in
                      the Barrow Creek region of Central Australia. The original Arrernte Indigemoji
                      app inspired us to make a Kaytetye set.
                    </p>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
          <SwiperSlide>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonImg
                    src="../assets/welcome/Welcome3_Tommy,Kathleen,Philip,Valentine.jpg"
                    id="drawing"
                  />
                </IonCol>
                <IonCol>
                  <div className="slide-container">
                    <strong>
                      <p>
                        Emoji nyamernarte Akalperre arenye inengele mpwarenhe apmere Mparntwe warle.
                        Nte kaltyarrewethe aynewanthe, wele nyarte nte arratewethe. Emoji nharte
                        mpwarenhe artnwenge inenge kwenyelepenhe kaltyarrewethe angke elperterre
                        arntarrtyewethe intemaperte.
                      </p>
                    </strong>
                    <p style={{ color: 'white' }}>
                      Kaytetyemoji was created by a Kaytetye family group in Mparntwe/Alice Springs.
                      You can read our story on the{' '}
                      <span
                        style={{
                          color: '#007bff',
                          textDecoration: 'underline',
                        }}
                        onClick={handleLink}
                      >
                        aynanthe //about page.
                      </span>
                    </p>
                    <p style={{ color: 'white' }}>
                      We made this app for our young people to have strong language. It is important
                      that you learn Kaytetye to keep our language strong, forever.
                    </p>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </SwiperSlide>
          <SwiperSlide>
            {/* "slide 4" */}
            <IonRow>
              <IonCol>
                <IonImg src="../assets/welcome/welcome4_screenshot.png" id="drawing" />
              </IonCol>
              <IonCol>
                <div className="slide-container">
                  <h1 style={{ color: 'white' }}>Etnyewethe aynewenhanthe!</h1>
                  <strong>
                    <p>
                      Ethwewethe iterrtye kngwerewe, Artnke arratewethe, emoji arratewene ane
                      arratewethe ‘ethwenke’. Platform rengele ilewethe.
                    </p>
                  </strong>
                  <p style={{ color: 'white' }}>
                    If you want to send an emoji to someone else…just open this app, select the
                    sticker you want to use and tap the share button. You can then choose which
                    platform you want to share the sticker on.
                  </p>
                </div>
              </IonCol>
            </IonRow>
          </SwiperSlide>
          <SwiperSlide>
            {/* "slide 5" */}
            <IonRow>
              <IonCol>
                <IonImg src="../assets/welcome/028_angkewethe.png" id="drawing" />
              </IonCol>
              <IonCol>
                <div className="slide-container">
                  <h1 style={{ color: 'white' }}>Elpathewethe</h1>
                  <strong>
                    <p>
                      Arratewethe elpathewethe angke Kaytetye angkerranengarle. Ntelke angkene
                      Kaytetye angke kwere. Arratewethe elpathewethe angke makwerle Kaytetye
                      angkerranengarle. Erlkwe Tommy Jangalala ampilerantyenkarle. English theye nte
                      ritemayleme tyampe.{' '}
                    </p>
                  </strong>
                  <p style={{ color: 'white' }}>
                    Press word to listen to the Kaytetye word that reflects the emoji. Then try
                    saying the word!
                  </p>
                  <p style={{ color: 'white' }}>
                    Press phrase to listen to a Kaytetye sentence with that word told by Kaytetye
                    elder Tommy Jangala. You can read the English translation too.
                  </p>
                </div>
              </IonCol>
            </IonRow>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonModal>
  );
});
export default Slides;
