import CycloneForm from "./components/Cyclone/Cyclone";
import DroughtForm from "./components/Drought/Drought";
import FloodForm from "./components/Flood/Flood";
import LandslideForm from "./components/Landslide/Landslide";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DroughtResult from "./components/Drought/DroughtResult"; 
//import DroughtResult from "./pages/DroughtResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CycloneResult from "./components/Cyclone/CycloneResult";




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disasters/flood" element={<FloodForm />} />
          <Route path="/disasters/landslide" element={<LandslideForm />} />
          <Route path="/disasters/drought" element={<DroughtForm />} />
          <Route path="/disasters/cyclone" element={<CycloneForm />} />
          <Route path="drought-result" element={<DroughtResult />} />
          <Route path="/cyclone-result" element={<CycloneResult />} />
          
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
