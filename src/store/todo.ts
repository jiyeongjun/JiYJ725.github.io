import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialUpdateState = {id: "", showUpdate: false};


const todoSlice = createSlice({
  name        : 'todo',
  initialState: initialUpdateState,
  reducers    : {
    toggleUpdate(state, action: PayloadAction<string>) {
      state.showUpdate = !state.showUpdate;
      state.id = action.payload;
    }
  }
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
