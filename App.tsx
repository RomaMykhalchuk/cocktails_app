/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { setFilters } from './app/store/reducers/filtersReducer';
import store from './app/store/store.js';

import { Button } from 'react-native';
import { HomeScreen } from './app/screens/HomeScreen';
import { FiltersScreen } from './app/screens/FiltersScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const dispatch = useDispatch();

  const getFilters = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(res => res.json())
      .then(filters => dispatch(setFilters(filters.drinks)))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getFilters();
  }, []);

  return (
  <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drinks">
          <Stack.Screen
            name="Drinks"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button onPress={() => navigation.navigate('Filters')} title="totop" />
              )
            })} />
          <Stack.Screen name="Filters" component={FiltersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper;
