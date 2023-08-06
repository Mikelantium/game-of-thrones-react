import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import BottonNavBar from "./components/BottonNavBar";
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
        <BottonNavBar/>        
      </div>
      
     
    </Router>
    </MyContext.Provider>
  );
  
}

export default App;
