import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { CocktailCard } from '../components/CocktailCard';
import { setFilters } from '../store/reducers/filtersReducer';

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const allFilters = useSelector(state => state.filters);

    const [page, setPage] = useState(0);
    const [serverData, serverDataLoaded] = useState([]);
    const [clientData, setClientData] = useState([]);

    const getFilters = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then(res => res.json())
            .then(filters => {
                dispatch(setFilters([...filters.drinks]))
                return filters;
            })
            .catch(err => console.log(err));
    };

    const getServerData = (p) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${allFilters[p]?.strCategory}`)
            .then(res => res.json())
            .then(data => {
                serverDataLoaded(data.drinks.map(cocktail => {
                    return {
                        ...cocktail,
                        category: 'hh',
                    }
                }));
                return data.drinks;
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getFilters()
    }, []);

    useEffect(() => {
        getServerData(page);
    }, [page]);

    useEffect(() => {
        setClientData([...clientData, ...serverData]);
    }, [serverData]);

    const handleLoadMore = () => {
        if (page !== allFilters.length - 1) {
            setPage(page + 1);
        } else {
            alert('No more cocktails');
        }
    };

    return (
        <View>
            <FlatList
                data={clientData}
                // refreshing={refresh}
                renderItem={({ item }) => <CocktailCard {...item} />}
                onEndReached={handleLoadMore}
                keyExtractor={(item) => item.idDrink}
                onEndReachedThreshold={0.1}

            // onRefresh={() => onRefresh()}
            />
        </View>
    );
};