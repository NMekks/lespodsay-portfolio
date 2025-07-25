import { useState, useEffect } from "react";

const Home = () => {
    const [homeIllustrations, setHomeIllustrations] = useState([]);


    useEffect(() => {
        fetch("/homePageIllustrationsData.json")
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
            
        </main>
        </div>

    );
}

export default Home;