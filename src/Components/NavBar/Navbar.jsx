import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import fabIcon from "../../assets/img/favicon.ico";
import { MdImportContacts, MdMenu } from "react-icons/md";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={fabIcon} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
         About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <MdImportContacts />
        Contact me
      </button>

      <MdMenu
        className="mobMenu"
        size={50}
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="listItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="listItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="listItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="listItem"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
