import { Link } from "react-router-dom";
import React from "react";

export const GoHomePage = (): JSX.Element => {
  return (
    <h1>
      We cant find youre page
      <Link to="/">go home pls</Link>
    </h1>
  );
};
