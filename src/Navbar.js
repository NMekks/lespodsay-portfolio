import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


    const [searchBar, setSearchBar] = useState(false);

    const handleClick = () => {
        console.log('search icon clicked!!');
    }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="logo-img">
          <Link to="/">
            <img
              src="img/logo-img.jpg"
              alt="Lespodsay logo"
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                border: "2px solid #ffffff",
                boxShadow: "0px 0px 6px 5px rgba(173, 173, 173, 0.5)",
              }}
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
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mb-lg-2 mt-2 text-center">
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
              <li>
                <div id="search-icon" >
                  <i className="fa-solid fa-search" onClick={ () => handleClick() }/>
                </div>
              </li>
            </ul>
            <div id="searchbox">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
