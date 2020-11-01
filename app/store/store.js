import {createStore, combineReducers} from 'redux'; 
import filtersReducer from './reducers/filtersReducer';
import selectedFilters from './reducers/selectedFiltersReducer';

const rootReducer = combineReducers({
    filters: filtersReducer,
    selectedFilters,
});

const store = createStore(rootReducer);

export default store;