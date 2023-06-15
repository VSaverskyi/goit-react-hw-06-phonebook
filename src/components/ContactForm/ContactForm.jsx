import React, { useState } from "react";
import { nanoid } from "nanoid";
import { ButtonSubmit, FormWrapper } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { add, getContacts } from "redux/contacts/slice";

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const idForName = nanoid();
    const idForTel = nanoid();

    const clearState = () => {
        setName('');
        setNumber('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { name, number } = e.target.elements;
        if (contacts.find((item) => item.name.toLowerCase() === name.value.toLowerCase())) {
      return alert(name.value + ' is already in contacts.');
        }

         dispatch(add({ name: name.value, number: number.value, id: nanoid() }));
        e.target.reset();
        clearState();
    }

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
        
            default:
                console.warn(`Field type name - ${name} not processing!`);
        }
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <label htmlFor={idForName}>
                Name
            </label>
            <input
                id={idForName}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor={idForTel}>
                Number
            </label>
            <input
                id={idForTel}
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <ButtonSubmit type="submit">add contact</ButtonSubmit>
        </FormWrapper>
    )
}

export default ContactForm;