import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button } from 'react-native';

const QuizPage = () => {
  const [healthCondition, setHealthCondition] = useState('');
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);

  const handleSubmit = () => {
    console.log('Submitted Health Condition:', healthCondition);
    console.log('Submitted Dietary Preferences:', {
      vegan,
      vegetarian,
      glutenFree,
      dairyFree,
    });
    // Here, you would typically send this data to your backend or state management store
  };

  return (
    <View>
      <Text>Tell us about your health and dietary preferences</Text>
      <View>
        <Text>Health Condition:</Text>
        <TextInput
          value={healthCondition}
          onChangeText={setHealthCondition}
        />
      </View>
      <View>
        <Text>Dietary Preferences:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch
            value={vegan}
            onValueChange={setVegan}
          />
          <Text>Vegan</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch
            value={vegetarian}
            onValueChange={setVegetarian}
          />
          <Text>Vegetarian</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch
            value={glutenFree}
            onValueChange={setGlutenFree}
          />
          <Text>Gluten-Free</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch
            value={dairyFree}
            onValueChange={setDairyFree}
          />
          <Text>Dairy-Free</Text>
        </View>
      </View>
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};

export default QuizPage;
