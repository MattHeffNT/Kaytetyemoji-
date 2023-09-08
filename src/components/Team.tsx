import React from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import './styles/Team.css';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.

const Team: React.FC<any> = () => {
  return (
    <IonContent>
      <div className='teams-container'>
        <h1> Aynanthe // Team </h1>
        <p>
          <strong> emoji bosses: </strong>
        </p>

        <p>
          <strong> Tommy Jangala “Walkabout” </strong> is a senior Kaytetye man.
          Born at Hatches Creek, his father’s country is Akalperre and his
          mother’s country is Kwerrkepentye. He was raised traditionally in the
          bush and worked as a stockman throughout much of his life. He has been
          involved in Kaytetye language work for many years and features on the
          audio of the Kaytetye Learner’s Guide and in the
          <a href='https://www.youtube.com/watch?v=B5QVNwTOzgE'>
            {' '}
            video clip
          </a>{' '}
          of Vincent Janima’s song ‘Artweye Erlkwaye’ . Tommy lives at
          Ankweleyelengkwe Outstation on his traditional lands.
        </p>

        <p>
          <strong> Phillip Janima’s </strong> father’s country is Akalperre (he
          is Tommy’s son) and his mother’s country is Arnerre, a Kaytetye
          country north-west of Barrow Creek. He was involved in the Arrkantele
          TV series, a children’s language learning show. Philip provided the
          audio for the emoji app and translated Tommy’s Kaytetye. Philip spends
          his time in both Alice Springs and Ankweleyelengkwe Outstation.
        </p>
        <p>
          <strong>Valentine Shaw’s </strong> father’s country is Akalperre and
          on her mother’s side she is Anmatyerr from Arrwek. Valentine lives in
          Alice Springs. She has a Bachelor of Education and has many years
          experience as a high school teacher. She currently works as a history
          teacher at St Philip’s College. Valentine is passionate about
          Aboriginal languages and keeping Kaytetye alive. She spends time on
          Country learning from her grandfather. She contributed artwork for the
          emojis and provided audio for the app.
        </p>
        <p>
          <strong>Glorianna Moketarinja</strong> is a Western Arrernte woman
          from Ntaria. She is of Pwerle skin group. She is married to Philip
          Janima. Glorianna contributed to the translation of the Arrernte
          emojis from the Indigemoji app. She spends her time in both Alice
          Springs and Ankweleyelengkwe Outstation.
        </p>
        <p>
          <strong>artists:</strong>
        </p>
        <p>
          <strong>Kathleen Rambler’s</strong> father’s country is Akalperre (she
          is Tommy’s daughter) and her mother’s country is Arnerre. Kathleen
          spent her childhood in the Barrow Creek and Utopia regions. She is a
          well-known artist and contributed artwork for the emojis and the
          Kaytetye website. Kathleen now lives at Ampilatwatja, her husband’s
          country, and her art can be purchased from Artists of Ampilatwatja.
        </p>
        <p>
          <strong>April Phillips</strong> is a Wiradjuri-Scottish woman of the
          Galari peoples of NSW. A digital artist and youth mentor, April is
          passionate about computer art for a new world.
        </p>
        <p>
          {' '}
          With <strong>Dave Wells</strong>,<strong> Valentine Shaw</strong> and{' '}
          <strong>Rebecca Harnish</strong>{' '}
        </p>
        <p>
          The original Arrernte emojis included in this set were developed by
          the Arrerntemoji art team: Graham Wilfred Jnr, Emma Stubbs, Dion
          Beasley, Phillip McCormack, Benita Clements, Colleen Powell, Lindsey
          Matthews, Agnes Saunders, Jessie Bethune, Dustin, Lucas Jones, Lilah
          Shee, Ellis, Ernestine Mulkatana, Mishka Kiessling, Tarynt Stubbs,
          Sebastian, Shinarah Woods, Aarha, Chris Jones, Kelvin Campbell,
          Kaylene Nelson, Ashley Marshall, Grace Voller, Oliver Jones, Kyiesha
          Charles, Cherina, Vicprsha Scovie, Astrid Keaney, Abraham Lennie,
          Denzel Steel, Felicity Malbunka, Broadie Orr, Shakira Ken, Natasha
          Angus, Elizabeth Coulthard, Reshanna, Tjikiti Liddle, Harold Thomas
          and Elliat Rich.
        </p>
        <p>
          <strong> app/developers: </strong>
        </p>

        <p>
          <strong> Matthew Ngamurarri Heffernan </strong> is a Luritja
          technologist from central Australia who has worked in various sectors
          from government, not for profits and private industry. He is an
          alumnus of the School of Cybernetics at ANU, and Information
          Technology at CDU and is committed to ensuring that Indigenous people
          are up-skilled in, and don’t miss out on, technological advancements
          and economic development. He is passionate about exploring the ways in
          which new technologies intersect with Indigenous culture and knowledge
          as well as examining the ways in which culture can be expressed via
          emerging mediums. He also sometimes just loves coding.
        </p>
        <p>
          {' '}
          With <a href='https://lav.io/'>Sam Lavigne</a>,
          <a href='https://mod.studio/'> Leigh Harris</a>,
          <a href='https://mod.studio/'> Mod </a> and{' '}
          <a href='https://sol1.com.au/'>Sol1</a> of the original Indigemoji
          team.
        </p>
        <p>
          <strong> producers: </strong>
        </p>
        <p>
          <a href='http://www.caddiebrain.com'>Caddie Brain</a>, Myfany Turpin,
          Bridey Lea and Joel Perrule Liddle
        </p>

        <p>
          <strong> with thanks: </strong>
        </p>
        <p>
          Regional Arts Australia, Arts NT, The Northern Territory Government,
          The University of Sydney, the Johnston Foundation, Rachel Perkins, Sam
          Lavigne, Tega Brain, Timothy Chatwin, Jennifer Pysden, Bao Stone
          catering, Watch This Space, and Australian National University
        </p>
        <p>
          <em>
            This project was made on Arrernte Country in Mparntwe. It was made
            possible by the Australian Government's Regional Arts Fund, which
            supports the arts in regional and remote Australia, the Northern
            Territory Government, with support from the University of Sydney and
            the Johnston Foundation.
          </em>
        </p>

        <p>
          Full credits on the{' '}
          <a href='http://www.indigemoji.com.au/'>Indigemoji website</a>.
        </p>
        <IonGrid>
          <IonRow>
            <IonCol className='teamImages'>
              <a href='https://www.indigemoji.com.au'>
                <IonImg src='/assets/logos/indigemojilogo.png'> </IonImg>
              </a>
              <a href='https://www.batchelor.edu.au/'>
                <IonImg src='/assets/logos/CALL-logo-lge.png'> </IonImg>
              </a>
              <a href='https://regionalarts.com.au/'>
                <IonImg src='/assets/logos/RegionalArtsLogos.jpg'> </IonImg>
              </a>
              <a href='https://www.sydney.edu.au/'>
                <IonImg src='/assets/logos/Uni-Sydney-logo-lockup-mono-SCM.jpg'></IonImg>
              </a>
              <IonImg src='/assets/logos/The_Johnston_Foundation_logo.jpg'>
                {' '}
              </IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  );
};
export default Team;
