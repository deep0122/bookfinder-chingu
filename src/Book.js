import React from 'react';

const Book = (props) => {
  const { volumeInfo } = props.info;
  const { title, authors, publisher, infoLink } = volumeInfo;
  const thumbnail = volumeInfo.hasOwnProperty('imageLinks') ? volumeInfo.imageLinks.thumbnail : false;
  return(
    <div className="Book">
      {thumbnail && <a href={infoLink}><img alt="" src={thumbnail}></img></a>}
      <div className="info">
        <h2>{title}</h2>
        <h4>{authors}</h4>
        <h4>{publisher}</h4>
      </div>
    </div>
  );
}

export default Book;
