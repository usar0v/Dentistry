import React, {FC, useEffect, useState} from 'react';
import {Avatar, List, TextInput} from 'react-native-paper';
import {FlatList, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import ActivityIndicators from '../components/ActivityIndicators';
import {getPatients} from '../store/reducers/patient/action-creators';
import {Colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import AddButtonComponent from '../components/AddButtonComponent';

const AppointmentsScreen: FC = () => {
  const [filterData, setFilterData] = useState<string>('');
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  const {patients, isLoading} = useAppSelector(state => state.PatientsReducer);

  const {navigate} = useNavigation();

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPatients());
  };

  if (isLoading) {
    return <ActivityIndicators />;
  }
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <TextInput
        onChangeText={e => setFilterData(e)}
        style={{backgroundColor: '#fff', marginTop: 5}}
        placeholder={'Поиск пациента...'}
      />
      <FlatList
        data={patients.filter(
          item =>
            item.fullname.toLowerCase().indexOf(filterData.toLowerCase()) >= 0,
        )}
        horizontal={false}
        onRefresh={() => onRefresh}
        refreshing={refreshing}
        renderItem={({item}) => (
          <List.Item
            key={item._id}
            title={item.fullname}
            description={`+${item.phone}`}
            onPress={() => navigate('PatientScreen', {item})}
            left={() => (
              <Avatar.Text
                style={{backgroundColor: Colors.violet}}
                label={item.fullname[0].toUpperCase()}
              />
            )}
          />
        )}
      />
      <AddButtonComponent route={'AddPatient'} />
    </View>
  );
};

export default AppointmentsScreen;
