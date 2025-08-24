import Image from "next/image";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import styles from "./styles.module.css";

export default function Hero2() {
    return (
        <section className="lp_hero min-h-screen flex flex-col items-center py-20 px-4 sm:px-10 xl:px-20">
            <div className="flex flex-col items-center gap-5 text-black text-center"> {/* mt-[10] lg:mt-[100]">" */}
                <h1 className="text-2xl min-[440px]:text-3xl sm:text-4xl xl:text-5xl max-[640px]:leading-[1.2rem] font-bold">Your Personal Web3 Drive.</h1>
                <h1 className="text-2xl min-[440px]:text-3xl sm:text-4xl xl:text-5xl max-[640px]:leading-[1.2rem] font-bold">Ownership & Simplicity</h1>
                <p className="text-sm sm:text-xl opacity-[0.72] mt-[8]">Store, encrypt and control your files</p>
                <button className="px-4 sm:px-8 py-3 sm:py-4 text-sm rounded-full bg-[var(--primary-green-3)] hover:opacity-[0.9] cursor-pointer text-white mt-[10]">
                    Connect Wallet
                </button>
            </div>
            <div className={`${styles.hero_grid_card} flex justify-center text-black mt-[50] bg-[#FFFFFF] rounded-[12] w-9/10 p-3 sm:p-7`}>
                <div className={`${styles.hero_grid}`}>
                    <div className={styles.grow_row}>
                        <Image src={hero1} className={`${styles.hero_grid_img_cover} img_cover`} alt="hero" />
                    </div>
                    <div className={styles.hero_2}>
                        <Image src={hero2} className={styles.hero_img_2} alt="hero" />
                    </div>
                    <div className={styles.grow_col}></div>
                    <div className=""></div>
                    <div className={`${styles.hero_3}`}>
                        <Image src={hero3} className={`img_contain`} alt="hero" />
                        <div className="rounded-full text-white bg-[var(--primary-green-3)] mt-[15] px-4 py-2">Encrypted</div>
                    </div>
                    <div className="">
                        <Image src={hero4} className={`${styles.hero_grid_img_cover} img_cover`} alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    )
};