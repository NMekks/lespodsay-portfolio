import { useState, useEffect, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "./lightbox-custom.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const Home = () => {
  const [homeIllustrations, setHomeIllustrations] = useState([]);
  const [index, setIndex] = useState(-1);
  

  const lightboxRef = useRef(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/homePageIllustrationsData.json`)
      .then((res) => res.json())
      .then((data) => setHomeIllustrations(data));
  }, []);

  return (
    <div className="home">
      <div id="banner" />
      <main>
        <div className="container home">
          <div className="gallery">
            {homeIllustrations.map((art, idx) => (
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
        </div>
      </main>
      
      {/* Lightbox Modal */}
      {index >= 0 && (
        <div ref={lightboxRef}>
          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={homeIllustrations.map((art) => ({
              src: art.imagePath,
              description: art.caption,
            }))}
            plugins={[Captions]}

          />
        </div>
      )}
    </div>
  );
};

export default Home;
