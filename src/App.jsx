import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import { DarkModeProvider } from "./components/Home/DarkMode";

const App = () => {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  
  );
};

export default App;
