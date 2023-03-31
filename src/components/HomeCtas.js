import React from "react";
import { Link } from 'react-router-dom';

import { TbToolsOff } from 'react-icons/tb';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { RiPagesFill } from 'react-icons/ri';


const HomeCtas = () => {
	return (
    <div className="call-to-action-wrapper row p-5">
      <h1 className="text-center pb-5 text-uppercase">Improve Your Designs</h1>
      <div className="call-to-action container-xxl pb-3">
        <div className="col-xs-12 col-sm-4 cta-section">
          <Link to="/designs/interior">
            <div className="cta-content d-flex flex-column align-items-center orange-bg text-white text-center p-4">
              <div className="front">
                <div className="content">
                  <i className="icon-size-large py-4"><RiPagesFill /></i>
                  <h3>Interior Page Designs</h3>
                </div>
              </div>
              <div className="back">
                <div className="content">
                  <p className="text-center p-4">Select from a few options of About, Contact and more interior pages.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xs-12 col-sm-4 cta-section">
          <Link to="/tips-and-tricks">
            <div className="cta-content rgb d-flex flex-column align-items-center red-bg text-white text-center p-4">
              <div className="front">
                <div className="content">
                  <i className="icon-size-large py-4"><MdOutlineTipsAndUpdates /></i>
                  <h3>Tips & Tricks</h3>
                </div>
              </div>
              <div className="back">
                <div className="content">
                  <p className="text-center p-5">Ways to help you improve building a web page.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xs-12 col-sm-4 cta-section">
        <Link to="/tools-we-use">
          <div className="cta-content d-flex flex-column align-items-center purple-bg text-white text-center p-4">
            <div className="front">
              <div className="content">
                <i className="icon-size-large py-4"><TbToolsOff /></i>
                <h3>Design Tools</h3>
              </div>
            </div>
            <div className="back">
              <div className="content">
                <p className="text-center p-5">Tools that we use that help with all things design related.</p>
              </div>
            </div>
          </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeCtas