import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealDetailScreen(props) {
  const { mealId } = props.route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  props.navigation.setOptions({
    headerTitle: selectedMeal.title
  });
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='Go back'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
