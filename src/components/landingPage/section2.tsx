import styles from "./styles.module.css";
import { FeaturesIcons } from "./icons";

export default function Features() {

    const features = [
        {
            feature: "Your files, your wallet",
            description: "Store and access files using your wallet. No signups. No cloud lock-in."
        },
        {
            img: "",
            feature: "Encrypted by default",
            description: "Protect every upload with built-in, wallet-tied encryption options.",
        },
        {
            img: "",
            feature: "No subscriptions",
            description: "Pay only for the days your file lives — starting at just 30 days per epoch.",
        }
    ];

    return (
        <section className="px-4 sm:px-8 xl:px-40 py-20 text-black bg-[#F8F8F866]">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl min-[440px]:text-3xl sm:text-4xl lg:text-5xl font-medium text-center">Why Early Users Are</h1>
                <h1 className="text-2xl min-[440px]:text-3xl sm:text-4xl lg:text-5xl font-medium text-center">Exploring Warlot Drive</h1>
                <div className="flex flex-col sm:flex-row items-center justify-between mt-[40] sm:mt-[60]">
                    {features.map((feature, index) => (
                        <div className={`${styles.features_card} p-7 rounded-[12] bg-[#FFFFFF]`} key={`feat-${index}`}>
                            {FeaturesIcons[index].svg}
                            <div className="mt-[30]">
                                <h3 className="text-[18px] xl:text-2xl font-regular mb-[10]">{feature.feature}</h3>
                                <span className="text-sm opacity-[0.71] mt-[40]">{feature.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}