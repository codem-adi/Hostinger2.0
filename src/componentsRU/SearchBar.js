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
        Получите <span className="h1_span">фамилию</span> своей мечты
      </h1>
      <h2>
        Мечта<span className="domains_extensitons" ref={domain_writer}></span>
      </h2>

      <div className="search_bar">
        <input type="text" placeholder="Найдите идеальную пару здесь..." />
        <button>Поиск</button>
      </div>
    </div>
  );
};

export default SearchBar;
