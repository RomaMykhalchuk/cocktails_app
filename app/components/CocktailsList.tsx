import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, Alert, StyleSheet } from 'react-native';
import { CocktailCard } from './CocktailCard';

export const CocktailsList = ({ list }) => {
    // console.log(typeof list);
    return (
        <View style={{ paddingHorizontal: 20 }}>
            {/* <Text style={styles.groupTitle}>{groupName}</Text>
            <FlatList
                keyExtractor={(item) => item.idDrink}
                data={list}
    renderItem={({item})=> <Text>{item.strDrink}</Text>}
                // renderItem={({ item }) =>
                //     <CocktailCard image={item.strDrinkThumb} title={item.strDrink} />} 
            /> */}
            <Text>{list.strDrink}</Text>
            <Image source={{uri:list.strDrinkThumb}}/>
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