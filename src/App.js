import "./App.css";
import { Routes, Route } from "react-router-dom";
import Castor021 from "./components/public/Castor021";
import Castor031 from "./components/public/Castor031";
import Home from "./components/public/Home";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/expocastor" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/Castor021" element={<Castor021/>} />
        <Route path="/Castor031" element={<Castor031/>} />
        
      </Routes>
    </div>
  );
}

export default App;
