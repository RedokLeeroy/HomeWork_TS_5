import { useParams, Outlet } from "react-router-dom";
import { fetchDetails } from "Service/Service";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDetails(movieId).then(({ data }) => setDetails(data));
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? "/")}
          >
            Go Back
          </button>
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
            }
            alt={details.title ? details.title : details.name}
          />
          <div>
            <h2>{details.original_title}</h2>
            <p>
              User score:
              <span>{details.vote_average}</span>
            </p>
            <p>
              Overview:<span>{details.overview}</span>
            </p>
            <p>
              Genres:
              <span>{details.genres.map((genre) => genre.name).join(",")}</span>
            </p>
          </div>
          <ul>
            <li>
              <NavLink state={location.state} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink state={location.state} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet></Outlet>
        </div>
      )}
    </>
  );
};
