import React from "react";
import "./App.css";
import data from "./assets/users.json";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="mainWrapper">
      {data.length > 0 &&
        data.map((value, index) => {
          return (
            <div key={index}>
              <UserList data={value} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
