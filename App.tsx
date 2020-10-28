/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Image,
  FlatList
} from 'react-native';
import { CocktailsList } from './app/components/CocktailsList';

const App: () => React$Node = () => {

  const [filters, setFilter] = useState([]);

  const getFilters = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(res => res.json())
      .then(filters => setFilter(filters.drinks))
      .catch(err => Alert.alert(err));
  };

  // const getData = () => {
  //   fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
  //     .then(res => res.json())
  //     .then(cocktails => setCocktail(cocktails.drinks))
  //     .catch(err => Alert.alert(err));
  // };

  useEffect(() => {
    // getData();
    getFilters();
  }, []);

  return (
    <View>
      {filters.map(t => <CocktailsList filter={t.strCategory}/>)}
    </View>
    /* {cocktails.map(text => <Image key={text.idDrink} source={{ uri: text.strDrinkThumb, width: 100, height: 100 }} />)} */
  );
};


const styles = StyleSheet.create({

});

export default App;
