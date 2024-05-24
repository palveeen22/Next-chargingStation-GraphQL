'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import image from "../../public/assets/image/v1tron.webp"
import Image from 'next/image'
import { useState } from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";

export const NAV_MENU_LINK = [
    {
        label: 'mobile app',
        href: `/mobile-aplication`,
    },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className='hidden md:block lg:block w-full bg-[#035252] px-5 md:px-20 py-6 md:py-8'>
                <nav className='flex justify-between items-center'>
                    <Link href='/'>
                        <Image
                            src={image}
                            alt="voltron image"
                            width={120}
                            height={120}
                            className='object-cover cursor-pointer'
                        />
                    </Link>
                    <div className='flex justify-between items-center gap-8'>
                        {NAV_MENU_LINK.map((menu, index) => (
                            <Link
                                key={index}
                                href={menu.href}
                                className={cn(
                                    pathname === menu.href
                                        ? 'dark:text-foreground/90 font-medium text-foreground/100 underline decoration-wavy underline-offset-8'
                                        : 'dark:text-foreground/60 text-foreground/80 transition-colors hover:text-foreground/100 hover:dark:text-foreground/90'
                                )}
                            >
                                {menu.label.toLocaleUpperCase()}
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>
            <header className='block md:hidden lg:hidden w-full bg-[#035252] px-5 md:px-20 py-6 md:py-8'>
                <nav className='flex justify-between items-center'>
                    <Link href='/'>
                        <Image
                            src={image}
                            alt="voltron image"
                            width={120}
                            height={120}
                            className='object-cover cursor-pointer'
                        />
                    </Link>
                    <div className='relative'>
                        <Icon
                            icon="ri:menu-3-fill"
                            width={25}
                            onClick={toggleDropdown}
                            className="cursor-pointer"
                        />
                        {isDropdownOpen && (
                            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 font-semibold'>
                                {NAV_MENU_LINK.map((menu, index) => (
                                    <Link
                                        key={index}
                                        href={menu.href}
                                        className='block px-4 py-2 text-[#035252]'
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {menu.label.toLocaleUpperCase()}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
