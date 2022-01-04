import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../utils/colors';

export type Props = {
  item: any;
};

const AppoinmentComponent: FC<Props> = ({item}) => {
  const {patient, diagnosis, time} = item;
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          navigation.navigate('PatientScreen', {item: patient});
        }}
        style={styles.groupItem}>
        <Avatar.Text
          labelStyle={{textAlign: 'center'}}
          style={{
            marginRight: 15,
            backgroundColor: Colors.violet,
          }}
          size={55}
          label={patient?.fullname[0].toUpperCase()}
        />
        <View style={{flex: 1}}>
          <Text style={styles.fullName}>{patient?.fullname}</Text>
          <Text style={styles.grayText}>{diagnosis}</Text>
        </View>
        {time && <Text style={styles.groupDate}>{time}</Text>}
      </TouchableOpacity>
    </>
  );
};

export default AppoinmentComponent;

const styles = StyleSheet.create({
  groupItem: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d2dbde',
  },
  groupDate: {
    lineHeight: 28,
    textAlign: 'center',
    borderRadius: 18,
    backgroundColor: '#e9f5ff',
    fontSize: 14,
    fontWeight: 'bold',
    width: 72,
    height: 32,
    color: '#4294ff',
    marginLeft: 10,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#000000',
  },
  grayText: {
    fontSize: 16,
    color: '#8B979F',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
  },
});
