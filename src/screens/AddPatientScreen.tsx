import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Colors} from '../utils/colors';
import axios from 'axios';
import {API_URL} from '../utils/settings';
import {useNavigation} from '@react-navigation/native';

const AddPatientScreen: FC = () => {
  const [userName, setUsername] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {navigate} = useNavigation();

  const AddPatient = () => {
    setLoading(true);
    axios
      .post(`${API_URL}/patients`, {
        phone: phoneNumber,
        fullname: userName,
      })
      .then(res => {
        navigate('PatientsScreen');
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  console.log(userName, phoneNumber);
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <TextInput
        mode={'flat'}
        style={styles.input}
        label="Имя и Фамилия"
        onChangeText={text => setUsername(text)}
        left={<TextInput.Icon name="account" color={Colors.blue} />}
        autoFocus
      />
      <TextInput
        mode={'flat'}
        style={styles.input}
        label="Номер телефона"
        keyboardType={'numeric'}
        onChangeText={text => setPhoneNumber(text)}
        left={<TextInput.Icon name="phone" color={Colors.blue} />}
      />
      <Button
        loading={loading}
        style={{margin: 40, backgroundColor: Colors.green, borderRadius: 40}}
        icon="plus"
        mode="contained"
        onPress={() => AddPatient()}>
        Добавить пациента
      </Button>
    </View>
  );
};

export default AddPatientScreen;

const styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: Colors.white,
  },
});
