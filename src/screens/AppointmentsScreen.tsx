import React, {FC, useEffect, useState} from 'react';
import {Text} from 'react-native-paper';
import {SectionList, StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import {getAppointments} from '../store/reducers/appointment/action-creators';
import ActivityIndicators from '../components/ActivityIndicators';
import {Colors} from '../utils/colors';
import AppoinmentComponent from '../components/AppointementComponent';

const AppointmentsScreen: FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  const {appointments, isLoading} = useAppSelector(
    state => state.AppointmentsReducer,
  );

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAppointments());
  };

  if (isLoading) {
    return <ActivityIndicators />;
  }
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <SectionList
        // @ts-ignore
        sections={appointments}
        onRefresh={() => onRefresh}
        refreshing={refreshing}
        keyExtractor={item => item._id}
        renderItem={({item}) => <AppoinmentComponent item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.groupTitle}>{title}</Text>
        )}
      />
    </View>
  );
};

export default AppointmentsScreen;

const styles = StyleSheet.create({
  groupTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000000',
    marginLeft: 20,
    marginTop: 25,
    padding: 0.2,
  },
});
