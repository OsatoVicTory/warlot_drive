import { SignupSpiral } from "./icons";
import styles from "./styles.module.css";

export default function SignupSection() {
    return (
        <section className="[@media(max-width: 440px)]:px-4 px-10 py-8">
            <div className={`w-full px-5 py-10 sm:py-15 xl:py-18 pb-13 sm:pb-25 xl:pb-30 flex flex-col items-center text-center rounded-[15] gap-6 text-white bg-[var(--primary-green-3)] ${styles.Signup_sect}`}>
                <h2 className="text-2xl sm:text-5xl font-medium">Sign up and get started</h2>
                <p className="text-[13px] sm:text-sm opacity-[0.75]">Your data belongs to your wallet not your provider</p>
                <div className="flex justify-center w-full mt-[12]">
                    <div className="flex w-fit relative">
                        <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#FFFFFF] text-[var(--primary-green-3)] hover:opacity-[0.9] cursor-pointer">
                            Connect Wallet
                        </button>
                        <div className={styles.Signup_spiral}>
                            <SignupSpiral className={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}