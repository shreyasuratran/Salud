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
    '3': {
        title: 'Vegetable Stir Fry',
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
        backgroundColor: '#fbf0df', // Soft beige background
        padding: 20, // Outer padding for the overall layout
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30, // Increased bottom margin for more space below the title
        color: '#000000',
        textAlign: 'center',
    },
    ingredientsList: {
        alignSelf: 'stretch', // Ensure the list takes the full available width
    },
    ingredient: {
        backgroundColor: '#ffffff', // White background for each ingredient card
        fontSize: 18,
        color: '#000000',
        padding: 15, // Generous padding inside each ingredient card
        borderRadius: 10, // Rounded corners for the cards
        marginVertical: 8, // Space between cards
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Elevation for Android (shadow effect)
        flexDirection: 'row', // For future customization (e.g., icons next to ingredients)
        justifyContent: 'space-between', // Align items on opposite ends
    },
    button: {
        backgroundColor: '#4CA14C', // Vibrant green background for the button
        paddingVertical: 12, // More vertical padding for a taller button
        paddingHorizontal: 20, // Horizontal padding
        borderRadius: 25, // Fully rounded corners
        marginTop: 20, // Space above the button
        alignSelf: 'center', // Center the button horizontally
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4, // Elevation for Android (shadow effect)
    },
    buttonText: {
        color: '#FFFFFF', // White text color for better contrast
        fontSize: 18, // Slightly larger font size
        fontWeight: 'bold', // Bold font weight
        textAlign: 'center', // Ensure text is centered
    },
});


export default Ingredients;
