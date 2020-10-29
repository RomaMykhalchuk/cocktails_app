import React, { useState } from 'react';
import { Button, Text, View, FlatList } from 'react-native';

import { Filter } from '../components/Filter';

export const Filters = ({ filters }) => {
    const [checkedFilters, setFilter] = useState([filters]);
    
    return (
        <>
            {/* <FlatList data={filters} keyExtractor={({item}) => item.strCategory} renderItem={({ item})=> <Filter filter={item?.strCategory}/>}/> */}
            {filters.map(f => (
                <Filter
                    filter={f.strCategory}
                    key={f.strCategory} />))}
        </>
    );
};