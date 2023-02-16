import React from "react";
import { ImCool } from 'react-icons/im';


const Footer = (props) => {
	return (
    <footer className="py-4 px-5">
      <div className="d-flex align-items-center">
        <div className="footer-user-info m-0">
          <i className="icon-size-medium px-2 text-white"><ImCool /></i>
          <span className='user text-white me-auto fw-bold'>{props.user}</span>
        </div>
	      <span className="fw-bold fs-5 text-white ms-auto">THE IDG</span>
      </div>
    </footer>
  )
}

export default Footer