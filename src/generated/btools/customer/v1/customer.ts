/* eslint-disable */
import { Address } from '../../../btools/type/address';
import { Timestamp } from '../../../google/protobuf/timestamp';

export interface Customer {
  /**
   *  Resource name, for example, "accounts/bjerkio/tripletex/_default/customer/1337"
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
  /**
   *  External identifier (e.g. the internal ID of this resource at Tripletex)
   */
  externalId: string;
  createTime: Timestamp | undefined;
  updateTime: Timestamp | undefined;
}
