import React, { useEffect, useState } from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
					<Navbar className="ms-auto">
						<Nav>
							<Nav.Link href="/">Home</Nav.Link>
							<NavDropdown title="Designs" id="basic-nav-dropdown">
								<NavDropdown.Item href="/designs/group">Group Pages</NavDropdown.Item>
								<NavDropdown.Item href="/designs/splash">Splash Pages</NavDropdown.Item>
								<NavDropdown.Item href="/designs/preowned">Pre-Owend Pages</NavDropdown.Item>
								<NavDropdown.Item href="">About Us Pages</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="/tipsandtricks">Tips & Tricks</Nav.Link>
							<Nav.Link href="#link">Tools We Use</Nav.Link>
						</Nav>
					</Navbar>
        </div>
		  </header>
    )
}
