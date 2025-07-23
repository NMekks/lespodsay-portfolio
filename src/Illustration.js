import { useState, useEffect } from "react";

const Illustrations = () => {
  const [illustrations, setIllustrations] = useState([]);

  useEffect(() => {
    fetch("/illustrationsData.json")
      .then((res) => res.json())
      .then((data) => setIllustrations(data));
  }, []);

  return (
    <div className="illustration-container">
      <div id="banner" />
      <div className="illustration-gallery">
        {illustrations.map((art, idx) => (
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