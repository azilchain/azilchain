import React from "react";
import Header from "./components/header/Header";
import Greeting from "./components/greeting/Greeting";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Feature from './components/feature/Feature'
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : undefined}>
      {/* <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}> */}
      <Header />
      <Greeting />
      <Skills />
      <Feature/>
      <Contact/>
      <Footer />
      {/* </StyleProvider> */}
    </div>
  );
}

export default App;
