import Image from "next/image";

export default function NotFound() {
    return (
        <div className="auxPage w-full h-full flex justify-center items-center text-black">
            <div className="flex flex-col items-center h-fit">
                <Image src={"/not-found.png"} width={100} height={100} alt="not-found" className="w-[300px] h-[300px] object-cover" />
                <h1 className="text-2xl font-semibold mt-[30]">Not Found</h1>
                <p className="text-sm text-[rgba(40,40,40,0.5)] mt-[10]">
                    Seems like we can't find what you are looking for
                </p>
            </div>
        </div>
    )
}