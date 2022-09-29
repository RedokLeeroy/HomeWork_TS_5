import { useState } from "react";
import React from "react";

export const SearchBar = ({ onSubmit }: {onSubmit: (arg: string) => void}):JSX.Element => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(search);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input value={search} onChange={handleInput} type="text" />
        </label>
        <button>submit</button>
      </form>
    </>
  );
};
