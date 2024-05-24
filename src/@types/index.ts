export type TChargeStation = {
	id: number | bigint | null;
	name: string;
	coordinates: {
		coordinates: [number, number];
		type: string;
	};
	address: string;
	city: string;
	state: string;
	postalCode: string;
	operatingHours: {
		alwaysOpen: boolean;
		openingDays: [
			{
				active: boolean;
				close: string;
				day: string;
				open: string;
			}
		];
	};
	chargePoints: [
		{
			id: string;
			isAvailable: string;
			online: boolean;
			chargePointConnectors: [
				{
					id: string;
					chargePointId: string;
					position: number;
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
				}
			];
		}
	];
	total: {
		aggregate: {
			count: number;
		};
	};
	available: {
		aggregate: {
			count: number;
		};
	};
	isAvailable: boolean;
	type: string;
};

export type TChargePointConnectors = {
	id: string;
	chargePointId: string;
	position: number;
	connector: string;
	maxPower: number;
	available: boolean;
	enumConnector: {
		type: string;
	};
};

export type TChargePoints = {
	id: string;
	chargePointConnectors: {
		id: string;
		chargePointId: string;
		position: number;
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
	}[];
};
