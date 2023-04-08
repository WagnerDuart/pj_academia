import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"

export function Logos () {
    return(
        // <!--==================== LOGOS ====================--> 
    <section className="logos section">
    <div className="logos__container container grid">
        <img src={logo1} alt="logo image" className="logos__img"/>
        <img src={logo2} alt="logo image" className="logos__img"/>
        <img src={logo3} alt="logo image" className="logos__img"/>
        <img src={logo4} alt="logo image" className="logos__img"/>
    </div>
    </section>
    );
}
