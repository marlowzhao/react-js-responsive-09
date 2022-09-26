
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Prolist from "./components/pplist/Pplist";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import { Routes, Route } from "react-router-dom";




const App = () => {
  const theme =useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return <div style={{
    backgroundColor: darkMode? "#232221" : "#EFEEEF",
    color: darkMode && "#EFEEEF"}}>
        <Header />
        <Toggle />
        <Routes>
          <Route exact path="/" element={<Intro />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/mywork" element={<Prolist />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
    </div>;
};

export default App;
