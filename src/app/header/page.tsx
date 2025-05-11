import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header>
  <nav>
    <div className="nav-buttons">
      <Link href="/"><button className="login">Inicio</button></Link>
      <a href="/about"><button className="login">Sobre mí</button></a>
      <a href="/contacto"><button className="login">Contacto</button></a>
      
    </div>
    <div className="nav-center">
      <h1>BΞΛTZ</h1>
    </div>
    <div className="nav-right">
      <Link href="/">
        <Image src="/img/miembro.jpg" alt="Profile Picture" width={200} height={200} />
      </Link>
    </div>
  </nav>
</header>
  );
}