import { TChargeStation } from '@/@types';
import { GET_STATIONS } from '@/graphql/queries';
import { truncateText } from '@/lib/utils';
import { useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import LoadingScreen from './Loading';
import { MotionDiv } from './MotionClient';

type TProps = {
    handleClick: (id: bigint) => void;
}


const ChargeStationList = ({ handleClick }: TProps) => {
    const { loading, error, data } = useQuery(GET_STATIONS, {
        variables: { limit: 10, offset: 0 },
    });

    if (loading) return <LoadingScreen />
    if (error) return <div>Error: {error.message}</div>;

    const chargeStations = data?.publicChargeStation

    // console.log(chargeStations, "<<<");

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };


    return (
        <>
            {chargeStations?.map((e: TChargeStation, i: number) => {
                return (
                    <MotionDiv className="w-full md:w-[90%] lg:w-[90%] border border-[#ccc] hover:border-[#035252] hover:border-2 flex justify-between gap-8 text-black shadow-md md:rounded-xl p-4 cursor-pointer my-0"
                        key={i}
                        onClick={() => handleClick(e?.id)}
                        variants={cardVariants}

                    >
                        <div className="flex flex-col text-start w-full gap-2">
                            <p className='text-[#035252] text-sm lg:text-lg font-medium'>{e?.name}</p>
                            <p className='text-[#000] font-light text-xs lg:text-sm'>{truncateText(e?.address, 50)}</p>
                            {e?.operatingHours.alwaysOpen === true ? (
                                <p className='text-[#035252] font-bold  text-sm lg:text-base'>24 Hours</p>

                            ) : (
                                ""
                            )}
                            {e?.chargePoints?.length === null ? (
                                <p className="text-gray-900 font-light text-sm">Coming Soon</p>
                            ) : (
                                <p className="text-gray-900 font-light text-xs lg:text-sm">{e?.chargePoints.length} Available</p>
                            )}
                        </div>
                    </MotionDiv>
                )
            })}
        </>
    );
}

export default ChargeStationList