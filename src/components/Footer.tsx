import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react'
import logo from "../../public/assets/image/v1tron.webp"

// icons
import email from "../../public/icons/email.svg";
import instagram from "../../public/icons/instagram.svg";
import linkedin from "../../public/icons/linkedin.svg";
import phone from "../../public/icons/phone.svg";
import Image from 'next/image';
import Link from 'next/link';

export const SOCIAL_MEDIAS: { img: StaticImport; href: string }[] = [
    { img: linkedin, href: "https://www.linkedin.com/company/voltronid/" },
    { img: instagram, href: "https://www.instagram.com/voltron.indonesia/" },
];

export const LIST_CONTACTS = {
    href: "+6287810584499",
    label: "+62 8781 0584 499",
};

const Footer = () => {
    return (
        <footer className="flex-col md:flex lg:flex-row justify-between lg:py-[4vw] py-[6vw] px-[6vw] text-white bg-[#035252]">
            <section className="flex flex-col gap-5 md:gap-6 md:col-span-2 lg:col-span-3">
                <Image priority src={logo} alt="Voltron" className="w-52" />
                <p>EVCuzz Charging Network is now Voltron!</p>
                <section className="flex mt-2 gap-4 items-center">
                    {SOCIAL_MEDIAS.map((e) => (
                        <Link className="hover:scale-110 animate" key={e.href} rel="noreferrer" target="_blank" href={e.href}>
                            <Image src={e.img} alt={`${e.href} - Voltron`} width={30} />
                        </Link>
                    ))}
                </section>
            </section>
            <section className="flex flex-col gap-4 md:gap-2 lg:gap-6 my-10 md:my-0">
                <p className='text-xl'>Contacts</p>
                <Link
                    className="text-white hover:underline flex gap-2 items-center truncate"
                    rel="noreferrer"
                    target="_blank"
                    href={"mailto:info@voltron.id"}
                >
                    <Image src={email} alt="mailto:info@voltron.id - faoTech" />
                    info@voltron.id
                </Link>
                <Link
                    className="text-white hover:underline flex gap-2 items-center truncate"
                    rel="noreferrer"
                    target="_blank"
                    href={LIST_CONTACTS.href}
                >
                    <Image src={phone} alt={`${LIST_CONTACTS.href} - Voltron`} />
                    {LIST_CONTACTS.label}
                </Link>
            </section>
        </footer>
    )
}

export default Footer