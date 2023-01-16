import { useDispatch, useSelector } from "react-redux";
import { UserRow } from "./components/UserRow/UserRow";
import { RootState } from "./store/index";
import "./App.css";
import { setFullList, setShortList } from "./store/userSlice";

function App() {
  const { list, allShown } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const handleClick = () =>
    dispatch(allShown ? setShortList(3) : setFullList());

  return (
    <div className="app">
      {list?.map((item) => (
        <UserRow key={item.email} userData={item} />
      ))}

      <button className="app_button" onClick={handleClick}>
        {allShown ? "show less" : " view all"}
      </button>
    </div>
  );
}

export default App;
