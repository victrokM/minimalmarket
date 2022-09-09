import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import "../css/Navbar.css";

function Navbar() {

  const [scrollNav, setScrollAsideNav] = useState(false);
  const [responsive_nav, setResponsiveNav] = useState(true);


  const backgroundChange = () => {
    if (window.scrollY >= 100) {
      setScrollAsideNav(true);
    }
    else {
      setScrollAsideNav(false);
    }
    // console.log(window.scrollY)
  }

  const handleResponsive = () => {
    setResponsiveNav(!responsive_nav);
  }

  window.addEventListener("scroll", backgroundChange);

  return (
    <>
      <div className="container_porsilas">
        <nav className={scrollNav ? "navbar_container" : "navbar_container_init"}>
          <div className="navbar_logo">
            <h1>Logo</h1>
          </div>
          <div className={responsive_nav ? "navbar_links":"nav_responsive_active"}>
            <ul className={responsive_nav ? "navbar_links":"nav_responsive_active"}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <button className="singUp" > <a href="/">sing up</a> </button>

          <button className={responsive_nav ?"menu_responsive": "menu_responsive_click"} onClick={handleResponsive}><AiOutlineMenu/></button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
