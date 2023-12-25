import React, { Fragment } from "react";
import './Hero.scss'
import { pexelsONe } from "../../assets/images";

import pexelsPhoto from "../../assets/images/pexels-1.jpeg";

function Hero() {
  let Shohnazar = {
    firstName: "Shohnazar",
    lastName: "Abdusalomov",
    age: 20,
  };

  let Samandar = {
    firstName: "Samandar",
    lastName: "Oydinov",
    age: 18,
  };

  let name = "Shohnazar";
  let age = 20;
  let birthYear = 2003;
  let date = new Date();
  let year = date.getFullYear();

  return (
    //  <React.Fragment>
    //    <h2>My name is {name}</h2>
    //    <h3>
    //      {name} is {age} years old
    //    </h3>
    //    <h3>
    //      {name} is {year - birthYear} years old
    //    </h3>
    //    <h4>
    //      {Shohnazar.firstName} {Shohnazar.lastName} is{" "}
    //      {Shohnazar.age > Samandar.age ? "older" : "younger"} than{" "}
    //      {Samandar.firstName} {Samandar.lastName}
    //    </h4>
    //  </React.Fragment>

    //    <Fragment>
    //    <h2>My name is {name}</h2>
    //    <h3>
    //      {name} is {age} years old
    //    </h3>
    //    <h3>
    //      {name} is {year - birthYear} years old
    //    </h3>
    //    <h4>
    //      {Shohnazar.firstName} {Shohnazar.lastName} is{" "}
    //      {Shohnazar.age > Samandar.age ? "older" : "younger"} than{" "}
    //      {Samandar.firstName} {Samandar.lastName}
    //    </h4>
    //  </Fragment>

    <>
      <h2>My name is {name}</h2>
      <h3>
        {name} is {age} years old
      </h3>
      <h3>
        {name} is {year - birthYear} years old
      </h3>
      <h4>
        {Shohnazar.firstName} {Shohnazar.lastName} is{" "}
        {Shohnazar.age > Samandar.age ? "older" : "younger"} than{" "}
        {Samandar.firstName} {Samandar.lastName}
      </h4>
      <img src={pexelsONe} alt="This is France image" />
    </>
  );
}

export default Hero;
