import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  Component: (props) => {
    <div>Default</div>;
  },
};

const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    setComponent: (state, action) => {
      state.Component = action.payload;
    },
  },
});

export const {setComponent} = modalReducer.actions;

export default modalReducer.reducer;
