
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
import AboutUsComponent from "./components/aboutUs";
import ContactComponent from "./components/contact";
import {CartProvider} from './CartContext';
import {Provider} from "react-redux"
import SignInComponent from "./components/signin";

function App() {
  return (
    <Router>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<BannerComponent />} />
        <Route path="/products" exact element={<ProductsComponent />} /> 
        <Route path="/products/:id" element={<ProductComponent />} />
        <Route path="/my-cart" exact element={<CartComponent />} />
        <Route path="/list-blogs" exact element={<BlogsComponent />} />
        <Route path="/login" exact element={<LogInComponent />} />
        <Route path="/register" exact element={<SignInComponent />} />
        <Route path="/aboutus" exact element={<AboutUsComponent/>} />
        <Route path="/contact" exact element={<ContactComponent/>} />
      </Routes>
      <FreqAskedQuestionComponent />
      <FooterComponent />
      </CartProvider>
    </Router>
  );
}

export default App;
