import {IPatient} from './IPatient';

export interface IAppointment {
  _id: string;
  title: string;
  dentNumber: number;
  price: number;
  diagnosis: string;
  date: string;
  time: string;
  patient: IPatient[];
}
