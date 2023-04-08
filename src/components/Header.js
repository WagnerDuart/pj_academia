export function Header() {
    return (
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src="/static/img/logo-nav.png" alt="logo" />
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

