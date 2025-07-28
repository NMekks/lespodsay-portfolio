import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="logo-img">
          <Link to="/">
            <img
              src="img/logo-img.jpg"
              alt="Lespodsay logo"
              // style={{
              //   width: 100,
              //   height: 100,
              //   borderRadius: "50%",
              //   border: "transparent"
              // }}
            />
          </Link>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "#4d717d" }} />
        </button>
        <div
          className="offcanvas offcanvas-end"
          style = {{ width: "80%"}}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
             <h5 class="offcanvas-title " id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/illustrations">Illustrations</Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.etsy.com/shop/lespodsayshop/?etsrc=sdt.html"
                >
                  Store
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              {/* <li>
                <div id="search-icon" >
                  <button className="searchIcon" onClick={ () => setShowSearch(!showSearch) }>
                    <i className="fa-solid fa-search" />
                  </button>
                  { showSearch && <div className="illustration-search-dropdown"><IllustrationSearch /> </div>}
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
