import React, { Fragment } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    pageNumber: 0,
  };

  // 영화 데이터 로딩
  getMovies = async () => {
    const {
      data: {
        data: { page_number, movies },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=like_count&page=1
      `
    );

    this.loadMoreMovies(page_number, movies);
    // 상태 변화가 생기는 순간 render() 호출
    console.log(movies, `페이지 넘버: ${page_number}`);
  };

  moreMovies = async () => {
    const {
      data: {
        data: { page_number, movies },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=like_count&page=${this.state.pageNumber}`
    );
    this.loadMoreMovies(page_number, movies);
    console.log(movies, `페이지 넘버: ${page_number}`);
  };

  loadMoreMovies = (page_number, movies) => {
    this.setState({
      movies,
      isLoading: false,
      pageNumber: page_number + 1,
    });
    console.log(this.state.pageNumber);
  };

  componentDidMount() {
    this.getMovies();
  }
  scrollToBottm(event) {
    document.getElementById("root").scrollTo(100, 100);
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <Fragment>
            <a onClick={this.scrollToBottm}>아래</a>
            <div className="movies">
              {movies.map((movie, index) => (
                <Movie
                  key={index}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                  genres={movie.genres}
                />
              ))}
            </div>
            <div className="more__box">
              <h3 className="more__page">
                현재 페이지 : {this.state.pageNumber - 1} 페이지
              </h3>
              <button
                className="more__btn"
                type="button"
                onClick={this.moreMovies}
              >
                Load More
              </button>
            </div>
          </Fragment>
        )}
      </section>
    );
  }
}

export default Home;
