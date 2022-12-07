import "./style.css"
import {NavLink} from "react-bootstrap"

function Footer() {
    return <div className="footer">
       <div className="footer1">
        <h4>SUPPORT</h4>
        <NavLink>Jobs</NavLink>
        <NavLink>Privacy Policy</NavLink>
       </div>
       <div className="footer2">Copyright © paladiumtechservicelimited.</div>
    </div>;
  }
  
  export default Footer;