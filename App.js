/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Counter from './src/screens/Counter/Counter';

import ItemDetailPage from './src/screens/ItemDetailPage';
import SearchListPage from './src/screens/SearchListPage';
import SearchPage from './src/screens/SearchPage';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Counter" component={Counter} /> */}
        <Stack.Screen name="Search Page" component={SearchPage} />
        <Stack.Screen name="SearchListPage" component={SearchListPage} />
        <Stack.Screen name="ItemDetailPage" component={ItemDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
