import { NotificationBellIcon, SearchSettingsIcon, WalletIcon } from "@/assets/icons";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdStarOutline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ toggle }: { toggle: () => void }) {
    return (
        <header className="w-full text-[var(--grey)] sticky top-0 right-0 bg-[#fff] z-10">
            <div className="flex justify-between items-center px-4 py-3">
                <button className="min-[770px]:hidden p-2 cursor-pointer rounded-full hover:bg-[rgba(18, 18, 18, 0.15)]"
                onClick={() => toggle()}>
                    <RxHamburgerMenu className="w-[18px] h-[18px]" />
                </button>

                <div className="max-[770px]:hidden flex justify-between items-center px-3 md:px-4 py-2 gap-x-2 md:gap-x-3 rounded-full border-grey header-search-input">
                    <FiSearch className="w-[19px] h-[19px]" />
                    <input placeholder="Search files" className="lg:w-[300px] xl:w-[400px] outline-none" />
                    <button className="w-[19px] h-[19px] flex items-center justify-center cursor-pointer">
                        <SearchSettingsIcon className="w-[18px] h-[18px]" />
                    </button>
                </div>

                <div className="flex items-center gap-x-5">
                    <button className="border-grey flex gap-x-2 md:gap-x-3 items-center padding rounded-full cursor-pointer px-3 md:px-4 py-2">
                        <WalletIcon className="w-[19px] h-[19px]" />
                        <span className="max-[920px]:hidden">My wallet</span>
                        <IoIosArrowDown className="w-[15px] h-[18px]" />
                    </button>
                    <button className="w-fit cursor-pointer">
                        <MdStarOutline className="w-[21px] h-[21px]" />
                    </button>
                    <button className="w-fit cursor-pointer">
                        <NotificationBellIcon className="w-[21px] h-[21px]" /> 
                    </button>
                    <button className="flex items-center padding rounded-full cursor-pointer py-3 gap-x-2">
                        <div className={`rounded-full w-[36px] h-[36px] bg-[#D9FEFF] flex justify-center items-center`}>
                            <FaRegUserCircle className="w-[18px] h-[18px] opacity-[0.66]" />
                        </div>
                        <IoIosArrowDown className="w-[15px] h-[15px]" />
                    </button>
                </div>
            </div>
        </header>
    )
}