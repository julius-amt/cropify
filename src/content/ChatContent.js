"use client"
import { createContext, useState } from "react";
import axios from "axios"

export const chatContext = createContext(null);

export const ChatContextProvider = ({children}) =>{

    const [userMessage, setUserMessage] = useState(null);


    const getUserMessage = (e)=>{
        setUserMessage(e.target.value)
    }
    const fetchChat = async () => {
        const response = await fetch("/api/chat", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        
        console.log(data);
}

const postMessage = async ()=>{
    const response = await await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            message: userMessage
        }),

    });

    const data = response.json()
    console.log("post", data)
}
   //getAllUserChat()
    return(
        <chatContext.Provider value={{ getUserMessage, postMessage, fetchChat}}>
            {children}
        </chatContext.Provider>
    )
}