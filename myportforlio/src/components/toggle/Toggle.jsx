import { ThemeContext, ThemeProvider } from "../../context";
import "./toggle.css";
import { useContext } from "react";

const Toggle=()=>{
  const theme=useContext(ThemeContext)
  const handleClick=()=>{
    theme.dispatch({ type:"TOGGLE" });
  };


  return(
    <div className="t">
      <img src="" alt="icon" className="t-icon"/>
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode? 0 : 25,
        backgroundColor: theme.state.darkMode? "grey" : "black"}}></div>
    </div>
  )
}

export default Toggle
