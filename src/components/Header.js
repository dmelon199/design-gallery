import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <header>
        <div className="nav-container d-flex align-items-center py-4 px-5"> 
					<div className="header-logo-container">
						<div className="d-flex align-items-center justify-content-start">
							<a className="header-logo text-link" href="/">
								<span className="fw-bold fs-5">IMPLEMENTATION DESIGN GALLERY</span>
							</a>
						</div>
					</div>
			    <navbar className="ms-auto">
				    <ul className="nav text-white">
					    <li><Link to="/">Home</Link></li>
					    <li><Link to="grouppages">Group Designs</Link></li>
					    <li>Preowned Designs</li>
              <li><Link to="/splashpages">Splash Designs</Link></li>
					    <li>Tips & Tricks</li>
					    <li>Tools</li>
				    </ul>
			    </navbar>
        </div>
		  </header>
    )
}


export default Header