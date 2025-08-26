import { MdArrowBackIos } from "react-icons/md";
import DriveLayout from "../driveLayout";
import Link from "next/link";

export default function AllAudios() {
      
    return (
        <DriveLayout filesType={"audio"}>
            <div className="flex justify-between items-center py-3 px-6">
                <div className="text-black flex items-center w-fit gap-x-3">
                    <Link href="/drive" className="flex items-center rounded-full py-3 px-4 bg-[rgba(243,243,243,0.8)] cursor-pointer">
                        <MdArrowBackIos className="w-[16px] h-[14px] text-[var(--grey-600)]" />
                        <span className="text-sm ml-[2px] font-medium text-[var(--grey-600)]">My Drive</span>
                    </Link>
                    <div className="flex items-center gap-x-2">
                        <h1 className="text-xl font-medium">All Audios</h1>
                        <span className="text-[12px] text-[rgba(40,40,40,0.5)] mt-[3]">(152 files)</span>
                    </div>
                </div>
            </div>
        </DriveLayout>
    )
}