import React from 'react';

const Book = (props) => {
  const { volumeInfo } = props.info;
  const { title, authors, publisher, infoLink } = volumeInfo;
  const thumbnail = volumeInfo.hasOwnProperty('imageLinks') ? volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/230x150.png?text=No Image";
  console.log(title);
  console.log(thumbnail);
  const bookStyle = {
    backgroundColor: "#8ad0d6",
    display: "inline-block",
    height: "235px",
    width: "350px",
    overflow: "hidden",
    whiteSpace: "normal",
    position: "relative",
    marginRight: "15px",
    marginTop: "15px",
    borderRadius: "15px",
  };

  const imgStyle = {
    position: "relative",
    float: "left",
    padding: "15px",
    verticalAlign: "middle",
    height: "230px",
    width: "150px",
    boxShadow: "0px -10px 30px #ccc",
  };

  const infoStyle = {
    paddingTop: "15px",
    paddingLeft: "20px",
    marginRight: "5px",
    textAlign: "left",
    overflow: "hidden",
  }

  const iStyle = {
    marginTop: "10px",
    color: "#3a3a3a"
  }

  const infoButtonStyle = {
    position: "absolute", 
    bottom: "0", 
    padding: "3px 3px 0", 
    border: "2px solid", 
    borderColor: "#3a3a3a",
    color: "#3a3a3a",
    marginBottom: "18px"
  }

  return(
    <div style={bookStyle} className="Book">
      {thumbnail && <img style={imgStyle} alt="" src={thumbnail}></img>}
      <div style={infoStyle} className="info">
        <h5 style={{marginBottom: "10px"}}><b>{title}</b></h5>
        {authors && <h6 style={iStyle}>By: {authors}</h6>}
        {publisher && <h6 style={iStyle}>Published By: {publisher}</h6>}
        <a style={infoButtonStyle} href={infoLink}>More Info</a>
      </div>
    </div>
  );
}

export default Book;
