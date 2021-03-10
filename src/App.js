import "./App.css";
import Customer from "./Customer";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Slide from "./Slide";
import Solution from "./Solution";
import Top from "./Top";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Top />
        <Header />
        <Slide />
        <Products />
        <Solution />
        <Customer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
