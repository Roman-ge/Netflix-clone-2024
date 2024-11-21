import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_auter_container">
      <div className="footer_inner_container">
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div className="footer_data">
      <div>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Media Category</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      
      </div>
      <div className="Service_code">
        <p>Service Code</p>
      </div>
      <div className="copy-wright">
        <p>&copy; {new Date().getFullYear()} Netflix, Inc.</p>
      </div>
    </div>

    
  );
};

export default Footer;
