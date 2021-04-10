/* eslint-disable */
import { Timestamp } from '../../../google/protobuf/timestamp';

export interface BillingSystem {
  /**
   *  Resource name, for example, "accounts/bjerkio/tripletex/1337"
   */
  name: string;
  /**
   *  Name of integration
   */
  title: string;
  createTime: Timestamp | undefined;
  updateTime: Timestamp | undefined;
  tripletex: BillingSystem_TripletexSettings | undefined;
}

export interface BillingSystem_TripletexSettings {
  employeeToken: string;
}
