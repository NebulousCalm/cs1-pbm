export default function Home(){
  return (
    <main>
      <div className="masked-copy">
        <h1 className="title">LEDS</h1>
      </div>

      <div className="corner-text-left">
        Zachary Richman
      </div>
      
      <div className="corner-text">
        Powering the world <br /> one light at a time
      </div>

      <div id="corner-img">
        <p>According to the U.S. Department of Energy, the widespread installation of LED&apos;s can save 348 TWH of energy by the year 2027.</p>
      </div>
      
      <div class="img-container">
        <div class="img img1">
          <p>Light Emitting Diodes are cheap and energy efficient</p>
        </div>
        <div class="img img2">
          <p>Only needing power and a method to address the individual bulbs.</p>
        </div>
        <div class="img img3"><p>LEDs are the future and are widely embraced</p></div>
        <div class="img img4"><p>LEDs replace previously expensive and devestating bulbs</p></div>
      </div>
    </main>
  );
}