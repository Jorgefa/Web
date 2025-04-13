// src/pages/HomePage.tsx
import React from 'react';
import styles from './HomePage.module.css'; // Estilos específicos de esta página
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

// Importa el componente reutilizable para el efecto sticky/horizontal
// import HorizontalScrollSection from '../components/HorizontalScrollSection/HorizontalScrollSection';

// --- GIFs --- (Asegúrate de que las rutas son correctas)
import gifMichelDwightBailando from '../assets/gifs/1.gif';
// import gifDiCaprio from '../assets/gifs/2.gif';
import gifFriends from '../assets/gifs/4.gif';
import gifNina from '../assets/gifs/5.gif';
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
import fondoAzul from '../assets/fondos/fondo_azul.png';
import fondoRojo from '../assets/fondos/fondo_rojo.png';
// import fondoAzulCierre from '../assets/fondos/fondo_azul_cierre.png';





const HomePage: React.FC = () => {

  return (
    <div>
      {/* ENCABEZADO */}
      <section className={styles.headerSection}>
        <p className={styles.headerNames}>cris & jorge</p>
      </section>

      <div className={styles.pageContainer}>
        {/* QUE NOS CASAMOS */}
        <section className={styles.standardSection}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div className={styles.titleAndDateWrapper}>
                <h1 className={styles.animatedMainTitle}>
                    <span className={styles.titleTextBlock}>¡QUE</span>
                    <span className={`${styles.titleTextBlock} ${styles.titleSpecialFont}`}>NOS</span>
                  <span>
                      <span>
                        CASA-
                        <br/>
                        <div className={styles.lastTitleLineWrapper}>
                          MOS!
                          <div className={styles.dateNumber}>
                            30<br/>
                            <span className={styles.dateNumberReg}>08</span><br/>
                            20<br/>
                            25
                          </div>
                        </div>
                      </span>
                  </span>
                </h1>
              </div>
                  <div className={styles.indentedTextBlock}>
                    <p>
                    A quien no le va a gustar
                    celebrar el amor
                    y una buena jarana.
                    </p>
                  </div>
            </div>        
        </section>

        {/* GIFS 01 */}
        <section className={styles.standardSectionGifs}>
            <div className={styles.overlappingGifContainer}>
              <Parallax
              className={`${styles.overlappingGifItem} ${styles.gifLayer1}`}
              translateY={['0%', '0%']}
              easing="easeInOutQuad"
              shouldAlwaysCompleteAnimation={true}
              startScroll={100}
              endScroll={1000}>
                <img src={gifFer01} alt="es una movida..." />
              </Parallax>
              <Parallax
              className={`${styles.overlappingGifItem} ${styles.gifLayer2}`}
              translateY={['0%', '0%']}
              easing="easeInOutQuad"
              shouldAlwaysCompleteAnimation={true}
              startScroll={100}
              endScroll={1000}>
                <img src={gifCris01} alt="holiiii" />
              </Parallax>
              <Parallax
              className={`${styles.overlappingGifItem} ${styles.gifLayer3}`}
              translateY={['0%', '0%']}
              easing="easeInOutQuad"
              shouldAlwaysCompleteAnimation={true}
              startScroll={100}
              endScroll={1000}>
                <img src={gifMichelDwightBailando} alt="Jaranaaa" />
              </Parallax>
            </div>
        </section>

        {/* FECHA Y LUGAR */}
        <section className={`${styles.standardSection} ${styles.sectionAlignLeft}`}>
            <div >
                <h2 className={styles.animatedMainTitle}>
                    30
                    <br />
                    <span className={styles.titleSpecialFontAgosto}>Agosto</span>
                    <br />
                    2025
                </h2>
                <div className={styles.indentedTextBlock}>
                  <div>
                    <p>13:30h</p>
                    <p>En La Casona de Pitacum.</p>
                    <span className={styles.textArganza}>
                      C. la Iglesia, 11, 24546 Arganza, León
                    </span>
                    <a href="https://maps.app.goo.gl/4ibwkG4HcGDh7dLv5" className={styles.actionButton} target="_blank" rel="noopener noreferrer">
                      LLÉVAME CON MAPS
                    </a>
                  </div>
                </div>
            </div>
        </section>

        {/* GIFS 02 */}
        <section className={styles.standardSectionGifs}>
          <div className={styles.overlappingGifContainer}>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer4}`}
            translateY={['0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifFriends} alt="uuuuuuuuuuuuh" />
            </Parallax>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer5}`}
            translateY={['0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifGato} alt="holiiii" />
            </Parallax>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer6}`}
            translateY={['0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifNina} alt="Jaranaaa" />
            </Parallax>
            <Parallax
            className={styles.gifLayer7}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifMadreMia} alt="Jaranaaa" />
            </Parallax>
          </div>
        </section>

        {/* RAJOY */}
        <section className={styles.standardSectionMaps}>
          <div className={styles.indentedTextBlock}>
            <span className={styles.textPrefiero}>
              Prefiero que todo esto me lo cuente un entrañable ser de luz.
            </span>
            <span className={styles.buttonMaps}>
              <a href="https://www.youtube.com/watch?v=-H2TnrECM9M&ab_channel=ProgramaV%C3%ADaV" className={styles.actionButtonWhite} target="_blank" rel="noopener noreferrer">
                BAJO MI RESPONSABILIDAD
              </a>
            </span>
          </div>
          <div  className={styles.fondoAzul}>
            <img src={fondoAzul} alt="Jaranaaa" />
          </div>
        </section>

        {/* CONFIRMACION */}
        <section className={styles.standardSection}>
          <h2 className={styles.animatedMainTitleRajoy}>
            SÍ,
            <br />
            ESTO
            <br />
            ES
            <br />
            REAL,
            <br />
            <span className={styles.titleSpecialFontAgosto}>NO ES IA</span>
            <br />
            NI UN
            <br />
            SIMU-
            <br />
            LACRO.
          </h2>
          <div className={styles.indentedTextBlock}>
            Y para estar bien preparados, contar las sillas, los platos y sobre todo las cervezas, ¡necesitamos que confirmes!
            <Link to="/confirmacion" className={styles.actionButton}>
              YO VOY!
            </Link>
          </div>
        </section>

        {/* Sección Autobuses */}
      <section className={styles.standardSection}>
          <div className={styles.overlappingGifContainer}>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer8}`}
            translateY={['0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifAutobus01} alt="uuuuuuuuuuuuh" />
            </Parallax>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer9}`}
            translateY={['-0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifAutobus02} alt="holiiii" />
            </Parallax>
            <Parallax
            className={styles.gifLayer10}
            translateY={['-0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifConductor} alt="holiiii" />
            </Parallax>
          </div>
        </section>
        <section className={styles.standardSection}>
          <div className={styles.indentedTextBlock}>
            <span className={styles.textAutobuses}>
              Los autobuses tendrán salida y llegada desde Ponferrada con parada en Plaza Julio Lazúrtegui (zona de abajo) y La Carrasca (zona alta).
              <br />
              <br />
              Confirmaremos horarios y paradas cuando se acerque la fecha.
            </span>
          </div>
          <div  className={styles.fondoRojo}>
            <img src={fondoRojo} alt="Jaranaaa" />
          </div>
        </section>

        {/* Sección Dresscode */}
        <section className={styles.standardSection}>
          <h2 className={styles.animatedMainTitleBlue}>
            DRESS
            <br />
            <span className={styles.titleSpecialFontCode}>CODE</span>
          </h2>
          <div className={styles.indentedTextBlock}>
            <span className={styles.textFeelFree}>
            Feel free and ven como quieras pero pilla la chaqueta por si refresca.
            </span>
          </div>
          <div className={styles.overlappingGifContainer}>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer11}`}
            translateY={['0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifHomer} alt="uuuuuuuuuuuuh" />
            </Parallax>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer12}`}
            translateY={['-0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifVestidoAmarillo} alt="holiiii" />
            </Parallax>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer13}`}
            translateY={['-0%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={100}
            endScroll={1000}>
              <img src={gifCris02} alt="holiiii" />
            </Parallax>
          </div>
        </section>

        {/* Sección Chimpún Final */}
        <section className={styles.standardSection}>
          <h2 className={styles.textChimpunQueTan}>
            <span className={styles.titleSpecialFontChimpun}>Y CHIMPÚN</span>
            <br />
            QUE TAN,
            <br />
            QUE CHIQUITI
            <br />
            TAN-TAN-TAN
            <br />
            QUE
            <br />
            TUMBAN-BAN
            <br />
            QUE TUMBAN,
            <br />
            QUE PIN.
          </h2>
        </section>
      </div>
      
      {/* Footer */}
      <footer className={styles.pageFooter}>
        <div className={styles.footerDiv}>
          <div className={`${styles.overlappingGifItem} ${styles.gifFooter}`}>
            <img src={gifTuktuk} alt="Jaranaaa" />
          </div>
          <span className={styles.footerText}>
            <p>MADRE MÍA QUÉ EMOCIÓN</p>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;