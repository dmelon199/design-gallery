import React from "react";

import { TbToolsOff } from 'react-icons/tb';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { RiPagesFill } from 'react-icons/ri';


const HomeCtas = () => {
	return (
    <div className="call-to-action-section p-5">
      <h1 className="text-center pb-5 text-uppercase">Improve Your Designs</h1>
      <div className="d-flex">
        <div className="cta-section col-4 pe-4">
        <div className="cta-content d-flex flex-column align-items-center orange-bg text-white p-4">
          <i className="icon-size-large py-4"><RiPagesFill /></i>
          <h3>Interior Page Designs</h3>
          <p className="text-center p-4">Select from a few options of About, Contact and more interior pages.</p>
        </div>
        </div>
        <div className="cta-section col-4 px-4">
        <div className="cta-content d-flex flex-column align-items-center red-bg text-white p-4">
          <i className="icon-size-large py-4"><MdOutlineTipsAndUpdates /></i>
          <h3>Tips & Tricks</h3>
          <p className="text-center p-4">Ways to help you improve building a web page.</p>
        </div>
        </div>
        <div className="cta-section col-4 ps-4">
        <div className="cta-content d-flex flex-column align-items-center purple-bg text-white p-4">
          <i className="icon-size-large py-4"><TbToolsOff /></i>
          <h3>Design Tools</h3>
          <p className="text-center p-4">Tools that we use that help with all things design related.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCtas