import { useState, useEffect } from "react";
import IllustrationSearch from "./IllustrationSearch";

const Illustrations = () => {
  const [illustrations, setIllustrations] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/illustrationsData.json`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    setResults(
      illustrations.filter((item) =>
        [item.title, item.caption, ...item.keywords]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    );
  }, [query, illustrations]);

  return (
    <div className="illustration-container">
      <div id="banner" />
      <div class="container-fluid mt-5">
            { <div className="illustration-search-dropdown"><IllustrationSearch query={query} setQuery={setQuery}/> </div>}
          </div>
      <div className="illustration-gallery">
        {(query ? results : illustrations).map((art, idx) => (
          <div className="img" key={idx}>
            <a
              href={art.imagePath}
              data-lightbox="artwork"
              data-title={art.caption}
            >
              <img src={art.imagePath} alt={art.alt || art.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Illustrations;
