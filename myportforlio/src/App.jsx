
import React from "react";
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Prolist from "./components/pplist/Pplist";
import Contact from "./components/contact/Contact";

import { useContext } from "react";
import { ThemeContext } from "./context";
// import { BrowserRouter} from "react-router-dom";


const App = () => {
  const theme =useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return(
    // <BrowserRouter>
    <div style={{
      backgroundColor: darkMode? "#232221" : "#EFEEEF",
      color: darkMode && "#EFEEEF"}}>
        <Header />
        <Intro />
        <About />
        <Prolist />
        <Contact />
      </div>
  // </BrowserRouter>
  );
};

export default App;
