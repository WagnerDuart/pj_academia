import React, { useState, useEffect, useRef, useContext } from "react";
import { LinkContext } from "../context/linkContext";
import axios from "axios";

export function Planos() {
  const [planos, setPlanos] = useState([]);
  async function fetchplanos() {
    const response = await axios.get("http://127.0.0.1:8000/apis/planos/");
    setPlanos(response.data);
    console.log(planos);
  }
  useEffect(() => {
    fetchplanos();
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const elementRefProgram = useRef(null);
  const { changelinkactive } = useContext(LinkContext);
  useEffect(() => {
    const handleScroll = () => {
      const element = elementRefProgram.current;
      const { top, bottom } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
        changelinkactive("Planos");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRefProgram]);
  return (
    // <!--==================== Planos ====================-->
    <section className="Planos section" id="Planos">
      <div className="container">
        <div className="section__data">
          <h2 className="section__subtitle">Melhor Motivo</h2>
          <div className="section__titles">
            <h1 className="section__title-border">NOSSA</h1>
            <h1 className="section__title">OFERTA ESPECIAL</h1>
          </div>
        </div>

        <div
          ref={elementRefProgram}
          className="Planos__container container grid"
        >
          {planos.map((planos) => (
            <article className="Planos__card">
              <header className="Planos__header">
                <div className="Planos__shape">
                  <img
                    src={planos.image_plano}
                    alt="Planos image"
                    className="Planos__img"
                  />
                </div>
                <h1 className="Planos__title">{planos.nome_plano}</h1>
                <h2 className="Planos__number">{planos.valor}</h2>
              </header>
              <ul className="Planos__list">
                <li className="Planos__item">
                  <i className="ri-checkbox-circle-line"></i>{planos.beneficio1}
                </li>
                <li className="Planos__item">
                  <i className="ri-checkbox-circle-line"></i>{planos.beneficio2}
                </li>
                <li className="Planos__item Planos__item">
                  <i className="ri-checkbox-circle-line"></i>{planos.beneficio3}
                </li>
                <li className="Planos__item Planos__item">
                  <i className="ri-checkbox-circle-line"></i>{planos.beneficio4}
                </li>
                <li className="Planos__item Planos__item">
                  <i className="ri-checkbox-circle-line"></i>{planos.beneficio5}
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
