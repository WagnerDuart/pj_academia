export function Footer() {
    return(
        <footer className="footer section" id="footer">
        <div className="footer__container container grid">
            <div>
                <a href="#" className="footer__logo">
                <img src="/static/img/logo-nav.png" alt="footer logo"/> PGS STUDIO
                </a>
                {/* <p className="footer__description">
                    Subscribe for company <br/> updates below.
                </p>
                <form action="" className="footer__form" id="contact-form">
                    <input type="email" name="user-email" placeholder="Your Email" className="footer__input"
                        id="contact-user">
                    <button type="submit" className="button">
                        Subscribe
                    </button>
                </form>
                <p className="footer__message" id="contact-message"></p> */}
            </div>
            <div className="footer__content">

                <div>
                    <h3 className="footer__title">SERVICES</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Flex Muscle</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Cardio Exercise</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Basic Yoga</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Weight Lifting</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer__title">Planos</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Basic</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Premium</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Diamond</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer__title">COMPANY</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Careers</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Customers</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Partners</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div className="container">
            <div className="footer__group">
                <ul className="footer__social">
                    <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                        <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                        <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                        <i className="ri-instagram-line"></i>
                    </a>
                </ul>
                <span className="footer__copy">&#169; Copyright Bedimcode. All rights reserved</span>
            </div>
        </div>
    </footer>
    );
}

 