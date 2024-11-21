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

    // <footer className="netflix-footer">
    //   <div className="container">
    //     {/* Footer Links */}
    //     <div className="footer-links">
    //       <ul>
    //         <li><a href="#">FAQ</a></li>
    //         <li><a href="#">Help Center</a></li>
    //         <li><a href="#">Account</a></li>
    //         <li><a href="#">Media Center</a></li>
    //         <li><a href="#">Investor Relations</a></li>
    //         <li><a href="#">Jobs</a></li>
    //         <li><a href="#">Ways to Watch</a></li>
    //         <li><a href="#">Terms of Use</a></li>
    //         <li><a href="#">Privacy</a></li>
    //         <li><a href="#">Cookie Preferences</a></li>
    //         <li><a href="#">Corporate Information</a></li>
    //         <li><a href="#">Contact Us</a></li>
    //       </ul>
    //     </div>

    //     {/* Social Links */}
    //     <div className="footer-social">
    //       <p>Follow us on:</p>
    //       <ul>
    //         <li><FacebookIcon /></li>
    //         <li><InstagramIcon /></li>
    //         <li><YouTubeIcon  /></li>

    //       </ul>
    //     </div>

    //     {/* Copyright Info */}
    //     <div className="footer-copyright">
    //       <p>&copy; {new Date().getFullYear()} Netflix, Inc.</p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
