import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './constants';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};
const handleRejected = ({ contacts }, action) => {
  contacts.isLoading = false;
  contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

// reducers: {
//   addContact: {
//     reducer(state, action) {
//       state.contacts.items.push(action.payload);
//     },
//     prepare(name, number) {
//       return {
//         payload: {
//           name,
//           number,
//           id: nanoid(),
//         },
//       };
//     },
//   },

//   deleteContact(state, action) {
//     const index = state.contacts.items.findIndex(
//       contact => contact.id === action.payload
//     );
//     state.contacts.items.splice(index, 1);
//   },

//   filterContacts(state, action) {
//     state.filter = action.payload.trim();
//   },
// },
// export const { addContact, deleteContact, filterContacts } =
//   contactsSlice.actions;
