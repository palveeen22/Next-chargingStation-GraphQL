// types.ts
export type TChargeStation = {
  id: string;
  name: string;
  coordinates: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  operatingHours: string;
  chargePoints: {
    id: string;
    chargePointConnectors: {
      id: string;
      chargePointId: string;
      position: string;
      connector: string;
      maxPower: number;
      available: boolean;
      enumConnector: {
        type: string;
      };
      tariff: {
        id: string;
        priceKwh: number;
        adminFee: number;
        connectionFee: number;
        currencyId: string;
        pjnFee: number;
        priceKwhOriginal: number;
        connectionFeeOriginal: number;
        discountPercentageKwh: number;
        discountPercentageSurcharge: number;
        discountPercentageAdminFee: number;
        tax: {
          id: string;
          amount: number;
        };
      };
    };
  };
  total: {
    aggregate: {
      count: number;
    };
  };
};