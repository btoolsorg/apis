/* eslint-disable */
import { Address } from '../../../btools/type/v1/address';
import { Timestamp } from '../../../google/protobuf/timestamp';

export interface Customer {
  /**
   *  Resource name, for example, "accounts/bjerkio/customers/1337"
   */
  name: string;
  /**
   *  Name of customer
   */
  title: string;
  addresses: Address[];
  /**
   *  Vat ID, organization number (Company Identification Number)
   */
  vatIdentification: string;
  createTime: Timestamp | undefined;
  updateTime: Timestamp | undefined;
}
