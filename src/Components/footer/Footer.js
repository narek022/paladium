import "./style.css"
import {NavLink} from "react-bootstrap"

function Footer() {
    return <div className="footer">
        <div className="footer1">
            <div className="link">
                <h3>QUICK LINK</h3>
                <NavLink className="nav" href="/about">About Us</NavLink>
                <NavLink className="nav" href="/staff">Our Team</NavLink>
                <NavLink className="nav" href="/services">Our Service</NavLink>
                <NavLink className="nav" href="/">Projects</NavLink>
                <NavLink className="nav" href="/contact">Contact Us</NavLink>
            </div>
            <div className="support">
            <h3>SUPPORT</h3>
            <NavLink className="nav" href="/">Jobs</NavLink>
            <NavLink className="nav" href="/">Privacy Policy</NavLink>
            </div>
        </div>
        <div className="footer2">
            <span>Copyright © paladiumtechservicelimited.</span>
        </div>
    </div>;
  }
  
  export default Footer;