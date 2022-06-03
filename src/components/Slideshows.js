import React from "react";
import {Carousel} from '3d-react-carousal';
import { useParams } from "react-router-dom";




class Slideshows extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    const titleMap = {
      splash: 'Splash',
      group: 'Group',
      preowned: 'Preowned',
    };
    const { type } = useParams();
    
    let slides = [
      <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/1697/6af554ad8ca1daaca61172597b73691fx.jpg" alt="1"/>,
      <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/1829/f85739bc5a7c2d820334a344c24c3c72x.jpg" alt="2" />  ,
      <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/0414/9ea3b4575fd266684ff07aac65077d1ax.jpg" alt="3" />  , 
      <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/0160/086f7b7c86451d41bb6c040142f4166ax.jpg" alt="4" />  ,
      <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/0989/54d70ea7c81d17509ec48d4767b87945x.jpg" alt="5" />  ,
      <img src="https://pictures.dealer.com/f/franckbarfetyvinsandbox/0989/54d70ea7c81d17509ec48d4767b87945x.jpg" alt="6" />  ];
      return (
        <div className="group-designs slideshow p-5">
          <h1 className="pb-5 text-center text-uppercase">{titleMap[type]} Designs</h1>
            <Carousel slides={slides}/>
          <div className="slide-design-heading">
            <h2 className="text-center pt-5 pb-3">Group Design One</h2>
          </div>
          <div className="slide-design-content d-flex justify-content-center">
            <a className="btn-primary px-3 py-2 me-2 text-decoration-none" target="_blank" href=''>View Demo</a>
            <a className="btn-primary px-3 py-2 ms-2 text-decoration-none" target="_blank" href="">Apply Design</a>
          </div>
          <div className="slide-design-footer d-flex justify-content-center">
            <a className="btn-default px-3 py-2 mt-4 text-decoration-none" target="_blank" href=''>View All Group Designs</a>
          </div>
        </div>
      )
   }
}

export default Slideshows;