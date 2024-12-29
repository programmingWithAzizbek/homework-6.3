import React from "react";
import "./App.css";
import users from "./assets/users.json";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;
