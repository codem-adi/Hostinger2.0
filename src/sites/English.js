import "../style/App.css";
import HomePage from "../componentsEN/HomePage.js";
import Navbar from "../componentsEN/Navbar";
import PageTwo from "../componentsEN/Page2";
import SearchBar from "../componentsEN/SearchBar";
import Footer from "../componentsEN/Footer";
import PageThree from "../componentsEN/PageThree";

function English() {
  return (
    <>
      <Navbar />
      <HomePage />
      <PageThree />
      <SearchBar />
      <PageTwo />
      <Footer />
    </>
  );
}

export default English;
