import "./Navbar.scss";
import Logo from "../../assets/davis-assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar_container wrapper">
        <a href="#" className="navbar_logo " onClick={() => setShowNav(false)}>
          <h3>PORTFOLIO</h3>
        </a>

        <div className="navbar_links">
          <ul className={`${showNav ? "show" : ""}`}>
            <li onClick={() => setShowNav(false)}>
              <a href="#"> Home</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="https://in.linkedin.com/in/swapnil-priyadarshni-9b3401259" target=" "> LinkedIn</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="https://github.com/swapnil-priyadarshni" target=" "> GitHub</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="https://drive.google.com/file/d/1Yx-_7aC0YMF0th-BW4-B-Ndga8Szj161/view?usp=drive_link" target=" "> Resume</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#"> Contact Me</a>
            </li>
          </ul>

          <div className="navbar_menu" onClick={() => setShowNav(!showNav)}>
            {showNav ? <IoMdClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
