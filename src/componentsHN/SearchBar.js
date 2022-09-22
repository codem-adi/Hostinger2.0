import "../style/searchBar.css";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const SearchBar = () => {
  const domain_writer = useRef(null);

  useEffect(() => {
    new Typed(domain_writer.current, {
      strings: [".in", ".com", ".online", ".live", ".store", ".info"],
      typeSpeed: 260,
      backSpeed: 260,
      showCursor: false,
      smartBackspace: true,
      loop: true,
    });
  });

  return (
    <div className="DomainFinder">
      <h1>
        अपने सपने के लिए <span className="h1_span">अंतिम नाम </span> प्राप्त
        करें
      </h1>
      <h2>
        सपना<span className="domains_extensitons" ref={domain_writer}></span>
      </h2>

      <div className="search_bar">
        <input type="text" placeholder="यहां सही मैच खोजें ...." />
        <button>खोज</button>
      </div>
    </div>
  );
};

export default SearchBar;
