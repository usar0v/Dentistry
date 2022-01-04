import React, {useState, FC} from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import {API_URL} from '../utils/settings';

const AddAppoinmentScreen: FC = () => {
  const route = useRoute();
  const {navigate} = useNavigation();
  const {id} = route.params;

  const [values, setValues] = useState<any>({
    diagnosis: '',
    dentNumber: '',
    price: '',
    date: '',
    time: '',
    patient: id,
  });

  const fieldsName = {
    diagnosis: 'Диагноз',
    dentNumber: 'Номер Зуба',
    price: 'Цена',
    date: 'Дата',
    time: 'Время',
  };

  const setFiledValue = (name: string, value: string) =>
    setValues({
      ...values,
      [name]: value,
    });

  const handleInputChange = (name: string, value: string) => {
    setFiledValue(name, value);
  };

  const onSumbit = () => {
    axios
      .post(`${API_URL}/appointments`, values)
      .then(() => {
        navigate('AppointmentsScreen');
        console.log(values);
      })
      .catch(e => {
        if (e.response && e.response.data.message) {
          e.response.data.message.forEach(error => {
            const fieldName = error.param;
            Alert.alert(
              'Ошибка!',
              `Поле "${fieldsName[fieldName]}" указано неверено.`,
            );
          });
        }
      });
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#ffffffff'}}>
        <View style={{backgroundColor: '#ffffff'}}>
          <TextInput
            style={[styles.text_input]}
            label={'Номер зуба'}
            onChangeText={text => handleInputChange('dentNumber', text)}
            value={values.dentNumber}
            keyboardType="phone-pad"
            autoFocus
          />
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '100%'}}>
              <TextInput
                style={[styles.text_input]}
                label={'Диагноз'}
                onChangeText={text => setFiledValue('diagnosis', text)}
                value={values.diagnosis}
              />
            </View>
          </View>

          <TextInput
            style={styles.text_input}
            label={'Цена'}
            keyboardType="phone-pad"
            dataDetectorType={'phoneNumber'}
            onChangeText={text => setFiledValue('price', text)}
            value={values.price}
          />
          <View style={{flexDirection: 'row', width: '70%', marginTop: 17}}>
            <View style={{width: '70%', marginLeft: 9}}>
              <DatePicker
                style={{width: '100%'}}
                date={new Date()}
                mode="date"
                placeholder="Дата"
                format="YYYY-MM-DD"
                minDate={new Date()}
                confirmBtnText="Сохранить"
                cancelBtnText="Отмена"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    borderBottomWidth: 0.8,
                    marginTop: '36%',
                  },
                  dateText: {
                    fontSize: 17,
                  },
                }}
                date={values.date}
                onDateChange={text => setFiledValue('date', text)}
              />
            </View>
            <View style={{width: '70%', marginLeft: 0}}>
              <TextInput
                style={{
                  marginTop: 12,
                  backgroundColor: '#ffffff',
                  margin: 10,
                  marginBottom: 5,
                }}
                label={'Время'}
                onChangeText={text => setFiledValue('time', text)}
                value={values.time}
              />
            </View>
          </View>
          <View style={styles.viewButton}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => onSumbit()}>
                <Text style={styles.touchableOpacityText}>
                  <Text>+</Text> Добавить пациента
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddAppoinmentScreen;

const styles = StyleSheet.create({
  text_input: {
    marginTop: 12,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  touchableOpacity: {
    borderRadius: 30,
    backgroundColor: '#84D269',
    height: 45,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.8,
  },
  touchableOpacityText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
