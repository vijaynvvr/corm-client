import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoggedIn: true,
  },
  reducers: {
    handleLogin: (state, action) => {
        state.isLoggedIn = action.payload;
    }
  },
});

export const { addItem } = userSlice.actions;
export default userSlice.reducer;