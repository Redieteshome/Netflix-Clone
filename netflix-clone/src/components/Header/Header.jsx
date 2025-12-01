import React from 'react'
import "./header.css"
import NetflixLogo from "../../assets/images/Netflix_logo.PNG"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {

  // This component renders the top navigation bar on the Netflix clone.
  return (
    // Outer container for the header. 
    // The 'header_outer_container' class controls the background and fixed position.
    <div className='header_outer_container'>

        {/* Inner flex container that arranges left and right sections */}
        <div className='header_container'>

            {/* Left side navigation links */}
            <div className='header_left'>
                <ul>
                    {/* Netflix logo */}
                    <li><img src={NetflixLogo} alt="Netflix Logo" width="100"  /></li>

                    {/* Main navigation items */}
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>

            {/* Right side icons (search, notifications, profile) */}
            <div className='header_right'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
