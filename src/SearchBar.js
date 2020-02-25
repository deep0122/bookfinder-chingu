import React from 'react';

const SearchBar = (props) => {
  return(
    <div className="SearchBar">
      <form onSubmit={props.onSubmit}>
        <input onChange={props.onsearchChange} type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
