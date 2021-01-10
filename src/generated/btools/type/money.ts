/* eslint-disable */
import { Currency } from '../../btools/type/currency';

/**
 *
 *  Money is a way to store monetary values based on lowest monetary value,
 *  stored with precision and currency.
 *  E.g. a Money object that looks like this:
 *  { amount: 10030, currency: 'EUR', precision: 2 }
 *  would represent 100,30 EUR
 */
export interface Money {
  /**
   *  The three-letter currency code defined in ISO 4217.
   */
  currency: Currency;
  /**
   *  Amount of money (e.g. 10030 for 100,30)
   */
  amount: number;
  /**
   *  Which precision is stored.
   *  @default 2
   */
  precision: number;
}
