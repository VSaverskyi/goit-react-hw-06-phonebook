import React from "react";
import { nanoid } from "nanoid";
import { FilterWrapper } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { update } from "redux/filter/slice";

const Filter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const idForFilter = nanoid();

    const handleFilterUpdate = (e) => {
        dispatch(update(e.target.value));
    }
        
    return (
        <FilterWrapper>
            <label htmlFor={idForFilter}>Find contacts by name</label>
            <input id={idForFilter}
                type="text"
                name="filter"
                value={filter}
                onChange={handleFilterUpdate}
            />
        </FilterWrapper>
    )
}

export default Filter;