import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Dot For Dummies</p>
          <h1 className="title">A Comprehensive Reading List for Polkadot</h1>
          <p className="description">
            Find all the relevant articles around the Dotsama ecosystem
          </p>
          <button>Read More</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
