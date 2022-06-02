import React from "react";



const Footer = (props) => {
	return (
    <footer className="py-4 px-5">
      <div className="d-flex align-items-center">
        <p className="footer-user-info m-0">
          <span className='label text-white me-1'>you are:</span>
          <span className='user text-white me-auto fw-bold'>{props.user}</span>
        </p>
	      <span className="fw-bold fs-5 text-white ms-auto">THE IDG</span>
      </div>
    </footer>
  )
}

export default Footer