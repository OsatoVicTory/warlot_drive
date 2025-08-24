"use client";

import { useCallback, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import styles from "./styles.module.css";

export default function AppLayout(
    { children } : {
    children: React.ReactNode;
}) {
    
    const [opened, setOpened] = useState(true);

    const toggle = useCallback((bool?: boolean) => {
        setOpened((prev) => bool !== undefined ? bool : !prev);
    }, []);

    return (
        <div className="h-screen w-full bg-[#fff]">
            <div className="flex w-full h-full overflow-y-auto">
                <Sidebar toggle={toggle} opened={opened} />
                <div className={`${styles[`LayoutMain_${opened}`]} appMain`}>
                    <Header toggle={toggle} />
                    {children}
                </div>
            </div>
        </div>
    )
}