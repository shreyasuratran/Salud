import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font'; // Import useFonts from expo-font
import logoImage from './salud.png';
import axios from 'axios';

const dummyRecipes = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    description: 'Creamy Italian pasta with eggs, cheese, and bacon.',
  },
  {
    id: '2',
    title: 'Chicken Alfredo',
    description: 'A rich and creamy white sauce over tender chicken and pasta.',
  },
  {
    id: '3',
    title: 'Vegetable Stir Fry',
    description: 'A healthy mix of vegetables stir-fried with a light sauce.',
  },
  // Add more dummy recipes as needed
];

const Recipes = () => {
    const [loaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'), // Load Poppins-Regular font
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        axios.get('http://localhost:8000/recipes/getrecipes/')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
 

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            setRecipes(dummyRecipes);
        } else {
            const filteredRecipes = dummyRecipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setRecipes(filteredRecipes);
        }
    };

    const handleRecipeClick = (recipeId) => {
        navigation.navigate('Ingredients', { recipeId });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text>Back</Text>
            </TouchableOpacity>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search recipes..."
                />
                <Button title="Search" onPress={handleSearch} />
            </View>
            <ScrollView contentContainerStyle={styles.recipesContainer}>
                {recipes.map((recipe) => (
                    <TouchableOpacity key={recipe.id} style={styles.recipeItem} onPress={() => handleRecipeClick(recipe.id)}>
                        <View style={styles.recipeTextContainer}>
                            <Text style={styles.recipeTitle}>{recipe.title}</Text>
                            <Text style={styles.recipeDescription}>{recipe.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Image source={logoImage} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 50, // Adjust the size as needed
        height: 50, // Adjust the size as needed
        position: 'absolute', // Position the logo absolutely over the container
        top: 10, // Distance from the top of the container
        right: 10, // Distance from the right of the container
        // Adjust top and right values as needed to fit your design
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fbf0df', // Soft beige background
    },
    recipeItem: {
        backgroundColor: '#ffffff', // White background for the card
        borderRadius: 8, // Rounded corners for the card
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Elevation for Android
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15, // Increased padding for a spacious look
    },
    recipeTextContainer: {
        flex: 1,
        marginLeft: 10, // Space between image and text
    },
    recipeTitle: {
        fontSize: 20, // Larger font size for titles
        fontWeight: 'bold', // Bold font weight for titles
        color: '#333333', // Darker text for better contrast
        fontFamily: 'Poppins-Regular',
        marginBottom: 5, // Space between title and description
    },
    backButton: {
        width: 100, // Set the width to make the button smaller
        height: 40, // Set the height to make the button smaller
        justifyContent: 'center', // Center the text or icon inside the button vertically
        alignItems: 'center', // Center the text or icon inside the button horizontally
        backgroundColor: '#A1e3a1', // Soft green background
        borderRadius: 20, // Rounded corners
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        alignSelf: 'flex-start', // Align the button to the left side of its container
        marginBottom: 20, // Margin at the bottom
    },
    
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#ffffff', // White background for search container
        borderRadius: 20, // Rounded corners for search container
        padding: 8, // Padding inside the search container
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#ffffff', // Ensure the input background matches the container
        borderRadius: 20, // Rounded corners for input
        paddingHorizontal: 15, // Horizontal padding for input text
    },
    recipesContainer: {
        flexGrow: 1,
    },
});

export default Recipes;
