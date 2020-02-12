import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';

function ShopScreen() {
  return (
    <View style={styles.screen}>
      <Text>The Shop is here</Text>

      <CategoriesScreen />
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

export default ShopScreen;
