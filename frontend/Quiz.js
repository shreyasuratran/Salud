import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { useFonts } from 'expo-font'; // Import useFonts from expo-font

const QuizPage = () => {
    const [healthCondition, setHealthCondition] = useState('');
    const [selectedOptions, setSelectedOptions] = useState({});
    const navigation = useNavigation(); // Use the useNavigation hook to access navigation
    const [loaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'), // Load Poppins-Regular font
    });

    const questions = [
        { id: 1, question: 'What is your age group?', options: ['18-24', '25-34', '35-44', '45-54', '55+'] },
        { id: 2, question: 'What is your gender?', options: ['Male', 'Female', 'Other'] },
        { id: 3, question: 'Do you have diabetes?', options: ['Yes', 'No'] },
        { id: 4, question: 'Do you have hypertension (high blood pressure)?', options: ['Yes', 'No'] },
        { id: 5, question: 'Are you allergic to any specific foods?', options: ['Yes', 'No'] },
        { id: 6, question: 'Do you have any dietary restrictions or preferences?', options: ['Vegetarian', 'Vegan', 'Gluten-free', 'Other'] },
        { id: 7, question: 'Are there specific ingredients you dislike or cannot consume?', options: ['Yes', 'No'] },
        { id: 8, question: 'Are there specific cuisines you prefer?', options: ['Italian', 'Asian', 'Mediterranean', 'Other'] },
        { id: 9, question: 'Are you currently taking any medications?', options: ['Yes', 'No'] },
        { id: 10, question: 'Do you take any dietary supplements?', options: ['Yes', 'No'] },
        { id: 11, question: 'How many meals and snacks do you typically have in a day?', options: ['1 meal, no snacks', '2 meals, 1-2 snacks', '3 meals, no snacks', 'Other'] },
        { id: 12, question: 'How would you describe your cooking skill level?', options: ['Beginner', 'Intermediate', 'Advanced'] },
    ];

    const handleSubmit = () => {
        console.log('Submitted Health Condition:', healthCondition);
        console.log('Submitted Answers:', selectedOptions);
        // Navigate to Recipes page
        navigation.navigate('Recipes'); // Replace 'Recipes' with the exact route name you have defined in your navigator
    };

    const handleAnswerSelection = (questionId, option) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionId]: option,
        }));
    };

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.heading}>Tell us about your health and preferences</Text>
            {questions.map(question => (
                <View key={question.id} style={styles.questionContainer}>
                    <Text style={styles.question}>{question.question}</Text>
                    <View style={styles.buttonContainer}>
                        {question.options.map(option => (
                            <TouchableOpacity
                                key={option}
                                style={[styles.button, selectedOptions[question.id] === option && styles.selectedButton]}
                                onPress={() => handleAnswerSelection(question.id, option)}
                            >
                                <Text style={styles.buttonText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            ))}
            <View style={styles.textInputContainer}>
                <Text style={styles.label}>Health Condition:</Text>
                <TextInput
                    style={styles.input}
                    value={healthCondition}
                    onChangeText={setHealthCondition}
                />
            </View>
            <Button onPress={handleSubmit} title="Submit" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fbf0df', // Beige type color
    },
    heading: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24, // Increased font size
        marginBottom: 20,
        color: "#000000",
        textAlign: 'center',
        fontWeight: 'bold', // Make the heading stand out
    },
    questionContainer: {
        marginBottom: 20,
        padding: 10, // Add padding to give more space
        backgroundColor: '#ffffff', // Light background for the question container
        borderRadius: 10, // Rounded corners for the container
        shadowColor: "#000", // Shadow for depth
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    question: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18, // Slightly larger font for questions
        marginBottom: 10,
        color: "#000000",
        textAlign: 'center',
        lineHeight: 24, // Increased line height for better readability
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10, // Add space above the button container
    },
    button: {
        backgroundColor: '#A1e3a1',
        paddingVertical: 12, // Increased padding for a taller button
        paddingHorizontal: 25, // Wider buttons for easier tapping
        borderRadius: 20, // More rounded corners
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    selectedButton: {
        backgroundColor: '#4CA14C', // A more vibrant color for selected state
        color: '#FFFFFF', // White text color when selected
    },
    buttonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000000',
        textAlign: 'center', // Ensure text is centered within the button
    },
    label: {
        fontSize: 18, // Larger label size
        marginBottom: 5,
        color: "#000000",
    },
    input: {
        height: 50, // Taller input for easier interaction
        borderColor: '#cccccc', // A more visible border color
        borderWidth: 1,
        marginBottom: 15,
        padding: 15, // More padding for text input
        backgroundColor: "#ffffff",
        borderRadius: 10, // Rounded corners for input field
    },
});

export default QuizPage;