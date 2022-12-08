import "./style.css";
import { NavLink } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="f1">
         <h3>PaladiumTechServicesLimited</h3>
         <p className="p1">49 Al Tatawwur St - Al Khalidiyah - W9 Abu Dhabi, UAE</p>
         <p className="p2">Email: info@paladiumtechservicelimited.com</p>
        </div>
        <div className="f2">
          <h4>SUPPORT</h4>
          <NavLink>Jobs</NavLink>
          <NavLink>Privacy Policy</NavLink>
        </div>
      </div>
      <div className="footer2">Copyright © paladiumtechservicelimited.</div>
    </div>
  );
}

export default Footer;
