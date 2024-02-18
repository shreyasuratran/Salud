import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyRecipes = [
    {
      id: '1',
      title: 'Spaghetti Carbonara',
      image: 'https://via.placeholder.com/150',
      description: 'Creamy Italian pasta with eggs, cheese, and bacon.',
    },
    {
      id: '2',
      title: 'Chicken Alfredo',
      image: 'https://via.placeholder.com/150',
      description: 'A rich and creamy white sauce over tender chicken and pasta.',
    },
    {
      id: '3',
      title: 'Vegetable Stir Fry',
      image: 'https://via.placeholder.com/150',
      description: 'A healthy mix of vegetables stir-fried with a light sauce.',
    },
    // ...add more dummy recipes as needed
  ];
  
  const Recipes = () => {
      const [searchQuery, setSearchQuery] = useState('');
      const [recipes, setRecipes] = useState(dummyRecipes);
      const navigation = useNavigation();
  
      const handleSearch = () => {
          // Here you would implement the actual search functionality,
          // for now, let's just filter our dummy data based on title.
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
          // Normally you would navigate to a details page with the recipeId
          // For now, we'll just log to the console
          console.log('Recipe selected:', recipeId);
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
                          <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
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
    },
    recipeImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    recipeTitle: {
        fontSize: 18,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#A1e3a1',
    },
    backButton: {
        marginBottom: 20, // Add space below the back button
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
