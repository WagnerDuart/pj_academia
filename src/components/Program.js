import { useContext, useEffect, useRef, useState } from "react";
import program1 from "../assets/program1.png"
import program2 from "../assets/program2.png"
import program3 from "../assets/program3.png"
import program4 from "../assets/program4.png"
import { LinkContext } from "../context/linkContext";
import axios from "axios";


export function Program () {
  const [programas, setprogramas] = useState([]);
  async function fetchprograma() {
    const response = await axios.get("http://127.0.0.1:8000/apis/programa/");
    setprogramas(response.data);
  }
  useEffect(() => {
    fetchprograma();
  }, []);
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
        changelinkactive("Programa")
      } 
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);
    return (
        // <!--==================== PROGRAM ====================-->
      <section ref={elementRef} className="program section" id="program">
        <div className="container">
          <div className="section__data">
            <h2 className="section__subtitle"> Nosso Programa</h2>
            <div className="section__titles">
              <h1 className="section__title-border">CONSTRUA SEU</h1>
              <h1 className="section__title">MELHOR CORPO</h1>
            </div>
          </div>
          <div className="program__container grid">
          {programas.map((programa, index) => (
              <article className="program__card">
                <div className="program__shape">
                  <img
                    src={programa.image_programa}
                    alt="program image"
                    className="program__img"
                  />
                </div>
                <h3 className="program__title">{programa.nome_programa}</h3>
                <p className="program__description">{programa.descricao}</p>
                <a href="#" className="program__button">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </article>
            ))}
            {/* <article className="program__card">
                <div className="program__shape">
                  <img
                    src={program1}
                    alt="program image"
                    className="program__img"
                  />
                </div>
                <h3 className="program__title">Treino</h3>
                <p className="program__description">
                  A musculação não só ajuda a construir músculos fortes, mas
                  também traz inúmeros benefícios para o corpo. Ela pode melhorar
                  a saúde cardiovascular, aumentar a densidade óssea e melhorar a
                  postura. Além disso, a musculação também pode ajudar a perder
                  peso e aprimorar a composição corporal. Junte-se a nós para
                  descobrir como a musculação pode transformar seu corpo.
                </p>
                <a href="#" className="program__button">
                  <i className="ri-arrow-right-line"></i>
                </a>
            </article>

            <article className="program__card">
              <div className="program__shape">
                <img
                  src={program2}
                  alt="program image"
                  className="program__img"
                />
              </div>
              <h3 className="program__title">Queime Calorias com a Zumba</h3>
              <p className="program__description">
                A Zumba é uma dança fitness divertida e energética que ajuda a
                queimar calorias enquanto você se diverte. Com sua música
                animada e movimentos inspirados em danças latinas, a Zumba é uma
                ótima maneira de melhorar a saúde cardiovascular, aumentar a
                resistência e tonificar os músculos. Além disso, é uma forma de
                exercício acessível para todas as idades e níveis de
                condicionamento físico. Junte-se a nós e experimente a alegria
                da Zumba!.
              </p>
              <a href="#" className="program__button">
                <i className="ri-arrow-right-line"></i>
              </a>
            </article>

            <article className="program__card">
              <div className="program__shape">
                <img
                  src={program3}
                  alt="program image"
                  className="program__img"
                />
              </div>
              <h3 className="program__title">
                {" "}
                Condicionamento Físico com o Jiu-Jitsu{" "}
              </h3>
              <p className="program__description">
                O Jiu-Jitsu é uma arte marcial que não só ensina habilidades de
                auto-defesa, mas também melhora a força, flexibilidade e
                resistência física. É uma forma eficaz de condicionamento físico
                e também pode ajudar a desenvolver a confiança e a disciplina.
                Nossos instrutores experientes estão aqui para ajudá-lo a
                aprender as técnicas de Jiu-Jitsu em um ambiente seguro e
                divertido. Junte-se a nós e descubra como o Jiu-Jitsu pode
                melhorar sua vida.
              </p>
              <a href="#" className="program__button">
                <i className="ri-arrow-right-line"></i>
              </a>
            </article>

            <article className="program__card">
              <div className="program__shape">
                <img
                  src={program4}
                  alt="program image"
                  className="program__img"
                />
              </div>
              <h3 className="program__title">
                Muay Thai para o Corpo e a Mente
              </h3>
              <p className="program__description">
                O Muay Thai é uma arte marcial que pode melhorar o
                condicionamento físico, aumentar a força muscular e melhorar a
                saúde cardiovascular. Além disso, a prática do Muay Thai também
                pode ajudar a reduzir o estresse, aumentar a autoconfiança e
                desenvolver a disciplina mental. Junte-se a nós e descubra como
                o Muay Thai pode beneficiar o seu corpo e mente de uma forma
                única e desafiadora.
              </p>
              <a href="#" className="program__button">
                <i className="ri-arrow-right-line"></i>
              </a>
            </article> */}
          </div>
        </div>
      </section>
    );
}
