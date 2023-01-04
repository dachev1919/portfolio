import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/fonts/fontawesome.css';
import './styles/fonts/simple-line.css';
import './App.css';
import './styles/reset.css';
import './styles/main.css';
import './styles/animate.css';
import Home from "./pages/Home";
import ScrollUp from "./components/ScrollUp";
import Footer from "./components/Footer";
import MenuOpener from "./components/MenuOpener";
import Wrapper from "./components/Wrapper";
import Menu from "./components/Menu";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function smoothScroll(e, link) {
    e.preventDefault();

    document.querySelector(`#${link}`).scrollIntoView({
        behavior: "smooth"
    });
}

function App() {
    const [menuState, setMenuState] = useState(false);

    const menuShow = () => {
        setTimeout(() => setMenuState(!menuState), 0);
    }
    const appClick = (e) => {
        if (!e.target.getAttribute('data-menu-opener')) {
            setTimeout(() => setMenuState(false), 0);
        }
    }

    return (
        <div className={`App ${menuState ? 'App_shift-left' : ''}`} onClick={(e) => appClick(e)}>

            <Router>
                <Wrapper menuShow={menuState}>
                    <Routes>
                        <Route path='/portfolio' element={<Home scrollLink='services' smoothScroll={smoothScroll} />} />
                        <Route path='/portfolio/projects' element={<Projects header={true} title={true} limit={false} customClass='dpfblock' />} />
                        <Route path='/portfolio/contacts' element={<Contacts />} />
                    </Routes>

                    <Footer />
                    <ScrollUp menuState={menuState} />
                    <MenuOpener menuShow={menuShow} menuState={menuState} />
                </Wrapper>
                <Wrapper>
                    <Menu menuHide={menuShow} menuShow={menuState} />
                </Wrapper>
            </Router>

        </div>
  );
}

export default App;
