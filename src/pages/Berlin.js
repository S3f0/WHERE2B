import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Stadt() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const animationDuration = 1500;
      setTimeout(() => {
        setPreloaderVisible(false);
      }, animationDuration);
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  const openModal = (e) => {
    const imageElement = e.target;
  
    if (imageElement && imageElement.tagName === 'IMG') {
      setModalContent({
        src: imageElement.src,
        name: imageElement.dataset.name,
        description: imageElement.dataset.description,
        address: imageElement.dataset.address,
      });
      setIsModalOpen(true);
    } else {
      console.error("Clicked element is not an image");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="linkeseite">
            <div className="button-container">
              <Link to="/logged_in">
                <button className="home-button">
                  <img
                    className="logo"
                    src="/assets/img/Black___White_Minimalist_Signature_Personal_Brand_Logo__1_-removebg-preview.png"
                    alt=""
                  />
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

      {preloaderVisible && (
        <div id="preloader">
          <img src="/assets/img/locations/loader.jpeg" alt="Loading" id="preloader-image" />
        </div>
      )}

      <div id="content" style={{ display: preloaderVisible ? 'none' : 'block' }}>
        <div className="gridbox2">
          {/* Goldies */}
          <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/Goldies.png"
              data-name="Goldies"
              data-description="Hier kannst du eine detaillierte Beschreibung von Goldies einfügen."
              data-address="Goldies Smashburger, Berlin, Germany"
              alt="Goldies"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Goldies</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

          {/* Munchies */}
          <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/Munchies.jpg"
              data-name="Munchies"
              data-description="Eine kurze Beschreibung von Munchies, z.B. das beste Fast Food in der Stadt."
              data-address="Munchies, Berlin, Germany"
              alt="Munchies"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Munchies</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

          {/* Oggies */}
          <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/oggies.avif"
              data-name="Oggies"
              data-description="Eine kurze Beschreibung von Oggies, z.B. das beste Fast Food in der Stadt."
              data-address="Oggies, Berlin, Germany"
              alt="Oggies"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Oggies</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

          {/* Smack-Burger */}
          <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/smackburger.jpg"
              data-name="Smack-Burger"
              data-description="Eine kurze Beschreibung von Smack-Burger, z.B. das beste Fast Food in der Stadt."
              data-address="Smack-Burger, Berlin, Germany"
              alt="Smack-Burger"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Smack-Burger</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

          {/* Weitere Grid-Items ... */}



                    {/* Damn-Dog */}
                    <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/damn-dog.png"
              data-name="Damn-Dog"
              data-description="Eine kurze Beschreibung von Damn-Dog, z.B. das beste Fast Food in der Stadt."
              data-address="Damn-Dog, Berlin, Germany"
              alt="Smack-Burger"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Damn Dog</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

                    {/* Brekkies */}
                    <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/brekkies.jpg"
              data-name="Brekkies"
              data-description="Eine kurze Beschreibung von Damn-Dog, z.B. das beste Fast Food in der Stadt."
              data-address="Brekkies, Berlin, Germany"
              alt="Smack-Burger"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">44 Brekkies</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

                    {/* Söner */}
                    <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/söner.jpg"
              data-name="Söner"
              data-description="Eine kurze Beschreibung von Damn-Dog, z.B. das beste Fast Food in der Stadt."
              data-address="Söner, Berlin, Germany"
              alt="Söner"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Söner</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

                    {/* 893 */}
                    <div className="grid2">
            <img
              className="bild"
              src="assets/img/locations/893.jpg"
              data-name="893"
              data-description="Eine kurze Beschreibung von Damn-Dog, z.B. das beste Fast Food in der Stadt."
              data-address="893, Berlin, Germany"
              alt="893"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">893 
              Ryōtei</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>
          
                    {/* Malafemmena */}
                    <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/malafemmena.png"
              data-name="Malafemmwna"
              data-description="Eine kurze Beschreibung von Damn-Dog, z.B. das beste Fast Food in der Stadt."
              data-address="Malafemmena, Berlin, Germany"
              alt="893"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Malafemmena</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

                              {/* Magic-Johns */}
                              <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/magicjohns.png"
              data-name="Magic-Johns"
              data-description="Eine kurze Beschreibung von Damn-Dog, z.B. das beste Fast Food in der Stadt."
              data-address="Magic-Johns, Berlin, Germany"
              alt="Magic-Johns"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Magic-Johns</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

                              {/* Baba Angora */}
                              <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/baba.jpeg"
              data-name="Baba Angora"
              data-description="Eine kurze Beschreibung von Damn-Dog, z.B. das beste Fast Food in der Stadt."
              data-address="Baba Angora, Berlin, Germany"
              alt="Baba Angora"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Baba Angora</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>

                              {/* Poppy-Burger */}
                              <div className="grid2">
            <img
              className="bild"
              src="/assets/img/locations/poppy.png"
              data-name="Poppy-Burger"
              data-description="Eine kurze Beschreibung von Damn-Dog, z.B. das beste Fast Food in der Stadt."
              data-address="Poppy-Burger, Berlin, Germany"
              alt="Poppy-Burger"
              onClick={openModal}
            />
            <div className="stores">
              <div className="overlay-text">Poppy-Burger</div>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <footer>
        <div className="footer-container">
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



      {/* Modal Struktur */}
      {isModalOpen && (
        <div id="myModal" className={`modal ${isModalOpen ? 'show' : ''}`}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img id="modalImage" src={modalContent.src} alt="Modal" className="modal-image" />
            <div className="modal-text">
              <h1 id="modalTitle">{modalContent.name}</h1>
              <p id="modalDescription">{modalContent.description}</p>
              <p>
                <a
                  id="googleMapsLink"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(modalContent.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Auf Google Maps ansehen
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
