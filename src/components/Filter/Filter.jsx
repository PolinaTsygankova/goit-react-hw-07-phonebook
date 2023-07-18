import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from 'redux/filterSlice';
import { Title, Label } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  // const handleInput = e => {
  //   console.log(e.target.value);
  //   dispatch(filterContacts(e.target.value));
  // };

  return (
    <>
      <Title>Find contacts by name</Title>
      <Label>
        <input
          type="text"
          name="filter"
          required
          onChange={e => dispatch(filterContacts(e.target.value))}
          // onChange={handleInput}
        />
      </Label>
    </>
  );
}