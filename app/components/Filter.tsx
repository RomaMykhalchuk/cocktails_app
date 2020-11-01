import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { hanldeFilter } from '../store/reducers/selectedFiltersReducer';

export const Filter = ({ name}) => {
  
    const selectedFilters = useSelector(state => state.selectedFilters);
    const dispatch = useDispatch();
    
    const [isChecked, setChecked] = useState(false);

    const filterHandler = () => {
        // dispatch(hanldeFilter(name, isChecked));
        const idx = selectedFilters.indexOf(name);
        dispatch(hanldeFilter(name, idx));
    };
    
return (
        <>
            <CheckBox
                title={name}
                checked={isChecked}
                onPress={() => {
                    setChecked(!isChecked)
                    filterHandler();
                }}
            />
        </>
    );
};