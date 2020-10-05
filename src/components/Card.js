import React from "react";

const Card = ({ entry }) => {
  return (
    <div className="card col-sm-6 my-2 mx-auto shadow">
      <img src={entry.urlToImage} className="card-img-top mt-3" alt="" />
      <div className="card-body">
        <h5 className="card-title">{entry.title}</h5>
        <p className="card-text">{entry.description}</p>
        <a href={entry.url} className="btn btn-primary">
          read more
        </a>
        <blockquote class="blockquote mb-0">
          <footer class="blockquote-footer">
            {entry.author +"-"}
            <cite title="Source Title">Source: {entry.source.name}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Card;
