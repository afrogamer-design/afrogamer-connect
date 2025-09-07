import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>🎮 Welcome to AfroGamer Connect</h1>
      <p>Find and connect with gamers across Africa, based on games and location.</p>
      <div className="buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
