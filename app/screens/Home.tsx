import React, { useEffect, useState } from 'react';
import { Text, Alert, View, FlatList, Button, SectionList } from 'react-native';
import { CocktailsList } from '../components/CocktailsList';
import { Filter } from '../components/Filter';
import { CocktailCard } from '../components/CocktailCard';


export const Home = () => {

    const filters = ['Ordinary Drink', 'Cocktail', 'Milk / Float / Shake', 'Other/Unknown', 'Cocoa', 'Shot', 'Coffee / Tea', 'Homemade Liqueur', 'Punch / Party Drink', 'Beer', 'Soft Drink / Soda'];


    const [limit] = useState(4);
    const [page, setPage] = useState(0);
    const [clientData, setClientData] = useState([]);
    const [serverData, serverDataLoaded] = useState([]);
    const [pending_process, setPending_process] = useState(true);
    const [loadmore, setLoadmore] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const getServerData = (p) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters[p]}`)
            .then(res => res.json())
            .then(data => {
                serverDataLoaded(data.drinks);
                return data.drinks;
            })
            .catch(err => console.log(err))

    };

    useEffect(() => {
        getServerData(page);
    }, []);


    useEffect(() => {
        // console.log('obtained serverData', serverData);
        if (serverData.length > 0) {
            setRefresh(false);
            setClientData([...clientData, ...serverData]);
            setLoadmore(serverData.length === limit ? true : false);
            setPending_process(false);
        } else {
            setLoadmore(false);
        }
    }, [serverData]);

    useEffect(() => {
        console.log('load more with page', page);
        if (page < filters.length|| page === 0) {
            setPending_process(true);
            getServerData(page);
        }
    }, [page]);

    const handleLoadMore = () => {
        // console.log('loadmore', loadmore);
        // console.log('pending_process', pending_process);
        // if (loadmore && !pending_process) {
            setPage(prev => prev + 1);
        // }
    };

    const onRefresh = () => {
        setClientData([]);
        setPage(0);
        setRefresh(true);
        setPending_process(false);
    };

    return (
        <>
            <View>
                <FlatList
                    data={clientData}
                    renderItem={({ item }) => <CocktailCard {...item} />}
                    // refreshing={refresh}
                    // keyExtractor={(item)=> item.idDrink}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.1}
                    // onRefresh={() => onRefresh()}
                />
            
            </View>
        </>
    );
};