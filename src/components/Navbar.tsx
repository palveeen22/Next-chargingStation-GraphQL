'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import image from "@/assets/image/v1tron.webp"
import Image from 'next/image'
import { Icon } from '@iconify/react';



const Navbar = () => {
    let pathname = usePathname()
    if (pathname.includes('/blog/')) {
        pathname = '/blog'
    }

    const NAV_MENU_LINK = [
        {
            label: 'how it works',
            href: `/projects`,
        },
        {
            label: 'mobile app',
            href: `/blogs`,
        },
    ];

    return (
        <>
            <header className='hidden md:block lg:block w-full bg-[#035252] px-20 py-8'>
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

            <header className='block md:hidden lg:hidden w-full bg-[#035252] px-5 py-6 items-center'>
                <div className='blok md:hidden lg:hidden'>
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
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar
