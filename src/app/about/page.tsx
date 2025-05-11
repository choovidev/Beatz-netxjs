import Image from "next/image";
import styles from "./page.module.css";
export default function About() {
  return (
    <main>
    <section className="sobre-mi">
    <div className="container">
      <h2>Sobre mí</h2>
      <p>
        Soy un desarrollador web apasionado por crear experiencias digitales únicas y memorables. 
        Mi enfoque combina la estética con la funcionalidad, buscando siempre el equilibrio perfecto 
        entre diseño y usabilidad.
      </p>
      <p>
        Con más de 5 años de experiencia en el desarrollo frontend, he trabajado en diversos proyectos 
        que van desde sitios web corporativos hasta aplicaciones web complejas. Mi stack tecnológico 
        incluye HTML5, CSS3, JavaScript moderno, React, y frameworks como Astro para crear sitios 
        rápidos y optimizados.
      </p>
      <p>
        Me especializo en crear interfaces de usuario intuitivas y accesibles, siempre manteniendo 
        un ojo en las últimas tendencias y mejores prácticas del desarrollo web.
      </p>
      <div className="decor-line"></div>
    </div>
  </section>
  <div className={styles.language}>
    <Image src="/img/html5.png" alt="Language" width={100} height={100} />
    <Image src="/img/css3.png" alt="Language" width={100} height={100} />
    <Image src="/img/react.png" alt="Language" width={100} height={100} />
    <Image src="/next.svg" alt="Language" width={100} height={100} />
  </div>
  </main>
  );
}
