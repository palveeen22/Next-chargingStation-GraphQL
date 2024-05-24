'use client'
import React, { useEffect, useState } from "react";
import { MotionArticle, MotionSection } from '@/components/MotionClient'
import ChargeStationList from "@/components/ChargeStationList";
import ChargeStationDetails from "@/components/ChargeStationDetails";
import DrawerDetailStation from "@/components/DrawerDetailStation";
import LocationCard from "@/components/LocationCard";


const ChargingStationPage = () => {

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
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

    const [id, setId] = useState<bigint | null>(null);

    const [mapData, setMapData] = useState();

    const handleClick = (id: bigint) => {
        setId(id);
    };

    useEffect(() => {
        if (id !== null) {
            // Your logic to handle the id
            console.log(id);
        }
    }, [id, mapData]);

    const [open, setOpen] = useState<boolean>(false);


    const showDrawer = () => {
        setOpen(true);
    };

    return (
        <MotionSection
            className='w-full flex flex-col justify-center gap-14 md:gap-20 flex-grow  bg-white pb-6 md:pb-0 lg:p-3 md:px-10 md:py-8 lg:px-10 lg:py-8'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <MotionArticle
                className='flex flex-col gap-4'
                variants={sectionVariants}
            >
                <article className="hidden md:block lg:block">
                    <div className="flex justify-between w-full">
                        <div className="w-[40%] flex flex-col gap-4">
                            <ChargeStationList handleClick={handleClick} />
                        </div>
                        <div className="w-[60%] border border-[#035252] min-h-screen rounded-xl">
                            <div className="m-10 border border-[#ccc]  rounded-xl p-4">
                                <LocationCard data={mapData} />
                            </div>
                            <div className="m-5">
                                <ChargeStationDetails id={id || null} setMapData={setMapData} />
                            </div>

                        </div>
                    </div>
                </article>
                <article className="block md:hidden lg:hidden">
                    <div className="w-full flex flex-col justify-between  min-h-screen">
                        <DrawerDetailStation handleClick={handleClick} showDrawer={showDrawer} open={open} setOpen={setOpen} id={id} data={mapData} />
                    </div>
                </article>

            </MotionArticle>
        </MotionSection>
    )
}

export default ChargingStationPage