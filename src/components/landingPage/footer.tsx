import { WarlotLogo } from "@/assets/logo";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-[20px] py-[48px] md:pt-20 sm:px-[48px] xl:px-[100px] text-black">
            <div className="px-4">
                <div className="flex flex-col md:flex-row justify-between gap-y-10">
                    <div className={styles.Footer_logo}>
                        <Link href="/" className="flex items-center ml-[-30]">
                            <WarlotLogo />
                        </Link>
                        <p className="text-[17px] lg:text-xl text-[var(--grey-600)] mt-[18]">
                            Built for privacy-first storage, powered by Walrus protocol
                        </p>
                    </div>
                    <div className="footer-links flex justify-between gap-x-2 xl:gap-x-38">
                        <div className="flex flex-col gap-5 sm:gap-6">
                            <h4 className="text-[var(--grey-600)] opacity-[0.84] text-[17px] font-medium">Navigate</h4>
                            <Link href="/" className="text-sm sm:text-[17px]">Features</Link>
                            <Link href="/" className="text-sm sm:text-[17px]">About</Link>
                            <Link href="/" className="text-sm sm:text-[17px]">Contact Us</Link>
                            <Link href="/" className="text-sm sm:text-[17px]">Our team</Link>
                        </div>
                        <div className="flex flex-col gap-5 opacity-[0.84] md:gap-6">
                            <h4 className="text-[var(--grey-600)] text-[17px] font-medium">Company</h4>
                            <Link href="/" className="text-sm sm:text-[17px]">Privacy Policy</Link>
                            <Link href="/" className="text-sm sm:text-[17px]">Terms & Condition</Link>
                            <Link href="/" className="text-sm sm:text-[17px]">FAQs</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center p-4 bg-[#F8F8F8] mt-[50] lg:mt-[65] rounded-full">
                    <span className="text-sm text-[var(--grey-600)]">{`${new Date().getFullYear()} Warlot. All right reserved`}</span>
                    <div className="flex items-center">
                        <a href="/" target="_blank" rel="noreferrer" className={styles.Footer_icons}>
                            <FaFacebookF className="socials_icon" />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer" className={styles.Footer_icons}>
                            <FaLinkedin className="socials_icon" />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer" className={styles.Footer_icons}>
                            <FaTwitter className="socials_icon" />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer" className={styles.Footer_icons}>
                            <FaYoutube className="socials_icon" />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer" className={styles.Footer_icons}>
                            <FaInstagram className="socials_icon" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <Link href="/" className="text-sm">Terms of Service</Link>
                        <Link href="/" className="text-sm ml-[21]">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}