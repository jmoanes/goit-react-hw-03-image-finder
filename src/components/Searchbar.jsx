import React, { useState } from "react";

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onSubmit(value);
    // ❌ remove this so text stays in input
    // setValue("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">🔍</button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </header>
  );
}
