"use client"
import { createContext, use, useState } from "react";
import axios from "axios"

export const chatContext = createContext(null);

export const ChatContextProvider = ({children}) =>{

    const [ userMessage, setUserMessage ] = useState(null);
    
    const [chats, setChats] = useState([])


    const getUserMessage = (e)=>{
        setUserMessage(e.target.value)
    }
    
    const fetchChat = async () => {
    try {
        const response = await fetch("/api/chat", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Check if the response is OK (status code 200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

         if (result.success) {
            setChats(result?.data); // Updates the state with the fetched data array
        } else {
            console.error("Failed to fetch data. Server response not successful.");
        }

        console.log("Fetched Data:", result?.data); // Log or process the data
    } catch (error) {
        console.log("Error fetching chat data:", error.message);
    }
};


const postMessage = async ()=>{
    try {
        const response = await fetch("/api/chat", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message:userMessage,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response:", data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
   //getAllUserChat()
    return(
        <chatContext.Provider value={{ getUserMessage, postMessage, fetchChat, chats}}>
            {children}
        </chatContext.Provider>
    )
}