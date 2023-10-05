import {View, Text} from 'react-native';
import React from 'react';

const RecipeDetailsScreen = ({route}) => {
  const id = route.params.id;
  console.log(id);

  return (
    <View>
      <Text>RecipeDetailsScreen</Text>
    </View>
  );
};

export default RecipeDetailsScreen;
