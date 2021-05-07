/* eslint-disable */
import { Customer } from '../../../btools/customer/v1/customer';
import { FieldMask } from '../../../google/protobuf/field_mask';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';

export interface ListCustomersRequest {
  /**
   *  The parent resource name, for example, "accounts/bjerkio".
   */
  parent: string;
  /**
   *  The maximum number of items to return.
   */
  pageSize: number;
  /**
   *  The next_page_token value returned from a previous List request, if any.
   */
  pageToken: string;
}

export interface ListCustomersResponse {
  customers: Customer[];
  /**
   *  Token to retrieve the next page of results, or empty if there are no
   *  more results in the list.
   */
  nextPageToken: string;
}

export interface GetCustomerRequest {
  name: string;
}

export interface GetCustomerResponse {
  customer: Customer | undefined;
}

export interface CreateCustomerRequest {
  /**
   *  The parent resource name, for example, "accounts/bjerkio".
   */
  parent: string;
  customer: Customer | undefined;
}

export interface CreateCustomerResponse {
  customer: Customer | undefined;
}

export interface UpdateCustomerRequest {
  /**
   *  The book resource which replaces the resource on the server.
   */
  customer: Customer | undefined;
  /**
   *  The update mask applies to the resource. For the `FieldMask` definition,
   *  see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  updateMask: FieldMask | undefined;
}

export interface UpdateCustomerResponse {
  customer: Customer | undefined;
}

export interface CustomerServiceClient {
  listCustomers(
    request: ListCustomersRequest,
  ): Observable<ListCustomersResponse>;

  getCustomer(request: GetCustomerRequest): Observable<GetCustomerResponse>;

  createCustomer(
    request: CreateCustomerRequest,
  ): Observable<CreateCustomerResponse>;

  updateCustomer(
    request: UpdateCustomerRequest,
  ): Observable<UpdateCustomerResponse>;
}

export interface CustomerServiceController {
  listCustomers(
    request: ListCustomersRequest,
  ):
    | Promise<ListCustomersResponse>
    | Observable<ListCustomersResponse>
    | ListCustomersResponse;

  getCustomer(
    request: GetCustomerRequest,
  ):
    | Promise<GetCustomerResponse>
    | Observable<GetCustomerResponse>
    | GetCustomerResponse;

  createCustomer(
    request: CreateCustomerRequest,
  ):
    | Promise<CreateCustomerResponse>
    | Observable<CreateCustomerResponse>
    | CreateCustomerResponse;

  updateCustomer(
    request: UpdateCustomerRequest,
  ):
    | Promise<UpdateCustomerResponse>
    | Observable<UpdateCustomerResponse>
    | UpdateCustomerResponse;
}

export function CustomerServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'listCustomers',
      'getCustomer',
      'createCustomer',
      'updateCustomer',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('CustomerService', method)(
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
      GrpcStreamMethod('CustomerService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const CUSTOMER_SERVICE_NAME = 'CustomerService';
