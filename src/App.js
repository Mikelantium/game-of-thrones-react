import "./App.css";
import Navbar from "./components/NavbarLang";
import Routes from "./pages/Routes";
import { MyContext } from "./shared/MyContext";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <MyContext.Provider value={{ t, changeLanguage }}>
    <Router>
    <div className="App">
    <Navbar/>
    
      
      <Routes/>
      </div>
  
    </Router>
    </MyContext.Provider>
  );
  
}

export default App;
