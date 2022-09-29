import { Link } from "./Navigation.styled";
import { ListUl } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <ListUl>
        <li>
          <Link className={({ isActive }) => (isActive ? "active" : "")} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/movies"
          >
            Movies
          </Link>
        </li>
      </ListUl>
    </nav>
  );
};
