import React from "react";
import { Carousel } from './Carousel';
import SlideshowInfo from './SlideshowInfo';


const Slideshows = (props) => {

  let slides = [
    <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/1697/6af554ad8ca1daaca61172597b73691fx.jpg" alt="1"/>,
    <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/1829/f85739bc5a7c2d820334a344c24c3c72x.jpg" alt="2" />  ,
    <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/0414/9ea3b4575fd266684ff07aac65077d1ax.jpg" alt="3" />  , 
    <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/0160/086f7b7c86451d41bb6c040142f4166ax.jpg" alt="4" />  ,
    <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/0989/54d70ea7c81d17509ec48d4767b87945x.jpg" alt="5" />  ,
    <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/0989/54d70ea7c81d17509ec48d4767b87945x.jpg" alt="6" />  ];

  return (
    <section id="slideshow-designs">
    <div className="p-5">
      <h1 className="pb-5 text-center text-uppercase">Group Designs</h1>
        <Carousel slides={slides}/>
      </div>
  </section>
    )
}


export default Slideshows;