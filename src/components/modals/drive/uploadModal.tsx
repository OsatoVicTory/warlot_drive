import { CopyIcon, DocumentIcon, ImageRedIcon, UploadIcon, VideoIcon } from "@/assets/icons";
import { Spinner } from "@/components/ui/loading";
import Toggle from "@/components/ui/toggle";
import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function UploadModal({ toggle }: { toggle: (bool: boolean) => void }) {

    const [durationCheck, setDurationCheck] = useState(true);
    const [encrypt, setEncrypt] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [save, setSave] = useState(true);
    const [selectedPlan, setSelecetdPlan] = useState(2);
    const [showPlans, setShowPlans] = useState(false);

    useClickOutside(modalRef, () => toggle(false));

    const files = [
        {
            svg: (className: string) => <DocumentIcon className={className} />,
            name: "My Report.docs", size: "75MB", progress: 100
        },
        {
            svg: (className: string) => <ImageRedIcon className={className} />,
            name: "Avatar.png", size: "5MB", progress: 75
        },
        {
            svg: (className: string) => <VideoIcon className={className} />,
            name: "Mountain.mp4", size: "44MB", progress: 50
        },
    ];

    const plans = [
        {name: "120 Days Plan", cost: "2.4 WAL"},
        {name: "180 Days Plan", cost: "3.6 WAL"},
        {name: "320 Days Plan", cost: "5.8 WAL"},
    ];

    return (
        <div className="w-full h-full bg-[rgba(27,27,27,0.6)] flex justify-center items-center fixed top-0 left-0 z-999995 text-[var(--grey-600)]">
            <div ref={modalRef} className="w-[650px] max-w-1/1 h-full overflow-y-auto md:h-fit md:max-h-85/100 bg-[#fff] md:rounded-[12] scrollbar-gutter">
                <div className="px-6 pr-4 max-[440px]:px-3">
                    <div className="flex flex-col gap-y-8">
                        <div className="px-4 py-4 flex items-center sticky top-0 left-0 z-10 bg-[#fff] border-grey-bottom">
                            <div className="flex w-fit items-center gap-x-4">
                                <UploadIcon className={"w-[21px] h-[23px]"} />
                                <span className="text-[18px] font-medium">Selected Files</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-y-8 p-5 max-[440px]:px-4 border-grey rounded-[7] mt-[-10]">
                            {files.map((file, index) => (
                                <div className="flex flex-col gap-y-5" key={`upload-files-${index}`}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-x-3 w-[200px]">
                                            <div className="w-[30px] h-[30px] flex justify-center items-center rounded-[10] bg-[rgba(234,234,234,1)]">
                                                {file.svg("w-[15px] h-[15px]")}
                                            </div>
                                            <span className="text-[15px] ellipsis-text w-[100px] text-[rgba(40,40,40,0.7)]" style={{width: "calc(100% - 31px)"}}>{file.name}</span>
                                        </div>
                                        <span className="text-sm text-[rgba(40,40,40,0.4)]">{file.size}</span>
                                        {
                                            file.progress < 100 ?
                                            <button className="cursor-pointer p-1">
                                                <AiOutlineClose className="w-[18px] h-[18px] text-[rgba(40,40,40,0.6)]" />
                                            </button>
                                            :
                                            <BsFillCheckCircleFill className="w-[19px] h-[19px] text-[#34C759]" />
                                        }
                                    </div>
                                    <div className="progressBar w-full h-[4px] bg-[rgba(234,234,234,1)] rounded-full">
                                        <div className="progress bg-[#00B1BB] rounded-full h-full" style={{width: file.progress+"%"}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={`flex flex-col ${showPlans && "gap-y-7"} py-5 px-3 min-[400px]:px-5 border-grey rounded-[7] dropdown_par`}>
                            <div className="flex justify-between items-center">
                                <span className="text-md font-medium">Duration</span>
                                <div className="flex items-center gap-x-2">
                                    <span className="text-[13px]">Use default option</span>
                                    <div className="flex gap-x-2">
                                        <Toggle className={"w-[33px] h-[21px] rounded-full"} checked={durationCheck} clickFn={()=>setDurationCheck(!durationCheck)} />
                                        <button className="cursor-pointer w-fit" onClick={() => setShowPlans(!showPlans)}>
                                            <MdKeyboardArrowDown className={`w-[21px] h-[21px] transition-[rotate] ease-in-out ${showPlans?"rotate-180":"rotate-0"}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={`dropdown dropdown_${showPlans} flex flex-col gap-y-7`}>
                                <div className={`flex justify-between items-center`}>
                                    {plans.map((plan, index) => (
                                        <div className="w-full pr-2 flex gap-x-2 min-[400px]:gap-x-3" key={`plan-${index}`}>
                                            <button onClick={() => setSelecetdPlan(index)}
                                            className={`cursor-pointer w-[15px] min-[400px]:w-[18px] h-[14px] min-[400px]:h-[18px] mt-[5] rounded-full flex justify-center opacity-[0.72] items-center border-[2px] border-solid ${selectedPlan===index?"border-[#02682B]":"border-[#a5a4a4]"}`}>
                                                {selectedPlan === index && <div className="w-[7px] min-[400px]:w-[10px] h-[8px] min-[400px]:h-[10px] rounded-full bg-[#02686B]"></div>}
                                            </button>
                                            <div className="flex flex-col gap-y-1">
                                                <span className="text-[14px] min-[400px]:text-[15px] font-medium">{plan.name}</span>
                                                <span className="text-[11px] min-[400px]:text-[13px] text-[rgba(40,40,40,0.6)] font-300">{plan.cost}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-x-6">
                                    <span className="text-[13px]">How many renewals cycles</span>
                                    <div className="flex items-center gap-x-3">
                                        <input className="w-[70px] py-2 px-3 outline-none border-grey rounded-[11]" placeholder="1" />
                                        <span className="text-[13px]">cycles</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`flex flex-col ${encrypt && "gap-y-5"} p-5 border-grey rounded-[7] dropdown_par`}>
                            <div className="flex justify-between items-center">
                                <span className="text-md font-medium">Encrypt this file(s)</span>
                                <div className="flex items-center gap-x-2">
                                    <span className="text-[14px]">Enable</span>
                                    <div className="flex">
                                        <Toggle className={"w-[31px] h-[19px] rounded-full"} checked={encrypt} clickFn={()=>setEncrypt(!encrypt)} />
                                    </div>
                                </div>
                            </div>
                            <div className={`flex flex-col gap-y-5 dropdown dropdown_${encrypt}`}>
                                <div className="flex justify-between items-center gap-x-3">
                                    <span className="text-sm w-[123px]">Key Label</span>
                                    <input className="rounded-[6] flex-grow px-4 py-3 text-sm outline-none border-grey" placeholder="Give a name" />
                                </div>
                                <div className="flex justify-between gap-x-3">
                                    <span className="text-sm mt-[16] w-[123px]">Your Key Password</span>
                                    <div className="flex flex-col gap-2 flex-grow">
                                        <div className="rounded-[6] flex items-center justify-between p-4 pb-3 text-[13px] outline-none border-grey">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-sm">****************</span>
                                                <CopyIcon className="w-[18px] h-[18px]" />
                                            </div>
                                            <button className="w-fit cursor-pointer">
                                                <IoEyeOutline className="w-[18px] h-[18px]" />
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-x-1">
                                            <button className="cursor-pointer" onClick={()=>setSave(!save)}>
                                                {
                                                    save ?
                                                    <FaSquareCheck className="w-[14px] h-[14px] text-[#02686B]" />
                                                    :
                                                    <FaRegSquare className="w-[14px] h-[14px] text-[#02686B]" />
                                                }
                                            </button>
                                            <span className="text-[12px]">Save encryption keys in my key vaults</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[12px] font-300 px-4">Provided that your wallet must be funded with $WAL.</p>
                        
                        <div className="flex justify-end w-full sticky bottom-0 left-0 z-10 bg-[#fff] p-4 py-5 border-grey-top">
                            <div className="flex gap-x-4 item-center">
                                <button className="rounded-full py-3 px-6 text-sm border-grey cursor-pointer hover:bg-[rgba(18,18,18,0.12)]">
                                    Cancel
                                </button>
                                <button className="rounded-full py-3 px-6 text-sm border-grey cursor-pointer bg-[#02686B] opacity-[0.75] text-white hover:opacity-[1.0]">
                                    {/* <span>Upload Files</span> */}
                                    <div className="flex items-center gap-x-2">
                                        <span>Saving...</span>
                                        <Spinner className="w-[18px] h-[18px] border-[3px]" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
        </div>
    )
}