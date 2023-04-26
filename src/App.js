import React from "react";
import './App.css';
import logo from "./components/logo/logo.jpg";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="App">
      <header className= "App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </ header>
      <Profile />
    </div>
  );
}

export default App;
