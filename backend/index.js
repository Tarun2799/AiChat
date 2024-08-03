import mongoose from "mongoose";
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

app.use(express.json());


const Connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongodb")
    } catch (error) {
        console.log(error)
    }
}

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


app.post("/api/chats", (req,res)=>{
   const {text} = req.body;
   console.log(text)
})

app.listen(port, ()=>{
    Connect()
    console.log("server running on 3000")
})