import logo_nav from "../assets/logo-nav.png"
export function Header() {
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

    /*===== MENU SHOW =====*/
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu")
        })
    }

    /*===== MENU HIDDEN =====*/
    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu")
        })
    }
    const navLink = document.querySelectorAll(".nav__link")

    const linkAction = () => {
        const navMenu = document.getElementById("nav-menu")
        navMenu.classList.remove("show-menu")
    }

    navLink.forEach(n => n.addEventListener("click", linkAction))

    /*=============== CHANGE BACKGROUND HEADER ===============*/
    const scrollHeader = () => {
        const header = document.getElementById("header")
        if (this.scrollY >= 50) {
            header.classList.add('bg-header');
        } else {
            header.classList.remove('bg-header')
        }
    }
    window.addEventListener("scroll", scrollHeader)

    return (
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src={logo_nav} alt="logo" />
            PGS STUDIO
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#program" className="nav__link">
                  Programa
                </a>
              </li>
              <li className="nav__item">
                <a href="#choose" className="nav__link">
                  Quem Somos
                </a>
              </li>
              <li className="nav__item">
                <a href="#Planos" className="nav__link">
                  Planos
                </a>
              </li>
  
              <div className="nav__link">
                <a href="#footer" className="button nav__button">
                  Contato
                </a>
              </div>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>
          {/* Toggle button */}
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
          </div>
        </nav>
       
      </header>
      
    );
  }
