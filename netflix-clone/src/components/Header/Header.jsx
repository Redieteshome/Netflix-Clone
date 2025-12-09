import React, { useEffect, useState } from "react";
import "./header.css";

// Logo & Icons
import NetflixLogo from "../../assets/images/Netflix_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  // State used to track whether the user has scrolled down
  // false → at top of page   true → user scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function that checks scroll position every time the page scrolls
    const handleScroll = () => {
      // window.scrollY gives the number of pixels scrolled vertically
      if (window.scrollY > 0) {
        setIsScrolled(true); // user has scrolled down
      } else {
        setIsScrolled(false); // user is at the very top
      }
    };

    // Attach the scroll listener to the window object
    // This runs ONLY once on component mount because dependency array = []
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    // Removes the event listener when the component unmounts
    // Prevents memory leaks & double event listeners
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Parent container
    // When isScrolled === true → we add class "header_black"
    // This class typically adds a black background (Netflix header effect)
    <div
      className={`header_outer_container ${isScrolled ? "header_black" : ""}`}
    >
      <div className="header_container">
        {/* LEFT SECTION — LOGO + NAVIGATION */}
        <div className="header_left">
          <ul>
            <li>
              {/* Netflix Logo */}
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>

            {/* Navigation Items */}
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* RIGHT SECTION — ICONS */}
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
