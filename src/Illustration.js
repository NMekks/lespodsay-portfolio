import { useState, useEffect } from "react";
import IllustrationSearch from "./IllustrationSearch";
import { Text } from "react";

const Illustrations = () => {
  const [illustrations, setIllustrations] = useState([]);

  // States lifted up from IllustrationSearch
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/illustrationsData.json")
      .then((res) => res.json())
      .then((data) => {
        setIllustrations(data);
      });
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
        <div className="illustration-search-dropdown">
          {<IllustrationSearch query={query} setQuery={setQuery} />}
        </div>
      </div>
      <div className="illustration-gallery">
        { !query ? (illustrations.map((art, idx) => (
          <div className="img" key={idx}>
            <a
              href={art.imagePath}
              data-lightbox="artwork"
              data-title={art.caption}
            >
              <img src={art.imagePath} alt={art.alt || art.title} />
            </a>
          </div>
        ))):
        results.length > 0 ? ( results.map((art, idx) => (
          <div className="img" key={idx}>
            <a
              href={art.imagePath}
              data-lightbox="artwork"
              data-title={art.caption}
            >
              <img src={art.imagePath} alt={art.alt || art.title} />
            </a>
          </div>
        ))): (
            // If the 'results' array is EMPTY, display the "No Results" message.
            // This is the condition you wanted to implement.
            <div className="container illustration-none-text">
              <p>No Results Were Found</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Illustrations;
