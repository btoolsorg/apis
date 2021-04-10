/* eslint-disable */

export interface Address {
  /**
   *  The type of the address.
   */
  type: Address_AddressType;
  /**
   *  Required. CLDR region code of the country/region of the address. This
   *  is never inferred and it is up to the user to ensure the value is
   *  correct. See http://cldr.unicode.org/ and
   *  http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html
   *  for details. Example: "CH" for Switzerland.
   */
  regionCode: string;
  languageCode: string;
  /**
   *  Optional. Postal code of the address. Not all countries use or require
   *  postal codes to be present, but where they are used, they may trigger
   *  additional validation with other parts of the address (e.g. state/zip
   *  validation in the U.S.A.).
   */
  postalCode: string;
  /**
   *  Optional. Additional, country-specific, sorting code. This is not used
   *  in most regions. Where it is used, the value is either a string like
   *  "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number
   *  alone, representing the "sector code" (Jamaica), "delivery area indicator"
   *  (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
   */
  sortingCode: string;
  /**
   *  Optional. Highest administrative subdivision which is used for postal
   *  addresses of a country or region.
   *  For example, this can be a state, a province, an oblast, or a prefecture.
   *  Specifically, for Spain this is the province and not the autonomous
   *  community (e.g. "Barcelona" and not "Catalonia").
   *  Many countries don't use an administrative area in postal addresses. E.g.
   *  in Switzerland this should be left unpopulated.
   */
  administrativeArea: string;
  /**
   *  Optional. Generally refers to the city/town portion of the address.
   *  Examples: US city, IT comune, UK post town.
   *  In regions of the world where localities are not well defined or do not fit
   *  into this structure well, leave locality empty and use address_lines.
   */
  locality: string;
  /**
   *  Optional. Sublocality of the address.
   *  For example, this can be neighborhoods, boroughs, districts.
   */
  sublocality: string;
  addressLines: string[];
  /**
   *  Optional. The recipient at the address.
   *  This field may, under certain circumstances, contain multiline information.
   *  For example, it might contain "care of" information.
   */
  recipients: string[];
  /**
   *  Optional. The name of the organization at the address.
   */
  organization: string;
  /**
   *  Indicates if it's the tenant's current address.
   */
  current: boolean;
}

/**  Address Type
 */
export enum Address_AddressType {
  /** ADDRESS_TYPE_UNSPECIFIED -  Default value.
   */
  ADDRESS_TYPE_UNSPECIFIED = 0,
  /** INVOICE -  Invoice use.
   */
  INVOICE = 1,
  /** POSTAL -  Postal use.
   */
  POSTAL = 2,
  /** VISITOR -  Visitor use.
   */
  VISITOR = 3,
  UNRECOGNIZED = -1,
}
