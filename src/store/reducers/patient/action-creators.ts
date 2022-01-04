import axios from 'axios';
import {API_URL} from '../../../utils/settings';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {IPatient} from '../../../models/IPatient';

export const getPatients = createAsyncThunk('patient/getPatients', async () => {
  const {data} = await axios.get<IPatient[]>(`${API_URL}/patients`);
  // @ts-ignore
  return data.data;
});

export const getUser = createAsyncThunk('patient/getPatient', async id => {
  console.log(id);
  const {data} = await axios.get<IPatient[]>(`${API_URL}/patients/` + id);
  // @ts-ignore
  return data.data;
});
