import React from "react"

const SlideshowInfo = (props) => {
  return (
    <div className={props.classLink}>
      <div className="slide-design-heading">
        <h2 className="text-center pt-5 pb-3 text-black">{props.heading}</h2>
      </div>
      <div className="slide-design-content d-flex justify-content-center">
        <a className="btn-primary px-3 py-2 me-2 text-decoration-none" target="_blank" href={props.demoLink}>View Demo</a>
        <a className="btn-primary px-3 py-2 ms-2 text-decoration-none" target="_blank" href="">Apply Design</a>
      </div>
      <div className="slide-design-footer d-flex justify-content-center">
        <a className="btn-default px-3 py-2 mt-4 text-decoration-none" target="_blank" href=''>View All Group Designs</a>
      </div>
  </div>
  )
}


export default SlideshowInfo