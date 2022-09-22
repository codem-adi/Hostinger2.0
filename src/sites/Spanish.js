import "../style/App.css";
import HomePage from "../componentsES/HomePage.js";
import Navbar from "../componentsES/Navbar";
import PageTwo from "../componentsES/Page2";
import SearchBar from "../componentsES/SearchBar";
import Footer from "../componentsES/Footer";
import PageThree from "../componentsES/PageThree";

function Spanish() {
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

export default Spanish;
