import React, { useEffect, useState } from 'react';
import { Text, Alert, View, FlatList } from 'react-native';
import { CocktailsList } from '../components/CocktailsList';


export const Home = ({filters}) => {

    return (
        <>
            <View>
                {filters.map(t => <CocktailsList filter={t.strCategory} key={t.strCategory} />)}
            </View>
        </>
    );
};