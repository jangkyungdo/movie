import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Search from "./routes/Search";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        {/* path: url 경로, component: 화면에 보여줄 컴포넌트 */}
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/search" exact={true} component={Search} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/movie-detail" exact={true} component={Detail} />
      </HashRouter>
    );
  }
}

export default App;
