
import Patrick from "../assets/Patrick.png"
import { useState } from "react";
export function Calculate() {
  const [cm, setCm] = useState('');
  const [kg, setKg] = useState('');
  const [message, setMessage] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();

    // Check if the fields have a value
    if (cm === '' || kg === '') {
      // Add and remove color
      setMessage('Fill in the Height and Weight');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      // BMI Formula
      const cmValue = cm / 100;
      const imc = Math.round(kg / (cmValue * cmValue));

      // Show your health status
      if (imc < 18.5) {
        setMessage(`Your IMC is ${imc}, and you are skinny`);
      } else if (imc < 25) {
        setMessage(`Your IMC is ${imc}, you are healthy`);
      } else {
        setMessage(`Your IMC is ${imc}, you are overweight`);
      }

      // To clear the input field
      setCm('');
      setKg('');

      setTimeout(() => {
        setMessage('');
      }, 4000);
    }
  };

  return (
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
          <form onSubmit={calculateBmi} className="calculate__form" id="calculate-form">
            <div className="calculate__box">
              <input
                type="number"
                placeholder="Altura: "
                className="calculate__input"
                id="calculate-cm"
                value={cm}
                onChange={(e) => setCm(e.target.value)}
              />
              <label htmlFor="" className="calculate__label">
                cm
              </label>
            </div>
            <div className="calculate__box">
              <input
                type="number"
                placeholder="Peso: "
                className="calculate__input"
                id="calculate-kg"
                value={kg}
                onChange={(e) => setKg(e.target.value)}
              />
              <label htmlFor="" className="calculate__label">
                kg
              </label>
            </div>
            <button type="submit" className="button button__flex">
              Calcular <i className="ri-arrow-right-line"></i>
            </button>
          </form>
          <p className="calculate__message" id="calculate-message">{message}</p>
        </div>
        <img src={Patrick} alt="PATRICK image" className="calculate__img" />
      </div>
    </section>
  );
}