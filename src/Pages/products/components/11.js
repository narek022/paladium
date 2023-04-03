import React from "react";
import NightVisionToolbar from "./OpticHelpers/NightVisionToolbar";
import "./body.css";

function StaffInfo() {

  return (
    <div className="workcont">
      <div className="helmettext">
        <p>
          Our company, being an intermediary company, offers night vision
          optics. Night vision devices may be passive, relying solely on ambient
          light, or may be active, using an IR (infrared) illuminator to better
          visualize the environment. The devices can be handheld but many are
          head-mounted and attach to helmets.
        </p>
      </div>
      <NightVisionToolbar />
    </div>
  );
}

export default StaffInfo;
