import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, FlatList } from 'react-native';
import { CheckBox, ThemeProvider, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Filter } from '../components/Filter';
import { setFilters } from '../store/reducers/filtersReducer';

export const FiltersScreen = () => {
    const filters = useSelector(state => state.filters);

    // const [selectedFilters, handleFilters] = useState([]);

    // const filterHanlder = (filterName: string, isChecked: boolean) => {
    //     const filterIndex = selectedFilters.indexOf(filterName);
    //     if(filterIndex === -1) {
    //         selectedFilters.push(filterName);
    //     } else {
    //         selectedFilters.splice(filterIndex, 1);
    //     }
    //     console.log(selectedFilters);
    // };

    // const handleApply = () => {
    //     if (selectedFilters.length === 0) {
    //         return;
    //     } else {

    //     }
    // };

    return (
        <View>
            <FlatList
                ListFooterComponent={<Button title='Apply' />}
                data={filters}
                renderItem={({ item }) => (
                    <Filter 
                    name={item.strCategory} 
                    // callback={filterHanlder} 
                    />)}
                keyExtractor={(item) => item.strCategory}
            />
        </View>
    );
};