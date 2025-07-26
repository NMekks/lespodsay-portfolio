const IllustrationSearch = ({ query, setQuery }) => {

  return (
    <div className="illustration-search">
      <div className="container-fluid">
        <form className="d-flex ms-5 me-5" role="search">
          <input
            className="form-control mx-5 p-4 rounded-5"
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
    </div>
  );
};

export default IllustrationSearch;
