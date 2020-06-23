import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    count: 0,
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    // 상태 변화가 생기는 순간 render() 호출
  };

  componentDidMount() {
    // 영화 데이터 로딩
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
