/* eslint-disable */
import { Duration } from '../../../google/protobuf/duration';
import { Money } from '../../../btools/type/v1/money';
import { Timestamp } from '../../../google/protobuf/timestamp';

export interface BillingPeriod {
  /**
   *
   * What time charges should be made
   * (-7889231 equals to 3 months before the subscription period ends)
   */
  period: Duration | undefined;
  /**
   *  Number of periods on every charge
   */
  interval: number;
}

export interface Fee {
  type: Fee_FeeType;
  amount: Money | undefined;
}

export interface Plan {
  duration: Duration | undefined;
  price: Money | undefined;
}

export interface Subscription {
  name: string;
  description: string;
  poNumber: string;
  fees: Fee[];
  billingPeriod: BillingPeriod | undefined;
  seats: number;
  dates: Subscription_SubscriptionDates | undefined;
}

export interface Subscription_SubscriptionDates {
  startDate: Timestamp | undefined;
  endDate: Timestamp | undefined;
}

export interface Charge {
  date: Timestamp | undefined;
  seats: number;
  plan: Plan | undefined;
}

/**
 *
 * Transaction represent a change in a
 * subscription.
 */
export interface Transaction {
  name: string;
  parent: string;
  type: Transaction_Type;
  value: number;
  date: Timestamp | undefined;
  status: Transaction_Status;
}

export enum Fee_FeeType {
  FEE_TYPE_UNSPECIFIED = 0,
  FEE_TYPE_SETUP = 1,
  FEE_TYPE_EVERY_CHARGE = 2,
  FEE_TYPE_ENDED_SUBSCRIPTION = 3,
  FEE_TYPE_TRIAL_END = 4,
  UNRECOGNIZED = -1,
}

export enum Transaction_Type {
  TYPE_UNSPECIFIED = 0,
  TYPE_SEATS = 1,
  TYPE_PRICE = 2,
  UNRECOGNIZED = -1,
}

export enum Transaction_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_PENDING = 1,
  STATUS_CHARGED = 2,
  STATUS_IGNORED = 3,
  UNRECOGNIZED = -1,
}
