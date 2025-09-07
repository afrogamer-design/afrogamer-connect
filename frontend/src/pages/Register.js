import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [games, setGames] = useState("");

  async function handleRegister() {
    // Example: Call backend API to save user info
    await fetch("https://afrogamer-connect.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, country, games }),
    });
    window.location.href = "/dashboard";
  }

  return (
    <div className="register">
      <h2>Create Account</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      <input type="text" placeholder="Games you play (comma separated)" value={games} onChange={(e) => setGames(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
