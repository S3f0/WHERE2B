import React from 'react';
import { Link } from 'react-router-dom';

export default function Städte() {
  return (
    <>
      <header>
        <div className="kopf">
          <div className="linkeseite">
            <div className="button-container">
              <Link to="/">
                <button className="home-button">
                <img className="logo" src="assets/img/Black___White_Minimalist_Signature_Personal_Brand_Logo__1_-removebg-preview.png" alt="" />
                </button>
              </Link>
            </div>
          </div>

          <div className="mitte">
            <div className="food">Food</div>
            <div className="clubs">Clubbing</div>
            <div className="shisha">Shisha</div>
            <div className="unternehmungen">Ventures</div>
            <div className="konzerte">Concerts</div>
            <div className="festivals">Festivals</div>
          </div>

          <div className="rechts">
            <div className="anmelden">
              <Link to="/anmelden">
                <button className="button">Anmelden</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
     
      <div className="grid">
        <div className="grid1">
          <Link to="/berlin">
            <img className="berlin" src="assets/img/stadt/Berlin.jpg" alt="Berlin" />
            <div className="overlay-text2">Berlin</div>
          </Link>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Bayern.jpg" alt="Bayern" />
          <div className="overlay-text2">Bayern</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Baden-Württemberg.jpg" alt="Baden-Württemberg" />
          <div className="overlay-text2">Baden-Württemberg</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/bremen.jpg" alt="Bremen" />
          <div className="overlay-text2">Bremen</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Hamburg.jpg" alt="Hamburg" />
          <div className="overlay-text2">Hamburg</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Hessen.jpg" alt="Hessen" />
          <div className="overlay-text2">Hessen</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Mecklelmburg Vorpommenr.jpg" alt="Mecklenburg-Vorpommern" />
          <div className="overlay-text2">Mecklenburg-Vorpommern</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Niedernachsen.jpg" alt="Niedersachsen" />
          <div className="overlay-text2">Niedersachsen</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Nordrhein Westfalen.jpg" alt="Nordrhein-Westfalen" />
          <div className="overlay-text2">Nordrhein-Westfalen</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Rheinland-Pfalz.jpeg" alt="Rheinland-Pfalz" />
          <div className="overlay-text2">Rheinland-Pfalz</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Sachsen-Anhalr.jpg" alt="Sachsen-Anhalt" />
          <div className="overlay-text2">Sachsen-Anhalt</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Sachsen.jpg" alt="Sachsen" />
          <div className="overlay-text2">Sachsen</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Schlewswig-Holstein.jpg" alt="Schleswig-Holstein" />
          <div className="overlay-text2">Schleswig-Holstein</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Thüringen.jpg" alt="Thüringen" />
          <div className="overlay-text2">Thüringen</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Völklinger Hütte.jpg" alt="Saarland" />
          <div className="overlay-text2">Saarland</div>
        </div>

        <div className="grid1">
          <img className="berlin" src="assets/img/stadt/Brandenburg.jpg" alt="Brandenburg" />
          <div className="overlay-text2">Brandenburg</div>
        </div>assets/img/stadt/
      </div>

      <footer>
        <div className="footer2-container">
          <div className="company-container">
            <div className="office">WHERE2B</div>
            <div className="info-footer">Entdecke mit uns die besten Hotspots deiner Stadt. Verabschiede dich vom mühsamen Suchen nach der nächsten Party oder einem spannenden Familienausflug.</div>
          </div>

          <div className="office-container">
            <div className="office">OFFICE</div>
            <div className="adresse-container">
              <div className="adresse">WHERE2B GmbH</div>
              <div className="adresse">Moritzstr.20</div>
              <div className="adresse">12347 Berlin</div>
              <div className="adresse">Deutschland</div>
            </div>
            <div className="email">Email: where2b@outlook.com</div>
            <div className="tel">Tel: +49 017123456789</div>
          </div>

          <div className="links-container">
            <div className="office">LINKS</div>
            <ul className="link-group">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="newsletter-container">
            <div className="office">NEWSLETTER</div>
            <div className="email-input-container">
              <span className="email-icon">✉️</span>
              <input type="email" className="email-input" placeholder="Deine Email Adresse" />
              <span className="submit-arrow">→</span>
            </div>
            <div className="footer-button-container">
            <button className="footer-button">
                <img className="footer-bild" src="/assets/img/instagram.png" alt="Instagram" />
              </button>
              <button className="footer-button">
                <img className="footer-bild" src="/assets/img/x-logo.png" alt="X" />
              </button>
              <button className="footer-button">
                <img className="footer-bild" src="/assets/img/facebook-logo.png" alt="Facebook" />
              </button>
              <button className="footer-button">
                <img className="footer-bild" src="/assets/img/tiktok-logo.png" alt="TikTok" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
