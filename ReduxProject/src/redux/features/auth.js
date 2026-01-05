import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router";

// 🔹 Safe localStorage read
const storedAuth = (() => {
  try {
    return JSON.parse(localStorage.getItem("auth"));
  } catch {
    return null;
  }
})();

const initialState = {
  user: storedAuth || null,
  isAuthenticated: !! storedAuth,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //  Login
    setLogin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("auth", JSON.stringify(action.payload));
      if(!action.payload.token){
        state.isAuthenticated = false;
      }
      if(state.isAuthenticated){
        redirect("/");
      }
    },

    // ✅ Register (same behaviour)
    setRegister: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },

    // ✅ Logout
    setLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { setLogin, setRegister, setLogout } = authSlice.actions;
export default authSlice.reducer;
