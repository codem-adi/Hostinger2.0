import "../style/App.css";
import HomePage from "../componentsUR/HomePage.js";
import Navbar from "../componentsUR/Navbar";
import PageTwo from "../componentsUR/Page2";
import SearchBar from "../componentsUR/SearchBar";
import Footer from "../componentsUR/Footer";
import PageThree from "../componentsUR/PageThree";

function Urdu() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <PageThree />
      <SearchBar />
      <PageTwo />
      <Footer />
    </div>
  );
}

export default Urdu;
