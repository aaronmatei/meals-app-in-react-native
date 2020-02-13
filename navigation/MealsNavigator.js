import React from 'react';
import { BlurView } from 'expo-blur';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import ShopScreen from '../screens/ShopScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Headerbutton from '../components/HeaderButton';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();

function MealsNavigator(props) {
  return (
    <Stack.Navigator
      mode='modal'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'open-sans-bold'
        }
      }}
    >
      <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          headerStyle: { backgroundColor: '#ffa500' },
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
        options={{}}
      />
    </Stack.Navigator>
  );
}

const TabStack =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();
function MealsFavTabNavigator(props) {
  return (
    <TabStack.Navigator
      shifting={true}
      tabBarOptions={{
        activeTintColor: '#f4511e'
      }}
      barStyle={{ backgroundColor: '#f4511e' }}
    >
      <TabStack.Screen
        name='Meals'
        component={MealsNavigator}
        options={{
          tabBarColor: '#ffa500',
          tabBarLabel: 'Meals',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons name='ios-restaurant' size={25} color={tabInfo.color} />
            );
          }
        }}
      />
      <TabStack.Screen
        name='Favorites'
        component={FavMealsNavigator}
        options={{
          tabBarColor: '#f4511e',
          tabBarLabel: 'Favorites',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons name='ios-heart' size={25} color={tabInfo.color} />
            );
          }
        }}
      />
      <TabStack.Screen
        name='Shop'
        component={MealsNavigator}
        options={{
          tabBarColor: 'green',
          tabBarLabel: 'Shop',
          tabBarIcon: tabInfo => {
            return <Ionicons name='md-cart' size={25} color={tabInfo.color} />;
          }
        }}
      />
    </TabStack.Navigator>
  );
}

const FavMealsStack = createStackNavigator();
function FavMealsNavigator(props) {
  return (
    <FavMealsStack.Navigator
      mode='modal'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'open-sans-bold'
        }
      }}
    >
      <FavMealsStack.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{ headerStyle: { backgroundColor: '#f4511e' } }}
      />
      <FavMealsStack.Screen
        name='MealDetail'
        component={MealDetailScreen}
        options={{}}
      />
    </FavMealsStack.Navigator>
  );
}

const filtersStack = createStackNavigator();
function FiltersNavigator() {
  return (
    <filtersStack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'open-sans-bold'
        }
      }}
    >
      <filtersStack.Screen
        name='filtered results'
        component={FiltersScreen}
        options={{ headerStyle: { backgroundColor: '#42e6f5' } }}
      />
    </filtersStack.Navigator>
  );
}

const MainNavigator = createDrawerNavigator();
function AppDrawer() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        drawerStyle={{
          backgroundColor: '#fff'
        }}
      >
        <MainNavigator.Screen
          name='Home'
          component={MealsNavigator}
          options={{}}
        />
        <MainNavigator.Screen
          name='Favorite Meals'
          component={MealsFavTabNavigator}
          options={{}}
        />
        <MainNavigator.Screen name='Filters' component={FiltersNavigator} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
export default AppDrawer;
