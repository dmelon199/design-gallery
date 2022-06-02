import React from "react"
import { useParams } from "react-router-dom";

import DesignOptions from "../components/DesignOptions";

const DesignPages = () => {
  
  const { type } = useParams();
  const pages = pagesMap[type];

  return (
    <div>
      <div className="hero d-flex align-items-center flex-column p-5">
        <h1 className="font-weight-bold bg-gray px-5 py-4 text-white text-center"> Page Designs</h1>
          <div className="hero-content d-flex px-5 mx-5">
            <p className="text-white text-center fs-4">These are not global templates and will require custom work from Implementation resources to implement on a client's site. As such, these must go through the upgrade process if a client would like one of these designs applied. To get a new Upgrade Project added to the Implementation backlog, go to the Website <a className="text-link" href="https://coxautoinc.sharepoint.com/sites/community-new-retail-website-implementation/SitePages/Website-Design-Template-Upgrades.aspx">Design/Template Upgrades SharePoint</a> space and click on the link to the Upgrade Request Intake Process.</p>
          </div>
      </div>
      <div className="body-content design-options">
        <DesignOptions />
      </div>
    </div>
  )
}


export default DesignPages
