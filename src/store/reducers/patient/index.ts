import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPatient} from '../../../models/IPatient';
import {getUser, getPatients} from './action-creators';
import {IUser} from '../../../models/IUser';

interface PatientState {
  user: IUser | {};
  patients: IPatient[];
  isLoading: boolean;
}

const initialState: PatientState = {
  user: {},
  patients: [],
  isLoading: false,
};

export const PatientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {},
  extraReducers: {
    [getPatients.pending.type]: state => {
      state.isLoading = true;
    },
    [getPatients.fulfilled.type]: (
      state,
      action: PayloadAction<IPatient[]>,
    ) => {
      state.isLoading = false;
      state.patients = action.payload;
    },
    [getUser.pending.type]: state => {
      state.isLoading = true;
    },
    [getUser.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

export default PatientSlice.reducer;
