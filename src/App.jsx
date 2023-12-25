import React from "react";
// import Hero from "./components/hero/Hero";
// import Header from "./components/header/Header";
import './scss/main.scss'
import { Header , Hero , Footer } from "./components";

// import "./App.css";
// import appStyles from './App.module.css'
// import './App.scss'

function App() {
  //  React.createElement(type, props, ...children);

  // return React.createElement("div", { className: "App" },
  //   React.createElement('h1', { className : 'h1' }, 'Hello World!')
  // );
  
  let isGreen = true;
  let headingOneStyles = {
    color: isGreen ? "green" : "gray",
  };


  return (
    <div className="App">
    <Header/>
      {/* <h1 style={headingOneStyles}>Hello World !!!</h1> */}
      {/* <h1 className={appStyles.h1}>Hello World !!!</h1> */}
      <h1 className='h1'>Hello World !!!</h1>
      <Hero />
    </div>
  );
}

export default App;
