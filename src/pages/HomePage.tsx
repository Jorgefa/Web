// src/pages/HomePage.tsx
import React from 'react';
import styles from './HomePage.module.css'; // Estilos específicos de esta página
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/TranslationContext';

// --- GIFs ---
import gifMichelDwightBailando from '../assets/gifs/1.gif';
import gifFriends from '../assets/gifs/4.gif';
import gifDica from '../assets/gifs/2.gif';
import gifGato from '../assets/gifs/6.gif';
import gifAutobus01 from '../assets/gifs/7.gif';
import gifAutobus02 from '../assets/gifs/8.gif';
import gifHomer from '../assets/gifs/9.gif';
import gifVestidoAmarillo from '../assets/gifs/10.gif';
import gifCris01 from '../assets/gifs/cris01.gif';
import gifCris02 from '../assets/gifs/cris02.gif';
import gifFer01 from '../assets/gifs/fer01.gif';
import gifMadreMia from '../assets/gifs/GIF_TEXTO_1.gif';
import gifConductor from '../assets/gifs/GIF_TEXTO_2.gif';
import gifTuktuk from '../assets/gifs/tuktuk.gif';


const HomePage: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <div className={styles.pageWrapper}> {/* Renombrado para claridad */}
      {/* ----- Header ----- */}
      <header className={styles.pageHeader}>
        <p className={styles.headerNames}>cris & jorge</p>
      </header>

      <main className={styles.pageContainer}> {/* Contenedor principal del contenido */}

        {/* ----- Hero Section (Que nos casamos) ----- */}
        <section className={styles.heroSection}>            <div className={styles.heroTitleDateContainer}>
              <h1 className={`${styles.sectionTitle} ${styles.colorRed} ${styles.sizeHero}`}>
                  <span className={styles.titleBlock}>{translate('¡QUE', 'IT`S')}</span>
                  {/* Aplicar fuente display directamente donde se necesita */}
                  <span className={`${styles.titleBlock} ${styles.fontDisplay} ${styles.fontDisplayLarge}`}>{translate('NOS', 'WEDD-')}</span>
                  <span className={styles.titleBlock}>{translate('CASA-', 'ING')}</span>
                  <div className={styles.dateTextBlock}>
                    <span className={styles.titleBlock}>{translate('MOS!', 'TIME!')}</span>
                    <div className={styles.dateBlock}>
                        <span className={styles.dateNumber}>30</span>
                        <span className={styles.dateNumberReg}>08</span>
                        <span className={styles.dateNumber}>20</span>
                        <span className={styles.dateNumber}>25</span>
                    </div>
                  </div>
              </h1>
            </div>
            <div className={`${styles.contentTextAquien} ${styles.indented} ${styles.fontWeightBold} ${styles.colorBlue}`}>
              <p>
              {translate('A quien no le va a gustar celebrar el amor y una buena jarana.', 'Who wouldn\'t like to celebrate love and have a good party.')}
              </p>
            </div>
        </section>

        {/* ----- Intro GIFs Section ----- */}
        <section className={styles.gifSection}>
            <div className={styles.gifCollageContainer}>
              <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer1}`} translateY={['0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
                <img src={gifFer01} alt="Fer gif" />
              </Parallax>
              <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer2}`} translateY={['0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
                <img src={gifCris01} alt="Cristina gif" />
              </Parallax>
              <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer3}`} translateY={['0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
                <img src={gifMichelDwightBailando} alt="Michael y Dwight gif" />
              </Parallax>
            </div>
        </section>

        {/* ----- Location Section ----- */}
        <section className={`${styles.locationSection} ${styles.alignLeft}`}>
            <h1 className={`${styles.sectionTitle2} ${styles.colorRed} ${styles.sizeHero}`}>
                30
                <br />
                <span className={`${styles.fontDisplay} ${styles.fontDisplayMedium}`}>{translate('Agosto', 'August')}</span>
                <br />
                2025
            </h1>
            <div className={`${styles.contentTextLugar} ${styles.indented}`}>
                <p className={styles.fontWeightBold}>13:00h</p>
                <p className={styles.fontWeightBold}>La Casona de Pittacum</p>
                <span className={`${styles.addressText} ${styles.fontWeightLight}`}>
                  C. la Iglesia, 11, 24546 Arganza, León
                </span>
                <a href="https://maps.app.goo.gl/4ibwkG4HcGDh7dLv5" className={`${styles.button} ${styles.buttonPrimary}`} target="_blank" rel="noopener noreferrer">
                  {translate('LLÉVAME CON MAPS', 'TAKE ME WITH MAPS')}
                </a>
            </div>
        </section>

        {/* ----- Mid GIFs Section ----- */}
        <section className={styles.gifSection}>
          <div className={styles.gifCollageContainer2}>
            <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer4}`} translateY={['0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifFriends} alt="Friends gif" />
            </Parallax>
            <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer5}`} translateY={['0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifGato} alt="Gato gif" />
            </Parallax>
            <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer6}`} translateY={['0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifDica} alt="Dica gif" />
            </Parallax>

          </div>
        </section>

        {/* ----- Info Link Section (Rajoy) ----- */}
        <section className={`${styles.infoLinkSection} ${styles.sectionWithBlueBackground}`}>
          {/* El contenedor indented ahora tiene z-index por defecto */}
          <div className={`${styles.contentText} ${styles.indentedBackgroundBlue}`}>
            <span className={`${styles.fontWeightBold} ${styles.textColorLight}`}>
              {translate('Quiero un pequeño adelanto de lo que me espera, por favor.', 'I want a little preview of what awaits me, please.')}
            </span>
            {/* Wrapper para el botón si se necesita espaciado específico */}
            <div className={styles.buttonWrapper}>
              <Link to="/ramdon" className={`${styles.button} ${styles.buttonSecondary}`}>
                {translate('BAJO MI RESPONSABILIDAD', 'AT MY OWN RISK')}
              </Link>
            </div>
          </div>
          <Parallax className={`${styles.gifCollageItemNoBack} ${styles.gifLayer7}`} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
            <img src={gifMadreMia} alt="'Madre mía' text gif" />
          </Parallax>
        </section>

        {/* ----- Confirmation Section ----- */}
        <section className={styles.confirmationSection}>
          <h2 className={`${styles.sectionTitle2} ${styles.colorRed} ${styles.sizeHero}`}>
            {translate('SÍ,', 'YES,')}
            <br />
            {translate('ESTO', 'THIS')}
            <br />
            {translate('ES', 'IS')}
            <br />
            {translate('REAL,', 'REAL,')}
            <br />
            {/* Aplicar fuente display aquí */}
            <span className={`${styles.fontDisplay} ${styles.fontDisplayMedium}`}>{translate('NO ES IA', 'NOT AI')}</span>
            <br />
            {translate('NI UN', 'NOR A')}
            <br />
            {translate('SIMU-', 'SIMU-')}
            <br />
            {translate('LACRO', 'LATION')}
          </h2>
          <div className={`${styles.contentTextCerve} ${styles.indented} ${styles.fontWeightBold}`}>
            <p>{translate('Y para estar bien preparados y calcular bien las cervezas, ¡necesitamos que confirmes!', 'And to be well prepared and calculate the beers correctly, we need you to confirm!')}</p>
            <Link to="/confirmacion" className={`${styles.button}  ${styles.buttonSpecial}`}>
              {translate('YO VOY!', 'I\'M GOING!')}
            </Link>
          </div>
        </section>

        {/* ----- Bus GIFs Section ----- */}
        <section className={styles.gifSection}>
          <div className={styles.gifCollageContainer3}>
            <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer8}`} translateY={['0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifAutobus01} alt="Bus gif 1" />
            </Parallax>
            <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer9}`} translateY={['-0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifAutobus02} alt="Bus gif 2" />
            </Parallax>
          </div>
        </section>

        {/* ----- Bus Info Section ----- */}
        <section className={`${styles.busInfoSection} ${styles.sectionWithRedBackground}`}>
          <div className={`${styles.contentText} ${styles.indentedBackgroundRed}`}>
            <span className={`${styles.fontWeightBold} ${styles.textColorLight}`}>
              {translate('Los autobuses tendrán salida y llegada desde Ponferrada con varias paradas.', 'The buses will depart from and return to Ponferrada with several stops.')}
              <br />
              <br />
              {translate('Actualizaremos cuando se acerque la fecha.', 'We will update as the date approaches.')}
            </span>
          </div>
            <Parallax className={`${styles.gifCollageItemNoBack} ${styles.gifLayer10}`} translateY={['-0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifConductor} alt="Bus driver gif" />
            </Parallax>
        </section>

        {/* ----- Dress Code Section ----- */}
        <section className={styles.dressCodeSection}>
          <h2 className={`${styles.sectionTitle3} ${styles.colorBlue} ${styles.sizeHero}`}>
            DRESS
            <br />
            {/* Aplicar fuente display */}
            <span className={`${styles.fontDisplay} ${styles.fontDisplaySmall}`}>CODE:</span>
          </h2>
          <div className={`${styles.contentTextDress} ${styles.indented} ${styles.fontWeightBold}`}>
            <span>
              {translate('Feel free and ven como quieras pero pilla la chaqueta por si refresca.', 'Feel free and come as you wish but grab a jacket in case it gets chilly.')}
            </span>
          </div>
          <div className={styles.gifCollageContainer4}>
            <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer11}`} translateY={['0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifHomer} alt="Homer Simpson gif" />
            </Parallax>
            <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer12}`} translateY={['-0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifVestidoAmarillo} alt="Yellow dress gif" />
            </Parallax>
            <Parallax className={`${styles.gifCollageItem} ${styles.gifLayer13}`} translateY={['-0%', '0%']} easing="easeInOutQuad" shouldAlwaysCompleteAnimation={true} startScroll={100} endScroll={1000}>
              <img src={gifCris02} alt="Cristina gif 2" />
            </Parallax>
          </div>
        </section>

        {/* ----- Closing Section ----- */}
        <section className={styles.closingSection}>
          {/* Usando clase de título normal, pero con fuente display aplicada en el span */}

          <h2 className={`${styles.sectionTitle} ${styles.colorRed} ${styles.sizeMedium}`}>
            <span className={`${styles.fontDisplay} ${styles.sizeHero}`}>Y</span> 
            <br />
            <span className={`${styles.fontDisplay} ${styles.sizeHero}`}>CHIMPÚN</span>
            <br />
            QUE TAN,
            <br />
            QUE CHIQUITI
            <br />
            TAN-TAN-TAN.
            <br />
            QUE
            <br />
            TUMBAN-BAN,
            <br />
            QUE TUMBAN.
            <br />
            QUE TEPE-TEPE
            <br />
            TAN PAN-PAN,
            <br />
            QUE TUMBAN
            <br />
            QUE PIN.
          </h2>
        </section>

      </main> {/* End pageContainer */}

      {/* ----- Footer ----- */}
      <footer className={styles.pageFooter}>
        <div className={styles.footerBackground}> {/* Contenedor con el fondo azul */}
          <div className={`${styles.gifCollageItem} ${styles.footerGif}`}>
            <img src={gifTuktuk} alt="Tuk tuk gif" />
          </div>
          <div className={styles.footerText}>
            <p>{translate('MADRE MÍA QUÉ EMOCIÓN', 'MY GOODNESS, HOW EXCITING')}</p>
          </div>
        </div>
      </footer>
    </div> // End pageWrapper
  );
};

export default HomePage;