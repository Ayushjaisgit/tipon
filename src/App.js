import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Product from "./Components/Product";

function App() {
  return (

    <Router>
    <Navbar />
    <div className='container'>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product"
        element={<Product />} />
    </Routes>
        </div>
  </Router>

    );
}

export default App;
