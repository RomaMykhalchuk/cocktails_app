import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Text, View, FlatList } from 'react-native';

import { Filter } from '../components/Filter';

export const FiltersScreen = () => {
    // const [checkedFilters, setFilter] = useState([filters]);

    const filters = useSelector(state => state.filters);

    return (
        <View>
            {filters.map(i => <Text>{i.strCategory}</Text>)}
      
        </View>
    );
};