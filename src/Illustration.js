import { useState, useEffect } from "react";
import IllustrationSearch from "./IllustrationSearch";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./lightbox-custom.css"; // optional custom styles

const Illustrations = () => {
  const [illustrations, setIllustrations] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const [index, setIndex] = useState(-1); // track which image is open

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/illustrationsData.json`)
      .then((res) => res.json())
      .then((data) => setIllustrations(data)
    );
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
              <img
              src={art.imagePath}
              alt={art.alt || art.title}
              onClick={() => setIndex(idx)}
              style={{ cursor: "pointer" }}
              />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={(query ? results : illustrations).map((art) => ({
          src: art.imagePath,
          description: art.title,
        }))}
      />
    </div>
  );
};

export default Illustrations;
