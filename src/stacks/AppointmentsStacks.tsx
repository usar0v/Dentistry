import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../utils/colors';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import PatientScreen from "../screens/PatientScreen";
import AddAppoinmentScreen from "../screens/AddAppointmentScreen";

const Stack = createNativeStackNavigator();

function AppointmentsStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Журнал приемов',
            headerTitleAlign: 'center',
            headerTintColor: Colors.blue,
          }}
          name={'AppointmentsScreen'}
          component={AppointmentsScreen}
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

export default AppointmentsStack;
