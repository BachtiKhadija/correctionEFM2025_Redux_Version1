import { useSelector, useDispatch } from "react-redux";

import {
  removeFromFavoris,
  clearFavoris
} from "../features/movieSlice";

function Favoris() {

  const favoris = useSelector(state => state.movies.favoris);

  const dispatch = useDispatch();

  return (

    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Mes Films Favoris
      </h2>

      <div className="d-flex flex-column gap-3">

        {favoris.map(movie => (

          <div
            className="card shadow"
            key={movie.id}
          >

            <div className="d-flex align-items-center p-3">

              <img
                src={movie.poster}
                alt={movie.title}
                style={{
                  width: "100px",
                  height: "130px",
                  objectFit: "cover"
                }}
              />

              <div className="ms-4 flex-grow-1">

                <h5>{movie.title}</h5>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    dispatch(removeFromFavoris(movie.id))
                  }
                >
                  Supprimer
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {favoris.length > 0 && (

        <button
          className="btn btn-warning mt-4"
          onClick={() => dispatch(clearFavoris())}
        >
          Vider la liste des favoris
        </button>

      )}

      {favoris.length === 0 && (

        <h5 className="text-center text-muted mt-4">
          Aucun film dans les favoris !
        </h5>

      )}

    </div>

  );
}

export default Favoris;
