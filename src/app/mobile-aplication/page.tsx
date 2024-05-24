'use client'
import React from "react";
import { MotionArticle, MotionSection } from '@/components/MotionClient'
import Image from "next/image";
import image from "../../../public/assets/image/phone1.webp"
import DownloadButtons from "@/components/DownloadButton";

const MobilePage = () => {

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
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-[40%] flex flex-col justify-center items-center md:gap-8 lg:gap-8">
                        <h1 className="text-[#035252] text-5xl md:text-7xl font-bold text-center md:text-start">
                            Discover Chargers On-the-Go
                        </h1>
                        <p className="text-[#035252] text-lg md:text-xl text-center md:text-justify my-5">
                            Find the number of available chargers, types and speeds at each location. Monitor your charging session in real time and enjoy seamless contactless payment.
                        </p>
                        <DownloadButtons />
                    </div>
                    <div className="mb-8 md:mb-0  md:w-[60%]">
                        <Image
                            src={image}
                            alt="voltron indonesia station"
                            width={750}
                            height={500}
                        />
                    </div>
                </div>
            </MotionArticle>
        </MotionSection >
    )
}

export default MobilePage