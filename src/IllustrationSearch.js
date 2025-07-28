import { useState, useEffect } from "react";

const IllustrationSearch = ( { query, setQuery }) => {
  // const [data, setData] = useState([]);

  

  return (
    <div className="illustration-search">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            class="form-control p-4 rounded-5"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            type="search"
            aria-label="Search"
            style={{ fontSize: "19px" }}
          />
          {/* <button
            className="btn btn-outline-secondary me-5 px-5 rounded-5"
            type="submit"
            style={{ fontSize: "17px" }}
          >
            Search
          </button> */}
        </form>
      </div>
{/* 
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
      </div> */}
    </div>
  );
};

export default IllustrationSearch;
