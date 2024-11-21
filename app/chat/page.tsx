"use client"
// pages/chat.tsx
import { useState } from 'react';

export default function ChatPage() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r flex flex-col h-full">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">C</span>
            </div>
            <span className="font-semibold">ChatAI</span>
          </div>
          
          <button className="w-full h-[50px] text-[24px] bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
            + New Chat
          </button>
          
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
            <svg className="w-4 h-4 absolute left-2.5 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto bg-gray-50 mb-5">
          <div className="p-2">
            <div className="space-y-1">
              {['Folder', 'Favorite', 'Archive', "Amn"].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="text-gray-700 text-[20px]">{item}</span>
                  <span className="ml-auto text-gray-400 text-sm">8</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className='h-[200px] flex flex-col space-y-3 w-full items-center'>
            <button className="w-[90%]  h-[60px] bg-indigo-600 text-white text-[24px] py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
             AgroAssis
          </button>
          <button className="w-[90%]  h-[60px] bg-indigo-600 text-white text-[24px] py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
             AgroScan
          </button>
        </div>
        {/* User Profile */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="flex-1">
              <div className="font-medium">User Name</div>
              <div className="text-sm text-gray-500">Pro Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 border-b bg-white flex items-center justify-between px-6">
          <h1 className="font-semibold text-2xl">Chat</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-800">Write a 100-character meta description for my blog post about digital marketing.</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex-shrink-0 flex items-center justify-center">
              <span className="text-white font-semibold">C</span>
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-800">Master the art of digital marketing with expert strategies for online success. Unlock growth now!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-white">
          <div className="max-w-4xl mx-auto relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a prompt here..."
              className="w-full pr-12 pl-4 py-3 rounded-lg border focus:outline-none focus:border-indigo-500"
            />
            <button className="absolute right-2 top-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="text-center mt-2 text-xs text-gray-500">
            ChatAI has the potential to generate incorrect information
          </div>
        </div>
      </div>
    </div>
  );
}
  