import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export default function Header() {
		const [scroll, setScroll] = useState(false);
	
		useEffect(() => {
			if (typeof window !== "undefined") {
				window.addEventListener("scroll", () =>
				setScroll(window.pageYOffset > 50)
				);
			}
		}, []);
	
    return (
      <header className={`header ${
				scroll ? "scroll" : ""}`}>
        <div className="nav-container d-flex align-items-center py-4 px-5"> 
					<div className="header-logo-container">
						<div className="d-flex align-items-center justify-content-start">
							<a className="header-logo text-link" href="/">
								<span className="fw-bold fs-5">THE IDG</span>
							</a>
						</div>
					</div>
			    <navbar className="ms-auto">
				    <ul className="nav text-white">
					    <li><Link to="/">Home</Link></li>
					    <li><Link to="/designs/group">Group Designs</Link></li>
					    <li><Link to="/designs/preowned">Preowned Designs</Link></li>
              <li><Link to="/designs/splash">Splash Designs</Link></li>
					    <li>Tips & Tricks</li>
					    <li>Tools</li>
				    </ul>
			    </navbar>
        </div>
		  </header>
    )
}
