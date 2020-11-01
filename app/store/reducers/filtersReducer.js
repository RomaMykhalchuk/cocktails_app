import { LOAD_FILTERS } from '../actionTypes';

export const setFilters = (data) => ({type: LOAD_FILTERS, filters: data});

const reducer = (filters = [], action) => {
    switch (action.type) {
        case LOAD_FILTERS:
            return action.filters;
        default:
            return filters;
    }
};

export default reducer;