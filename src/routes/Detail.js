import React from "react";

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
      return <span>{location.state.title}</span>;
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
