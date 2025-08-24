"use client";

import { AiOutlinePlus } from "react-icons/ai";
import styles from "./styles.module.css";
import { useState } from "react";

export default function FAQs() {
    const [index, setIndex] = useState(0);
    const Faqs = [
        {
            question: "Can I change a file name after upload?",
            answer: "Yes! You can rename any file at any time from the file info panel — no need to re-upload or alter its storage lifecycle."
        },
        {
            question: "How does encryption work?",
            answer: ""
        },
        {
            question: "What happens after file expiration?",
            answer: ""
        },
        {
            question: "Can I preview files before downloading?",
            answer: ""
        },
        {
            question: "What is WAL and how do I use it?",
            answer: ""
        },
    ];

    return (
        <section className="py-10 px-8 md:px-20 text-black bg-[#F8F8F8]" id="faq">
            <h2 className="text-2xl lg:text-4xl font-medium">FAQs</h2>
            <div className="flex flex-col gap-y-4 mt-[20]">
                {Faqs.map((faq, i) => (
                    <div className="bg-[#FFFFFF] rounded-[10] p-4" key={faq.question}>
                        <div className="w-full flex justify-between items-center">
                            <h3 className="text-[16px] sm:text-lg">{faq.question}</h3>
                            <button className="flex justify-center items-center cursor-pointer p-2"
                            onClick={() => setIndex(index === i ? -1 : i)}>
                                <AiOutlinePlus className="w-[18px] h-[18px]" />
                            </button>
                        </div>
                        <div className={`w-full ${styles.Faq_toggle} ${styles[`Faq_toggle_${index === i}`]}`}>
                            <span className="text-sm text-[var(--grey-600)]">{faq.answer}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}