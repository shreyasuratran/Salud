import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState(dummyRecipes);
    const navigation = useNavigation();

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
        </View>
    );
};

const styles = StyleSheet.create({
    recipeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    recipeTextContainer: {
        flex: 1,
    },
    recipeTitle: {
        fontSize: 18,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fbf0df',
    },
    backButton: {
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    recipesContainer: {
        flexGrow: 1,
    },
});

export default Recipes;
