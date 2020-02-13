import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Headerbutton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignContent: 'center',
    margin: 10,
    paddingVertical: 30,
    paddingHorizontal: 70
  }
});

function FavoritesScreen(props) {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No Favorite meals found..Start adding some!...</Text>
      </View>
    );
  }

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
