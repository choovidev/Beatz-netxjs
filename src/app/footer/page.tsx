import Image from "next/image";
export default function Footer() {
  return (
    <footer>
    <div className="footer-left">
      <div className="song-info">
       <Image src="/img/footer.jpg" alt="Album Cover" width={40} height={40} />
        <div className="song-details">
          {/*Titulo de la canción*/}
          <div className="song-title">Nombre de la Canci&oacute;n</div>
          {/*Artista de la canción*/}
          <div className="song-artist">Artista</div>
        </div>
      </div>
    </div>
    {/*Contenedor para los controles de la canción*/}
    <div className="footer-controls">
      {/*Boton de reproducción*/}
      <button className="control">&#9829;</button>
      {/*Boton de reproducción hacia atrás*/}
      <button className="control">&lt;</button>
      {/*Boton de reproducción play/pause*/}
      <button className="control">&#9654;</button>
      {/*Boton de reproducción hacia adelante*/}
      <button className="control">&gt;</button>
      {/*Boton de agregar canción*/}
      <button className="control">&#43;</button>
    </div>
  </footer>
  );
}
