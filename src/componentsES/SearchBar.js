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
        Consigue el <span className="h1_span">apellido</span> para tu sueño
      </h1>
      <h2>
        Sueño<span className="domains_extensitons" ref={domain_writer}></span>
      </h2>

      <div className="search_bar">
        <input
          type="text"
          placeholder=" Encuentra la combinación perfecta aquí...."
        />
        <button>Búsqueda</button>
      </div>
    </div>
  );
};

export default SearchBar;
