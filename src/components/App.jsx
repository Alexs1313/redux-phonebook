import { Container } from './App.styled';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};
