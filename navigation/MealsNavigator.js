import React from 'react';
import { BlurView } from 'expo-blur';
import { Button } from 'react-native';
import {
  createStackNavigator,
  HeaderTitle,
  HeaderBackground
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';
import { Modal } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Headerbutton from '../components/HeaderButton';

const Stack = createStackNavigator();

function MealsNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode='modal'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name='Categories'
          component={CategoriesScreen}
          options={{
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
        <Stack.Screen
          name='MealDetail'
          component={MealDetailScreen}
          options={{
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={Headerbutton}>
                <Item
                  title='Favorite'
                  iconName='ios-heart'
                  onPress={() => {
                    console.log('Mark as favorite');
                  }}
                />
              </HeaderButtons>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
