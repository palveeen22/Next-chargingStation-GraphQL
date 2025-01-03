import { gql } from "@apollo/client";

/*
########################
#  QUERY STATION LIST  #
########################
*/

export const GET_STATIONS = gql`
	query GetChargeStation($limit: Int, $offset: Int) {
		publicChargeStation(
			limit: $limit
			offset: $offset
			orderBy: { createdAt: ASC }
		) {
			id
			name
			coordinates
			address
			city
			state
			postalCode
			operatingHours
			chargePoints {
				id
				chargePointConnectors {
					id
					chargePointId
					position
					connector
					maxPower
					available
					enumConnector {
						type
					}
					tariff {
						id
						priceKwh
						adminFee
						connectionFee
						currencyId
						pjnFee
						priceKwhOriginal
						connectionFeeOriginal
						discountPercentageKwh
						discountPercentageSurcharge
						discountPercentageAdminFee
						tax {
							id
							amount
						}
					}
				}
			}
			total: chargePointsAggregate(
				where: { isAvailable: { _eq: "Available" } }
			) {
				aggregate {
					count
				}
			}
		}
	}
`;

/*
##########################
#  QUERY STATION DETAIL  #
##########################
*/

export const GET_DETAIL = gql`
	query PublicChargeStation($stationId: bigint) {
		publicChargeStation(where: { id: { _eq: $stationId } }) {
			id
			name
			coordinates
			address
			city
			state
			postalCode
			operatingHours
			isAvailable
			type
			chargePoints(orderBy: { position: ASC }) {
				id
				isAvailable
				online
				chargePointConnectors(orderBy: { position: ASC }) {
					id
					chargePointId
					position
					connector
					maxPower
					available
					enumConnector {
						type
					}
					tariff {
						id
						priceKwh
						adminFee
						connectionFee
						currencyId
						pjnFee
						priceKwhOriginal
						connectionFeeOriginal
						discountPercentageKwh
						discountPercentageSurcharge
						discountPercentageAdminFee
						tax {
							id
							amount
						}
					}
				}
			}
			total: chargePointsAggregate {
				aggregate {
					count
				}
			}
			available: chargePointsAggregate(
				where: { isAvailable: { _eq: "Available" } }
			) {
				aggregate {
					count
				}
			}
		}
	}
`;
