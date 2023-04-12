import React, { useState, useEffect, useRef, useContext } from "react";
import { LinkContext } from "../context/linkContext";
import choose from "../assets/choose-img.png"

export function Choose_us () {
  const [isVisible, setIsVisible] = useState(false);
  const elementRefChoose_us = useRef(null);
  const { changelinkactive } = useContext(LinkContext);
  useEffect(() => {
    const handleScroll = () => {
      const element = elementRefChoose_us.current;
      const { top, bottom } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
        changelinkactive("Quem Somos");
      } 
      
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRefChoose_us]);
    return(
        // <!--==================== CHOOSE US ====================-->
      <section ref={elementRefChoose_us} className="choose section" id="choose">
        <div className="choose__overflow">
          <div className="choose__container container grid">
            <div className="choose__content">
              <div className="section__data">
                <h2 className="section__subtitle">Melhor Motivo</h2>
                <div className="section__titles">
                  <h1 className="section__title-border">por que </h1>
                  <h1 className="section__title">escolher a gente?</h1>
                </div>
              </div>

              <p className="choose__description">
                Escolha sua aula preferida e comece agora. Lembre-se que o único
                treino ruim é aquele que você não fez.
              </p>

              <div className="choose__data">
                <div className="choose__group">
                  <h3 className="choose__number">100+</h3>
                  <p className="choose__subtitle">Total de Menbros</p>
                </div>
                <div className="choose__group">
                  <h3 className="choose__number">50+</h3>
                  <p className="choose__subtitle">Melhores Treinos</p>
                </div>
                <div className="choose__group">
                  <h3 className="choose__number">1º </h3>
                  <p className="choose__subtitle">Prêmio de alguma coisa</p>
                </div>
                <div className="choose__group">
                  <h3 className="choose__number">1º </h3>
                  <p className="choose__subtitle">
                    Melhor Atendimento da Cidade
                  </p>
                </div>
              </div>
            </div>
            <div className="choose__images">
              <img
                src={choose}
                alt="choose image"
                className="choose__img"
              />
              <div className="choose__triangle choose__triangle-1"></div>
              <div className="choose__triangle choose__triangle-2"></div>
              <div className="choose__triangle choose__triangle-3"></div>
            </div>
          </div>
        </div>
      </section>
    );
}