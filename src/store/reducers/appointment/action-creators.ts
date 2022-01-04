import axios from 'axios';
import {IAppointment} from '../../../models/IAppointment';
import {API_URL} from '../../../utils/settings';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getAppointments = createAsyncThunk(
  'appointment/getAppointement',
  async () => {
    const {data} = await axios.get<IAppointment[]>(`${API_URL}/appointments`);
    // @ts-ignore
    return data.data;
  },
);
