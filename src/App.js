
import './App.css';
import Home from './components/Home';
import NavBar from "./components/Navbar";
import FavList from "./components/FavList";
import { Routes, Route } from "react-router-dom";


export default function App() {
  

  return (
    <>


  
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favlist" element={<FavList />} />
      </Routes>
    
    </>
  );
}

    

  
