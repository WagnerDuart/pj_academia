import "./styles/style.css"
import {Header} from './components/Header'
import {Footer } from "./components/Footer"
import {Main_home} from "./components/Main_home"
import { LinkContextProvider } from "./context/linkContext";
// import {ScrollReveal} from "./components/ScrollReveal"

function App() {

    return  ( 
       <LinkContextProvider>
        <Header />
        <Main_home/>
        <Footer />
       </LinkContextProvider> 
    );
}

export default App;