import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoggedIn: false,
    userMode: null,
    orgPrezList: [],
    orgName: null
  },
  reducers: {
    loginHandler: (state, action) => {
        localStorage.setItem("user", JSON.stringify(action.payload.data));
        state.data = action.payload.data;
        state.isLoggedIn = true;
        state.userMode = "user";
        state.orgPrezList = action.payload.data.orgPrezList;
    },
    updateUser: (state, action) => {
        const existingUser = state.data;
        const updatedUser = {...existingUser, ...action.payload.data}
        localStorage.setItem("user", JSON.stringify(updatedUser))
        state.data = updatedUser
    },
    logoutHandler: () => {
        localStorage.removeItem("user");
        return {
            data: null,
            isLoggedIn: false,
            userMode: null,
            orgPrezList: [],
            orgName: null
        }
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

export const { loginHandler, updateUser, logoutHandler, setOrgMode, setUserMode, setOrgName } = userSlice.actions;
export default userSlice.reducer;