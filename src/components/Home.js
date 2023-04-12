import {ArrowUp} from "phosphor-react"
import React, { useState, useEffect, useRef, useContext } from "react";
import { LinkContext } from "../context/linkContext";
import home from "../assets/home-img.png"

export function  Home () { 
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const {changelinkactive,linkActive } = useContext(LinkContext);
  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      const { top, bottom } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
        changelinkactive("Home")
      } 
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);

    
    return (
        
        <section ref={elementRef} className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <h2 className="home__subtitle">Studio de treinamento físico </h2>
                    <h1 className="home__title">PERSONALIZADO</h1>
                    <p className="home__description">
                        Aqui, vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo.
                    </p>
                    <a href="#" className="button button__flex">
                        Iniciar <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
                <div className="home__images">
                    <img src={home} alt="homeimage" className="home__img"/>
                    <div className="home__triangle home__triangle-3"></div>
                    <div className="home__triangle home__triangle-2"></div>
                    <div className="home__triangle home__triangle-1"></div>
                </div>
            </div>
        </section>
    );

}