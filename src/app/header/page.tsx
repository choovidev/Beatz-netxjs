import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header>
  <nav>
    <div className="nav-buttons">
      <Link href="/"><button className="login">Inicio</button></Link>
      <Link href="/about"><button className="login">Sobre mí</button></Link>
      <Link href="/contacto"><button className="login">Contacto</button></Link>
      
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