import React from "react";
import './App.css';
import logo from "./components/logo/GitHub_Logo_White.png";
import cat from "./components/logo/github-mark-white.png";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <header className= "App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cat} className="App-logo-cat" alt="cat" />
      </ header>
      <main><Profile /></main>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
