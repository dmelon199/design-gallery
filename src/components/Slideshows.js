import React from "react";
import { Carousel } from './Carousel';
import SlideshowInfo from './SlideshowInfo';

import splashPages from '../json/splashPages';
import groupPages from '../json/groupPages';
import preownedPages from '../json/preownedPages';

const Slideshows = (props) => {

  const pages = [
    ...Object.values(splashPages),
    ...Object.values(groupPages),
    ...Object.values(preownedPages),
  ];

  let slides1 = Object.values(groupPages).map((page, idx) => ({
    element: <img src={page.imgUrl} alt={`${idx}`} />,
    meta: (
      <SlideshowInfo
        classLink={page['class']}
        demoLink={page.demoLink}
        heading={page.heading}
      />
    ),
  }));

  return (
    <section id="slideshow-designs">
    <div className="p-5">
      <h1 className="pb-5 text-center text-uppercase">Group Designs</h1>
        <Carousel slides={slides1}/>
      </div>
  </section>
    )
}


export default Slideshows;