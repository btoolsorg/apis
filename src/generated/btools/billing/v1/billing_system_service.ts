/* eslint-disable */
import { BillingSystem } from '../../../btools/billing/v1/billing_system';
import { FieldMask } from '../../../google/protobuf/field_mask';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';

export interface ListBillingSystemsRequest {
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

export interface ListBillingSystemsResponse {
  billingSystems: BillingSystem[];
  /**
   *  Token to retrieve the next page of results, or empty if there are no
   *  more results in the list.
   */
  nextPageToken: string;
}

export interface GetBillingSystemRequest {
  name: string;
}

export interface GetBillingSystemResponse {
  billingSystem: BillingSystem | undefined;
}

export interface CreateBillingSystemRequest {
  /**
   *  The parent resource name, for example, "accounts/bjerkio".
   */
  parent: string;
  billingSystem: BillingSystem | undefined;
}

export interface CreateBillingSystemResponse {
  billingSystem: BillingSystem | undefined;
}

export interface UpdateBillingSystemRequest {
  /**
   *  The book resource which replaces the resource on the server.
   */
  billingSystem: BillingSystem | undefined;
  /**
   *  The update mask applies to the resource. For the `FieldMask` definition,
   *  see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  updateMask: FieldMask | undefined;
}

export interface UpdateBillingSystemResponse {
  billingSystem: BillingSystem | undefined;
}

export interface BillingSystemServiceClient {
  listBillingSystems(
    request: ListBillingSystemsRequest,
  ): Observable<ListBillingSystemsResponse>;

  getBillingSystem(
    request: GetBillingSystemRequest,
  ): Observable<GetBillingSystemResponse>;

  createBillingSystem(
    request: CreateBillingSystemRequest,
  ): Observable<CreateBillingSystemResponse>;

  updateBillingSystem(
    request: UpdateBillingSystemRequest,
  ): Observable<UpdateBillingSystemResponse>;
}

export interface BillingSystemServiceController {
  listBillingSystems(
    request: ListBillingSystemsRequest,
  ):
    | Promise<ListBillingSystemsResponse>
    | Observable<ListBillingSystemsResponse>
    | ListBillingSystemsResponse;

  getBillingSystem(
    request: GetBillingSystemRequest,
  ):
    | Promise<GetBillingSystemResponse>
    | Observable<GetBillingSystemResponse>
    | GetBillingSystemResponse;

  createBillingSystem(
    request: CreateBillingSystemRequest,
  ):
    | Promise<CreateBillingSystemResponse>
    | Observable<CreateBillingSystemResponse>
    | CreateBillingSystemResponse;

  updateBillingSystem(
    request: UpdateBillingSystemRequest,
  ):
    | Promise<UpdateBillingSystemResponse>
    | Observable<UpdateBillingSystemResponse>
    | UpdateBillingSystemResponse;
}

export function BillingSystemServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'listBillingSystems',
      'getBillingSystem',
      'createBillingSystem',
      'updateBillingSystem',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('BillingSystemService', method)(
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
      GrpcStreamMethod('BillingSystemService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const BILLING_SYSTEM_SERVICE_NAME = 'BillingSystemService';
