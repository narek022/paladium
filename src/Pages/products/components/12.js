import React from "react";
import ThermalOpticsToolbar from "./OpticHelpers/ThermalOpticsToolbar";
import "./body.css";

function StaffInfo() {
  return (
    <div className="workcont">
      <div className="helmettext">
        <p>
          Our company, being an intermediary company, offers thermal optics.
          They can detect radiation or heat given off by any living object.
          Thermal imaging uses a special kind of lens that focuses on infrared
          light and creates a thermogram. This thermogram is then turned into
          electrical impulses that become a picture on your screen.
        </p>
      </div>
      <ThermalOpticsToolbar />
    </div>
  );
}

export default StaffInfo;