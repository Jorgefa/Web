// src/pages/HomePage.tsx
import React from 'react';
import styles from './HomePage.module.css'; // Estilos específicos de esta página
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

// Importa el componente reutilizable para el efecto sticky/horizontal
import HorizontalScrollSection from '../components/HorizontalScrollSection/HorizontalScrollSection';

// --- GIFs --- (Asegúrate de que las rutas son correctas)
import gifMichelDwightBailando from '../assets/gifs/1.gif';
import gifDiCaprio from '../assets/gifs/2.gif';
import gifGato from '../assets/gifs/6.gif';
import gifAutobus01 from '../assets/gifs/7.gif';
import gifAutobus02 from '../assets/gifs/8.gif';
import gifHomer from '../assets/gifs/9.gif';
import gifVestidoAmarillo from '../assets/gifs/10.gif';
import gifCris01 from '../assets/gifs/cris01.gif';
import gifFer01 from '../assets/gifs/fer01.gif';


const HomePage: React.FC = () => {

  return (
    <div className={styles.pageContainer}>

      {/* ENCABEZADO */}
      <section className={styles.standardSection}>
        <p className={styles.headerNames}>cris & jorge</p>
      </section>

      {/* QUE NOS CASAMOS */}
      <section className={styles.standardSection}>
        <HorizontalScrollSection heightMultiplier={5}> {/* Ajusta duración */}
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Parallax
              translateX={['150%', '-0%']}
              translateY={['0%', '0%']}
              easing="easeInOutQuad"
              shouldAlwaysCompleteAnimation={true}
              startScroll={1500}
              endScroll={2000}>
                <div className={styles.indentedTextBlock}>
                  <p>
                    Y, por supuesto, estas invitado!!!
                  </p>
                </div>
            </Parallax>
            <div className={styles.titleAndDateWrapper}>
              <h1 className={styles.animatedMainTitle}>
                <Parallax
                translateX={['-150%', '0%']}
                easing="easeInOutQuad"
                shouldAlwaysCompleteAnimation={true}
                startScroll={0}
                endScroll={500}>
                  <span className={styles.titleTextBlock}>¡QUE</span>
                </Parallax>
                <Parallax
                translateX={['150%', '0%']}
                easing="easeInOutQuad"
                shouldAlwaysCompleteAnimation={true}
                startScroll={200}
                endScroll={1000}>
                  <span className={`${styles.titleTextBlock} ${styles.titleSpecialFont}`}>NOS</span>
                </Parallax>
                <span className={styles.lastTitleLineWrapper}> {/* Contenedor relativo */}
                  <Parallax
                  translateX={['-150%', '0%']}
                  easing="easeInOutQuad"
                  shouldAlwaysCompleteAnimation={true}
                  startScroll={800}
                  endScroll={1500}>
                    <span className={styles.titleTextBlock}>
                      CASA-<br />MOS!
                    </span>
                  </Parallax>
                  {/* --- 2. Mover la Fecha DENTRO del wrapper --- */}
                  <Parallax
                    translateY={['1500px', '0px']}
                    translateX={['-50px', '-50px']}
                    shouldAlwaysCompleteAnimation={true}
                    className={styles.animatedDate}
                    startScroll={800}
                    endScroll={1500} 
                    >
                    <span className={styles.dateNumberBold}>30</span><br/>
                    08<br/>
                    <span className={styles.dateNumberBold}>20</span><br/>
                    <span className={styles.dateNumberBold}>25</span>
                  </Parallax>
                </span>
              </h1>
            </div>
          </div>        
        </HorizontalScrollSection>
      </section>

      {/* GIFS 01 */}
      <section className={styles.standardSection}>
        <HorizontalScrollSection heightMultiplier={3}> {/* Duración estándar */}
          <div className={styles.overlappingGifContainer}>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer1}`}
            translateX={['-200%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={2000}
            endScroll={4000}>
              <img src={gifFer01} alt="es una movida..." />
            </Parallax>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer2}`}
            translateX={['200%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={3000}
            endScroll={4000}>
              <img src={gifCris01} alt="holiiii" />
            </Parallax>
            <Parallax
            className={`${styles.overlappingGifItem} ${styles.gifLayer3}`}
            translateX={['-200%', '0%']}
            easing="easeInOutQuad"
            shouldAlwaysCompleteAnimation={true}
            startScroll={3500}
            endScroll={4500}>
              <img src={gifMichelDwightBailando} alt="Jaranaaa" />
            </Parallax>
          </div>
        </HorizontalScrollSection>
      </section>

      {/* FECHA Y LUGAR */}
      <section className={`${styles.standardSection} ${styles.sectionAlignLeft}`}>
        <HorizontalScrollSection heightMultiplier={3}> {/* Duración estándar */}
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Parallax
              translateX={['-200%', '0%']}
              easing="easeInOutQuad"
              shouldAlwaysCompleteAnimation={true}
              startScroll={5500}
              endScroll={7000}>
              <h2 className={styles.sectionTitle}>
                  30
                  <br />
                  <span className={styles.titleSpecialFont}>Agosto</span>
                  <br />
                  2025
              </h2>
            </Parallax>
            <Parallax
              translateX={['200%', '0%']}
              easing="easeInOutQuad"
              shouldAlwaysCompleteAnimation={true}
              startScroll={6000}
              endScroll={7500}>
              <div className={styles.indentedTextBlock}>
                <Parallax
                translateX={['200%', '0%']}
                easing="easeInOutQuad"
                shouldAlwaysCompleteAnimation={true}
                startScroll={6000}
                endScroll={7200}>
                  <p>13:30h</p>
                </Parallax>
                <Parallax
                translateX={['200%', '0%']}
                easing="easeInOutQuad"
                shouldAlwaysCompleteAnimation={true}
                startScroll={6300}
                endScroll={7200}>
                  <p>En La Casona de Pitacum.</p>
                </Parallax>
                <Parallax
                translateX={['200%', '0%']}
                easing="easeInOutQuad"
                shouldAlwaysCompleteAnimation={true}
                startScroll={6400}
                endScroll={7200}>
                  <p>C. la Iglesia, 11, 24546 Arganza, León</p>
                </Parallax>
                <Parallax
                translateX={['200%', '0%']}
                easing="easeInOutQuad"
                shouldAlwaysCompleteAnimation={true}
                startScroll={6900}
                endScroll={7500}>
                  <a href="https://maps.app.goo.gl/4ibwkG4HcGDh7dLv5" className={styles.actionButton} target="_blank" rel="noopener noreferrer">
                    LLÉVAME CON MAPS
                  </a>
                </Parallax>
              </div>
            </Parallax>

          </div>
        </ HorizontalScrollSection>
      </section>

      {/* Sección Grid de GIFs */}
      <section className={styles.standardSection}>
        <div className={styles.simpleGifGrid}>
          <img src={gifMichelDwightBailando} alt="Michael Scott y Dwight bailando" className={styles.gridGifItem} />
          <img src={gifDiCaprio} alt="Leonardo DiCaprio brindando" className={styles.gridGifItem} />
          <img src={gifVestidoAmarillo} alt="Mujer con vestido amarillo posando" className={styles.gridGifItem} />
          <img src={gifGato} alt="Gato sorprendido" className={styles.gridGifItem} />
        </div>
      </section>

      {/* Sección "Ser de Luz" */}
      <section className={styles.standardSection}>
        <div className={styles.indentedTextBlock}>
          <p>Prefiero que todo esto me lo cuente un entrañable ser de luz.</p>
          <a href="https://www.youtube.com/watch?v=-H2TnrECM9M&ab_channel=ProgramaV%C3%ADaV" className={styles.actionButton} target="_blank" rel="noopener noreferrer">
            BAJO MI RESPONSABILIDAD
          </a>
        </div>
      </section>

      {/* Sección Confirmación Formulario */}
      <section className={styles.standardSection}>
        <h2 className={styles.sectionTitle}>
          SÍ,
          <br />
          ESTO
          <br />
          ES
          <br />
          REAL,
          <br />
          <span className={styles.titleSpecialFont}>NO ES IA</span>
          <br />
          NI UN
          <br />
          SIMU-
          <br />
          LACRO.
        </h2>
        <div className={styles.indentedTextBlock}>
          <p>Y para estar bien preparados, contar las sillas, los platos y sobre todo las cervezas, ¡necesitamos que confirmes!</p>
          <Link to="/confirmacion" className={styles.actionButton}>
            YO VOY!
          </Link>
        </div>
      </section>

      {/* Sección Autobuses */}
      <section className={`${styles.standardSection} ${styles.sectionCentered}`}>
         <h2 className={styles.sectionTitle}>AUTOBUSES</h2>
         <div className={styles.simpleGifGrid}>
           <img src={gifAutobus01} alt="Autobús escolar amarillo" className={styles.gridGifItem} />
           <img src={gifAutobus02} alt="Autobús de dos pisos" className={styles.gridGifItem} />
         </div>
         <div className={styles.centeredTextBlock}>
           <p>Los autobuses tendrán salida y llegada desde Ponferrada con parada en Plaza Julio Lazúrtegui (zona de abajo) y La Carrasca (zona alta).</p>
           <p>Confirmaremos horarios y paradas cuando se acerque la fecha.</p>
         </div>
      </section>

      {/* Sección Dresscode */}
      <section className={`${styles.standardSection} ${styles.sectionCentered}`}>
        <h2 className={styles.sectionTitle}>
          DRESS
          <br />
          CODE:
        </h2>
        <div className={styles.centeredTextBlock}>
          <p>Feel free and ven como quieras pero pilla la chaqueta por si refresca.</p>
        </div>
        <div className={styles.simpleGifGrid}>
          <img src={gifHomer} alt="Homer Simpson elegante y luego informal" className={styles.gridGifItem} />
          <img src={gifVestidoAmarillo} alt="Mujer con vestido amarillo posando" className={styles.gridGifItem} />
        </div>
      </section>

      {/* Sección Chimpún Final */}
      <section className={styles.standardSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleSpecialFont}>Y CHIMPÚN</span>
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

      {/* Footer */}
      <footer className={styles.pageFooter}>
        <p>MADRE MÍA QUÉ EMOCIÓN</p>
      </footer>

    </div>
  );
};

export default HomePage;