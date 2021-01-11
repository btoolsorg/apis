/* eslint-disable */
import {
  Subscription,
  Transaction,
} from '../../../btools/billing/v1/subscription';
import { FieldMask } from '../../../google/protobuf/field_mask';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';

export interface ListSubscriptionsRequest {
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

export interface ListSubscriptionsResponse {
  subscriptions: Subscription[];
  /**
   *  Token to retrieve the next page of results, or empty if there are no
   *  more results in the list.
   */
  nextPageToken: string;
}

export interface GetSubscriptionRequest {
  /**
   *  The field will contain name of the resource requested, for example:
   *  "subscriptions/<subscription name>"
   */
  name: string;
}

export interface GetSubscriptionResponse {
  subscription: Subscription | undefined;
}

export interface CreateSubscriptionRequest {
  subscription: Subscription | undefined;
}

export interface CreateSubscriptionResponse {
  subscription: Subscription | undefined;
}

export interface UpdateSubscriptionRequest {
  /**
   *  The book resource which replaces the resource on the server.
   */
  subscription: Subscription | undefined;
  /**
   *  The update mask applies to the resource. For the `FieldMask` definition,
   *  see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  updateMask: FieldMask | undefined;
}

export interface UpdateSubscriptionResponse {
  subscription: Subscription | undefined;
}

export interface DeleteSubscriptionRequest {
  name: string;
}

export interface DeleteSubscriptionResponse {}

export interface ListTransactionsRequest {
  /**
   *  The parent resource name, for example, "accounts/bjerkio/subscriptions/sub1".
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

export interface ListTransactionsResponse {
  transactions: Transaction[];
  /**
   *  Token to retrieve the next page of results, or empty if there are no
   *  more results in the list.
   */
  nextPageToken: string;
}

export interface GetTransactionRequest {
  /**
   *  The field will contain name of the resource requested, for example:
   *  "subscriptions/<subscription name>/transactions/<transaction name>"
   */
  name: string;
}

export interface GetTransactionResponse {
  transaction: Transaction | undefined;
}

export interface CreateTransactionRequest {
  /**
   *  The parent resource name where the transaction is to be created.
   */
  parent: string;
  transaction: Transaction | undefined;
}

export interface CreateTransactionResponse {
  transaction: Transaction | undefined;
}

export interface SubscriptionServiceClient {
  listSubscriptions(
    request: ListSubscriptionsRequest,
  ): Observable<ListSubscriptionsResponse>;

  getSubscription(
    request: GetSubscriptionRequest,
  ): Observable<GetSubscriptionResponse>;

  createSubscription(
    request: CreateSubscriptionRequest,
  ): Observable<CreateSubscriptionResponse>;

  updateSubscription(
    request: UpdateSubscriptionRequest,
  ): Observable<UpdateSubscriptionResponse>;

  deleteSubscription(
    request: DeleteSubscriptionRequest,
  ): Observable<DeleteSubscriptionResponse>;

  listTransactions(
    request: ListTransactionsRequest,
  ): Observable<ListTransactionsResponse>;

  getTransaction(
    request: GetTransactionRequest,
  ): Observable<GetTransactionResponse>;

  createTransaction(
    request: CreateTransactionRequest,
  ): Observable<CreateTransactionResponse>;
}

export interface SubscriptionServiceController {
  listSubscriptions(
    request: ListSubscriptionsRequest,
  ):
    | Promise<ListSubscriptionsResponse>
    | Observable<ListSubscriptionsResponse>
    | ListSubscriptionsResponse;

  getSubscription(
    request: GetSubscriptionRequest,
  ):
    | Promise<GetSubscriptionResponse>
    | Observable<GetSubscriptionResponse>
    | GetSubscriptionResponse;

  createSubscription(
    request: CreateSubscriptionRequest,
  ):
    | Promise<CreateSubscriptionResponse>
    | Observable<CreateSubscriptionResponse>
    | CreateSubscriptionResponse;

  updateSubscription(
    request: UpdateSubscriptionRequest,
  ):
    | Promise<UpdateSubscriptionResponse>
    | Observable<UpdateSubscriptionResponse>
    | UpdateSubscriptionResponse;

  deleteSubscription(
    request: DeleteSubscriptionRequest,
  ):
    | Promise<DeleteSubscriptionResponse>
    | Observable<DeleteSubscriptionResponse>
    | DeleteSubscriptionResponse;

  listTransactions(
    request: ListTransactionsRequest,
  ):
    | Promise<ListTransactionsResponse>
    | Observable<ListTransactionsResponse>
    | ListTransactionsResponse;

  getTransaction(
    request: GetTransactionRequest,
  ):
    | Promise<GetTransactionResponse>
    | Observable<GetTransactionResponse>
    | GetTransactionResponse;

  createTransaction(
    request: CreateTransactionRequest,
  ):
    | Promise<CreateTransactionResponse>
    | Observable<CreateTransactionResponse>
    | CreateTransactionResponse;
}

export function SubscriptionServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'listSubscriptions',
      'getSubscription',
      'createSubscription',
      'updateSubscription',
      'deleteSubscription',
      'listTransactions',
      'getTransaction',
      'createTransaction',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('SubscriptionService', method)(
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
      GrpcStreamMethod('SubscriptionService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const SUBSCRIPTION_SERVICE_NAME = 'SubscriptionService';
