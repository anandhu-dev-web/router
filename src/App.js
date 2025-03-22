import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
import Services from "./components/pages/Services";
import Register from "./components/pages/Register";
import AddProducts from "./components/pages/AddProducts";


function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addproducts" element={<AddProducts/>}/>

    </Routes>
    
    <Footer/>
    </Router>
  );
}

export default App;
