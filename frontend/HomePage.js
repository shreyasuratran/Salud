import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  // Dummy recipe suggestions
  const recipeSuggestions = [
    'Healthy Salad',
    'Vegetarian Pasta',
    'Gluten-Free Pizza',
    'Dairy-Free Smoothie',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a recipe..."
          placeholderTextColor="#666"
        />
      </View>
      <ScrollView style={styles.recipeSuggestionsContainer}>
        <Text style={styles.sectionTitle}>Recipe Suggestions</Text>
        {recipeSuggestions.map((recipe, index) => (
          <Text key={index} style={styles.recipeSuggestion}>{recipe}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1E3A1',
  },
  searchContainer: {
    padding: 20,
    paddingTop: 40,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  recipeSuggestionsContainer: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeSuggestion: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomePage;
