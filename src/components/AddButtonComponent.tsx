import React, {FC} from 'react';
import {Avatar} from 'react-native-paper';
import {Colors} from '../utils/colors';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export type Props = {
  route: string;
};

const AddButtonComponent: FC<Props> = ({route}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 15,
        right: 15,
      }}
      // @ts-ignore
      onPress={() => navigation.navigate(route)}>
      <Avatar.Icon
        style={{backgroundColor: Colors.blue}}
        size={65}
        icon="plus"
      />
    </TouchableOpacity>
  );
};

export default AddButtonComponent;
