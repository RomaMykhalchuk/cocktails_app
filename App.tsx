/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Image,
  FlatList,
  Button
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { CocktailsList } from './app/components/CocktailsList';
import { Home } from './app/screens/Home';
import { Filters } from './app/screens/Filters';
import { FilterImage } from './app/components/FilterImage';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drinks">
        <Stack.Screen
          name="Drinks"
          options={({ navigation }) => ({
            headerRight: () => (
              <Button onPress={() => navigation.navigate('Filters')}  title="totop" />
            )
          })}>
          {() => <Home/>}
        </Stack.Screen>
        {/* <Stack.Screen name="Filters">
          {() => <Filters filters={filters} />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({

});

export default App;
