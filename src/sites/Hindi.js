import "../style/App.css";
import HomePage from "../componentsHN/HomePage.js";
import Navbar from "../componentsHN/Navbar";
import PageTwo from "../componentsHN/Page2";
import SearchBar from "../componentsHN/SearchBar";
import Footer from "../componentsHN/Footer";
import PageThree from "../componentsHN/PageThree";

function Hindi() {
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

export default Hindi;
