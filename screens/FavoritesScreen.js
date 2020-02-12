import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Headerbutton from '../components/HeaderButton';

function FavoritesScreen(props) {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  props.navigation.setOptions({
    headerTitle: 'My Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={Headerbutton}>
        <Item
          title='Menu'
          iconName='md-menu'
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  });
  return <MealList listData={favMeals} navigation={props.navigation} />;
}

export default FavoritesScreen;
