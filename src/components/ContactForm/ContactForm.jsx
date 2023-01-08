import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';

import { Form, Label, Button } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleFormSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });
    reset();
  };

  const addNewContact = ({ name, number }) => {
    const newContact = {
      name: name.trim(),
      number: number.trim(),
    };

    const contactCheck = contacts.find(contact => {
      return contact.name === newContact.name;
    });

    contactCheck
      ? alert(`${name} is already in the contacts`)
      : dispatch(addContact({ name, phone: number }));
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Form action="" onSubmit={handleFormSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            placeholder="Input name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={numberInputId}>
          Number
          <input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            placeholder="Input number xxx-xx-xx"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
}
