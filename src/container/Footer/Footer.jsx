import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';


const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">2055 L Street NW, Suite 700
Washington, DC 20036</p>
          <p className="p__opensans">(202) 331-5900 </p>
          <p className="p__opensans">(800) 424-5156</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans"> The best ways to find yourself is to lose yourself in the service of others.</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter  />
            <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">08:00-23:00 </p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">08:00-01:00 </p>
      </div>
    </div>
    <div className="footer__copyright">
        <p className="p__opensans">2023 Gericht. All Rights Reseved.</p>
    </div>
  </div>
);

export default Footer;
