import axios from "axios";
import logo_nav from "../assets/logo-nav.png";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer section" id="footer">
      <a href="#" className="footer__logo">
        <img src={logo_nav} alt="footer logo" /> PGS STUDIO
      </a>
      <div className="footer__container container grid">
        {/* <div>
                <a href="#" className="footer__logo">
                <img src={logo_nav} alt="footer logo" /> PGS STUDIO
                </a>
                <p class="footer__description">
                    Subscribe for company <br/> updates below.
                </p>
                <form action="" class="footer__form" id="contact-form">
                    <input type="email" name="user-email" placeholder="Your Email" class="footer__input"
                        id="contact-user"/>
                    <button type="submit" class="button">
                        Subscribe
                    </button>
                </form>
                <p class="footer__message" id="contact-message"></p>
            </div> */}
        {/* <div className="footer__content">
          <div>
            <h3 className="footer__title">SERVICES</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Flex Muscle
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Cardio Exercise
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Basic Yoga
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Weight Lifting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Planos</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Basic
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Premium
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Diamond
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">COMPANY</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="container">
        <div className="footer__group">
          <ul className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </ul>
          <span className="footer__copy">
            &#169; Copyright Wagber, Stephe. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
