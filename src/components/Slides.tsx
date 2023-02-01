import { useEffect, useRef } from 'react';
import {
    // useIonViewWillEnter,
    IonModal,
    IonToolbar,
    IonButtons,
    IonContent,
    IonButton,
    IonImg,
    isPlatform,
} from '@ionic/react';
import { IonGrid, IonCol, IonRow } from '@ionic/react';
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

const Slides: React.FC<any> = ({ isOpen, onClose }) => {
    const slidesRef = useRef<any>();
    const contentRef = useRef<HTMLIonContentElement>(null);
    const toolbarRef = useRef<any>();

    // this function controlls the scroll on some slides, the transition effects,
    // as well as making sure between each slide the scroll position is reset
    const resetSlideScroll = async () => {
        const index = slidesRef.current.swiper.activeIndex;

        // on smaller content pages disable scroll


    // ok so what's happening is that on pages where i've disabled scroll .
    // that also disables the scrolltotop function to kick in....so need to use 
    // scroll prev/next feature to trigger some of these events
        if (contentRef.current) {
        //     if (isPlatform('android')) {
        //         if (index === 0 || index == 2 || index == 4) {
        //             contentRef.current.scrollY = false;

        //         } else {
        //             contentRef.current.scrollY = true;
        //         }
        //     } else if (isPlatform('ios')) {
        //         if (index == 0) {

        //             contentRef.current.scrollY = false;
        //         } else {
        //             contentRef.current.scrollY = true;
        //         }
        //     } else {
        //         contentRef.current.scrollY = true;
    //
        //     }
        //     // on each slide always start at the top
            contentRef.current.scrollToTop();
        }
    };

    // when the slide is loaded into view
    const slideLoad = (event: any) => {
        // if ios device and toolbar not null push down toolbar a bit so close button accessible
        if (toolbarRef && isPlatform('ios')) {
            toolbarRef.current.style = 'margin-top:2.3rem';
        }

        console.log(event.el.parentNode);
        // make the first slide non-scrollable
        event.el.parentNode != null
            ? (event.el.parentNode.scrollY = false)
            : // @ts-ignore
              (event.el.parentNode.scrollY = true);
    };

    // enable the hardware back button to close the modal
    useEffect(() => {

    contentRef.current?.scrollToTop()
        if (isOpen) {
            const backButtonHandler = (e: any) => {
                e.detail.register(100, () => {
                    onClose();
                });
            };
            document.addEventListener('ionBackButton', backButtonHandler);
            return () => {
                document.removeEventListener(
                    'ionBackButton',
                    backButtonHandler
                );
                onClose();
            };
        }
    }, [onClose]);

    return (
        <IonModal isOpen={isOpen}>
            <IonContent ref={contentRef}>
                <IonToolbar color="none" ref={toolbarRef}>
                    <IonButtons slot="end">
                        <IonButton onClick={onClose}>
                            <IonIcon
                                name="close"
                                className="modal-icon"
                                size="large"
                            />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>

                <Swiper
                    ref={slidesRef}
                    modules={[Pagination, EffectFade]}
                    pagination={true}
                    onSlideChange={resetSlideScroll}
                    // on slide load, disable scrolling on the first slide
                    onInit={slideLoad}

                >
                    {/* @ts-ignore */}
                    <SwiperSlide>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonImg
                                        src="../assets/start_header.png"
                                        id="welcomeIcon"
                                    />
                                </IonCol>
                                <IonCol>
                                    {/* @ts-ignore */}
                                    <div className="slide-container">
                                        <h1>Indigemoji</h1>
                                        <strong>
                                            <p>
                                                Emoji nhenhe-areye arrwekele
                                                anthurre Australia-kenhe.
                                                Tyerretye Arrernte-areye itnenhe
                                                mpwareke, Arrernte-kenhe
                                                apmerenge
                                            </p>
                                        </strong>
                                        <p>
                                            Australia’s first set of Indigenous
                                            emojis made on Arrernte country in
                                            Mparntwe / Alice Springs.
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
                                        src="../assets/screen1_header.png"
                                        id="drawing"
                                    />
                                </IonCol>
                                {/* Werte slide  */}
                                <IonCol>
                                    <div className="slide-container">
                                        <h1>Werte!</h1>
                                        <strong>
                                            <p>
                                                Anwerne akangentye arrantherre
                                                apetyeke Indigemoji-kenhe
                                                aretyeke. Arne-nhenhe-areye
                                                arrekantherre ileme
                                                anwerne-akerte, altyerre, arne,
                                                awelhentye-areye, angkentye
                                                anwernekenhe-uthene. Impene
                                                anthurre kwenhe arrantherre
                                                angkentye akaltye-irretyeke,
                                                angkentye anwernekenhe
                                                akwete-ante rlterrke
                                                antirrkwetyeke.{' '}
                                            </p>
                                        </strong>
                                        <p>
                                            Welcome to the Indiemoji app! This
                                            sticker set represents life, culture
                                            and language in our part of Central
                                            Australia, the traditional land of
                                            the Arrernte people. It is important
                                            you learn so that we hold our
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
                                    <IonImg
                                        src="../assets/screen2_header.png"
                                        id="drawing"
                                    />
                                </IonCol>
                                <IonCol>
                                    {/* "Tyerrentye Slide" */}
                                    <div className="slide-container">
                                        <strong>
                                            <p>
                                                Tyerretye anwerkenhe-arle
                                                itnhenhe-areye mpwareke.
                                                Arrernte ilyernpenye-areye
                                                help-me-ileme angkentye arratye
                                                arrerneke.
                                            </p>
                                        </strong>
                                        <p>
                                            These emoji stickers were made by
                                            hundreds of young people with senior
                                            Arrernte cultural advisers, for you
                                            to use.
                                        </p>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* "Antherreme slide" */}
                        <IonRow>
                            <IonCol>
                                <IonImg
                                    src="../assets/screen3_header.png"
                                    id="drawing"
                                />
                            </IonCol>
                            <IonCol>
                                <div className="slide-container">
                                    <h1>Antherreme!</h1>
                                    <strong>
                                        <p>
                                            Unte apeke emoji renhe yernetyeke,
                                            app nhenhe altywere-ilaye, kele
                                            emoji unte ahentye-aneme uthemele,
                                            kele imernte antherreme-kenhe-button
                                            ulthemele.
                                        </p>
                                    </strong>
                                    <p>
                                        To share an emoji sticker, just open
                                        this app, select the sticker you want to
                                        use and then tap the share button. You
                                        can then choose which platform you want
                                        to share the sticker on.
                                    </p>
                                </div>
                            </IonCol>
                        </IonRow>
                    </SwiperSlide>
                    <SwiperSlide>
                        <IonRow>
                            <IonCol>
                                <IonImg
                                    src="../assets/screen5_header.png"
                                    id="drawing"
                                />
                            </IonCol>
                            <IonCol>
                                <div className="slide-container">
                                    <h1>Awaye!</h1>
                                    <p>
                                        New audio! Press the play button to
                                        learn to pronounce the Arrernte emojis
                                    </p>
                                </div>
                            </IonCol>
                        </IonRow>
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonModal>
    );
};
export default Slides;
