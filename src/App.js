//  config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//pages
import Home from "./pages/Home/Home";
import Navbar from "./componets/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./componets/Footer";
function App() {
  return (
    <div className="App">
      <h1>Potifolio Pessoal</h1>
     
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
