import React, { memo } from 'react';
import { TChargePoints, TChargeStation } from '@/@types';
import { GET_DETAIL } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import { formatToIDR } from '@/lib/utils';
import NoData from './NoData';
import LoadingScreen from './Loading';
import DetailNoData from './DetailNoData';
import { MotionDiv } from './MotionClient';

type TProps = {
    id: bigint | null;
}

const ChargeStationDetails = ({ id }: TProps) => {
    const { loading, error, data } = useQuery(GET_DETAIL, {
        variables: { stationId: id ?? '0' },
        skip: id === null,
    });

    if (loading) return <LoadingScreen />
    if (error) return <div>Error: {error.message}</div>;



    const storeData = data?.publicChargeStation || [];

    if (!storeData || storeData.length === 0) {
        return <DetailNoData />;
    }


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

    console.log(storeData, "<<<");
    return (
        <section>
            {storeData?.map((store: TChargeStation, index: number) => {
                return (
                    <div key={index}>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#035252] font-medium'>{store.name}</p>
                            <p className='text-[#000] text-sm'>{store.address}</p>
                            <span className='flex justify-start items-center gap-4'>
                                <p className='text-[#035252] text-sm'>{store.isAvailable}</p>
                                <Icon icon="fluent:presence-available-12-regular" color='#035252' width={15} />
                            </span>
                            <p className='text-[#035252] font-bold text-base'>Charging Point :</p>
                            <p className='text-[#035252] font-semibold text-base text-end'>{store?.chargePoints?.length} / Available</p>
                        </div>
                        {
                            store?.operatingHours.alwaysOpen === true ? (
                                <p className='text-[#035252] text-medium text-sm'>Always open 24 Hours</p>
                            ) : (
                                store?.operatingHours?.openingDays?.map((e, i) => (
                                    <div key={i} className="flex jusify-center my-1 lg:justify-start gap-10 items-center">
                                        <p className="w-full lg:w-[20%] text-[#808080] font-light text-base">{e?.day}</p>
                                        <p className="w-full lg:w-[20%] text-[#808080] font-light text-base">
                                            {e?.open} - {e?.close}
                                        </p>
                                    </div>
                                ))
                            )
                        }
                        {store?.chargePoints?.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                                {store?.chargePoints?.map((e, i) => {
                                    return (
                                        <MotionDiv
                                            className="flex justify-start items-center gap-4 rounded-lg bg-[#E5E4E2] py-3 px-4  my-2 lg:my-4 border border-[#035252]"
                                            key={i}
                                            variants={cardVariants}
                                        >
                                            <Icon icon="maki:charging-station" width={30} color="#035252" />
                                            {e?.chargePointConnectors.slice(0, 2).map((e, i) => {
                                                return (
                                                    <div key={i} className="w-[40%] flex justify-start flex-col items-start">
                                                        <p className="text-gray-900 font-semibold text-base">{e?.maxPower} Kw</p>
                                                        <p className="text-[#808080] font-light text-sm">
                                                            {e?.connector}
                                                            {e?.enumConnector.type}
                                                        </p>
                                                        <p className="text-[#808080] font-light text-sm">
                                                            {formatToIDR(e?.tariff.priceKwh)}/ Kwh
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </MotionDiv>
                                    );
                                })}
                            </div>
                        ) : (
                            <NoData />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default memo(ChargeStationDetails);