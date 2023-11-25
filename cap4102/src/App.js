import {React} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar"
import Menu from "./pages/menu/menu";
import Main from "./pages/main/main";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/menu" element={<Menu></Menu>}/>
        </Routes>
      </Router>
      <div className="link">
        </div>
    </div>
  );
}

export default App;
