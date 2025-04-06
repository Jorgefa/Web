// src/pages/HomePage.tsx (Sin clsx)
import React from 'react';
import styles from './HomePage.module.css';

// GIFs
import gifMichelDwightBailando from '../assets/gifs/1.gif';
import gifDiCaprio from '../assets/gifs/2.gif';
import gifFriends from '../assets/gifs/4.gif';
import gifNina from '../assets/gifs/5.gif';
import gifGato from '../assets/gifs/6.gif';
import gifAutobus01 from '../assets/gifs/7.gif';
import gifAutobus02 from '../assets/gifs/8.gif';
import gifHomer from '../assets/gifs/9.gif';
import gifVestidoAmarillo from '../assets/gifs/10.gif'; 
import gifTextoQueEmocion from '../assets/gifs/GIF_TEXTO_1.gif';
import gifTextoDeprimera from '../assets/gifs/GIF_TEXTO_2.gif';


const HomePage: React.FC = () => {
  return (
    // Aplicamos estilos del módulo al contenedor
    <div className={styles.container}>

      {/* NOS CASAMOS */}
      <section className={styles.section}>
        {/* Título Principal: Combinamos clases manualmente */}
        {/* Usamos template literals `` y ${} para insertar las clases */}
        <p>
          Cris & Jorge
        </p>
        <br />
        <br />
        <h1 className={styles.mainTitle}>
          ¡QUE
          <br />
          {/* Si "NOS" necesitara un estilo específico, se haría igual: */}
          <span className={styles.nosWordSpecial}>NOS</span>
          <br />
          CASA-
          <br />
          MOS!
        </h1>

        {/* Subtítulo: Solo necesita su clase del módulo */}
        <p className={`${styles.subtitle} ${styles.sectionAlignLeftSecondColumn}`}>
          A quien no le va a gustar celebrar el amor y una buena jarana.
        </p>
      </section>

      {/* GIFS 01 */}
      <section>
        <div className={styles.gifGrid}>
          <img
            src={gifMichelDwightBailando}
            alt="Ilustración animada de una pareja bailando felizmente"
            className={styles.gifItem} // Clase opcional para estilizar cada GIF
          />
          <img
            src={gifDiCaprio}
            alt="Ilustración animada de un grupo de amigos riendo juntos"
            className={styles.gifItem}
          />
          <img
            src={gifVestidoAmarillo}
            alt="Ilustración animada de copas brindando"
            className={styles.gifItem}
          />
          <img
            src={gifGato}
            alt="Ilustración animada de una mujer emocionada"
            className={styles.gifItem}
            />
        </div>
      </section>

      {/* FECHA y LUGAR */}
      <section className={`${styles.section} ${styles.sectionAlignLeft}`}>
        {/* Título de Sección: Solo necesita su clase del módulo */}
        <h2 className={styles.sectionTitle}>
            30
            <br />
            <span className={styles.nosWordSpecial}>Agosto</span>
            <br />
            2025</h2>
        {/* Texto normal: Solo necesita heredar de <p> o body */}
        <div className={`${styles.subtitle} ${styles.sectionAlignLeftSecondColumn}`}>
          <p>13:30h</p>
          <p>En La Casona de Pitacum.</p>
          <p>
           C. la Iglesia, 11, 24546 Arganza, León
          </p>
          <button className={styles.button}>
            <a href="https://maps.app.goo.gl/4ibwkG4HcGDh7dLv5" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
          </button>
        </div>
      </section>

      {/* GIFS 02 */}
      <section>
        <div className={styles.gifGrid}>
          <img
            src={gifMichelDwightBailando}
            alt="Ilustración animada de una pareja bailando felizmente"
            className={styles.gifItem} // Clase opcional para estilizar cada GIF
          />
          <img
            src={gifDiCaprio}
            alt="Ilustración animada de un grupo de amigos riendo juntos"
            className={styles.gifItem}
          />
          <img
            src={gifVestidoAmarillo}
            alt="Ilustración animada de copas brindando"
            className={styles.gifItem}
          />
          <img
            src={gifGato}
            alt="Ilustración animada de una mujer emocionada"
            className={styles.gifItem}
            />
        </div>
      </section>

      {/* VIDEO SER DE LUZ */}
      <section>
        <div className={`${styles.subtitle} ${styles.sectionAlignLeftSecondColumn}`}>
          <p>
           Prefiero que todo esto me lo cuente un entrañable ser de luz.
          </p>
          <button className={styles.button}>
            <a href="https://www.youtube.com/watch?v=-H2TnrECM9M&ab_channel=ProgramaV%C3%ADaV" target="_blank" rel="noopener noreferrer">Bajo mi responsabilidad</a>
          </button>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className={styles.section}>
        <h1 className={styles.mainTitle}>
          SÍ,
          <br />
          ESTO
          <br />
          ES
          <br />
          REAL,
          <br />
          <span className={styles.nosWordSpecial}>NO ES IA</span>
          <br />
          NI UN
          <br />
          SIMU-
          <br />
          LACRO.
        </h1>
        <div>
          <p>Y para estar bien preaprados, contar las sillas, los platos y sobre todo las vervezas, necesitamso que nos confirmes!</p>
          <button className={styles.button}>
            <a href="https://www.youtube.com/watch?v=-H2TnrECM9M&ab_channel=ProgramaV%C3%ADaV" target="_blank" rel="noopener noreferrer">YO VOY!</a>
          </button>
        </div>
      </section>

      {/* AUTOBUSES */}
      <section className={styles.section}>
        <div className={styles.gifGrid}>
          <img
            src={gifAutobus01}
            alt="Ilustración animada de una pareja bailando felizmente"
            className={styles.gifItem} // Clase opcional para estilizar cada GIF
          />
          <img
            src={gifAutobus02}
            alt="Ilustración animada de un grupo de amigos riendo juntos"
            className={styles.gifItem}
          />
        </div>
        <div>
          <p>Los autobuses tendrán salida y llegada desde Ponferrada con parada en Plaza Julio la Zurtegui (zona de abajo) y La Carrasca (zona alta).</p>
          <p>Confirmaremos horarios y paradas cuando se acerque la fecha.</p>
        </div>
      </section>

      {/* DRESSCODE */}
      <section className={styles.section}>
        <h1 className={styles.mainTitle}>
          DRESS
          <br />
          CODE:
        </h1>
        <div>
          <p>Feel free and ven como quieras pero pilla la chaqueta por si refresca.</p>
        </div>
        <div className={styles.gifGrid}>
          <img
            src={gifHomer}
            alt="Ilustración animada de una pareja bailando felizmente"
            className={styles.gifItem} // Clase opcional para estilizar cada GIF
          />
          <img
            src={gifVestidoAmarillo}
            alt="Ilustración animada de un grupo de amigos riendo juntos"
            className={styles.gifItem}
          />
        </div>
      </section>

      <section className={styles.section}>
        <span className={styles.nosWordSpecial}>Y CHIMPÚN</span>
        <h1 className={styles.mainTitle}>
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
        </h1>
      </section>

      {/* Footer: Solo necesita su clase del módulo */}
      <footer className={styles.footer}>
        <p>MADRE MÍA QUE EMOCIÓN</p>
      </footer>
    </div>
  );
};

export default HomePage;