import { Link } from "./Navigation.styled";
import { ListUl } from "./Navigation.styled";
import React from "react";

export const Navigation = (): JSX.Element => {
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
