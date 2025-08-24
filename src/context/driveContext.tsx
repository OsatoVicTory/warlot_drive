"use client";

import { FileType } from '@/types/drive';
import React, { createContext, useState } from 'react';


const DriveContext = createContext<{
    driveData: FileType[],
    setDriveData: React.Dispatch<FileType[]>,
}>({
    driveData: [],
    setDriveData: (prev: FileType[]) => {},
});

const DriveProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    
    const files = Array(2).fill([
        {
            name: "Shopify website docs", size: "130 MB", type: ".pdf file", fileType: "document",
            date: "2025-04-10, 12:32:54", status: "Encrypted", img: "/grid-1.jpg"
        },
        {
            name: "Lifestyle fashion", size: "830 MB", type: "folder", fileType: "folder",
            date: "2025-04-10, 12:32:54", status: "----", img: "", id: "1234567890",
        },
        {
            name: "Day-ti-day activities", size: "150 MB", type: ".jpeg file", fileType: "image",
            date: "2025-04-10, 12:32:54", status: "Encrypted", img: "/grid-2.png"
        },
        {
            name: "Videos for my vlog", size: "300 MB", type: ".mpv file", fileType: "video",
            date: "2025-04-10, 12:32:54", status: "Not Encrypted", img: "file"
        },
        {
            name: "Audios for my vlog", size: "110 MB", type: ".mp3 file", fileType: "audio",
            date: "2025-04-10, 12:32:54", status: "Encrypted", img: "/grid-3.jpg"
        },
    ]).flat();

    const [driveData, setDriveData] = useState<FileType[]>(files);

    return (
        <DriveContext.Provider value={{ driveData, setDriveData }}>
            {children}
        </DriveContext.Provider>
    );
};

export { DriveContext, DriveProvider };