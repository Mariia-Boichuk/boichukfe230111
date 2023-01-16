import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  allShown: boolean;
};

const initialState = {
  list: usersList.slice(0, 3),
  allShown: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setShortList(state, action: PayloadAction<number>) {
      state.list = usersList.slice(0, action.payload);
      state.allShown = false;
    },

    setFullList(state) {
      state.list = usersList;
      state.allShown = true;
    },
  },
});

export const { setFullList, setShortList } = userSlice.actions;

export default userSlice.reducer;
