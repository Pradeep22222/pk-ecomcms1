import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sidemenu: false,
};
const systemSlice = createSlice({
  name: "system-state",
  initialState,
  reducers: {
    setSideMenu: (state, { payload }) => {
      state.sidemenu = payload;
    },
  },
});
const { reducer, actions } = systemSlice;
export const { setSideMenu } = actions;
export default reducer;
