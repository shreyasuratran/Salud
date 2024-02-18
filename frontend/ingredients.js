import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// Dummy data for ingredients
const dummyIngredients = {
  '1': {
    title: 'Spaghetti Carbonara',
    ingredients: [
      { name: 'Spaghetti', quantity: '200g' },
      { name: 'Bacon', quantity: '100g' },
      { name: 'Eggs', quantity: '2' },
      { name: 'Parmesan Cheese', quantity: '50g' },
    ],
  },
  '2': {
    title: 'Chicken Alfredo',
    ingredients: [
      { name: 'Pasta', quantity: '200g' },
      { name: 'Chicken Breast', quantity: '150g' },
      { name: 'Heavy Cream', quantity: '100ml' },
      { name: 'Parmesan Cheese', quantity: '50g' },
    ],
  },
  // Add more recipes as needed
};

const Ingredients = () => {
    const route = useRoute();
    const { recipeId } = route.params;
    const recipe = dummyIngredients[recipeId];

    const addToCart = () => {
        Alert.alert('Add to Cart', 'Ingredients have been added to your cart!', [
            { text: "OK", onPress: () => navigation.navigate('Cart') }
        ]);
    };
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{recipe?.title}</Text>
            <View style={styles.ingredientsList}>
                {recipe?.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.ingredient}>
                        {ingredient.name}: {ingredient.quantity}
                    </Text>
                ))}
            </View>
            <Button title="Add to Cart" onPress={addToCart} color="#5cb85c" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbf0df',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000',
        textAlign: 'center',
    },
    ingredientsList: {
        marginBottom: 20,
    },
    ingredient: {
        fontSize: 18,
        color: '#000000',
        margin: 5,
    },
    button: {
        backgroundColor: '#FFFFFF', // Button background color
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF', // Here we set the text color to white
        fontWeight: 'bolder',

        fontSize: 16,
    },
});


export default Ingredients;
