import express from "express"
import ImageKit from "imagekit";
import dotenv from 'dotenv';
import cors from "cors"

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(cors({
    origin: process.env.CLIENT_URL,
}))

// Load environment variables from .env file


const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
  });


app.get("/api/upload", (req,res)=>{
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port, ()=>{
    console.log("server running on 3000")
})