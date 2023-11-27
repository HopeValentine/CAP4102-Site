import {React} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer";
import Menu from "./pages/menu/menu";
import Main from "./pages/main/main";
import ContactUs from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/menu" element={<Menu></Menu>}/>
          <Route path="/contact" element={<ContactUs></ContactUs>}/>
        </Routes>
        <Footer />
      </Router>
      <div className="link">
        </div>
    </div>
  );
}

export default App;
