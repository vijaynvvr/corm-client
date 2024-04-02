import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoggedIn: true,
    userMode: "user",
    orgName: "GDSC"
  },
  reducers: {
    handleLogin: (state, action) => {
        state.isLoggedIn = action.payload;
    },
    setOrgMode: (state) => {
        state.userMode = "org"
    },
    setUserMode: (state) => {
        state.userMode = "user"
    },
    setOrgName: (state, action) => {
        state.orgName = action.payload;
    }
  },
});

export const { handleLogin, setOrgMode, setUserMode, setOrgName } = userSlice.actions;
export default userSlice.reducer;