import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import Alpha from "./Alphaber";
import Axios from "axios";
function Main() {
  const [url, seturl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get(url)
      .then((res) => res.data.meals)
      .then((data) => {
        setItem(data);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    seturl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  const input = (e) => {
    if (e.key == "Enter") {
      seturl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      setSearch("");
    }
  };
  return (
    <div className="container">
      <div className="Header">
        <Header />
      </div>
      <div className="Search">
        <div className="Input">
          <input
            type="search"
            placeholder="Enter your recipe"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={input}
          />
        </div>
      </div>
      <div className="Alphabet-container">
        <Alpha setIndex={(alpha) => setIndex(alpha)} />
      </div>
      <div className="card-main">
        <div className="cards">{show ? <Card item={item} /> : "not found"}</div>
      </div>
    </div>
  );
}

export default Main;
