import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

import { Form, Formik } from 'formik';
import { Input, Label } from './ContactsForm.styled';

const ContactsForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const initualValues = {
    id: '',
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!values.name && !values.number) {
      return;
    }

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (contacts.some(contact => contact.name === newContact.name)) {
      return alert('already exist');
    }

    resetForm();

    dispatch(addContact(newContact));
  };

  return (
    <Formik initialValues={initualValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <Label htmlFor="name">
            Name
            <Input name="name" id="name" />
          </Label>
        </div>
        <div>
          <Label htmlFor="number">
            Number
            <Input name="number" id="number" />
          </Label>
        </div>

        <button type="submit">add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
