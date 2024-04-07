import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoggedIn: false,
    orgPrezList: [],
    activeOrg: null
  },
  reducers: {
    loginHandler: (state, action) => {
        localStorage.setItem("user", JSON.stringify(action.payload.data));
        state.data = action.payload.data;
        state.isLoggedIn = true;
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
            activeOrg: null
        }
    },
    setOrgMode: (state, action) => {
        if (action.payload) {
            localStorage.setItem("activeOrg", JSON.stringify(action.payload))
        } else {
            localStorage.removeItem("activeOrg")
        }
        state.activeOrg = action.payload
    }
  },
});

export const { loginHandler, updateUser, logoutHandler, setOrgMode } = userSlice.actions;
export default userSlice.reducer;