import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import { IData } from "../../Interfaces";

export const Links = ({ id, title, name }: Partial<IData>):JSX.Element => {
  const location = useLocation();
  return (
    <li>
      <NavLink state={{ from: location }} to={`/movies/${id}`}>
        {title ? title : name}
      </NavLink>
    </li>
  );
};

