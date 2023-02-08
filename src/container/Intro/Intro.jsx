import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playViedo, setPlayViedo] = React.useState(false);
  const vidRef = React.useRef();

  const handleViedo = () => {
    setPlayViedo((prevPlayViedo) => !prevPlayViedo);

    if(playViedo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app__viedo">
      <video 
        src={meal}
        ref={vidRef}
        type="viedo/mp4"
        loop
        controls={false}
        muted
      />  
      <div className="app__viedo-overlay flex__center">
        <div 
        className="app__viedo-overlay_circle flex__center"
        onClick={handleViedo}
        >
          {playViedo ? 
            <BsPauseFill color="#fff" frontsize={30} />
            : <BsFillPlayFill color="#fff" frontsize={30} />}
        </div>
      </div>
    </div>

  )
}

export default Intro;
