import logo from './logo.svg';
import './App.css';
import Navbar from"./component/Navbar";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Breakfast from './component/Breakfast';
import Lunch from './component/Lunch';
import Diner from './component/Diner';
import Footer from './component/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Breakfast" element={<Breakfast/>}/>
          <Route path="/Lunch" element={<Lunch/>}/>
          <Route path="/Diner" element={<Diner/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
