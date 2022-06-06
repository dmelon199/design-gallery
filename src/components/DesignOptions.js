import React from "react"
import { useParams } from "react-router-dom";

import DesignInfo from './DesignInfo';

import splashPages from '../json/splashPages';
import groupPages from '../json/groupPages';
import preownedPages from '../json/preownedPages';


const DesignOptions = (props) => {

  const pagesMap = {
    splash: splashPages,
    group: groupPages,
    preowned: preownedPages,
  };
  
  const { type } = useParams();
  const pages = pagesMap[type];

 
  return (
    <div className="page-section p-5 d-flex flex-wrap">
        {Object.keys(pages).map(function(item) {
          return (
            <DesignInfo
              demoLink={pages[item].demoLink}
              class={pages[item].class}
              imgUrl={pages[item].imgUrl}
              heading={pages[item].heading}
            />
          )
        })}
    </div>
  )
}


export default DesignOptions
