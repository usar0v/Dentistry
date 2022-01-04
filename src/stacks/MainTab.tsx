import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppointmentsStacks from './AppointmentsStacks';
import PatientsStacks from './PatientsStack';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            title: 'Клиенты',
            headerShown: false,
            // tabBarIcon: 'accounts'
          }}
          name="Patients"
          component={AppointmentsStacks}
        />
        <Tab.Screen
          options={{
            title: 'Пациенты',
            headerShown: false,
            // tabBarIcon: 'accounts'
          }}
          name="Appointments"
          component={PatientsStacks}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
