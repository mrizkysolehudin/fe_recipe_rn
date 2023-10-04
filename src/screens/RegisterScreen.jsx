import React from 'react';
import {Button, Text, View} from 'native-base';
import {StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import {colors} from '../assets/style/colors';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        color={colors.yellow}
        h={6}
        pt={2}
        mt={-39}
        textAlign={'center'}
        style={{fontSize: 30}}>
        Let's Get Started !
      </Text>
      <Text
        color={colors.darkPrimary}
        textAlign={'center'}
        style={{marginTop: 10}}>
        Create new account to access all features
      </Text>

      <View style={{paddingHorizontal: 28, marginTop: 40}}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={colors.primary}
          autoComplete="name"
        />
        <TextInput
          style={styles.input}
          placeholder="E-Mail"
          placeholderTextColor={colors.primary}
          autoComplete="email"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor={colors.primary}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Create New Password"
          placeholderTextColor={colors.primary}
          autoComplete="password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor={colors.primary}
          autoComplete="password"
          secureTextEntry={true}
        />
      </View>

      <Button
        style={{
          backgroundColor: colors.yellow,
          padding: 10,
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 40,
        }}>
        CREATE
      </Button>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text mr={1} color={colors.darkPrimary}>
          Already have account?
        </Text>
        <TouchableHighlight
          underlayColor={colors.primary}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: colors.yellow}}>Login Here</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
