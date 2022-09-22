import "../style/App.css";
import HomePage from "../componentsRU/HomePage.js";
import Navbar from "../componentsRU/Navbar";
import PageTwo from "../componentsRU/Page2";
import SearchBar from "../componentsRU/SearchBar";
import Footer from "../componentsRU/Footer";
import PageThree from "../componentsRU/PageThree";

function Russian() {
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

export default Russian;
