import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Recipes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const navigation = useNavigation(); // Use the useNavigation hook to access navigation

    const handleSearch = () => {
        // Implement recipe search functionality here
    };

    const handleCategorySelection = (category) => {
        // Implement category selection functionality here
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
