import Image from "next/image";

export default function NoFiles() {
    return (
        <div className="auxPage w-full h-full flex justify-center items-center text-black">
            <div className="flex flex-col items-center">
                <Image src={"/launch.png"} width={100} height={100} alt="launch" className="w-[270px] h-[270px] object-contain" />
                <div className="flex flex-col gap-y-2 items-center">
                    <h1 className="text-xl font-medium">Drag and drop files</h1>
                    <p className="text-sm text-[rgba(40,40,40,0.5)]">
                        Your drive is ready when you are
                    </p>
                </div>
                <button className="w-fit flex items-center mt-[20] gap-x-3 rounded-full py-3 px-6 text-white bg-[#02686B] opacity-[0.84] hover:opacity-[1.0] cursor-pointer">
                    <span className="text-sm">Add New File</span>
                </button>
            </div>
        </div>
    )
}