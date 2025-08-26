import { HeroImage } from "@/assets/heroIcon";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="max-[768px]:hidden text-black w-full">
            <div className="flex justify-between py-20 px-10 min-[1100px]:px-21 pt-15 xl:pt-18">
                <div className="flex flex-col gap-y-5 lg:gap-y-7 lg:pr-5">
                    <h1 className="text-4xl xl:text-6xl font-bold">The Simplest Way to Store, Share, and Own Your Files</h1>
                    <p className="text-md max-[1030px]:text-sm text-[var(--grey-600)] w-90/100 lg:w-81/100 xl:78/100">
                        Warlot Drive gives you full control over your data. Upload, encrypt, and access files with 
                        no subscriptions or storage limits - all powered by your wallet
                    </p>
                    <button className="px-7 py-3 w-fit rounded-full bg-[var(--primary-green-3)] hover:opacity-[0.9] cursor-pointer text-white">
                        Get Started
                    </button>
                    <div className="flex flex-col gap-y-3 text-[var(--grey-600)]">
                        <div className="flex items-center gap-x-3">
                            <FaCheckSquare className="w-[16px] h-[16px] text-[var(--primary-green-3)]" />
                            <span className="text-md">Full encryption</span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <FaCheckSquare className="w-[16px] h-[16px] text-[var(--primary-green-3)]" />
                            <span className="text-md">Token-gated sharing</span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <FaCheckSquare className="w-[16px] h-[16px] text-[var(--primary-green-3)]" />
                            <span className="text-md">Transparent costs</span>
                        </div>
                    </div>
                </div>
                <div className="min-w-45/100 xl:min-w-49/100 h-[400px] xl:h-[480px] pl-10">
                    <HeroImage className="w-full h-full object-contain" />
                    {/* <Image src={"/hero.png"} width={100} height={100} className="w-full h-full object-contain" alt="hero-img" /> */}
                </div>
            </div>
        </section>
    )
}