import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        안녕하세요. 항상 노력하는 개발자 장경도입니다. 이 웹사이트는 React로
        만들어졌습니다.
      </span>
    </div>
  );
}

export default About;
