import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginButtom: '3rem'}}> Contact Us </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"> 2055 L Street NW, Suite 700
Washington, DC 20036
(202) 331-5900 or (800) 424-5156</p>
<p className="p__cormorant" style={{color: '#DCCA87', margin:'2rem'}}>Opening Hours</p>
<p className="p__opensans">Mon - Fri: 10:00 - 23:00 </p>
<p className="p__opensans">Sat - Sun: 10:00 - 01:00</p>
      </div>
      <button className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
        <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
