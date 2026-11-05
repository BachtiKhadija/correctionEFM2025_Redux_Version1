import { useSelector, useDispatch } from "react-redux";

import { addToFavoris } from "../features/movieSlice";

function Movies() {

  const movies = useSelector(state => state.movies.movies);
console.log(movies);
  const dispatch = useDispatch();

  return (

    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Liste des Movies
      </h2>

      <div className="row">

        {movies.map(movie => (

          <div className="col-md-3 mb-4" key={movie.id}>

            <div className="card h-100 shadow">

              <img
                src={movie.poster}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body text-center">

                <h5 className="card-title">
                  {movie.title}
                </h5>

                <button
                  className={`btn ${
                    movie.inFavoris
                      ? "btn-success"
                      : "btn-primary"
                  }`}
                  disabled={movie.inFavoris}
                  onClick={() => dispatch(addToFavoris(movie))}
                >

                  {movie.inFavoris
                    ? "Déjà dans Favoris"
                    : "Ajouter aux Favoris"}

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Movies;
