"use client";

import { 
    AudioIcon, BucketIcon, DocumentIcon, FilePlaceholderIcon, 
    FileUploadIcon, FlexLayoutIcon, FolderIcon, FolderUploadIcon, 
    GridLayoutIcon, ImageIcon, VideoIcon 
} from "@/assets/icons";
import AppLayout from "@/layout";
import Image from "next/image";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import FileModal from "@/components/modals/drive/fileModal";
import UploadModal from "@/components/modals/drive/uploadModal";
import ShareFileModal from "@/components/modals/drive/shareFileModal";
import Toggle from "@/components/ui/toggle";
import { DriveContext } from "../../context/driveContext";
import { FileType } from "@/types/drive";
import { Skeleton } from "@/components/ui/loading";
import CreateFolderModal from "@/components/modals/drive/createFolder";
import Link from "next/link";
import { FaEllipsis } from "react-icons/fa6";

export default function DriveLayout({ 
    children, filesType
}: {
    children: React.ReactNode, filesType: string
}) {

    const { driveData } = useContext(DriveContext);
    const [split, setSplit] = useState<{folders: FileType[], files: FileType[]} | null>(null);
    const [files, setFiles] = useState<FileType[]>([]);
    const [loading, setLoading] = useState(true);
    const [showDaysLeft, setShowDaysLeft] = useState(true);
    const [display, setDisplay] = useState("flex");
    const [modalOpen, setModalOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);
    const [createFolder, setCreateFolder] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const skeletonArr = useMemo(() => Array(6).fill(0), []);

    useEffect(() => {    
        
        const getFilesData = async () => {
            try {
                await new Promise((res) => setTimeout(res, 2500));
                // remove folder below, it was used for testing
                if(filesType === "all" || filesType === "folder") {
                    setFiles(driveData);
                    const folders: FileType[] = [];
                    const files_: FileType[] = []
                    driveData.forEach(file => {
                        if(file.type === "folder") folders.push(file);
                        else files_.push(file);
                    });
                    setSplit({ folders, files: files_ });
                } else {
                    const res = driveData.filter(file => file.fileType === filesType);
                    setFiles(res);
                }
                setLoading(false);
            } catch(err) {
                console.log(err);
            }
        };

        getFilesData();

    }, [filesType]);

    const FileSvg = (type: string, className: string) => {
        switch (type) {
            case "folder":
                return <FolderIcon className={className} />;
            case "image":
                return <ImageIcon className={className+" text-[rgba(255,237,227,1)]"} />;
            case "video":
                return <VideoIcon className={className} />
            case "audio":
                return <AudioIcon className={className} />
            default:
                return <DocumentIcon className={className} />;
        }
    };
        
    return (
        <AppLayout>
            <div className="w-full text-black">
                <div className="flex justify-between items-center p-4 text-white">
                    <div className="w-fit relative">
                        <button onClick={() => setDropdown(!dropdown)}
                        className="flex items-center gap-x-3 px-4 sm:px-5 xl:px-7 py-3 sm:py-3 bg-[#02686B] cursor-pointer rounded-full">
                            <FaPlus className="w-[17px] h-[17px]" />
                            <span className="text-sm">New File</span>
                        </button>
                        <div ref={dropdownRef}
                        className={`flex flex-col w-max absolute top-12/10 z-5 left-0 text-[var(--grey-600)] dropdown-par dropdown dropdown_${dropdown} bg-[#fff] newFile-dropdown rounded-[2] p-1`}>
                            <button onClick={() => {setUploadModal(true); setDropdown(false);}} 
                            className="flex items-center p-3 pr-10 gap-x-3 w-full cursor-pointer hover:bg-[rgba(18,18,18,0.05)] rounded-[5]">
                                <FileUploadIcon className="w-[13px] h-13px]" />
                                <span className="text-sm">Upload file</span>
                            </button>
                            <button onClick={() => {setCreateFolder(true); setDropdown(false);}}
                            className="flex items-center w-full p-3 pr-10 gap-x-3 cursor-pointer hover:bg-[rgba(18,18,18,0.05)] rounded-[5]">
                                <FolderUploadIcon className="w-[13px] h-13px]" />
                                <span className="text-sm">New Folder</span>
                            </button>
                        </div>
                    </div>

                    {!loading && <div className="flex items-center rounded-[10]" style={{boxShadow: "0px 2px 20px 5px #E4E4E459"}}>
                        <button className={`flex justify-center items-center rounded-[10] px-3 py-3 ${display==="flex"&&"bg-[#D9FEFF]"}`}
                        onClick={() => setDisplay("flex")}>
                            <FlexLayoutIcon className="w-[21px] h-[15px]" />
                        </button>
                        <button className={`flex justify-center items-center rounded-[10] px-3 py-3 ${display==="grid"&&"bg-[#D9FEFF]"}`}
                        onClick={() => setDisplay("grid")}>
                            <GridLayoutIcon className="w-[21px] h-[15px]" />
                        </button>
                    </div>}
                </div>
                
                {children}

                <div className="px-4 sm:px-6 py-5">
                    <div className='flex justify-between items-center'>
                        <h2 className="font-medium text-lg">All files</h2>
                        <div className="w-fit flex items-center">
                            <span className="text-sm text-[#12121280]">Show days left</span>
                            <Toggle className={"w-[33px] h-[21px] ml-[10] rounded-full"} 
                            checked={showDaysLeft} clickFn={()=>setShowDaysLeft(!showDaysLeft)} />
                        </div>
                    </div>

                    {display === "flex" && <div className="mt-[10] w-full overflow-x-scroll xl:overflow-x-auto relative">
                        <div className="w-fit xl:w-full flex justify-between items-center text-sm text-[#12121280] h-[55px] border-grey rounded-[10]">
                            <div className="flex items-center w-[150px] sm:w-[200px] md:w-[300px] xl:w-[450px] sticky left-0 bg-[#fff] py-3 px-2 lg:px-6 h-full scroll-shadows">Name</div>
                            <span className="w-[100px] sm:w-[100px] xl:w-[150px] pl-3">Size</span>
                            <span className="w-[90px] sm:w-[150px] xl:w-[200px] pl-3">Type</span>
                            <span className="w-[150px] sm:w-[200px] xl:w-[250px] pl-3">Last updated</span>
                            <span className="w-[120px] sm:w-[150px] xl:w-[180px] pl-3">Status</span>
                            <span className={`w-[150px] xl:w-[200px] flex items-center pl-3 ${!showDaysLeft && "hidden"}`}>Days Left</span>
                        </div>

                        {
                            loading 
                            ?
                            skeletonArr.map((_, index) => (
                                <div className="w-fit xl:w-full flex justify-between items-center h-[55px] border-grey-bottom" key={`file-loading-${index}`}>
                                    <div className="w-[150px] sm:w-[200px] md:w-[300px] xl:w-[450px] h-full flex items-center sticky left-0 bottom-0 z-1 bg-[#fff] py-3 px-2 lg:px-6 h-full scroll-shadows">
                                        <div className="flex items-center w-full pr-2">
                                            <Skeleton className="w-full rounded-full h-[23px]" />
                                        </div>
                                    </div>
                                    <div className="w-[100px] sm:w-[100px] xl:w-[150px] max-[640px]:ml-[12] px-3">
                                        <Skeleton className="w-full rounded-full h-[23px]" />
                                    </div>
                                    <div className="w-[90px] sm:w-[150px] xl:w-[200px] px-3">
                                        <Skeleton className="w-full rounded-full h-[23px]" />
                                    </div>
                                    <div className="w-[150px] sm:w-[200px] xl:w-[250px] max-[1280px]:text-[12px] px-3">
                                        <Skeleton className="w-full rounded-full h-[23px]" />
                                    </div>
                                    <div className="w-[120px] sm:w-[150px] xl:w-[180px] px-3">
                                        <Skeleton className="w-full rounded-full h-[24px]" />
                                    </div>
                                    <div className={`w-[150px] xl:w-[200px] flex items-center px-3 ${!showDaysLeft && "hidden"}`}>
                                        <Skeleton className="w-full rounded-full h-[24px]" />
                                    </div>
                                </div>
                            ))
                            :
                            files.map((file, index) => (
                                // button has a style text-align by default which can make some text to align center
                                <button className="w-fit xl:w-full text-start flex justify-between items-center text-[13px] xl:text-sm text-[var(--grey-600)] h-[55px] border-grey-bottom cursor-pointer" 
                                key={`file-${index}`} onClick={() => setModalOpen(true)}>
                                    <div className="w-[150px] sm:w-[200px] md:w-[300px] xl:w-[450px] h-full flex items-center sticky left-0 bottom-0 z-1 bg-[#fff] py-3 px-2 lg:px-6 h-full scroll-shadows">
                                        <div className="flex items-center w-full pr-2">
                                            {FileSvg(file.type, "w-[15px] h-[15px]")}
                                            <span className="ml-[6] sm:ml-[10] lg:ml-[15] text-sm w-full ellipsis-text">{file.name}</span>
                                        </div>
                                    </div>
                                    <span className="w-[100px] sm:w-[100px] xl:w-[150px] ml-[8] max-[640px]:ml-[12]">{file.size}</span>
                                    <span className="w-[90px] sm:w-[150px] xl:w-[200px]">{file.type}</span>
                                    <span className="w-[150px] sm:w-[200px] xl:w-[250px] max-[1280px]:text-[12px]">{file.date}</span>
                                    <div className="w-[120px] sm:w-[150px] xl:w-[180px]">
                                        <div className={`
                                            w-fit py-1 px-3 rounded-full text-[11px]
                                            ${file.status === "----" ? "" : (file.status === "Encrypted" ? "bg-[rgba(217,254,255,1)]" : "bg-[rgba(255,237,227,1)] text-[rgba(247, 110, 47, 1)]")}
                                        `}>
                                            {file.status}
                                        </div>
                                    </div>
                                    <div className={`w-[150px] xl:w-[200px] flex items-center xl:pr-3 ${!showDaysLeft && "hidden"}`}>
                                        <BucketIcon className={"w-24px h-18px"} fraction={0.1*index} />
                                        <span className="ml-4 max-[1280px]:text-[12px]">{"Within 180 days"}</span>
                                    </div>
                                </button>
                            ))
                        }
                    </div>}

                    {display === "grid" && <div className="mt-[10] w-full">
                        {(split?.folders && split.folders.length > 0) && <div className="mt-[25px] mb-[30px] grid grid-cols-2 min-[768px]:grid-cols-3 min-[1100px]:grid-cols-4 gap-10 max-[440px]:gap-5 justify-between w-full">
                            {split?.folders.map((folder) => (
                                <Link href={`/drive/folder/${folder.id}`} className="p-3 lg:px-4 text-[rgba(40,40,40,0.9)] flex items-center justify-between gap-x-3 bg-[rgba(232,232,232,0.8)] hover:bg-[rgba(232,232,232,1)] rounded-[6]" key={folder.id}>
                                    <FolderIcon className="w-[15px] h-[15px] text-[rgba(40,40,40,0.9)]" />
                                    <span className="text-sm flex-grow inline-flex">{folder.name}</span>
                                    <button className="h-fit w-fit" id={`folder-ellipsis-${folder.id}`}>
                                        <FaEllipsis className="w-[15px] h-[16px]" />
                                    </button>
                                </Link>
                            ))}
                        </div>}

                        <div className="grid grid-cols-2 min-[768px]:grid-cols-3 min-[1100px]:grid-cols-4 gap-10 max-[440px]:gap-5 justify-between w-full">
                            {(split?.files || files).map((file, index) => (
                                <button key={`file-grid-${index}`} onClick={() => setModalOpen(true)}
                                className="relative rounded-[12] h-[210px] sm:h-[240px] xl:h-[270px] overflow-hidden cursor-pointer">
                                    <div className={`relative w-full h-full`}>
                                        <div className="file-placeholder h-full flex justify-center items-center">
                                            <FilePlaceholderIcon className="w-[110px] h-[110px]" />
                                        </div>

                                        {(file.img && file.img !== "file") && (
                                        <Image 
                                            src={file.img} width={100} alt={file.img} 
                                            height={100} className="absolute top-0 left-0 w-full h-full z-5 object-cover" 
                                        />
                                        )}

                                    </div>
                                    <div className="file w-full h-full p-3 xl:px-4 flex items-end absolute bottom-0 left-0 z-10">
                                        <div className="flex items-center w-full">
                                            <div className="bg-[rgba(255,255,255,0.8)] flex justify-center items-center w-[18px] h-[16px] xl:h-[18px] rounded-[2]">
                                                {FileSvg(file.fileType, "w-[12px] h-[12px]")}
                                            </div>
                                            <span className="ellipsis-text text-white text-[13px] lg:text-sm ml-[10]">{file.name}</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>}
                </div>
            </div>

            <FileModal toggle={(bool) => setModalOpen(bool)} isOpen={modalOpen} setShareModal={(bool) => setShareModal(bool)} />
            
            {shareModal && <ShareFileModal toggle={(bool) => setShareModal(bool)} />}

            {uploadModal && <UploadModal toggle={(bool) => setUploadModal(bool)} />}

            {createFolder && <CreateFolderModal toggle={(bool) => setCreateFolder(bool)} />}

        </AppLayout>
    )
}