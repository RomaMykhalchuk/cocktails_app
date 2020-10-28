import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, Alert } from 'react-native';

export const CocktailsList = ({ filter }) => {


    const [cocktails, setCocktail] = useState([]);

    const getData = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`)
            .then(res => res.json())
            .then(cocktails => setCocktail(cocktails.drinks))
          .catch(err => Alert.alert(err));
    };

    useEffect(() => getData(), []);

    return (
        <>
            <Text>{filter}</Text>
            <FlatList data={cocktails} renderItem={({ item }) => <Text>{item.strDrink}</Text>} />
        </>
    );
};