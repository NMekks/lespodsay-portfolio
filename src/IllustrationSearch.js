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
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      /><button>Search</button>
      
      <div>
        {query && results.map((item, idx) => (
          <div key={idx}>
            <img src={item.imagePath} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IllustrationSearch;
