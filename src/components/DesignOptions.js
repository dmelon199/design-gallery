import React from "react"
import DesignInfo from './DesignInfo';

import splashPages from '../json/splashPages';
import groupPages from '../json/groupPages';
import preownedPages from '../json/preownedPages';

import { Link } from "react-router-dom";


const pagesMap = {
  splash: splashPages,
  group: groupPages,
  preowned: preownedPages,
};


const DesignOptions = (props) => {
  return (
      <div className="page-section p-5 d-flex flex-wrap ">
          {Object.keys(splashPages).map(function(item) {
            return (
              <DesignInfo
                demoLink={splashPages[item].demoLink}
                class={splashPages[item].class}
                imgUrl={splashPages[item].imgUrl}
                heading={splashPages[item].heading}
              />
            )
          })}
      </div>
  )
}


export default DesignOptions
