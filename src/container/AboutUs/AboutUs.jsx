import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section_padding" id="about">
  <div className="app__aboutus-overlay flex__center">
    <img src={images.G} alt="g letter" />
  </div>
 
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon.img" />
        <p className="p__opensans"> Organization Name   has developed to incorporate four superb takeout areas in Toronto, with additional to come sooner rather than later. Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that some other Indian eateries you visit.</p>
      <button type="button" className="custom__button">Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon.img" />
        <p className="p__opensans">At present, there are ten  Organization Name   in US.These are situated in New York at Downtown and Central Park, Manhattan, San Andreas, San Jose, Chicago, Dallas, New Orleans, Las Vegas, and Washington.  Organization Name   additionally works as   Hotel Name   in Saudi Arabia.</p>
      <button type="button" className="custom__button">Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
