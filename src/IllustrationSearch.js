import { useState, useEffect } from "react";

const IllustrationSearch = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/illustrationsData.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  useEffect(() => {
    if (!query) {
      setResults(data);
      return;
    }
    setResults(
      data.filter((item) =>
        [item.title, item.caption, ...item.keywords]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    );
  }, [query, data]);

  return (
    <div className="illustration-search">
      <div className="container-fluid">
        <form className="d-flex ms-5 me-5" role="search">
          <input
            class="form-control me-3 ms-5 p-4 rounded-5"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            type="search"
            aria-label="Search"
            style={{ fontSize: "19px" }}
          />
          <button
            className="btn btn-outline-secondary me-5 px-5 rounded-5"
            type="submit"
            style={{ fontSize: "17px" }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="search-illustration-gallery">
        {query &&
          results.map((item, idx) => (
            <div key={idx}>
              <a
                href={item.imagePath}
                data-lightbox="artwork"
                data-title={item.caption}
              >
                <img src={item.imagePath} alt={item.title} />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IllustrationSearch;
