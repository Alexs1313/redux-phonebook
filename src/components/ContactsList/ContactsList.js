import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id}>
          {name} : {number}
          <button onClick={() => dispatch(deleteContact(id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
