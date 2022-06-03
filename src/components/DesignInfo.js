import React from "react"


const DesignInfo = (props) => {
  return (
    <div className="page-section d-flex col-6">
      <div className={`${props.class} p-4`} >
       <div className="d-flex flex-column align-items-center">
        <div className="image-holder">
          <img className="w-100" src={props.imgUrl}></img>
        </div>
        <div className="design-content text-center pb-5">
          <h2 className="pt-3 pb-3">{props.heading}</h2>
            <a className="btn-primary px-3 py-2 me-2 text-decoration-none" target="_blank" href={props.demoLink}>View Demo</a>
            <a className="btn-default px-3 py-2 ms-2 text-decoration-none" target="_blank" href="">Apply Design</a>
        </div>
      </div>
    </div>
  </div>
  )
}


export default DesignInfo
