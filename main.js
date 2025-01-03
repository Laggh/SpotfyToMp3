import youtubedl from "youtube-dl-exec";
const path = "C:/Users/Renan/Documents/GitHub/SpotfyToMp3"; // Path to save the video
// Download video
async function downloadVideo(url){
    try {
        const output = await youtubedl(url, {
            output: path + '/%(title)s.%(ext)s',
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
console.log("Downloading video")
let output = await downloadVideo('https://www.youtube.com/watch?v=6xKWiCMKKJg')
console.log(JSON.stringify(output, null, 2))
