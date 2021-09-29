import React, { useContext } from "react";
import "./Skills.css";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={"main-skill main"} id="about">
      <div className="skills-main-div">
        <Fade top duration={1000}>
          <div className="skills-text-div">
              <div>
                <h5 className="skill-h5">OPEN SOURCE AND COMMUNITY OPERATED</h5>
              </div>
              <div>
                <h1 className="skill-h1">{"A new era of blockchain has started."}</h1>
              </div>
              <div>
                <h2 className="skill-h2">{"Azil-chain is the first NFT and gaming centered blockchain. It has the capacity of processing billions of transactions per second. Beside speed, it also gives reliability, data management, asset control and other necessary blockchain tools at minimal cost to the users."}</h2>
              </div>
              <div>
                <button className="skill-button">
                  Learn More
                </button>
              </div>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-image-div">
            <div>
              <h1 className="skill-h1 image">{"1 Billion+"}</h1>
              <span>Transactions per second.</span>
            </div>
            <div>
              <h1 className="skill-h1 image">{"100,000+"}</h1>
              <span>Dapps can be managed.</span>
            </div>
          </div>
        </Fade>

      </div>
    </div>
  );
}
