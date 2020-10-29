import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, Alert, StyleSheet } from 'react-native';
import { CocktailCard } from './CocktailCard';

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
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={styles.groupTitle}>{filter}</Text>
            <FlatList
                keyExtractor={(item)=> item.idDrink}
                data={cocktails}
                renderItem={({ item }) => <CocktailCard image={item.strDrinkThumb} title={item.strDrink}/>} />
        </View>
    );
};

const styles = StyleSheet.create({
    groupTitle: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16.4,
        color: '#7E7E7E',
        marginVertical: 20
    },

});