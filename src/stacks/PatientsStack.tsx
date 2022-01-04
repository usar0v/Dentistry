import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../utils/colors';
import PatientsScreen from '../screens/PatientsScreen';
import AddPatientScreen from '../screens/AddPatientScreen';
import PatientScreen from "../screens/PatientScreen";
import AddAppoinmentScreen from "../screens/AddAppointmentScreen";

const Stack = createNativeStackNavigator();

function PatientsStacks() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Пациенты',
            headerTitleAlign: 'center',
            headerTintColor: Colors.blue,
          }}
          name={'PatientsScreen'}
          component={PatientsScreen}
        />
        <Stack.Screen
          options={{
            title: 'Карта Клиента',
            headerTitleAlign: 'center',
            headerTintColor: Colors.blue,
          }}
          name={'PatientScreen'}
          component={PatientScreen}
        />
        <Stack.Screen
          options={{
            title: 'Добавить пациента',
            headerTitleAlign: 'center',
            headerTintColor: Colors.blue,
          }}
          name={'AddPatient'}
          component={AddPatientScreen}
        />
        <Stack.Screen
          options={{
            title: 'Добавить прием',
            headerTitleAlign: 'center',
            headerTintColor: Colors.blue,
          }}
          name={'AddAppoinmentScreen'}
          component={AddAppoinmentScreen}
        />
      </Stack.Navigator>
    </>
  );
}

export default PatientsStacks;
