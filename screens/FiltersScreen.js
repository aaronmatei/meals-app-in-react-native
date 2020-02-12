import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Headerbutton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: '#00ff00' }}
        thumbColor='#fff'
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

function FiltersScreen(props) {
  const { navigation, route } = props;

  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegeterian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluttenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };
    console.log(appliedFilters);
  }, [isGluttenFree, isLactoseFree, isVegan, isVegetarian]);

  props.navigation.setOptions({
    headerTitle: 'Filtered Results',
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={Headerbutton}>
        <Item title='Menu' iconName='md-save' onPress={route.params.save} />
      </HeaderButtons>
    )
  });

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label='Glutten-free'
        value={isGluttenFree}
        onChange={newValue => setIsGluttenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        value={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        value={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        value={isVegetarian}
        onChange={newValue => setIsVegeterian(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%'
  }
});

export default FiltersScreen;
