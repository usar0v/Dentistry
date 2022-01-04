import {IAppointment} from "./IAppointment";

export interface IUser {
  _id: string;
  fullname: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  appointments: IAppointment[];
}
