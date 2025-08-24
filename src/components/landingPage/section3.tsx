"use client";

import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FolderIcon, OnChainExpiration, PreviewDocument, SharedFolders, StorageCost, TokenSharing } from "./icons";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Tools() {
    const [toggledTo, setToggledTo] = useState(0);
    const toolsDropdown = [
        {
            name: "End-to-End Encryption",
            description: "Your files are encrypted both in transit and at rest - without compromise. Only you and your authorized recipients can ever access them"
        },
        {
            name: "Flexible File Lifecycles",
            description: ""
        },
        {
            name: "Token-Gated Sharing",
            description: ""
        }
    ];

    const tools = [
        {
            svg: (className: string) => <FolderIcon className={className} />,
            tool: "File & folder encryption"
        },
        {
            svg: (className: string) => <TokenSharing className={className} />,
            tool: "Token-gated sharing"
        },
        {
            svg: (className: string) => <OnChainExpiration className={className} />,
            tool: "On-chain expiration tracking"
        },
        {
            svg: (className: string) => <SharedFolders className={className} />,
            tool: "Shared folders"
        },
        {
            svg: (className: string) => <PreviewDocument className={className} />,
            tool: "Preview documents, image"
        },
        {
            svg: (className: string) => <StorageCost className={className} />,
            tool: "Storage cost estimator"
        },
    ]

    return (
        <section className="px-8 md:px-20 xl:px-[100px] py-8 pb-20 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center [@media(min-width: 640px) and (max-width: 1024px)]:gap-x-5 gap-y-15 gap-x-12">
                <div className="flex justify-center items-center order-2 sm:order-1">
                    <Image src={"/no-logins.svg"} alt="Data security" width={100} height={100} className="w-fit h-fit object-contain" />
                </div>
                <div className="flex flex-col sm:px-4 xl:px-10 order-1 sm:order-2">
                    <h2 className="text-2xl min-[440px]:text-3xl lg:text-4xl font-medium">Data security is Built in</h2>
                    <p className="text-sm lg:text-lg text-[var(--grey-600)] mt-[12] lg:mt-[20]">
                        Warlot uses decentralized storage (Walrus protocol) with automatic 
                        expiration logic, optional encryption and on-chain audit trails
                    </p>
                </div>
                <div className="flex flex-col px-4 xl:px-10 order-3">
                    <h2 className="text-2xl min-[440px]:text-3xl lg:text-4xl font-medium">On-Chain Transparency</h2>
                    <p className="text-sm lg:text-lg text-[var(--grey-600)] mt-[12] lg:mt-[20]">
                        When you delete a file early, your unused storage epochs are released. 
                        Warlot Drive is cost-efficient, secure and backed by real-time epoch logic
                    </p>
                </div>
                <div className="flex justify-center items-center order-4">
                    <Image src={"/flexible-payments.svg"} alt="Transparency" width={100} height={100} className="w-fit h-fit object-contain" />
                </div>
                <div className="flex justify-center items-center order-6 sm:order-5 mt-[10] sm:mt-[50]">
                    <div className={`${styles.Tools_lists} grid grid-cols-3 justify-between gap-x-4 gap-y-12 lg:gap-y-15 text-center px-0`}>
                        {tools.map((tool, index) => (
                            <div className="flex flex-col items-center" key={`tool-${index}`}>
                                {tool.svg("w-[39px] h-[45px]")}
                                <p className="text-[13px] mt-[25] px-4">{tool.tool}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col order-5 sm:order-6 mt-[10] sm:mt-[50] xl:px-10">
                    <h2 className="text-2xl min-[440px]:text-3xl lg:text-4xl font-medium">Powerful Tools at Your Fingertips</h2>
                    <p className="text-[14px] text-[var(--grey-600)] mt-[15]">
                        From encrypted storage and custom lifecycle settings to token-gated sharing and 
                        live file previews - Warlot Drive puts you in full control of your data.
                    </p>
                    <div className="flex flex-col gap-5 mt-[20] w-full">
                        {toolsDropdown.map((tool, index) => (
                            <div className="mt-[0]" key={`toolsdropdown-${index}`}>
                                <div className="w-full flex justify-between py-1">
                                    <div className={`${styles.toolToggle} ${styles[`tT_${toggledTo === index}`]}`}>
                                        <h3 className="text-[17px] font-medium">{tool.name}</h3>
                                        <div className={`${styles.tT_grow}`}>
                                            <span className="text-[var(--grey-600)] text-[14px]">{tool.description}</span>
                                        </div>
                                    </div>
                                    <button className="w-[30px] h-[30px] rounded-[10] cursor-pointer flex items-center justify-center"
                                    onClick={() => setToggledTo(toggledTo === index ? -1 : index)}>
                                        <MdKeyboardArrowDown className={`w-[21px] h-[21px] rotate-${toggledTo === index ? "360" : "0"}`} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}