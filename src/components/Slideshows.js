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
        designLink='/designs/group'
        heading={page.heading}
        viewAll='View All Group Designs'
      />
    ),
  }));

  let slides2 = Object.values(preownedPages).map((page, idx) => ({
    element: <img src={page.imgUrl} alt={`${idx}`} />,
    meta: (
      <SlideshowInfo
        classLink={page['class']}
        demoLink={page.demoLink}
        designLink='/designs/preowned'
        heading={page.heading}
        viewAll='View All Preowned Designs'
      />
    ),
  }));

  let slides3 = Object.values(splashPages).map((page, idx) => ({
    element: <img src={page.imgUrl} alt={`${idx}`} />,
    meta: (
      <SlideshowInfo
        classLink={page['class']}
        demoLink={page.demoLink}
        designLink='/designs/splash'
        heading={page.heading}
        viewAll='View All Splash Designs'
      />
    ),
  }));

  return (
    <div className="slideshow-designs-wrapper">
        <section id="group" className="row py-5">
          <h1 className="pb-4 text-center text-uppercase">Group Designs</h1>
          <Carousel slides={slides1}/>
        </section>
        <section id="preowned" className="row py-5">
          <h1 className="pb-4 text-center text-uppercase">Pre-Owned Designs</h1>
          <Carousel slides={slides2}/>
        </section>
        <section id="splash" className="row py-5">
          <h1 className="pb-4 text-center text-uppercase">Splash Designs</h1>
          <Carousel slides={slides3}/>
        </section>
      </div>
    )
}


export default Slideshows;