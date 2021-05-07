/* eslint-disable */
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Money } from '../../../btools/type/v1/money';

export interface Invoice {
  /**
   *  Resource name, for example, "accounts/bjerkio/customers/1337/invoices/1337"
   */
  name: string;
  description: string;
  /**
   *  Optional. Resource labels associated with this invoice.
   *  No more than 64 user labels can be associated with a given resource.  Label
   *  keys and values can be no longer than 63 characters.
   */
  labels: { [key: string]: string };
  lines: Invoice_InvoiceLine[];
  status: Invoice_InvoiceStatus;
  createTime: Timestamp | undefined;
  updateTime: Timestamp | undefined;
  expireTime: Timestamp | undefined;
}

export interface Invoice_LabelsEntry {
  key: string;
  value: string;
}

export interface Invoice_InvoiceLine {
  productId: string;
  description: string;
  price: Money | undefined;
  quantity: number;
}

export enum Invoice_InvoiceStatus {
  INVOICE_STATUS_UNSPECIFIED = 0,
  INVOICE_STATUS_PENDING = 1,
  INVOICE_STATUS_SENT = 2,
  INVOICE_STATUS_AWAITING_PAYMENT = 3,
  INVOICE_STATUS_PAID = 4,
  INVOICE_STATUS_DEPT_COLLECTION = 5,
  UNRECOGNIZED = -1,
}
