/* eslint-disable */
import { Invoice } from '../../../btools/billing/v1/invoice';
import { FieldMask } from '../../../google/protobuf/field_mask';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';

export interface ListInvoicesRequest {
  /**
   *  The maximum number of items to return.
   */
  pageSize: number;
  /**
   *  The next_page_token value returned from a previous List request, if any.
   */
  pageToken: string;
}

export interface ListInvoicesResponse {
  invoices: Invoice[];
  /**
   *  Token to retrieve the next page of results, or empty if there are no
   *  more results in the list.
   */
  nextPageToken: string;
}

export interface GetInvoiceRequest {
  name: string;
}

export interface GetInvoiceResponse {
  invoice: Invoice | undefined;
}

export interface CreateInvoiceRequest {
  invoice: Invoice | undefined;
}

export interface CreateInvoiceResponse {
  invoice: Invoice | undefined;
}

export interface UpdateInvoiceRequest {
  /**
   *  The book resource which replaces the resource on the server.
   */
  invoice: Invoice | undefined;
  /**
   *  The update mask applies to the resource. For the `FieldMask` definition,
   *  see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  updateMask: FieldMask | undefined;
}

export interface UpdateInvoiceResponse {
  invoice: Invoice | undefined;
}

export interface InvoiceServiceClient {
  listInvoices(request: ListInvoicesRequest): Observable<ListInvoicesResponse>;

  getInvoice(request: GetInvoiceRequest): Observable<GetInvoiceResponse>;

  createInvoice(
    request: CreateInvoiceRequest,
  ): Observable<CreateInvoiceResponse>;

  updateInvoice(
    request: UpdateInvoiceRequest,
  ): Observable<UpdateInvoiceResponse>;
}

export interface InvoiceServiceController {
  listInvoices(
    request: ListInvoicesRequest,
  ):
    | Promise<ListInvoicesResponse>
    | Observable<ListInvoicesResponse>
    | ListInvoicesResponse;

  getInvoice(
    request: GetInvoiceRequest,
  ):
    | Promise<GetInvoiceResponse>
    | Observable<GetInvoiceResponse>
    | GetInvoiceResponse;

  createInvoice(
    request: CreateInvoiceRequest,
  ):
    | Promise<CreateInvoiceResponse>
    | Observable<CreateInvoiceResponse>
    | CreateInvoiceResponse;

  updateInvoice(
    request: UpdateInvoiceRequest,
  ):
    | Promise<UpdateInvoiceResponse>
    | Observable<UpdateInvoiceResponse>
    | UpdateInvoiceResponse;
}

export function InvoiceServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'listInvoices',
      'getInvoice',
      'createInvoice',
      'updateInvoice',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('InvoiceService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('InvoiceService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const INVOICE_SERVICE_NAME = 'InvoiceService';
