import React from "react";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard.js";
import "./App.css";

const menu = ["Home", "Contact", "Service", "School"];

const users = [
  {
    name: "karim",
    lastName: "Gharbi",
    email: "karim.gharbi@gomycode.co",
  },
  {
    name: "Tarek",
    lastName: "Arif",
    email: "Tarek@gomycode.co",
  },
  {
    name: "Houssem Eddine",
    lastName: "Lmasoudi",
    email: "houssemeddine@gomycode.co",
  },
];

function App() {
  return (
    <div>
              {/*Passing a props */}
      <NavBar items={menu} />

      <div className="users-list">
        {users.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
