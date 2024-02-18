import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';

const QuizPage = () => {
    const [healthCondition, setHealthCondition] = useState('');
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [dairyFree, setDairyFree] = useState(false);

    const [questionIndex, setQuestionIndex] = useState(0);
    const questions = [
        { question: 'What is your age group?', options: ['18-24', '25-34', '35-44', '45-54', '55+'], selectedOptions: [] },
        { question: 'What is your gender?', options: ['Male', 'Female', 'Other'], selectedOptions: [] },
        { question: 'Do you have diabetes?', options: ['Yes', 'No'], selectedOptions: [] },
        { question: 'Do you have hypertension (high blood pressure)?', options: ['Yes', 'No'], selectedOptions: [] },
        { question: 'Are you allergic to any specific foods?', options: ['Yes', 'No'], selectedOptions: [] },
        { question: 'Do you have any dietary restrictions or preferences?', options: ['Vegetarian', 'Vegan', 'Gluten-free', 'Other'], selectedOptions: [] },
        { question: 'Are there specific ingredients you dislike or cannot consume?', options: ['Yes', 'No'], selectedOptions: [] },
        { question: 'Are there specific cuisines you prefer?', options: ['Italian', 'Asian', 'Mediterranean', 'Other'], selectedOptions: [] },
        { question: 'Are you currently taking any medications?', options: ['Yes', 'No'], selectedOptions: [] },
        { question: 'Do you take any dietary supplements?', options: ['Yes', 'No'], selectedOptions: [] },
        { question: 'How many meals and snacks do you typically have in a day?', options: ['1 meal, no snacks', '2 meals, 1-2 snacks', '3 meals, no snacks', 'Other'], selectedOptions: [] },
        { question: 'How would you describe your cooking skill level?', options: ['Beginner', 'Intermediate', 'Advanced'], selectedOptions: [] },
    ];

    const handleSubmit = () => {
        console.log('Submitted Health Condition:', healthCondition);
        console.log('Submitted Dietary Preferences:', { vegan, vegetarian, glutenFree, dairyFree });
        console.log('Submitted Answers:', questions.map((q, index) => ({ question: q.question, answer: q.selectedOptions })));
        // Here, you would typically send this data to your backend or state management store
    };

    const handleAnswerSelection = (index, option) => {
        const updatedQuestions = [...questions];
        const selectedOptions = updatedQuestions[index].selectedOptions;

        if (selectedOptions.includes(option)) {
            selectedOptions.splice(selectedOptions.indexOf(option), 1);
        } else {
            selectedOptions.push(option);
        }

        setQuestionIndex(index + 1);

        if (index === questions.length - 1) {
            handleSubmit();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tell us about your health and preferences</Text>
            {questionIndex < questions.length ? (
                <View>
                    <Text style={styles.label}>{questions[questionIndex].question}</Text>
                    {questions[questionIndex].options.map((option, index) => (
                        <View key={index} style={styles.switchContainer}>
                            <Switch
                                value={questions[questionIndex].selectedOptions.includes(option)}
                                onValueChange={() => handleAnswerSelection(questionIndex, option)}
                            />
                            <Text style={styles.switchLabel}>{option}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <View>
                    <Text style={styles.label}>Health Condition:</Text>
                    <TextInput
                        style={styles.input}
                        value={healthCondition}
                        onChangeText={setHealthCondition}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#A1e3a1',
        flex: 1,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 18,
        marginBottom: 10,
        color: "#000000"
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#000000"
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        backgroundColor: "#000000",
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    switchLabel: {
        marginLeft: 10,
        fontSize: 16,
        color: "#000000",
    },
});

export default QuizPage;
