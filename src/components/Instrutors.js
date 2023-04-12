import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { LinkContext } from "../context/linkContext";

export function Instrutors() {
  const [instrutores, setinstrutores] = useState([]);
  async function fetchinstrutor() {
    const response = await axios.get("http://127.0.0.1:8000/apis/instrutores/");
    setinstrutores(response.data);
  }
  useEffect(() => {
    fetchinstrutor();
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const { changelinkactive, linkActive } = useContext(LinkContext);
  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      const { top, bottom } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
        changelinkactive("Instrutores");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);
  return (
    <section className="instructors section" id="instructors">
      <div ref={elementRef} className="container">
        <div className="section__data">
          <h2 className="section__subtitle">OLHA QUEM</h2>
          <div className="section__titles">
            <h1 className="section__title-border">TRABALHA</h1>
            <h1 className="section__title">COM A GENTE</h1>
          </div>
        </div>
        <div className="Instrutores__container container grid">
          {instrutores.map((instrutor, index) => (
            <article key={index} className="Instrutores__card">
              <div className="Instrutores__shape">
                <img
                  src={instrutor.foto}
                  alt="Instrutores image"
                  className="Instrutores__img"
                />
              </div>
              <h3 className="Instrutores__title">
                {instrutor.nome} {instrutor.sobrenome}
              </h3>
              <p className="Instrutores__description">{instrutor.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
