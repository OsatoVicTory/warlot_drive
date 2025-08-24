import { LinkIcon, ShareIcon, WalletAddressIcon } from "@/assets/icons";
import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiErrorWarningLine, RiFileWarningLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";

export default function ShareFileModal({ toggle }: { toggle: (bool: boolean) => void }) {

    const [share, setShare] = useState("");
    const modalRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(modalRef, () => toggle(false));

    return (
        <div className="w-full h-full bg-[rgba(27,27,27,0.6)] flex justify-center items-center fixed top-0 left-0 z-999995 text-[var(--grey-600)]">
            <div ref={modalRef} className="w-[500px] max-w-1/1 h-full overflow-y-auto md:h-fit md:max-h-85/100 bg-[#fff] md:rounded-[12]">
                {!share && <div className="px-7 pb-7">
                    <header className="flex flex-col gap-y-2 py-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-medium">Share this file with someone</h1>
                            <button className="p-1 w-fit border-grey cursor-pointer rounded-[3]" onClick={()=>toggle(false)}>
                                <AiOutlineClose className="w-[16px] h-[16px] text-[rgba(40,40,40,0.6)]" />
                            </button>
                        </div>
                        <p className="text-sm text-[rgba(40,40,40,0.6)]">Choose your preferred sharing option</p>
                    </header>
                    <main className="flex flex-col gap-y-6">
                        <div className="flex justify-between items-center bg-[rgba(243,243,243,0.65)] px-4 py-3 rounded-[6]">
                            <div className="flex flex-col gap-y-2">
                                <h2 className="text-[15px] font-medium">Copy Link to Share</h2>
                                <span className="text-[12px] text-[#a5a4a4] font-300">You can share the file link with anyone</span>
                            </div>
                            <button className="cursor-pointer border-grey p-2 px-3 text-[#a5a4a4] flex items-center gap-x-2 rounded-[6]">
                                <LinkIcon className="w-[15px] h-[15px]" />
                                <span className="text-sm">Copy link</span>
                            </button>
                        </div>
                        <button className="cursor-pointer flex justify-between items-center bg-[rgba(243,243,243,0.65)] px-4 py-3 rounded-[6]"
                        onClick={() => setShare("share")}>
                            <div className="flex flex-col gap-y-2">
                                <h2 className="text-[15px] font-medium text-start">SUI Wallet Address</h2>
                                <span className="text-[12px] text-[#a5a4a4] font-300">Paste recipient's SUI wallet address</span>
                            </div>
                            <MdKeyboardArrowRight className="w-[21px] h-[24px]" />
                        </button>
                        <button className="cursor-pointer flex justify-between items-center bg-[rgba(243,243,243,0.65)] px-4 py-3 rounded-[6]">
                            <div className="flex flex-col gap-y-2">
                                <h2 className="text-[15px] font-medium">Token-gated Access</h2>
                                <span className="text-[12px] text-[#a5a4a4] font-300">Set your preferred criteria</span>
                            </div>
                            <MdKeyboardArrowRight className="w-[21px] h-[24px]" />
                        </button>
                    </main>
                </div>}

                {share && <div className="px-7 pb-7">
                    <header className="flex flex-col gap-y-2 py-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-medium">Share through SUI Wallet</h1>
                            <button className="p-1 w-fit border-grey cursor-pointer rounded-[3]" onClick={()=>setShare("")}>
                                <AiOutlineClose className="w-[16px] h-[16px] text-[rgba(40,40,40,0.6)]" />
                            </button>
                        </div>
                        <p className="text-sm text-[rgba(40,40,40,0.6)]">Paste the user's SUI address or copy link to share</p>
                    </header>
                    <main className="flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between items-center p-4 rounded-[6] border-grey">
                                <div className="flex items-center gap-x-3 flex-grow pr-2">
                                    <WalletAddressIcon className="w-[17px] h-[17px]" />
                                    <input className="text-sm w-full outline-none border-none" placeholder="Enter recipient's address" />
                                </div>
                                <button className="flex items-center gap-x-2 text-[#a5a4a4]">
                                    <span className="text-[11px]">Can view</span>
                                    <TiArrowSortedDown className="w-[12px] h-[12px]" />
                                </button>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <RiErrorWarningLine className="w-[13px] h-[13px] text-[yellow]" />
                                <span className="text-[12px] text-[rgba(40,40,40,0.5)]">Make sure you enter the correct SUI wallet address</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-4 mt-[10]">
                            <button className="cursor-pointer border-grey p-3 pr-5 text-[#a5a4a4] flex items-center gap-x-2 rounded-[8]">
                                <LinkIcon className="w-[16px] h-[16px]" />
                                <span className="text-sm">Copy link</span>
                            </button>
                            <button className="cursor-pointer border-grey p-3 px-5 text-white flex items-center gap-x-3 rounded-full bg-[#02686B] opacity-[0.8] hover:opacity-[1.0]">
                                <IoMdShare className="w-[15px] h-[15px] text-white" />
                                <span className="text-sm">Share File</span>
                            </button>
                        </div>
                    </main>
                </div>}
            </div>
        </div>
    )
}