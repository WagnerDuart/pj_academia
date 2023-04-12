import React, { useState, useEffect, useRef, useContext } from "react";
import logo_nav from "../assets/logo-nav.png";
import { Home } from "./Home";
import { LinkContext } from "../context/linkContext";

export function Header() {
  const { linkActive, changelinkactive } = useContext(LinkContext);
  const [showMenu, setShowMenu] = useState(false);
  const headerRef = useRef(null);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const handleLinkClick = (linkClicked = "Home") => {
    changelinkactive(linkClicked);
    setShowMenu(false);
  };

  const handleScroll = () => {
    const header = headerRef.current;
    if (window.scrollY >= 50) {
      header.classList.add("bg-header");
    } else {
      header.classList.remove("bg-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" id="header" ref={headerRef}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={logo_nav} alt="logo" />
          PGS STUDIO
        </a>
        <div className={`nav__menu ${showMenu && "show-menu"}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  linkActive === "Home" && "active-link"
                }`}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#program"
                className={`nav__link ${
                  linkActive === "Programa" && "active-link"
                }`}
                onClick={() => handleLinkClick("Programa")}
              >
                Programa
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#choose"
                className={`nav__link ${
                  linkActive === "Quem Somos" && "active-link"
                }`}
                onClick={() => handleLinkClick("Quem Somos")}
              >
                Quem Somos
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#Planos"
                className={`nav__link ${
                  linkActive === "Planos" && "active-link"
                }`}
                onClick={() => handleLinkClick("Planos")}
              >
                Planos
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#instructors"
                className={`nav__link ${
                  linkActive === "Instrutores" && "active-link"
                }`}
                onClick={() => handleLinkClick("Instrutores")}
              >
                Instrutores
              </a>
            </li>

            <div className="nav__link">
              <a
                href="#footer"
                className="button nav__button"
                onClick={handleLinkClick}
              >
                Contato
              </a>
            </div>
          </ul>
          <div className="nav__close" id="nav-close" onClick={handleMenuToggle}>
            <i className="ri-close-line"></i>
          </div>
        </div>
        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle" onClick={handleMenuToggle}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}
