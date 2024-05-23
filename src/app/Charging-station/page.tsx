'use client'
import React from "react";
import { MotionArticle, MotionSection } from '@/components/MotionClient'
import ChargeStationList from "@/components/ChargeStationList";
import { Icon } from '@iconify/react';
import { MapProvider } from "@/providers/map-providers";
import { MapComponent } from "@/components/map";




const ChargingStationPage = () => {

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
        <MotionSection
            className='w-full flex flex-col justify-center gap-14 md:gap-20 flex-grow  bg-white px-10 py-8'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <MotionArticle
                className='flex flex-col gap-4'
                variants={sectionVariants}
            >
                {/* <ChargeStationList /> */}
                <div className="flex justify-between w-full p-6">
                    <div className="w-[40%]  flex flex-col gap-4">
                        <ChargeStationList />
                    </div>
                    <div className="w-[60%] border border-[#035252] min-h-screen rounded-xl">
                        <div className="m-10 border border-[#ccc] rounded-xl p-4">
                        </div>
                        <div className="m-10 border bg-[#035252] rounded-xl p-4 h-[20rem]">
                        </div>

                    </div>
                </div>
            </MotionArticle>
        </MotionSection>
    )
}

export default ChargingStationPage