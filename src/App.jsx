import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Add from "./components/pages/Add";
// import { DarkModeProvider } from "./components/Home/DarkMode";

const App = () => {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
  
  );
};

export default App;
