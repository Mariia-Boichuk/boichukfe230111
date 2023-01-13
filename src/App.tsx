import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UserRow } from "./components/UserRow/UserRow";
import { RootState } from "./store/index";
import "./App.css";

function App() {
  const list = useSelector((state: RootState) => state.users.list);
  const [allShown, setAllShown] = useState(false);

  return (
    <div className="app">
      {(allShown ? list : list.slice(0, 3))?.map((item) => (
        <UserRow key={item.email} userData={item} />
      ))}

      <button
        className="app_button"
        onClick={() => setAllShown((prev) => !prev)}
      >
        {allShown ? "show less" : " view all"}
      </button>
    </div>
  );
}

export default App;
