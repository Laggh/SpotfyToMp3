import youtubedl from "youtube-dl-exec";

// Download video
async function downloadVideo(url){
    try {
        const output = await youtubedl(url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: ['referer:youtube.com', 'user-agent:googlebot']
        });
        return output;
    } catch (error) {
        return error;
    }
}

// Call the function
downloadVideo('https://www.youtube.com/watch?v=6xKWiCMKKJg')