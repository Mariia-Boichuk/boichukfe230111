import userSlice, { setFullList, setShortList, UsersState } from "./userSlice";
import usersList from "../initData.json";

describe("Users reducer", () => {
  const state: UsersState = {
    list: usersList.slice(0, 3),
    allShown: false,
  };

  it("should handle initial state", () => {
    const initialState: UsersState = state;
    const action = { type: "unknown" };
    const expectedState = initialState;

    expect(userSlice(initialState, action)).toEqual(expectedState);
  });

  it("should handle setFullList", () => {
    const initialState: UsersState = state;
    const expectedState: UsersState = {
      list: usersList,
      allShown: true,
    };

    const action = setFullList();

    expect(userSlice(initialState, action)).toEqual(expectedState);
  });

  it("should add to setShortList", () => {
    const initialState: UsersState = {
      list: usersList,
      allShown: true,
    };
    const action = setShortList(3);
    const expectedState: UsersState = {
      list: usersList.slice(0, 3),
      allShown: false,
    };

    expect(userSlice(initialState, action)).toEqual(expectedState);
  });

  it("should add to setShortList 5", () => {
    const initialState: UsersState = {
      list: usersList,
      allShown: true,
    };
    const action = setShortList(5);

    expect(userSlice(initialState, action).list).toHaveLength(5);
  });
});
