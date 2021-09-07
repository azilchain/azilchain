import React from 'react';
import logo from './logo.svg';
import Header from "./components/header/Header";
import Greeting from "./components/greeting/Greeting";

import {useLocalStorage} from "./hooks/useLocalStorage";
import {StyleProvider} from "./contexts/StyleContext";


import './App.css';

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : undefined}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header/>
        <Greeting/>
      </StyleProvider>
      </div>
  );
}

export default App;
