"use client";
import { createContext, useState } from "react";

export const chatContext = createContext(null);

export const ChatContextProvider = ({ children }) => {
    const [userMessage, setUserMessage] = useState(null);
    const [chats, setChats] = useState([]);
    const [instantChat, setInstantChat] = useState([]);
    const [sending, setSending] = useState(false);
    
    const [sentMessage, setSentMessage] = useState("")

    const getUserMessage = (e) => {
        setUserMessage(e.target.value);
    };

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
                const data = result?.data
                const sorted = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                setChats(sorted)
                // setChats(result?.data); // Updates the state with the fetched data array
                console.log(result?.data)
            } else {
                console.error(
                    "Failed to fetch data. Server response not successful."
                );
            }

            console.log("Fetched Data:", result?.data); // Log or process the data
        } catch (error) {
            console.log("Error fetching chat data:", error.message);
        }
    };

    const postMessage = async () => {
        setSentMessage(userMessage)
        try {
            setSending(true);
            const response = await fetch("/api/chat", {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setUserMessage(null)
            console.log("message", userMessage)
            if (response.ok) {
                const data = await response.json();
                setChats([...chats, data?.data]);
                setUserMessage(null)
                setSending(false);
            }

            // setChats([...chats, data])
            console.log("Response:", data?.data);

        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            postMessage();
        }
    };

    //getAllUserChat()
    return (
        <chatContext.Provider
            value={{
                getUserMessage,
                postMessage,
                fetchChat,
                chats,
                userMessage,
                sending,
                sentMessage,
                handleKeyPress
            }}
        >
            {children}
        </chatContext.Provider>
    );
};
