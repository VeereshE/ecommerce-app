import BannerComponent from "./components/banner";
import FreqAskedQuestionComponent from "./components/faq";
import FooterComponent from "./components/footer";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProductsComponent from "./components/products";

function App() {
  return (
    <>
      <Navbar />
      {/* <Footer/> */}
      <BannerComponent />
      {/* <ProductsComponent/> */}
      <FreqAskedQuestionComponent />
      <FooterComponent />
    </>
  );
}

export default App;
