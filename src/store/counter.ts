import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialCounterState = {value: 0, showCounter: true};

const counterSlice = createSlice({
  name        : 'counter',
  initialState: initialCounterState,
  reducers    : {
    counter(state, action: PayloadAction<number>) {
      state.value = state.value + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
