export const contactsInitialState = Object.freeze({
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
});

export const filterInitialState = Object.freeze({
  filterValue: '',
});
