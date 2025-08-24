import { BucketIcon, CopyIcon, DecryptIcon, DownloadIcon, GreenCheckIcon, ShareIcon, TrashIcon } from "@/assets/icons";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function FileModal(
    { toggle, isOpen, setShareModal }: 
    { toggle: (bool: boolean) => void, isOpen: boolean, setShareModal: (bool: boolean) => void }
) {

    const modalRef = useRef<HTMLElement | null>(null);

    useClickOutside(modalRef, () => toggle(false));

    return (
        <aside ref={modalRef} className={`fixed w-[500px] max-w-full h-full file-modal top-0 right-0 z-99999 transition-transform duration-500 ${isOpen?"translate-x-0":"translate-x-1/1"}`}>
            <div className="w-full h-full overflow-y-auto bg-[#fff] text-[var(--grey-600)]">
                <header className="p-4 xl:px-7 flex justify-end items-center sticky top-0 right-0 z-3 bg-[#fff] border-grey-bottom">
                    <button className="p-1 w-fit border-grey cursor-pointer" onClick={()=>toggle(false)}>
                        <AiOutlineClose className="w-[17px] h-[17px] text-[var(--grey-600)]" />
                    </button>
                </header>
                <main className="flex flex-col mt-[5] p-6 px-5 sm:px-6 xl:px-7">
                    <div className="flex justify-center items-center border-grey">
                        <Image src={"/grid-1.jpg"} width={100} height={100} alt="file" className="w-1/2 h-fit min-h-[300px] object-cover" />
                    </div>
                    <div className="mt-[20] flex flex-col gap-y-5.5">
                        <h2 className="font-medium text-xl">Lifestyle Fashion</h2>
                        <div className="flex items-center gap-x-5 mt-[-5]">
                            <span className="text-[13px] text-[var(--grey-600)]">.png file</span>
                            <span className="text-sm">-</span>
                            <span className="text-[16px] sm:text-md font-medium">46 MB</span>
                        </div>

                        <div className="mt-[1]">
                            <p className="text-[13px] text-[var(--grey-600)]">Blob ID</p>
                            <div className="flex items-center mt-[8] gap-x-2">
                                <span className="text-[13px] min-[430px]:text-sm">QmT6ydPJK9ZXFGWt9ZPxULaFgCyfs4hvDR</span>
                                <button className="cursor-pointer opacity-[0.75] hover:text-black hover:opacity-[1.0]">
                                    <CopyIcon className={"w-[14px] h-[14px]"} />
                                </button>
                            </div>
                        </div>

                        <div className="mt-[1]">
                            <p className="text-[13px] text-[var(--grey-600)]">Created at</p>
                            <p className="text-[13px] mt-[9]">2024-12-04, 12:34:50</p>
                        </div>

                        <div className="mt-[1]">
                            <p className="text-[13px] text-[var(--grey-600)]">Days left until expiration</p>
                            <div className="flex items-center mt-[10] gap-x-2">
                                <BucketIcon className={"w-[18px] h-[21px]"} fraction={0.5} />
                                <span className="text-[13px] mt-[3]">Expires on 2025-08-14</span>
                            </div>
                        </div>

                        <div className="mt-[8]">
                            <div className="flex items-center gap-x-2">
                                <GreenCheckIcon className={"w-18px h-18px"} />
                                <span className="text-[13px]">This file is encrypted</span>
                            </div>
                        </div>

                        <div className="mt-[1]">
                            <div className="flex items-center gap-x-3">
                                <button className="flex items-center border-grey rounded-[4] p-2 gap-x-2 opacity-[0.78] cursor-pointer">
                                    <DownloadIcon className={"w-[16px] h-[15px]"} />
                                    <span className="max-[430px]:hidden text-[12px]">Download File</span>
                                    <span className="min-[430px]:hidden text-[12px]">Download</span>
                                </button>
                                <button className="flex items-center border-grey rounded-[4] p-2 gap-x-2 opacity-[0.78] cursor-pointer"
                                onClick={() => setShareModal(true)}>
                                    <ShareIcon className={"w-[16px] h-[15px]"} />
                                    <span className="max-[430px]:hidden text-[12px]">Share File</span>
                                    <span className="min-[430px]:hidden text-[12px]">Share</span>
                                </button>
                                <button className="flex items-center border-grey rounded-[4] p-2 gap-x-2 opacity-[0.78] cursor-pointer">
                                    <DecryptIcon className={"w-[16px] h-[15px]"} />
                                    <span className="max-[430px]:hidden text-[12px]">Decrypt this File</span>
                                    <span className="min-[430px]:hidden text-[12px]">Decrypt</span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="mt-[1]">
                            <div className="flex items-center mt-[10] gap-x-6">
                                <button className="flex items-center border-grey rounded-[4] p-2 gap-x-2 opacity-[0.78] cursor-pointer">
                                    <TrashIcon className={"w-[16px] h-[15px]"} />
                                    <span className="text-[12px]">Move to Trash</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </aside>
    )
}