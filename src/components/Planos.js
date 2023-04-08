

export function Planos () {
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
  
            <div className="Planos__container container grid">
              <article className="Planos__card">
                <header className="Planos__header">
                  <div className="Planos__shape">
                    <img
                      src="/static/img/Planos1.png"
                      alt="Planos image"
                      className="Planos__img"
                    />
                  </div>
                  <h1 className="Planos__title">TREINO PERSONALIZADO</h1>
                  <h2 className="Planos__number">R$100</h2>
                </header>
                <ul className="Planos__list">
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>5 Dias da Semana
                  </li>
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>Acompanhamento
                    Personalizado
                  </li>
                  <li className="Planos__item Planos__item-opacity">
                    <i className="ri-checkbox-circle-line"></i>Aula de zumba 1 vez
                    por Semana
                  </li>
                  <li className="Planos__item Planos__item-opacity">
                    <i className="ri-checkbox-circle-line"></i>Acesso a vídeos
                  </li>
                  <li className="Planos__item Planos__item-opacity">
                    <i className="ri-checkbox-circle-line"></i>Alongamento
                    Muscular
                  </li>
                </ul>
                <a href="#" className="button button__flex Planos__button">
                  Assine Agora <i className="ri-arrow-right-line"></i>
                </a>
              </article>
  
              <article className="Planos__card Planos__card-active">
                <header className="Planos__header">
                  <div className="Planos__shape">
                    <img
                      src="/static/img/Planos2.png"
                      alt="Planos image"
                      className="Planos__img"
                    />
                  </div>
                  <h1 className="Planos__title">Jiu-Jitsu</h1>
                  <h2 className="Planos__number">R$70</h2>
                </header>
                <ul className="Planos__list">
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>5 Days In A Week
                  </li>
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>01 Sweatshirt
                  </li>
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>01 Bottle of
                    Protein
                  </li>
                  <li className="Planos__item Planos__item-opacity">
                    <i className="ri-checkbox-circle-line"></i>Access to Videos
                  </li>
                  <li className="Planos__item Planos__item-opacity">
                    <i className="ri-checkbox-circle-line"></i>Muscle Stretching
                  </li>
                </ul>
                <a href="#" className="button button__flex Planos__button">
                  Assine Agora <i className="ri-arrow-right-line"></i>
                </a>
              </article>
  
              <article className="Planos__card">
                <header className="Planos__header">
                  <div className="Planos__shape">
                    <img
                      src="/static/img/Planos3.png"
                      alt="Planos image"
                      className="Planos__img"
                    />
                  </div>
                  <h1 className="Planos__title">Muay Thai </h1>
                  <h2 className="Planos__number">R$70</h2>
                </header>
                <ul className="Planos__list">
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>5 Days In A Week
                  </li>
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>01 Sweatshirt
                  </li>
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>01 Bottle of
                    Protein
                  </li>
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>Access to Videos
                  </li>
                  <li className="Planos__item">
                    <i className="ri-checkbox-circle-line"></i>Muscle Stretching
                  </li>
                </ul>
                <a href="#" className="button button__flex Planos__button">
                  Assine Agora <i className="ri-arrow-right-line"></i>
                </a>
              </article>
            </div>
          </div>
        </section>  
    );
}