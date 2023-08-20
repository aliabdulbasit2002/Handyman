import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
});

export const {} = clientSlice.actions;
export default clientSlice.reducer;
