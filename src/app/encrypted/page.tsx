"use client";

import { AudioIcon, BucketIcon, DocumentIcon, EmailIcon, FilePlaceholderIcon, FlexLayoutIcon, FolderIcon, GridLayoutIcon, ImageIcon, VerifyIcon, VideoIcon } from "@/assets/icons";
import AppLayout from "@/layout";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import FileModal from "../../components/modals/drive/fileModal";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ShareFileModal from "@/components/modals/drive/shareFileModal";

export default function Encrypted() {

    const [showDaysLeft, setShowDaysLeft] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [shareModal, setShareModal] = useState(false);

    const files = Array(2).fill([
        {
            svg: (className: string) => <DocumentIcon className={className} />,
            name: "Shopify website docs", desc: "130 MB", type: ".pdf file",
            date: "2025-04-10, 12:32:54", status: "Encrypted", img: "/grid-1.jpg"
        },
        {
            svg: (className: string) => <FolderIcon className={className} />,
            name: "Lifestyle fashion", desc: "830 MB", type: "folder",
            date: "2025-04-10, 12:32:54", status: "----", img: "",
        },
        {
            svg: (className: string) => <ImageIcon className={className+" text-[rgba(255,237,227,1)]"} />,
            name: "Day-ti-day activities", desc: "150 MB", type: ".jpeg file",
            date: "2025-04-10, 12:32:54", status: "Encrypted", img: "/grid-2.png"
        },
        {
            svg: (className: string) => <VideoIcon className={className} />,
            name: "Videos for my vlog", desc: "300 MB", type: ".mpv file",
            date: "2025-04-10, 12:32:54", status: "Not Encrypted", img: "file"
        },
        {
            svg: (className: string) => <AudioIcon className={className} />,
            name: "Audios for my vlog", desc: "110 MB", type: ".mp3 file",
            date: "2025-04-10, 12:32:54", status: "Encrypted", img: "/grid-3.jpg"
        },
    ]).flat();
        
    return (
        <AppLayout>
            <div className="w-full text-black">
                <div className="flex justify-between items-center p-4">
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-lg font-medium">Encryption Key Status</h2>
                        <span className="text-[14px] text-[rgba(40,40,40,0.5)] font-300">Your encryption key protects all your files and data</span>
                    </div>
                    <div className="flex items-center rounded-full py-1 px-3 bg-[#D9FEFF] gap-x-1 max-[400px]:hidden">
                        <BsFillCheckCircleFill className="w-[12px] h-[12px] text-[rgba(4,147,152,1)]" />
                        <span className="text-[13px] mt-[1] text-[rgba(4,147,152,1)]">Active</span>
                    </div>
                </div>
                <div className="flex items-center p-6 gap-x-5 md:gap-x-10 max-[580px]:flex-col max-[580px]:gap-y-5 max-[580px]:pt-4">
                    <div className="p-4 rounded-[6] flex flex-col gap-y-7 border-grey w-1/1 min-[580px]:w-1/2 lg:w-[300px] xl:w-[380px]">
                        <div className="flex items-center gap-x-3">
                            <div className="rounded-[5] bg-[rgba(217,254,255,1)] w-[48px] h-[45px] flex justify-center items-center">
                                <EmailIcon className="w-[21px] h-[21px]" />
                            </div>
                            <span className="text-[16px] font-500">Email Verification</span>
                        </div>
                        <button className="cursor-pointer w-full p-2 gap-x-3 flex justify-center items-center rounded-[5] border-[1px] border-[solid] border-[rgba(40,40,40,0.1)]">
                            <span className="text-[rgba(4,147,152,1)] text-sm">Verified</span>
                            <BsFillCheckCircleFill className="w-[14px] h-[14px] text-[rgba(4,147,152,1)]" />
                        </button>
                    </div>
                    <div className="p-4 rounded-[6] flex flex-col gap-y-7 border-grey w-1/1 min-[580px]:w-1/2 lg:w-[300px] xl:w-[380px]">
                        <div className="flex items-center gap-x-3">
                            <div className="rounded-[5] bg-[rgba(254,226,226,1)] w-[48px] h-[45px] flex justify-center items-center">
                                <VerifyIcon className="w-[21px] h-[21px]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[16px] font-500">Recovery Options</span>
                                <span className="text-[13px] mt-[2] text-[rgba(40,40,40,0.45)]">Backup your key securely</span>
                            </div>
                        </div>
                        <button className="cursor-pointer w-full p-2 flex justify-center items-center rounded-[5] border-[1px] border-[solid] border-[rgba(40,40,40,0.1)]">
                            <span className="text-[rgba(4,147,152,1)] text-sm">Manage Recovery</span>
                        </button>
                    </div>
                </div>
                <div className="px-4 sm:px-6 py-5">
                    <div className='flex justify-between items-center'>
                        <h2 className="font-medium text-lg">All files</h2>
                        <div className="w-fit flex items-center">
                            <span className="text-sm text-[#12121280]">Show days left</span>
                            <label className="switch ml-[10]">
                                <input type="checkbox" onChange={() => setShowDaysLeft(!showDaysLeft)} checked={showDaysLeft} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-[10] w-full overflow-x-scroll xl:overflow-x-auto relative">
                        <div className="w-fit xl:w-full flex justify-between items-center text-sm text-[#12121280] h-[55px] border-grey rounded-[10]">
                            <div className="flex items-center w-[150px] sm:w-[200px] md:w-[300px] xl:w-[450px] sticky left-0 bg-[#fff] py-3 px-2 lg:px-6 h-full scroll-shadows">Name</div>
                            <span className="w-[100px] sm:w-[100px] xl:w-[150px] ml-[8] max-[640px]:ml-[12]">Size</span>
                            <span className="w-[90px] sm:w-[150px] xl:w-[200px]">Type</span>
                            <span className="w-[150px] sm:w-[200px] xl:w-[250px]">Last updated</span>
                            <span className="w-[120px] sm:w-[150px] xl:w-[180px]">Status</span>
                            <span className="w-[150px] xl:w-[200px] flex items-center">Days Left</span>
                        </div>

                        {files.map((file, index) => (
                            <button className="w-fit xl:w-full flex justify-between items-center text-[13px] xl:text-sm text-[var(--grey-600)] h-[55px] border-grey-bottom cursor-pointer" 
                            key={`file-${index}`} onClick={() => setModalOpen(true)}>
                                <div className="w-[150px] sm:w-[200px] md:w-[300px] xl:w-[450px] h-full flex items-center sticky left-0 bottom-0 z-1 bg-[#fff] py-3 px-2 lg:px-6 h-full scroll-shadows">
                                    <div className="flex items-center w-full pr-2">
                                        {file.svg("w-[15px] h-[15px]")}
                                        <span className="ml-[8] sm:ml-[10] lg:ml-[15] text-sm w-full ellipsis-text">{file.name}</span>
                                    </div>
                                </div>
                                <span className="w-[100px] sm:w-[100px] xl:w-[150px] ml-[8] max-[640px]:ml-[12]">{file.desc}</span>
                                <span className="w-[90px] sm:w-[150px] xl:w-[200px]">{file.type}</span>
                                <span className="w-[150px] sm:w-[200px] xl:w-[250px] max-[1280px]:text-[12px]">{file.date}</span>
                                <div className="w-[120px] sm:w-[150px] xl:w-[180px]">
                                    <div className={`
                                        w-fit py-1 px-3 rounded-full text-[11px]
                                        ${file.status === "----" ? "" : (file.status === "Encrypted" ? "bg-[rgba(217,254,255,1)]" : "bg-[rgba(255,237,227,1)] text-[rgba(247, 110, 47, 1)]")}
                                    `}>
                                        {file.status}
                                    </div>
                                </div>
                                <div className="w-[150px] xl:w-[200px] flex items-center xl:pr-3">
                                    <BucketIcon className={"w-24px h-18px"} fraction={0.1*index} />
                                    <span className="ml-4 max-[1280px]:text-[12px]">{"Within 180 days"}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <FileModal toggle={(bool) => setModalOpen(bool)} isOpen={modalOpen} setShareModal={(bool) => setShareModal(bool)} />
            
            {shareModal && <ShareFileModal toggle={(bool) => setShareModal(bool)} />}

        </AppLayout>
    )
}