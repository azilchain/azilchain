import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logoImageLight from "../../images/logoImageLight.png";
import logoImageDark from "../../images/logoImageDark.png";

import {
  greeting,
  technologicalSet,
  aboutSection,
  blogSection,
  achievementSection,
} from "../../portfolio";

function Header() {
  const viewTechnology = technologicalSet.display;
  const viewAboutSection = aboutSection.display;
  // const viewCommunity = communitySection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;

  return (
    <Headroom>
      <header className={"dark-menu header"}>
        <a href="/" className="logo">
          <img src={logoImageDark} alt="logo" className="logo-image" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={"navicon navicon-dark"}></span>
        </label>
        <ul className={"menu"}>
          {viewTechnology && (
            <li>
              <a href="#technology">Technology</a>
            </li>
          )}
          {/* {viewCommunity && (
            <li>
              <a href="#community">Community</a>
            </li>
          )} */}
          {viewAboutSection && (
            <li>
              <a href="#about">About</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
