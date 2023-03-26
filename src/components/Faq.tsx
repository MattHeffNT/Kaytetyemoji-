import React from 'react';
import { IonContent, IonImg } from '@ionic/react';
import './styles/Faq.css';

const Faq: React.FC<any> = () => {
    return (
        <IonContent>
            <div className="faq-container">
                <h1>Apayuthnaye / FAQ</h1>
                <p>
                    <strong>How do I use Kaytetyemoji stickers?</strong>
                </p>
                <p>
                    If you’re reading this, then you’ve already managed to download this app. You
                    can now look through the different emoji stickers and share them in text
                    messages, on some messaging apps and social media platforms. On iOS platforms
                    they also function as a sticker pack, allowing for integration onto your phone.
                    Because they are stickers, they can’t be used in-line with text on social media
                    platforms - instead they will behave more like images.
                </p>
                <p>
                    <strong>Why don’t they behave exactly like normal emojis?</strong>
                </p>
                <p>
                    Good question. Emojis were originally developed in Japan before being adopted,
                    expanded and used around the world. The official emoji set is now controlled by
                    Unicode, an international consortium that chooses which emojis are adopted into
                    the official set. To get a new emoji adopted into the official set, you need to
                    go through an extensive application process, a process which recently rejected a
                    key symbol of Aboriginal Australia, the Aboriginal Flag. Therefore we’ve made
                    this sticker set to reflect our own Kaytetye language and culture.
                </p>
                <p>
                    <strong>How were the stickers made?</strong>
                </p>
                <p>
                    In early 2022, a group of Kaytetye speakers got together to begin to develop
                    Kaytetyemoji. They had approached{' '}
                    <a href="http://indigemoji.com.au">Indigemoji</a>, who developed Australia’s
                    first First Nations emoji set in Arrernte in 2019. The Indigemoji team decided
                    to offer resources and support to a Kaytetye language project like this. Over
                    many months,{' '}
                    <a href="https://www.indigemoji.com.au/alpewarrewarre-team">our team</a> went
                    through a process of translating the relevant Indigemojis from Arrernte to
                    Kaytetye as well as designing 44 new emojis for plants, animals and other
                    important parts of Kaytetye life and culture, with the help of graphic
                    designers. We made recordings of the word to match each emoji, along with
                    example phrases which you can find on this app.
                    <a href="http://indigemoji.com.au"> Read more here</a>.
                </p>
                <p>
                    <strong>What language are the emojis in?</strong>
                </p>
                <p>
                    The language of this emoji set is Kaytetye spoken around the Barrow Creek area
                    of Central Australia, north of Mparntwe/Alice Springs. Kaytetye is an endangered
                    central Australian language, with only 109 speakers listed in the 2021 census (a
                    decline of nine per cent since the previous census). To find out more about the
                    emojis and to hear an audio pronunciation of each emoji name
                    <a href="http://indigemoji.com.au"> visit our website</a>.
                </p>
                <p>
                    <strong>Why did we make them?</strong>
                </p>
                <p>
                    Our aim is to share a slice of Kaytetye culture with the world and increase our
                    representation on digital platforms. Each emoji has been carefully considered,
                    developed and approved by a group of senior Kaytetye speakers and advisers, as
                    well as other community members. We want our kids to feel that their language
                    and culture is relevant and that they have opportunities in this new digital
                    world.
                </p>
                <p>
                    <strong>
                        Why aren’t there any stickers relating to the sea or other parts of
                        Australia?
                    </strong>
                </p>
                <p>
                    These stickers were made in Central Australia. They predominantly relate to
                    Kaytetye life and culture. We would not presume to represent the culture or
                    language of other communities. We would love to share everything we’ve learnt
                    and help others make their own emoji stickers! If that’s you, just get in touch!
                </p>
                <p>
                    <strong>Who is Indigemoji?</strong>
                </p>
                <p>
                    Indigemoji is a collaborative collective of linguists, artists, young people and
                    creative technologists that worked together to produce this app. The copyright
                    for the artwork and cultural knowledge remains with each individual artist
                    involved, who have licensed their work for inclusion in this app. The cultural
                    content is owned by the senior Kaytetye team - Tommy Jangala, Phillip Janima,
                    Kathleen Rambler, Valentine Shaw.
                </p>
                <p>
                    <strong>I want to suggest an Indigemoji or make a set for my mob!</strong>
                </p>
                <p>
                    Yewe! There are so many more we could make! We're keen to help in any way we can
                    and share what we've learnt. Send us an email at
                    <a href="mailto:werte@indigemoji.com.au"> werte@indigemoji.com.au</a>.
                </p>
                <p>
                    <strong>I want to help out!</strong>
                </p>
                <p>
                    There’s so much we want to do next, like offering a choice of skin tones and
                    animating the stickers so they move! If you’d like to donate or contribute to
                    our project we’d love to hear from you.
                </p>
                <p>
                    <strong>I’m having technical issues!</strong>
                </p>
                <p>
                    Sorry to hear that - get in touch with us at{' '}
                    <a href="mailto:werte@indigemoji.com.au">werte@indigemoji.com.au</a> and we’ll
                    try and help!
                </p>
            </div>
        </IonContent>
    );
};
export default Faq;
