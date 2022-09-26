import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import { ThemeProvider } from "./context"

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
