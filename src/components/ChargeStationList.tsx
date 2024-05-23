
import { TChargeStation } from '@/@types';
import { GET_CHARGE_STATIONS } from '@/graphql/queries/ChargeStationList';
import { useQuery } from '@apollo/client';

const ChargeStationList = () => {
    const { loading, error, data } = useQuery(GET_CHARGE_STATIONS, {
        variables: { limit: 10, offset: 0 },
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {data.publicChargeStation.map((station: TChargeStation) => (
                <div key={station.id}>
                    <h3>{station.name}</h3>
                    <p>{station.address}, {station.city}, {station.state} {station.postalCode}</p>
                    <p>Operating Hours: {station.operatingHours}</p>
                    <p>Available Charge Points: {station.total.aggregate.count}</p>
                </div>
            ))}
        </div>
    );
}

export default ChargeStationList