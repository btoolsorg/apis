/* eslint-disable */
import { Money } from '../../../btools/type/money';

export interface Invoice {
  name: string;
  customerId: string;
  description: string;
  lines: Invoice_InvoiceLine[];
  status: Invoice_InvoiceStatus;
  createdAt: string;
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
