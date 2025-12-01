import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  // This Footer component renders a Netflix-style footer.
  return (
    <>
      {/* Outer wrapper that controls layout and background */}
      <div className="footer_outer_container">
        {/* Inner container that centers all footer content */}
        <div className="footer_inner_container">
          {/* Social icons section */}
          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>

          {/* All footer link groups are arranged inside this container */}
          <div className="footer_data">
            {/* Column 1 */}
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          {/* Service code button/label */}
          <div className="service_code">
            <p>Service Code</p>
          </div>

          {/* Copyright text */}
          <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
