import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';
import { Button, Item, List } from './ContactList.styled';

export function ContactList() {
  const filter = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filterContactByName = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {filterContactByName().map(({ name, phone, id }) => (
        <Item key={id}>
          <div>
            <span>
              {name}: {phone}
            </span>
            <Button data="" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </div>
        </Item>
      ))}
    </List>
  );
}
