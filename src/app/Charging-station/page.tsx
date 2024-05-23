'use client'
import React from "react";
import { MotionArticle, MotionSection } from '@/components/MotionClient'
import ChargeStationList from "@/components/ChargeStationList";
import { Icon } from '@iconify/react';



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
                <div className="flex justify-between items-center w-full">
                    <div className="w-1/2 p-6 flex flex-col gap-4">
                        <ChargeStationList />
                    </div>
                    <div className="w-1/2">x</div>
                </div>
            </MotionArticle>
        </MotionSection>
    )
}

export default ChargingStationPage