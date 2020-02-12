import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

function CategoryMealsScreen(props) {
  const { categoryId } = props.route.params;
  const { title } = props.route.params;

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  props.navigation.setOptions({
    title: title
  });

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
}

export default CategoryMealsScreen;
