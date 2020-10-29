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

  const [filters, setFilter] = useState([]);

  const getFilters = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(res => res.json())
      .then(filters => setFilter(filters.drinks))
      .catch(err => Alert.alert(err));
  };

  useEffect(() => {
    getFilters();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drinks">
        <Stack.Screen 
        name="Drinks" 
        component={Home}
        options={({navigation})=>({
          headerRight:()=>(
            <Button onPress={()=> navigation.navigate('Filters')} title="Filters"/>
          )
        })}
        /> 
        
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

{/* <View>
        {filters.map(t => <CocktailsList filter={t.strCategory} key={t.strCategory} />)}
      </View> */}

const styles = StyleSheet.create({

});

export default App;
