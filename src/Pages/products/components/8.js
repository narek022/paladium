import React from "react";
import ToolbarOptics from "./OpticHelpers";
import "./body.css";

function StaffInfo() {

  return (
    <div className="workcont">
        <div className="opttext">
          <p>
            Our company, being an intermediary company, offers daylight optics
            such as binoculars, monoculars, safety goggles, spotting scopes for
            use within daylight hours.
          </p>
        </div>
        <ToolbarOptics />
    </div>
  );
}

export default StaffInfo;