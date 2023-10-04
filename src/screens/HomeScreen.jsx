import {View, Text} from 'react-native';
import React from 'react';
import {dataRecipes} from '../dummy/recipes';

const HomeScreen = () => {
  const data = dataRecipes.data;

  return (
    <View>
      <Text>HomeScreen</Text>

      {data.map((item, index) => (
        <Text key={index}>{item.title}</Text>
      ))}
    </View>
  );
};

export default HomeScreen;
