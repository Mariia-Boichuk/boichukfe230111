import React from "react";
import { useSelector } from "react-redux/es/exports";
import { UserRow } from "./components/UserRow/UserRow";
import { RootState } from "./store/index";
import "./App.css";

function App() {
  const list = useSelector((state: RootState) => state.users.list);

  return (
    <div className="app">
      <p> Users</p>

      <div>
        {list?.map((item) => (
          <UserRow key={item.email} userData={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
