import "./App.css";
import { Routes, Route } from "react-router-dom";
import Castor021 from "./components/public/Castor021";
import Castor031 from "./components/public/Castor031";
import Home from "./components/public/Home";
import Castor041 from './components/public/Castor041';
import Castor051 from './components/public/Castor051';
import PuertoPirata from "./components/public/PuertoPirata";
import Castor061 from './components/public/Castor061';
import Almanza02 from "./components/public/Almanza02";
import Almanza04 from "./components/public/Almanza04";
import Almanza05 from "./components/public/Almanza05";
import Almanza06 from './components/public/Almanza06';
import Almanza07 from "./components/public/Almanza07";
import Almanza08 from "./components/public/Almanza08";
import Almanza09 from "./components/public/Almanza09";
import Almanza10 from "./components/public/Almanza10";
import Almanza11 from "./components/public/Almanza11";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/expocastor" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/Castor021" element={<Castor021 />} />
        <Route path="/Castor031" element={<Castor031 />} />
        <Route path="/Castor041" element={<Castor041 />} />
        <Route path="/Castor051" element={<Castor051 />} />
        <Route path="/Castor061" element={<Castor061 />} />
        <Route path="/PuertoPirata" element={<PuertoPirata />} />
        <Route path="/Almanza02" element={<Almanza02 />} />
        <Route path="/Almanza04" element={<Almanza04 />} />
        <Route path="/Almanza05" element={<Almanza05 />} />
        <Route path="/Almanza06" element={<Almanza06 />} />
        <Route path="/Almanza07" element={<Almanza07 />} />
        <Route path="/Almanza08" element={<Almanza08 />} />
        <Route path="/Almanza09" element={<Almanza09 />} />
        <Route path="/Almanza10" element={<Almanza10 />} />
        <Route path="/Almanza11" element={<Almanza11 />} />
      </Routes>
    </div>
  );
}

export default App;
