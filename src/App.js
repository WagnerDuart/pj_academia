import "./styles/style.css"
import {Header} from './components/Header'
import {Footer } from "./components/Footer";
import {Main_home} from "./components/Main_home"

function App() {
    return  ( 
       <>
        <Header />
        <Main_home/>
        <Footer />
       </>
    );
}

export default App;