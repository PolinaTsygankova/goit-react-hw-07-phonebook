import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './constants';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filterValue = action.payload.trim();
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
