// import React, {useState, useEffect} from "react";
import { Container, ContactsWrapper } from "./App.styled";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import {  useSelector } from "react-redux";

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);


  // const [contacts, setContacts] = useState(getFromLocalStorage('savedContacts') || []);

  // function setToLocalStorage(key, value) {
  //   try {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // function getFromLocalStorage(key) {
  //   try {
  //     return JSON.parse(localStorage.getItem(key));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
     
  //   setContacts((prevContacts) => {
  //     return prevContacts.concat({ name, number, id: nanoid() })
  //   }
  //   );
  // };

  const checkIncludesFilterInArray = item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  };

  // useEffect(() => {
  //   setToLocalStorage('savedContacts', contacts);
  // }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      
      {contacts.length !== 0 && 
        <ContactsWrapper>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList
          contactsFilter={contacts.filter(checkIncludesFilterInArray)}
        />
      </ContactsWrapper>
      }
    </Container>
  );
}

export default App;