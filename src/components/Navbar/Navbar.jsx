import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import { SiTelegram } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav id="nav">
      <div className="container">
        <div className="wrapper">
          <a href="/" className="nav__logo">
            <img src={logo} alt="navbar logo" />
          </a>

          <CgMenuLeft className="open-menu" onClick={() => setOpenMenu(true)} />

          <div className={`nav__menu ${openMenu ? "active" : ""}`}>
            <IoMdClose
              className="close-menu"
              onClick={() => setOpenMenu(false)}
            />
            <ul className="nav__lists">
              <li className="nav__lists-item active">
                <a href="/">Home</a>
              </li>
              <li className="nav__lists-item">
                <a href="#about">About</a>
              </li>
              <li className="nav__lists-item">
                <a href="#tours">Tours</a>
              </li>
              <li className="nav__lists-item">
                <a href="#contacts">Contacts</a>
              </li>
            </ul>

            <div className="nav__lang-socialmedia">
              <div className="nav__lang">
                <a href="#">Eng</a>
                <a href="#">UZ</a>
                <a href="#">RU</a>
              </div>
              <div className="nav__socialmedia">
                <a href="#">
                  <SiTelegram />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
