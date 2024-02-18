import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Recipes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    // Function to handle recipe search
    const handleSearch = () => {
        // Implement recipe search functionality here
        // Update recipes state with the search results
    };

    // Function to handle category selection
    const handleCategorySelection = (category) => {
        // Implement category selection functionality here
        // Update recipes state with recipes in the selected category
    };

    return (
        <View style={styles.container}>
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
                {/* Render recipes here */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#A1e3a1',
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
