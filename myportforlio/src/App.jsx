
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Prolist from "./components/pplist/Pplist";
import Contact from "./components/contact/Contact"
import Toggle from "./components/toggle/Toggle"
import { useContext } from "react";
import { ThemeContext } from "./context";



const App = () => {
  const theme =useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return <div style={{
    backgroundColor: darkMode? "#222" : "white",
    color: darkMode && "grey"}}>
    <Toggle />
    <Intro />
    <About />
    <Prolist />
    <Contact />
    </div>;
};

export default App;
