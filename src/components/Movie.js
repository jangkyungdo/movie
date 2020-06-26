import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie(props) {
  const { title, year, summary, poster, rating, genres } = props;

  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: { year, title, summary, poster, genres, rating },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h2 className="movie__title">{title}</h2>
          <h4 className="movie__year">개봉년도 : {year}년</h4>
          <h4 className="movie__rating">평점 : {rating} / 10.0</h4>
          <ul className="movie__genres">
            <li>
              <h4 className="movie__year">장르 : </h4>
            </li>
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie__genre">
                  <h4 className="movie__year">{genre}</h4>
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
