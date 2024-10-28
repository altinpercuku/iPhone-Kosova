import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint, faGem } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-zinc text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Lidhuni me ne ne mediat sociale:</span>
        </div>
        {/* Right */}
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} className="me-3" />Company Name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Products Links */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Produktet</h6>
              <p><a href="#!" className="text-reset">Macbook</a></p>
              <p><a href="#!" className="text-reset">iPhone</a></p>
              <p><a href="#!" className="text-reset">iPad</a></p>
              <p><a href="#!" className="text-reset">iMac</a></p>
            </div>
            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="#!" className="text-reset">Qmimet</a></p>
              <p><a href="#!" className="text-reset">Optimizimet</a></p>
              <p><a href="#!" className="text-reset">Porosite</a></p>
              <p><a href="#!" className="text-reset">Kerko ndihme</a></p>
            </div>
            {/* Contact Info */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Kontakti</h6>
              <p><FontAwesomeIcon icon={faHome} className="me-3" />  Vushtrri, 02 42000, KS</p>
              <p><FontAwesomeIcon icon={faEnvelope} className="me-3" /> info@altinpercuku</p>
              <p><FontAwesomeIcon icon={faPhone} className="me-3" /> + 383 45 998-657</p>
              <p><FontAwesomeIcon icon={faPrint} className="me-3" /> + 383 45 998-657</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> altipercuku.com</a>
      </div>
    </footer>
  );
};

export default Footer;
