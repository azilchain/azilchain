import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.css";
import { greeting } from "../../portfolio";
export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="50px">
      <div className="main">
        <div className="greet-main">
          <div>
            <h5 className="greet-h5">{greeting.welcome}</h5>
          </div>
          <div>
            <h1 className="greet-h1">{greeting.title}</h1>
          </div>
          <div>
            <h2 className="greet-h2">{greeting.subTitle}</h2>
          </div>
        </div>
      </div>
    </Fade>
  );
}
