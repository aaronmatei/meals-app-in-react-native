import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

function CategoryMealsScreen(props) {
  const { categoryId } = props.route.params;
  const { title } = props.route.params;

  // using reducer to get meals
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  props.navigation.setOptions({
    title: title
  });

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
}

export default CategoryMealsScreen;
