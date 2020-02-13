import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Headerbutton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/mealsActions';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

function MealDetailScreen(props) {
  const availableMeals = useSelector(state => state.meals.meals);
  const { mealId } = props.route.params;
  const currentMealisFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  // using dispatch
  const dispatch = useDispatch();
  const toggleDispatchHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  // set the toggleFav function in the header

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleDispatchHandler });
  }, [toggleDispatchHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFavMeal: currentMealisFavorite });
  }, [currentMealisFavorite]);

  // get the toggleFav function from the header
  const { toggleFav } = props.route.params;
  const { isFavMeal } = props.route.params;

  props.navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={Headerbutton}>
        <Item
          title='Favorite'
          iconName={isFavMeal ? 'ios-heart' : 'ios-heart-empty'}
          onPress={toggleFav}
        />
      </HeaderButtons>
    )
  });
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1
  }
});

export default MealDetailScreen;
