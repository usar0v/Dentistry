import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AppointmentsReducer from './reducers/appointment/index';
import PatientsReducer from './reducers/patient/index';

const rootReducer = combineReducers({
  AppointmentsReducer,
  PatientsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
