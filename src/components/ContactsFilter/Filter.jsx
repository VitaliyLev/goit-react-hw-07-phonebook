import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilteredContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';

import { Label } from './Filter.styled';

export function Filter() {
  const filter = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const findInputId = nanoid();
  return (
    <>
      <Label htmlFor={findInputId}>
        Find contacts by name
        <input
          onChange={e => dispatch(setFilter(e.target.value))}
          value={filter}
          name="filter"
          type="text"
          placeholder="Input name to find"
        />
      </Label>
    </>
  );
}
