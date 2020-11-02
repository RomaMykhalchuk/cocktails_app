import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, FlatList } from 'react-native';
import { CheckBox, ThemeProvider, Button } from 'react-native-elements';

import { Filter } from '../components/Filter';
import { setFilters } from '../store/reducers/filtersReducer';

export const FiltersScreen = () => {
    const filters = useSelector(state => state.filters);
    return (
        <View>
            <FlatList
                ListFooterComponent={<Button title='Apply' />}
                data={filters}
                keyExtractor={(item) => item.strCategory}
                renderItem={({ item }) => (
                    <Filter
                        name={item.strCategory}
                    />)}
            />
        </View>
    );
};