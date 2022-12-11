import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox } from "cdbreact";
import "./style.css";

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p>PaladiumTechServiceLimited</p>
            <p>49 Al Tatawwur St - Al Khalidiyah - W9 Abu Dhabi, UAE</p>
            <p>Email: info@paladiumtechservicelimited.com</p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Support
            </p>
            <CDBBox
              flex="column"
              display="flex"
              style={{ color: "white", cursor: "pointer", padding: "0" }}
            >
              <CDBFooterLink className="ft" href="/">
                <p>Jobs</p>
              </CDBFooterLink>
              <CDBFooterLink className="ft" href="/">
                <p>Privacy Policy</p>
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: "100%" }}
          className="mx-auto mt-4"
        >
          <small
            className="text-center"
            style={{ padding: 0, margin: 0, width: "50%" }}
          >
            &copy; PaladiumTechServiceLimited, 2022. All rights reserved.
          </small>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
