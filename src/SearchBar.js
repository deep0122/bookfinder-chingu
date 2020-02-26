import React from 'react';

const SearchBar = (props) => {
  const searchStyle = {
    padding: "1em",
    backgroundColor: "#8ad0d6",
    verticalAlign: "middle",
  };

  const inputStyle = {
    color: "#000000",
    outline: "none",
  };
  const buttonStyle = {
    color: "#000000",
    borderWidth: "1.5px",
    borderColor: "#000000",
    textAlign: "center",
    outline: "none",
    backgroundColor: "#8ad0d6"
  };

  return(
    <div style={searchStyle} className="SearchBar">
      <form onSubmit={props.onSubmit}>
        <input style={inputStyle} onChange={props.onsearchChange} type="text"/>
        <button style={buttonStyle}type="submit"><i className="fas fa-arrow-right"></i></button>
      </form>
      {props.error && <p style={{color:"#ff0000"}}>{props.error}</p>}
    </div>
  );
}

export default SearchBar;
