import home from "../assets/home-img.png"

export function  Home () {
    return (
        
        <section className="home section" id="home">
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