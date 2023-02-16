import React, {useState} from 'react';

import { HiArrowCircleUp } from 'react-icons/hi';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 1500){
	setVisible(true)
	}
	else if (scrolled <= 1500){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
  <div>
     <i className="icon-size-large py-4 scroll-button" onClick={scrollToTop}
      style={{display: visible ? 'inline' : 'none'}}><HiArrowCircleUp /></i>
  </div>
  );
}

export default ScrollButton;
