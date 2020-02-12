import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function FiltersScreen() {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen</Text>
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

export default FiltersScreen;
