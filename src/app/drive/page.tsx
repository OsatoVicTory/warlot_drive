"use client";

import { AudioIcon, DocumentIcon, ImageIcon, VideoIcon } from "@/assets/icons";
import DriveLayout from "./driveLayout";
import Link from "next/link";

export default function Drive() {

    const cards = [
        {
            svg: (className: string) => <DocumentIcon className={className} />, to: "documents",
            name: "Documents", desc: "212 files", bg: "bg-[rgba(217,254,255,1)]"
        },
        {
            svg: (className: string) => <ImageIcon className={className} />, to: "images",
            name: "Images", desc: "437 files", bg: "bg-[rgba(29,146,241,0.14)]",
        },
        {
            svg: (className: string) => <AudioIcon className={className} />, to: "audios",
            name: "Audios", desc: "98 files", bg: "bg-[rgba(255,209,44,0.12)]",
        },
        {
            svg: (className: string) => <VideoIcon className={className} />, to: "videos",
            name: "Videos", desc: "560 files", bg: "bg-[rgba(0, 1, 1, 0.12)]",
        },
    ];
        
    return (
        <DriveLayout filesType={"all"}>
            <div className="flex justify-between items-center p-6">
                {cards.map((card, index) => (
                    <Link href={`/drive/${card.to}`} className="flex flex-col gap-y-1 w-fit sm:w-1/4" key={`card-${index}`}>
                        <div className={`rounded-[10] w-fit p-3 sm:p-4 xl:p-6 ${card.bg}`}>{card.svg("w-[24px] sm:w-[36px] xl:w-[60px] h-[30px] sm:h-[40px] xl:h-[45px]")}</div>
                        <h3 className="font-medium text-[14px] sm:text-md xl:text-xl mt-[10]">{card.name}</h3>
                        <span className="text-[12px] sm:text-[14px] text-[#12121280]">{card.desc}</span>
                    </Link>
                ))}
            </div>
        </DriveLayout>
    )
}