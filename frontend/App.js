import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Quiz from './Quiz';
import Recipes from './Recipes';
import Ingredients from './ingredients';
import Cart from './Cart';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="Ingredients" component={Ingredients} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

