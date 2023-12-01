import {React} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer";
import Menu from "./pages/menu/menu";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import ContactUs from "./pages/contact/contact";
import Directions from './pages/directions/directions';
import Reviews from './pages/reviews/reviews';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/CAP4102-Site/" element={<Main/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/menu" element={<Menu></Menu>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/contact" element={<ContactUs></ContactUs>}/>
          <Route path="/directions" element={<Directions></Directions>}/>
          <Route path="/Reviews" element={<Reviews></Reviews>}/>
        </Routes>
        <Footer />
      </Router>
      <div className="link">
        </div>
    </div>
  );
}

export default App;
