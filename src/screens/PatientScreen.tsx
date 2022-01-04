import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import {getUser} from '../store/reducers/patient/action-creators';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IPatient} from '../models/IPatient';
import {IAppointment} from '../models/IAppointment';

const PatientScreen: FC = () => {
  const {user, isLoading} = useAppSelector(state => state.PatientsReducer);
  const dispatch = useAppDispatch();
  const route = useRoute();
  const {navigate} = useNavigation();

  const [patient, setPatient] = useState<IPatient>(route.params.item);

  const id = patient._id;

  useEffect(() => {
    dispatch(getUser<string>(id));
  }, []);

  return (
    <>
      <View style={{flex: 0.2, backgroundColor: '#ffffff'}}>
        <View style={styles.view_text}>
          <Text style={styles.text_name}>{patient.fullname}</Text>
          <Text>{patient.phone}</Text>
          <View style={styles.viewButton}>
            <View style={styles.buttonContainerPlus}>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel: ${patient.phone}`)}
                style={styles.touchableOpacityPlus}>
                <Icon name={'phone'} size={25} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.patienAppointments}>
        <View style={styles.view_text}>
          {isLoading ? (
            <ActivityIndicator size={35} color={'#2A86FF'} />
          ) : (
            user.appointments?.map((item: IAppointment) => (
              <View style={styles.appointmentCard}>
                <View style={styles.appoinmentCardRow}>
                  <Icon name={'tooth'} size={16} color={'#A3A3A3'} />
                  <Text style={styles.toothText}>
                    Зуб:{' '}
                    <Text style={{fontWeight: 'bold', color: '#000000'}}>
                      {item.dentNumber}
                    </Text>
                  </Text>
                </View>
                <View style={styles.appoinmentCardRow}>
                  <Icon name={'heart'} size={16} color={'#A3A3A3'} />
                  <Text style={styles.toothText}>
                    Диагноз:{' '}
                    <Text style={{fontWeight: 'bold', color: '#000000'}}>
                      {' '}
                      {item.diagnosis}
                    </Text>
                  </Text>
                </View>
                <View style={styles.appoinmentCardRow}>
                  <Text style={styles.groupDate}>
                    {item.date} - <Text>{item.time}</Text>
                  </Text>
                  <Text style={styles.groupDate2}>{item.price} С</Text>
                </View>
              </View>
            ))
          )}
        </View>
      </View>
      <FAB
        style={styles.fab}
        color={'#FFF'}
        large
        icon="plus"
        onPress={() =>
          navigate('AddAppoinmentScreen', {
            id: patient._id,
          })
        }
      />
    </>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({
  text_name: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 30,
    marginBottom: 3,
  },
  view_text: {
    padding: 25,
  },
  phoneText: {
    fontSize: 16,
    color: '#8b979f',
  },
  touchableOpacity: {
    borderRadius: 30,
    backgroundColor: '#2A86FF',
    height: 45,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacityPlus: {
    borderRadius: 30,
    backgroundColor: '#84D269',
    height: 45,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
  },
  touchableOpacityText: {
    color: '#ffffff',
    fontSize: 16,
  },
  viewButton: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerPlus: {
    position: 'absolute',
    right: 5,
    top: -85,
  },
  patienAppointments: {
    flex: 1,
  },
  appointmentCard: {
    shadowColor: 'gray',
    elevation: 0.5,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    padding: 20,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  toothText: {
    fontSize: 16,
    marginLeft: 10,
  },
  appoinmentCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3.5,
    marginTop: 3.5,
  },
  groupDate: {
    marginTop: 7,
    lineHeight: 28,
    textAlign: 'center',
    borderRadius: 18,
    backgroundColor: '#4294FF',
    fontSize: 14,
    fontWeight: 'bold',
    width: '55%',
    height: 32,
    marginRight: 23,
    color: '#FFFFFF',
  },
  groupDate2: {
    position: 'absolute',
    right: 13,
    lineHeight: 28,
    textAlign: 'center',
    borderRadius: 18,
    backgroundColor: '#86E58E45',
    fontSize: 14,
    fontWeight: 'bold',
    width: 72,
    height: 32,
    color: '#84D269',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#2A86FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});
