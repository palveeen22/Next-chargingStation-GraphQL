'use client'
import React from "react";
import { MotionArticle, MotionSection } from '@/components/MotionClient'
import Image from "next/image";
import image from "@/assets/image/v3.png"
import Link from "next/link";
import { Icon } from '@iconify/react';

const VoltronPage = () => {


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
                        <div className="mb-8 md:mb-0 w-full md:w-[60%]">
                            <Image
                                src={image}
                                alt="voltron indonesia station"
                                width={900}
                                height={800}
                            />
                        </div>
                        <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-8">
                            <h1 className="text-[#035252] text-5xl md:text-7xl font-bold text-center md:text-start">
                                Voltron for Everyone
                            </h1>
                            <p className="text-[#035252] text-lg md:text-xl text-center md:text-justify my-5">
                                As a licensed SPKLU operator, Voltron is building one ecosystem for charging networks across Indonesia. Discover into Voltron's impact on a better environment, and we strive to build accessible and sustainable electric transportation solutions.
                            </p>
                            <Link href="/Charging-station">
                                <button className="flex justify-center items-center gap-6 hover:gap-8 mx-auto bg-[#035252] py-3 px-12 rounded-3xl cursor-pointer">
                                    <p className="text-md font-normal">
                                        Find Nearby
                                    </p>
                                    <Icon icon="ph:arrow-right-thin" width={40} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </MotionArticle>
            </MotionSection >
        </>
    )
}

export default VoltronPage