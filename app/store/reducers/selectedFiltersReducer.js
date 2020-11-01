import {
    ADD_FILTER,
    REMOVE_FILTER
} from '../actionTypes';

export const hanldeFilter = (filterName, index) => {
    if (index === -1) {
        return {
            type: ADD_FILTER,
            filterName,
        }
    } else {
        return {
            type: REMOVE_FILTER,
            index,
        }
    }
};

const reducer = (selectedFilters = [], action) => {
    switch (action.type) {
        case ADD_FILTER:
            return [...selectedFilters, action.filterName];
        case REMOVE_FILTER:
            selectedFilters.splice(action.index, 1);
            return selectedFilters;
        default:
            return selectedFilters;
    }
};

export default reducer;