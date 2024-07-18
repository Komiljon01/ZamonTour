import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import { SiTelegram } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    setOpenMenu(false);
  };

  const setNavbarFixed = () => {
    if (window.scrollY >= 700) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", setNavbarFixed);

  return (
    <nav className={`nav ${navbar ? "activeNav" : ""}`}>
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
                <a href="/">{t("navbar.link1")}</a>
              </li>
              <li className="nav__lists-item">
                <a href="#tours">{t("navbar.link3")}</a>
              </li>
              <li className="nav__lists-item">
                <a href="#about">{t("navbar.link2")}</a>
              </li>
              <li className="nav__lists-item">
                <a href="#contacts">{t("navbar.link4")}</a>
              </li>
            </ul>

            <div className="nav__lang-socialmedia">
              <select
                className="nav__lang"
                onChange={changeLanguage}
                value={language}
              >
                <option value="eng">Eng</option>
                <option value="ru">Ru</option>
                <option value="uz">Uz</option>
              </select>
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
