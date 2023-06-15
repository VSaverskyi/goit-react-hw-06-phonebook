import ContactListItem from "components/ContactListItem/ContactListItem";
import React from "react";
import { ContactListWrapper } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/slice";

const ContactList = () => {  
    const contacts = useSelector(getContacts);
    const filter = useSelector(state => state.filter);
    
    const contactsFilter = contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ContactListWrapper>
            {contactsFilter.length === 0 ? (<li>Contacts not find</li>) : (contactsFilter
            .map((item) => (
                <ContactListItem key={item.id} item={item}/>
            )))}
        </ContactListWrapper>
    )
}

export default ContactList;