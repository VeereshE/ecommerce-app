import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerComponent from "./components/banner";
import FreqAskedQuestionComponent from "./components/faq";
import FooterComponent from "./components/footer";
import Navbar from "./components/navbar";
import ProductsComponent from "./components/products";
import ProductComponent from "./components/product";
import CartComponent from "./components/cart";
import BlogsComponent from "./components/blogs";
import LogInComponent from "./components/login";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<BannerComponent />} /> 
      <Route path="/products" element={<ProductsComponent />} />
      <Route path="/products/product" element ={<ProductComponent/>}/>
      <Route path="/my-cart" element={<CartComponent/>} />
      <Route path="/list-blogs" element={<BlogsComponent/>} />
      <Route path="/login" element={<LogInComponent/>} />
     
      </Routes>
      <FreqAskedQuestionComponent />
      <FooterComponent />
    </Router>
  );
}

export default App;
