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
        Get the <span className="h1_span">last name</span> for your dream
      </h1>
      <h2>
        Dream<span className="domains_extensitons" ref={domain_writer}></span>
      </h2>

      <div className="search_bar">
        <input type="text" placeholder="Find the perfect match here...." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
