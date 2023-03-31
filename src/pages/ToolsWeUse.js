
import { useEffect, useRef } from "react";
import React from 'react'
import $ from 'jquery';

/* COMPONENTS */

const ToolsWeUse = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        const gallery = document.getElementById("tools-gallery");
  
        if (gallery) {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
  
          const xDecimal = mouseX / window.innerWidth;
          const yDecimal = mouseY / window.innerHeight;
  
          const maxX = gallery.offsetWidth - window.innerWidth;
          const maxY = gallery.offsetHeight - window.innerHeight;
  
          const panX = maxX * xDecimal * -1;
          const panY = maxY * yDecimal * -1;
    
          gallery.animate(
            {
              transform: `translate(${panX}px, ${panY}px)`
            },
            {
              duration: 4000,
              fill: "forwards",
              easing: "ease"
            }
          );
        }
      });
    }, []);

    $("header").addClass('d-none');
    $(".header.scroll").addClass('d-none');
    $("footer").addClass('d-none');

    return (
      <div>
        <div id="tools-gallery">
          <div className="tools-heading text-center pt-5">
            <h1>Tools and Web Extensions</h1>
            <p>Useful tools and extensions that help throughout the design process.</p>
            <a className="btn btn-special" href='/'>Take Me Home</a>
          </div>
            <div className="tile">
                <div className="font-slide slide">
                  <img src="/tools-images/font-squirrel.png" />
                </div>
                <div className="back-slide slide">
                  <p>Font library for commercial use</p>
                  <a className="btn btn-link text-decoration-none" target="_blank" href='https://www.fontsquirrel.com/'>Learn More</a>
                </div>
            </div>
            <div className="tile">
              <div className="font-slide slide">
                <img src="/tools-images/full-page.png" />
              </div>
              <div className="back-slide slide">
                <p>For capturing desktop & mobile mockups.</p>
                <a className="btn btn-link text-decoration-none" target="_blank" href=''>Learn More</a>
              </div>
            </div>
            <div className="tile">
              <div className="font-slide slide">
                <img src="/tools-images/what-font.png" />
              </div>
              <div className="back-slide slide">
                <p>Displays the font details of any element.</p>
                <a className="btn btn-link text-decoration-none" target="_blank" href='https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en'>Learn More</a>
              </div>
            </div>
            <div className="tile">
              <div className="font-slide slide">
                <img src="/tools-images/webDam.png" />
              </div>
              <div className="back-slide slide">
                <p>DDC asset library maintained by our Managed Services team.</p>
                <a className="btn btn-link text-decoration-none" target="_blank" href='https://dealerdotcom.webdamdb.com/bp/#/'>Learn More</a>
              </div>
            </div>
            <div className="tile">
              <div className="font-slide slide">
                <img src="/tools-images/bootstrap5.png" />
              </div>
              <div className="back-slide slide">
                <p>Description of application</p>
                <a className="btn btn-link text-decoration-none" target="_blank" href='https://getbootstrap.com/docs/5.3/getting-started/introduction/'>Learn More</a>
              </div>
            </div>
            <div className="tile">
              <div className="font-slide slide">
                <img src="/tools-images/colorzilla.png" />
              </div>
              <div className="back-slide slide">
                <p>Provides a color wheel and a eyedropper color picker.</p>
                <a className="btn btn-link text-decoration-none" target="_blank" href='https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en'>Learn More</a>
              </div>
            </div>
            <div className="tile">
              <div className="font-slide slide">
                <img src="/tools-images/blisk.jpg" />
              </div>
              <div className="back-slide slide">
                <p>Web browser that displays desktop & mobile views side-by-side for easier development.</p>
                <a className="btn btn-link text-decoration-none" target="_blank" href='https://blisk.io/'>Learn More</a>
              </div>
            </div>
            <div className="tile">
              <div className="font-slide slide">
                <img src="/tools-images/clockify_logo.png" />
              </div>
              <div className="back-slide slide">
                <p>Time tracker for design-work.</p>
                <a className="btn btn-link text-decoration-none" target="_blank" href='https://chrome.google.com/webstore/detail/clockify-time-tracker/pmjeegjhjdlccodhacdgbgfagbpmccpe'>Learn More</a>
              </div>
            </div>
            <div className="tile">
              <div className="font-slide slide">
                <img src="/tools-images/jpeg-mini.png" />
              </div>
              <div className="back-slide slide">
                <p>Shrinks the size of JPEG images (by up to 80%) without sacrificing quality</p>
                <a className="btn btn-link text-decoration-none" target="_blank" href='https://www.jpegmini.com/'>Learn More</a>
              </div>
            </div>
        </div>
    </div>
    )
}

export default ToolsWeUse;