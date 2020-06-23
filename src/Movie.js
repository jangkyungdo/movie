import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  const { id, title, year, summary, poster, rating } = props;
  return <h1>{title}</h1>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
