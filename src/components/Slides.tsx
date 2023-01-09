import { useEffect, useState, useRef } from 'react';
import {
    useIonViewWillEnter,
    IonModal,
    IonToolbar,
    IonButtons,
    IonSlides,
    IonSlide,
    IonContent,
    IonButton,
    IonImg,
} from '@ionic/react';
import { IonGrid, IonCol, IonRow } from '@ionic/react';
import IonIcon from '@reacticons/ionicons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

import './styles/Slides.css';
import '../theme/variables.css';
// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.

const Slides: React.FC<any> = ({ isOpen, onClose }) => {
    const slidesRef = useRef<HTMLIonSlidesElement>(null);

    //@ts-ignore
    const resetSlideScroll = async () => {
        console.log('hello world');
    };

    return (
        <IonModal isOpen={isOpen}>
            {/* @ts-ignore */}
            <IonContent>
                <IonToolbar color="none">
                    <IonButtons slot="end">
                        <IonButton onClick={onClose}>
                            <IonIcon name="close" className="modal-icon" size="large" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>

                <Swiper
                    // ref={slidesRef}
                    modules={[Pagination]}
                    pagination={true}
                    onSlideChange={() => resetSlideScroll()}
                >
                    {/* @ts-ignore */}
                    <SwiperSlide>
                        <IonGrid>
                            <IonRow>
                                <IonCol></IonCol>
                                <IonCol>
                                    <IonImg src="../assets/start_header.png" id="welcomeIcon" />
                                </IonCol>
                                <IonCol></IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    {/* @ts-ignore */}
                                    <div className="slide-container">
                                        <h1>Indigemoji</h1>
                                        <strong>
                                            <p>
                                                Emoji nhenhe-areye arrwekele anthurre
                                                Australia-kenhe. Tyerretye Arrernte-areye itnenhe
                                                mpwareke, Arrernte-kenhe apmerenge
                                            </p>
                                        </strong>
                                        <p>
                                            Australia’s first set of Indigenous emojis made on
                                            Arrernte country in Mparntwe / Alice Springs.
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
                                    <IonImg src="../assets/screen1_header.png" id="drawing" />
                                </IonCol>
                                {/* Werte slide  */}
                                <IonCol>
                                    <div className="slide-container">
                                        <h1>Werte!</h1>
                                        <strong>
                                            <p>
                                                Anwerne akangentye arrantherre apetyeke
                                                Indigemoji-kenhe aretyeke. Arne-nhenhe-areye
                                                arrekantherre ileme anwerne-akerte, altyerre, arne,
                                                awelhentye-areye, angkentye anwernekenhe-uthene.
                                                Impene anthurre kwenhe arrantherre angkentye
                                                akaltye-irretyeke, angkentye anwernekenhe
                                                akwete-ante rlterrke antirrkwetyeke.{' '}
                                            </p>
                                        </strong>
                                        <p>
                                            Welcome to the Indiemoji app! This sticker set
                                            represents life, culture and language in our part of
                                            Central Australia, the traditional land of the Arrernte
                                            people. It is important you learn so that we hold our
                                            language strong, forever.
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
                                    <IonImg src="../assets/screen2_header.png" id="drawing" />
                                </IonCol>
                                <IonCol>
                                    {/* "Tyerrentye Slide" */}
                                    <div className="slide-container">
                                        <strong>
                                            <p>
                                                Tyerretye anwerkenhe-arle itnhenhe-areye mpwareke.
                                                Arrernte ilyernpenye-areye help-me-ileme angkentye
                                                arratye arrerneke.
                                            </p>
                                        </strong>
                                        <p>
                                            These emoji stickers were made by hundreds of young
                                            people with senior Arrernte cultural advisers, for you
                                            to use.
                                        </p>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* "Antherreme slide" */}
                        <div className="slide-container">
                            <IonImg src="../assets/screen3_header.png" id="drawing" />
                            <h1>Antherreme!</h1>
                            <strong>
                                <p>
                                    Unte apeke emoji renhe yernetyeke, app nhenhe altywere-ilaye,
                                    kele emoji unte ahentye-aneme uthemele, kele imernte
                                    antherreme-kenhe-button ulthemele.
                                </p>
                            </strong>
                            <p>
                                To share an emoji sticker, just open this app, select the sticker
                                you want to use and then tap the share button. You can then choose
                                which platform you want to share the sticker on.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container">
                            <IonImg src="../assets/screen5_header.png" id="drawing" />
                            <h1>Awaye!</h1>
                            <p>
                                New audio! Press the play button to learn to pronounce the Arrernte
                                emojis
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonModal>
    );
};
export default Slides;
