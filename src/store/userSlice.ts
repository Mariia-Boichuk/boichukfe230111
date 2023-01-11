import { createSlice } from "@reduxjs/toolkit";
import usersList from "../initData.json";

export type User = {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
};

export type UsersState = {
  list: User[];
};

const initialState = {
  list: usersList,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
