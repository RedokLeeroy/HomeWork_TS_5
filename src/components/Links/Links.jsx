import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const Links = ({ id, title, name }) => {
  const location = useLocation();
  return (
    <li>
      <NavLink state={{ from: location }} to={`/movies/${id}`}>
        {title ? title : name}
      </NavLink>
    </li>
  );
};

Links.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
};
