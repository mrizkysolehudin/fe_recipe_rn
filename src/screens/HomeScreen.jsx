import {View, Text} from 'react-native';
import React from 'react';
import {dataRecipes} from '../dummy/recipes';
import BottomTabs from '../components/Global/BottomTabs';

const HomeScreen = ({route}) => {
  const openTab = route.name || 'Home';

  const data = dataRecipes.data;

  return (
    <View style={{position: 'relative', height: '100%'}}>
      <Text>HomeScreen</Text>

      {data.map((item, index) => (
        <Text key={index}>{item.title}</Text>
      ))}

      <BottomTabs openTab={openTab} />
    </View>
  );
};

export default HomeScreen;
