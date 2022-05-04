import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({className,placeholder,onChange}) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default SearchBox;
