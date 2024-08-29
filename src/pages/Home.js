import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header>
        <div className="header">
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
            <Link to="/stadt" className="food">Food</Link>
            <div className="clubs">Party</div>
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

      <div className="container">
        <div className="container-left">
          <div className="headline">
            <p>WHERE2B: Find Your Perfect Vibe and Spot</p>
          </div>
          <div className="discribtion">
            <p>
              Finde die besten Hotspots für jeden Anlass! Statt lange im Internet zu suchen, entdecke bei uns die heißesten Orte – von leckeren Döner- und Burger-Lokalen über spannende Nachtclubs und unvergessliche Feiern bis hin zu entspannenden Shisha-Bars. Aber das ist noch nicht alles: Bei uns findest du auch Unternehmungen für Kinder, damit die ganze Familie auf ihre Kosten kommt. Melde dich jetzt an und finde heraus, was deine Stadt zu bieten hat!
            </p>
          </div>

          <div className="buttons">
            <div className="buttons-container1">
              <button className="start">Get Started ➜</button>
            </div>
            <div className="buttons-container2">
              <Link to="/login">
                <button className="registrieren">Anmelden</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-right">
          <div className="row1">
            <video className="video" src="assets/videos/video1.mp4" loop autoPlay muted></video>
            <video className="video" src="assets/videos/video2.mp4" loop autoPlay muted></video>
            <video className="video" src="assets/videos/video3.mp4" loop autoPlay muted></video>
          </div>

          <div className="row2">
            <video className="video" src="assets/videos/video4.mp4" loop autoPlay muted></video>
            <video className="video" src="assets/videos/video5.mp4" loop autoPlay muted></video>
            <video className="video" src="assets/videos/video6.mp4" loop autoPlay muted></video>
          </div>

          <div className="row3">
            <video className="video" src="assets/videos/video7.mp4" loop autoPlay muted></video>
            <video className="video" src="assets/videos/video8.mp4" loop autoPlay muted></video>
            <video className="video" src="assets/videos/video9.mp4" loop autoPlay muted></video>
          </div>
        </div>
      </div>


      <footer>
        <div className="footer-container">
          <div className="company-container">
            <div className="office">WHERE2B</div>
            <div className="info-footer">
              Entdecke mit uns die besten Hotspots deiner Stadt. Verabschiede dich vom mühsamen Suchen nach der nächsten Party oder einem spannenden Familienausflug.
            </div>
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
              <li><a href="/home">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="newsletter-container">
            <div className="office">NEWSLETTER</div>
            <div className="email-input-container">
            <span className="email-icon" role="img" aria-label="E-Mail">
  ✉️
</span>

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
