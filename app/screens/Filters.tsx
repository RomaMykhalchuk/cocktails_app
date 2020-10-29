import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { Filter } from '../components/Filter';

export const Filters = ({ filters }) => {
    const [checkedFilters, setFilter ] = useState([]);

    return (
        <>
            {filters.map(f => <Filter filter={f.strCategory} key={f.strCategory}/>)}
        </>
    );
};