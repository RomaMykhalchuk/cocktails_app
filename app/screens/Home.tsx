import React, { useEffect, useState } from 'react';
import { Text, Alert, View, FlatList, Button, SectionList } from 'react-native';
import { CocktailsList } from '../components/CocktailsList';
import { Filter } from '../components/Filter';


export const Home = ({ filters, callback }) => {

    return (
        <>
            <View>
            <Button onPress={callback} title="delete"/>

                <FlatList
                    data={filters}
                    keyExtractor={(item) => item.strCategory}
                    renderItem={({ item }) => <CocktailsList filter={item.strCategory} />} 
                />
            </View>
        </>
    );
};