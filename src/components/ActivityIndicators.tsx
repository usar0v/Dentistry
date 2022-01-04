import React from 'react';
import {ActivityIndicator, Text} from 'react-native-paper';
import {View} from 'react-native';
import {Colors} from '../utils/colors';

const ActivityIndicators = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={30} color={Colors.blue} />
      <Text>Подождите, идет загрузка...</Text>
    </View>
  );
};

export default ActivityIndicators;
