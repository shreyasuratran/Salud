import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, Button } from 'react-native';

const QuizPage = () => {
  const [healthCondition, setHealthCondition] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
  });

  const handleConditionChange = (value) => {
    setHealthCondition(value);
  };

  const handleDietaryChange = (name, value) => {
    setDietaryPreferences({
      dietaryPreferences,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Submitted Health Condition:', healthCondition);
    console.log('Submitted Dietary Preferences:', dietaryPreferences);
    // Here, you would typically send this data to your backend or state management store
  };

  return (
    <View>
      <Text>Tell us about your health and dietary preferences</Text>
      <View>
        <Text>Health Condition:</Text>
        <TextInput
          value={healthCondition}
          onChangeText={handleConditionChange}
        />
      </View>
      <View>
        <Text>Dietary Preferences:</Text>
        <View>
          <CheckBox
            value={dietaryPreferences.vegan}
            onValueChange={(value) => handleDietaryChange('vegan', value)}
          />
          <Text>Vegan</Text>
        </View>
        <View>
          <CheckBox
            value={dietaryPreferences.vegetarian}
            onValueChange={(value) => handleDietaryChange('vegetarian', value)}
          />
          <Text>Vegetarian</Text>
        </View>
        <View>
          <CheckBox
            value={dietaryPreferences.glutenFree}
            onValueChange={(value) => handleDietaryChange('glutenFree', value)}
          />
          <Text>Gluten-Free</Text>
        </View>
        <View>
          <CheckBox
            value={dietaryPreferences.dairyFree}
            onValueChange={(value) => handleDietaryChange('dairyFree', value)}
          />
          <Text>Dairy-Free</Text>
        </View>
      </View>
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};

export default QuizPage;
