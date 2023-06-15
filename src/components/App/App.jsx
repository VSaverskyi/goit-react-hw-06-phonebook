// import React, {useState, useEffect} from "react";
import { Container, ContactsWrapper } from "./App.styled";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/slice";

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && <ContactsWrapper>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactsWrapper>}
    </Container>
  );
}

export default App;