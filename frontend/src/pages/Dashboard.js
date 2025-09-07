import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://afrogamer-connect.onrender.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h2>Gamers</h2>
        {users.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
