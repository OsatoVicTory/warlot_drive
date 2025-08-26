"use client";

import { WarlotLogo } from "@/assets/logo";
import styles from "./styles.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { DriveIcon, EncryptedIcon, ImportIcon, SettingsIcon, SharedWithMeIcon, TrashIcon } from "@/assets/icons";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import useClickOutside from "@/hooks/useClickOutside";
import { BiImport } from "react-icons/bi";

export default function Sidebar({ toggle, opened }: 
    { toggle: (bool?: boolean) => void, opened: boolean}
) {
    const path = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    const sidebarRef = useRef<HTMLDivElement | null>(null)

    const navs = [
        {
            svg: (className: string, solid: boolean) => <DriveIcon className={className} solid={solid} />,
            link: "/drive", text: "My drive"
        },
        {
            svg: (className: string, solid: boolean) => <SharedWithMeIcon className={className} solid={solid} />,
            link: "/shared", text: "Shared with me"
        },
        {
            svg: (className: string, solid: boolean) => <EncryptedIcon className={className} solid={solid} />,
            link: "/encrypted", text: "Encrypted"
        },
        {
            // svg: (className: string, solid: boolean) => <ImportIcon className={className} solid={solid} />,
            svg: (className: string, solid: boolean) => <BiImport className={`${className}`} />,
            link: "#", text: "Import files"
        },
        {
            svg: (className: string, solid: boolean) => <TrashIcon className={className} solid={solid} />,
            link: "#", text: "Trash"
        },
        {
            svg: (className: string, solid: boolean) => <SettingsIcon className={className} solid={solid} />,
            link: "#", text: "Settings"
        },
    ];

    const handleResize = () => {
        if(window.innerWidth <= 780) {
            toggle(true);
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useClickOutside(sidebarRef, () => toggle(false), isMobile);

    const curRoute = useMemo(() => {
        return navs.find(nav => path.includes(nav.link))?.link;
    }, [navs, path]);

    return (
        <div className={`${styles.Sidebar} ${styles[`Sidebar_${opened}`]} ${opened ? "w-[270px]" : "w-[90px]"} transition-[width] ease-in-out sticky top-0 left-0`}>
            <div ref={sidebarRef} className="h-full flex flex-col justify-between text-black">
                <div className="flex flex-col gap-y-0">
                    <div className={`flex justify-between items-center py-4 px-7 pb-5`} style={{borderBottom: "1px solid #e2e8f0"}}>
                        <div className={`text-sm ${!opened && "hidden"} ml-[-30px] flex items-center`}>
                            <WarlotLogo />
                        </div>
                        <button className="p-1 px-2 cursor-pointer rounded-full hover:bg-[rgba(18, 18, 18, 0.15)]"
                        onClick={() => toggle()}>
                            <RxHamburgerMenu className="w-[24px] h-[24px]" />
                        </button>
                    </div>

                    <nav className={`flex flex-col gap-y-${opened?1:3} px-${opened?7:5} py-8`}>
                        {navs.map((nav) => (
                            <Link href={nav.link} className="w-full" key={`nav-${nav.text}`}>
                                <div className={`flex ${opened?"w-full":"w-fit"} items-center py-3 ${opened?"px-4":"px-3"} rounded-full ${curRoute === nav.link ? "bg-[#D9FEFF]" : "text-[var(--grey-600)]"}`}>
                                    {nav.svg(`fill-current w-[18px] h-[18px]`, curRoute === nav.link)}
                                    <span className={`text-sm ml-[18] ${!opened && "hidden"} text-${curRoute === nav.link ? "black" : "var(--grey-600)"}`}>
                                        {nav.text}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </nav>

                    {opened && <div className="px-6 flex flex-col gap-y-3">
                        <div className="w-full rounded-full h-[8px] bg-[#e2e8f0]">
                            <div className="w-3/10 rounded-full h-[8px] bg-[#00B1BB]"></div>
                        </div>
                        <p className="text-[10px] text-[var(--grey-600)]">24% of your stored files will expire in 65 days</p>
                        <button className="mt-[8] px-4 py-2 w-fit rounded-full text-sm text-[#02686B] hover:bg-[#02686B] hover:text-[#fff]" 
                        style={{border: "1px solid #e2e8f0"}}>
                            Renew Now
                        </button>
                    </div>}
                </div>

                <div className="flex justify-between items-center gap-x-3 px-5 py-5">
                    <div className={`rounded-full ${opened?"w-[33px]":"w-[40px]"} ${opened?"h-[33px]":"h-[40px]"} bg-[#D9FEFF] flex justify-center items-center`}>
                        <FaRegUserCircle className="w-52/100 h-52/100 opacity-[0.72]" />
                    </div>
                    <div className={`flex flex-grow flex-col ${!opened && "hidden"}`}>
                        <span className="font-semibold text-sm">John Doe</span>
                        <span className="mt-[3] text-[var(--grey-600)] text-[11px]">0x1234a......op7890qrst</span>
                    </div>
                    <button className={`${!opened && "hidden"} w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-[rgba(18, 18, 18, 0.3)] cursor-pointer`}>
                        <CiEdit className="w-[24px] h-[24px]" />
                    </button>
                </div>
            </div>
        </div>
    )
}