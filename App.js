import {View, Text} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <View>
      <Text>
        App <MaterialIcons name="home" size={30} color="#900" />
      </Text>
    </View>
  );
};

export default App;
