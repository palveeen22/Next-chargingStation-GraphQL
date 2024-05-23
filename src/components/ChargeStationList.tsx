import { TChargeStation } from '@/@types';
import { GET_STATIONS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';


const ChargeStationList = () => {
    const { loading, error, data } = useQuery(GET_STATIONS, {
        variables: { limit: 10, offset: 0 },
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const chargeStations = data?.publicChargeStation || [];

    console.log(chargeStations, "<<<");

    return (
        <>
            {chargeStations?.map((e: TChargeStation) => {
                return (
                    <div className="w-[70%] border border-[#ccc] flex justify-between gap-8 text-black shadow-md rounded-xl p-4">
                        <p>p</p>
                        <div className="flex flex-col">
                            <div className="flex">
                                <p>Allego Charging Station</p>
                                <Icon icon="prime:arrow-up-right" />
                            </div>
                            <p>Jakarta</p>
                            <div className="flex gap-4">
                                <p>Allego Charging Station</p>
                                <p>Jakarta</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col">
                                    <p>Allego Charging Station</p>
                                    <p>Jakarta</p>
                                </div>
                                <div className="flex flex-col">
                                    <p>Allego Charging Station</p>
                                    <p>Jakarta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default ChargeStationList