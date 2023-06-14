import React from "react";
import PropTypes from "prop-types";
import { ButtonDelete, ListItemData, ListItemWrapper } from "./ContactListItem.styled";
import { useDispatch } from "react-redux";
import { remove } from "redux/contacts/slice";

const ContactListItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleDeleteBtnClick = id => {
        dispatch(remove(id));
    };

    return (
        <ListItemWrapper>
            <ListItemData>{item.name}:</ListItemData>
            <ListItemData>{item.number}:</ListItemData>
            <ButtonDelete type="button" onClick={() => handleDeleteBtnClick(item.id)}>delete</ButtonDelete>
        </ListItemWrapper>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
}