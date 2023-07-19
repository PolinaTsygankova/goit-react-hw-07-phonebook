import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { MainTitle, MainDiv, ContactTitle, Loader } from './App.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from './../redux/operations';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainDiv>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </MainDiv>
  );
}
