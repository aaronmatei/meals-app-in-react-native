import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row'
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 5
  },
  mealHeader: {
    height: '90%'
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  bgImage: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 5,
    paddingHorizontal: 12
  }
});

export default MealItem;
