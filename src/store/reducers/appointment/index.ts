import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppointment} from '../../../models/IAppointment';
import {getAppointments} from './action-creators';

interface PatientState {
  appointments: IAppointment[];
  isLoading: boolean;
}

const initialState: PatientState = {
  appointments: [],
  isLoading: false,
};

export const AppointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: {
    [getAppointments.pending.type]: state => {
      state.isLoading = true;
    },
    [getAppointments.fulfilled.type]: (
      state,
      action: PayloadAction<IAppointment[]>,
    ) => {
      state.isLoading = false;
      state.appointments = action.payload;
    },
  },
});

export default AppointmentSlice.reducer;
