export const getFileType = (type: string) => {
    const documents = ["pdf","docx","txt","ppt","pptx"];
    const images = ["jpg","png","jpeg","gif","webp","tif","tiff","ico","raw"];
    const videos = ["mp4","mkv",".mpg","mpeg","webm","avi"];
    const audios = ["mp3","wav","ogg","aac","opus"];

    if(type === "folder") return "folder";
    else if(images.find(img => type.includes(img))) return "image";
    else if(videos.find(vid => type.includes(vid))) return "video";
    else if(audios.find(aud => type.includes(aud))) return "audio";
    else return "document";
}