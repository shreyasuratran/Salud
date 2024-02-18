import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const QuizPage = () => {
    const [healthCondition, setHealthCondition] = useState('');
    const [selectedOptions, setSelectedOptions] = useState({});

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
        // Here, you would typically send this data to your backend or state management store
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
        backgroundColor: '#A1e3a1',
    },
    heading: {
        fontSize: 18,
        marginBottom: 20,
        color: "#000000",
        textAlign: 'center',
    },
    questionContainer: {
        marginBottom: 20,
    },
    question: {
        fontSize: 16,
        marginBottom: 10,
        color: "#000000",
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 5,
    },
    selectedButton: {
        backgroundColor: '#5cb85c',
    },
    buttonText: {
        fontSize: 16,
        color: '#333333',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#000000",
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        backgroundColor: "#ffffff",
    },
});

export default QuizPage;
