import React, { useEffect, useState } from 'react';
import { Text, Alert, View, FlatList, Button, SectionList } from 'react-native';
import { useSelector } from 'react-redux';
import { CocktailsList } from '../components/CocktailsList';
import { Filter } from '../components/Filter';
import { CocktailCard } from '../components/CocktailCard';

// const allFilters = [
//     'Ordinary Drink',
//     'Cocktail',
//     'Milk / Float / Shake',
//     'Other/Unknown',
//     'Cocoa',
//     'Shot',
//     'Coffee / Tea',
//     'Homemade Liqueur',
//     'Punch / Party Drink',
//     'Beer',
//     'Soft Drink / Soda'
// ];


export const HomeScreen = () => {
    const allFilters = useSelector(state => state.filters);

    const [filters, setFilter] = useState(allFilters);
    const [page, setPage] = useState(0);
    const [serverData, serverDataLoaded] = useState([]);
    const [clientData, setClientData] = useState([]);
    // const [loadmore, setLoadmore] = useState(false);
    // const [refresh, setRefresh] = useState(false);

    const getServerData = (p) => {
        console.log(p);
        // const {strCategory} = allFilters[p];
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink`)
            .then(res => res.json())
            .then(data => {
               serverDataLoaded(data.drinks.map(cocktail => {
                   return {
                       ...cocktail,
                       category: 'zaebal',
                   }
               }));
                return data.drinks;
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getServerData(page);
    }, [page]);

    useEffect(() => {
        setClientData([...clientData, ...serverData]);
    }, [serverData]);

    const handleLoadMore = () => {
        if(page !== filters.length - 1) {
            setPage(page + 1);
        } else {
            alert(clientData.length);
        }
        // console.log(clientData.length);
    };

    // const onRefresh = () => {
    //     setClientData([]);
    //     setPage(0);
    //     setRefresh(true);
    // };

    return (
        <View>
          <FlatList
                data={clientData}
                // refreshing={refresh}
                renderItem={({ item }) => <CocktailCard {...item} />}
                onEndReached={handleLoadMore}
                keyExtractor={(item)=> item.idDrink}
                onEndReachedThreshold={0.1}
                
                // onRefresh={() => onRefresh()}
            />
        </View>
    );
};