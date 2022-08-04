import * as fs from "fs";
import path, { resolve } from "path";
import vdp from 'video-downloader-pro'
import axios from 'axios'

export const getLinkInfo = async (req, res) => {
  const { url, downloadUrl } = req.body;
  try {
console.log(url)
    if (url) {
      const data = await vdp(url)
     res.json(data);
    }
  } catch (error) {
    console.log(error);
  }

  
    // The path of the downloaded file on our machine
   if (downloadUrl) {
    const name = "Good mongoose"
    const dir = `sm.mp4`
    const localFilePath = path.resolve( dir);
    // console.log(localFilePath)
  
    try {
        // Call this function if fileUrl exists
      const response = await axios({
        method: 'GET',
        url: downloadUrl,
        responseType: 'stream',
      });
  
      const download = response.data.pipe(fs.createWriteStream(localFilePath));
  
      download.on('finish', () => {
        console.log('Successfully downloaded file!');
      });
      res.send('Download successfully')
  
    } catch (err) {
      throw new Error(err);
    }
   }
};