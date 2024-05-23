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
            {chargeStations?.map((e: TChargeStation, i: number) => {
                return (
                    <div className="w-[80%] border border-[#ccc] hover:border-[#035252] hover:border-2 flex justify-between gap-8 text-black shadow-md rounded-xl p-4 cursor-pointer" key={i}>
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <p className='text-[#141414] text-lg'>{e?.name}</p>
                                <Icon icon="prime:arrow-up-right" width={40} color='#a6a1a1' />
                            </div>
                            <p className='text-[#ccc] font-light text-base'>Jakarta</p>
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