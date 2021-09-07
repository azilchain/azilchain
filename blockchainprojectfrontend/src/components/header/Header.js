import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import logoImageLight from '../../images/logoImageLight.png'
import logoImageDark from '../../images/logoImageDark.png'

import {
  greeting,
  technologicalSet,
  communitySection,
  aboutSection,
  blogSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewTechnology = technologicalSet.display;
  const viewAboutSection = aboutSection.display;
  const viewCommunity = communitySection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          {/* <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span> */}
          {
            !isDark ?
            <img src = {logoImageLight} alt="logo" className="logo-image" />
            :  <img src = {logoImageDark} alt="logo" className="logo-image" />
          }
         
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewTechnology && (
            <li>
              <a href="#technology">Technology</a>
            </li>
          )}
          {viewCommunity && (
            <li>
              <a href="#community">Community</a>
            </li>
          )}
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
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
