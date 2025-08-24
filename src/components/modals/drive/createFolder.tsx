import useClickOutside from "@/hooks/useClickOutside";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function CreateFolderModal({ toggle }: { toggle: (bool: boolean) => void }) {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(modalRef, () => toggle(false));

    return (
        <div className="w-full h-full bg-[rgba(27,27,27,0.6)] flex justify-center items-center fixed top-0 left-0 z-999995 text-[var(--grey-600)]">
            <div ref={modalRef} className="w-[450px] max-w-1/1 h-full overflow-y-auto md:h-fit md:max-h-85/100 bg-[#fff] md:rounded-[12]">
                <div className="px-7 pb-7">
                    <header className="flex flex-col gap-y-2 py-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-medium">Create New Folder</h1>
                            <button className="p-1 w-fit border-grey cursor-pointer rounded-[3]" onClick={()=>toggle(false)}>
                                <AiOutlineClose className="w-[16px] h-[16px] text-[rgba(40,40,40,0.4)]" />
                            </button>
                        </div>
                        {/* <p className="text-sm text-[rgba(40,40,40,0.6)]">Choose your preferred sharing option</p> */}
                    </header>
                    <main className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-3">
                            <label className="text-sm">Enter the folder name</label>
                            <input className="w-full p-3 rounded-[6] text-sm border-grey" placeholder="E.g My vlogs" />
                        </div>
                        <button className="rounded-full w-full flex justify-center py-3 px-6 text-sm border-grey cursor-pointer bg-[#02686B] opacity-[0.75] text-white hover:opacity-[1.0]">
                            <div className="flex items-center w-fit gap-x-2">
                                <span className="text-md font-medium">Create folder</span>
                            </div>
                        </button>
                    </main>
                </div>
            </div>
        </div>
    )
};