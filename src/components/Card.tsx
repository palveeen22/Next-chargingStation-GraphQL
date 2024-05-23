import Link from "next/link";
import { IoBagAdd } from "react-icons/io5";

const Card = () => {
    return (
        <>
            <Link href={'/products/1'} className="border border-0.6 hover:scale-95 transition-all duration-200 hover:ease-in-out border-gray-300">
                <div className="flex gap-1 justify-between">
                    {/* <h1 className="pt-4 w-[70%] text-xl font-[300] px-5">
                        TOOTHPASTE BITS FLUORIDE-FREE
                    </h1>
                    <div className="text-center w-[25%] hover:text-green-600 transition-all duration-200  text-3xl flex justify-center items-center">
                        <IoBagAdd />
                    </div>
                </div>
                <p className="font-thin pt-2 px-5 text-sm">From $8/month</p>
                <Image
                    className="object-cover"
                    src="https://bitetoothpastebits.com/cdn/shop/files/pc-tpb-ff-4oz-mint-no-bg.webp?v=1702985943"
                    alt=""
                /> */}
                    <button
                        className="relative border-y-1 border-black w-full bg-transparent py-2.5 px-5 text-lg font-medium  uppercase text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                        Buy Now
                    </button>
            </Link>
        </>
    );
};

export default Card;