
import Patrick from "../assets/Patrick.png"
export function Calculate () {
    return (
        // <!--==================== CALCULATE ====================-->
      <section className="calculate section">
        <div className="calculate__container container grid">
          <div className="calculate__content">
            <div className="section__titles">
              <h1 className="section__title-border">CALCULE</h1>
              <h1 className="section__title">SEU IMC</h1>
            </div>
            <p className="calculate__description">
              A calculadora de índice de massa corporal (IMC) calcula índice de
              massa corporal de seu peso e altura.
            </p>
            <form action="" className="calculate__form" id="calculate-form">
              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Altura: "
                  className="calculate__input"
                  id="calculate-cm"
                />
                <label for="" className="calculate__label">
                  cm
                </label>
              </div>
              <div className="calculate__box">
                <input
                  type="number"
                  placeholder="Peso: "
                  className="calculate__input"
                  id="calculate-kg"
                />
                <label for="" className="calculate__label">
                  kg
                </label>
              </div>
              <button type="submit" className="button button__flex">
                Calcular <i className="ri-arrow-right-line"></i>
              </button>
            </form>
            <p className="calculate__message" id="calculate-message"></p>
          </div>
          <img
            src={Patrick}
            alt="PATRICK image"
            className="calculate__img"
          />
        </div>
      </section>
    );
}