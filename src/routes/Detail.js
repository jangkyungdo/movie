import React from "react";
import "./Detail.css";
import "../components/Movie.css";

class Detail extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <section className="container">
          <div className="detail">
            <img
              src={location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <div className="movie__data">
              <h2 className="movie__title">{location.state.title}</h2>
              <h4 className="movie__year">
                개봉년도 : {location.state.year}년
              </h4>
              <h4 className="movie__rating">
                평점 : {location.state.rating} / 10.0
              </h4>
              <ul className="detail__genres">
                <li>
                  <h4 className="movie__year">장르 : </h4>
                </li>
                {location.state.genres.map((genre, index) => {
                  return (
                    <li key={index} className="movie__genre">
                      <h4 className="movie__year">{genre}</h4>
                    </li>
                  );
                })}
              </ul>
              <p className="movie__summary">
                {location.state.summary.slice(0, 180)}...
              </p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}
export default Detail;

// function Detail(props) {
//     console.log(props);
//     return <span>Hello</span>;
//   }
