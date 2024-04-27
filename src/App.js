import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
