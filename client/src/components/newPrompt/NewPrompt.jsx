import React, { useEffect, useRef, useState } from 'react';
import "./newPrompt.css";
import Upload from '../upload/Upload';
import { IKImage } from 'imagekitio-react';
import model from '../../lib/gemini';
import Markdown from "react-markdown";

const NewPrompt = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const [img , setImg ] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {},
    });

    const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Hello, I have 2 dogs in my house." }],
          },
          {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }],
          },
        ],
        generationConfig: {
        //   maxOutputTokens: 100,
        },
    });

    const endRef = useRef(null);

    // this is what keeping to recent question in th epage
    useEffect(()=>{
        endRef.current.scrollIntoView({ behavior: "smooth"});
    },[question, answer, img.dbData]);

    // we are adding gemini here 
    const add = async (text)=>{
        // const prompt = "Write a story about an AI and magic"
        setQuestion(text);
        // we are chechking here if image is present then send image other wise send just text
        const result = await chat.sendMessageStream(Object.entries(img.aiData).length ? [img.aiData, text] : [text]);
        // const response = await result.response; not needed anymore
        let accumulatedText = '';
            for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            console.log(chunkText);
            accumulatedText += chunkText;
            setAnswer(accumulatedText);
            }
        // setAnswer(response.text())
        setImg({
            isLoading: false,
            error: "",
            dbData: {},
            aiData: {},
        }) // setting image to the initial to remove conflict, but we add them to db to remember this chat for our ai previos conversation
        // const text = response.text();
        // console.log(text);
    }

    const handleSubmit =  async (e)=>{
        // we don't to refresh the page
        e.preventDefault();

        const text = e.target.text.value;
        if(!text) return;  // if it's empty simply return

        add(text);
    }


  return (
    <>
        {/* we are adding this after adding imagkit values */}
        {img.isLoading && <div>Loading...</div>}
        {img.dbData?.filePath && (
            <IKImage
                urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                path={img.dbData?.filePath}
                width={300}
                // with this property i can get a different size pic from the orginal one , to make our application optimized
                transformation={[{width: 300, height: 300}]}
            />
        )}
        {question && <div className='message user'>{question}</div>}
        {answer && <div className='message'><Markdown>{answer}</Markdown></div>}
        <div className="endChat" ref={endRef}></div>
        <form className="newForm" onSubmit={handleSubmit}>
            <Upload setImg={setImg} />
            <input type="file" multiple={false} name="" id="file" hidden />
            <input type="text" name="text" id="" placeholder='Ask anything...' />
            <button>
                <img src="/arrow.png" alt="" />
            </button>
        </form>
    </>
  )
}

export default NewPrompt