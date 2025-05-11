import Image from 'next/image';
export default function Home() {
  return (
    <main>
    <div className="gallery-container">
      <h4>Para ti</h4>
      <div className="gallery-section">
        <button className="arrow left">&#9664;</button>
        <div className="column">
          <div className="image">
            <Image src="/img/1.jpg" alt="Album Cover" width={200} height={200} />
          </div>
          <div className="image">
            <Image src="/img/2.jpg" alt="Album Cover" width={200} height={200} />
          </div>
          <div className="image">
            <Image src="/img/3.jpg" alt="Album Cover" width={200} height={200} />
          </div>
          <div className="image">
            <Image src="/img/4.jpg" alt="Album Cover" width={200} height={200} />
          </div>
          <div className="image">
            <Image src="/img/5.jpg" alt="Album Cover" width={200} height={200} />
          </div>
        </div>
        <button className="arrow right">&#9654;</button>
      </div>
      <h4>Explorar</h4>
      <div className="gallery-section">
        <button className="arrow left">&#9664;</button>
        <div className="column">
          <div className="image">
            <Image src="/img/6.jpg" alt="Album Cover" width={200} height={200} />
          </div>
          <div className="image">
            <Image src="/img/7.jpg" alt="Album Cover" width={200} height={200} />
          </div>
          <div className="image">
            <Image src="/img/8.jpg" alt="Album Cover" width={200} height={200} />
          </div>
          <div className="image">
            <Image src="/img/9.jpg" alt="Album Cover" width={200} height={200} />
          </div>
          <div className="image">
            <Image src="/img/10.jpg" alt="Album Cover" width={200} height={200} />
          </div>
        </div>
        <button className="arrow right">&#9654;</button>
      </div>
    </div>
  </main> 
  );
}
