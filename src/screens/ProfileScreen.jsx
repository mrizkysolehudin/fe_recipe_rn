import {View, Text} from 'react-native';
import React from 'react';
import BottomTabs from '../components/Global/BottomTabs';

const ProfileScreen = ({route}) => {
  const openTab = route.name || 'Profile';

  return (
    <View style={{position: 'relative', height: '100%'}}>
      <Text>ProfileScreen</Text>

      <BottomTabs openTab={openTab} />
    </View>
  );
};

export default ProfileScreen;
