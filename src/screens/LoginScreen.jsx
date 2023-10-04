import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'native-base';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button onPress={() => navigation.navigate('Register')}>
        go to register
      </Button>
    </View>
  );
};

export default LoginScreen;
