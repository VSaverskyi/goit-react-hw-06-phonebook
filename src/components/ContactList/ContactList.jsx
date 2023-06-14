import ContactListItem from "components/ContactListItem/ContactListItem";
import React from "react";
import PropTypes from "prop-types";
import { ContactListWrapper } from "./ContactList.styled";

const ContactList = ({contactsFilter}) => {  
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

ContactList.propTypes = {
    contactsFilter: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
}