import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          MyMovies
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/movies">
            Movies
          </Link>

          <Link className="nav-link" to="/favoris">
            Favoris
          </Link>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;
