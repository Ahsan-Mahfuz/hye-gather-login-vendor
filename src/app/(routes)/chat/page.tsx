'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdSend } from 'react-icons/io'
import { IoArrowBackSharp } from 'react-icons/io5'

const initialMessages = [
  {
    name: 'Lee Williamson',
    message: "Yes, that's gonna work, hopefully.",
    time: '18:31 PM',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    messages: [{ text: "Yes, that's gonna work, hopefully.", sender: 'other' }],
  },
  {
    name: 'Eleanor Pena',
    location: 'Los Angeles, United States',
    messages: [
      { text: 'Hello Jacob', sender: 'other' },
      { text: 'How are you doing', sender: 'other' },
      { text: 'Are you free now?', sender: 'other' },
    ],
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
]

const ChatApp = () => {
  const [search, setSearch] = useState('')
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState('')
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || selectedChat === null) return

    setMessages((prevMessages) =>
      prevMessages.map((chat, index) =>
        index === selectedChat
          ? {
              ...chat,
              messages: [...chat.messages, { text: newMessage, sender: 'me' }],
            }
          : chat
      )
    )
    setNewMessage('')
  }

  return (
    <div className='h-screen '>
      <div className="flex h-[calc(100vh-100px)] max-xl:relative border p-2 responsive-width">
        {sidebarOpen && (
          <div className="w-[400px] border-r py-2 px-2  max-xl:w-full max-xl:absolute max-xl:h-full max-xl:bg-white ">
            <div className="relative mb-4 ">
              <FiSearch className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border  rounded-lg focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="max-h-[800px] overflow-y-auto overflow-hidden scrollbar-none">
              {messages
                .filter((chat) =>
                  chat.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((chat, index) => (
                  <div
                    key={index}
                    className="flex   gap-3 p-3 hover:bg-gray-200 rounded-lg cursor-pointer"
                    onClick={() => {
                      setSelectedChat(index)
                      setSidebarOpen(false)
                    }}
                  >
                    <Image
                      src={chat.avatar}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                      width={5000}
                      height={50}
                    />
                    <div className="flex-1 ">
                      <h4 className="font-medium">{chat.name}</h4>
                      <p className="text-sm text-gray-500 truncate">
                        {chat.messages?.[chat.messages.length - 1]?.text.slice(
                          0,
                          30
                        )}
                        <span className="text-xs text-gray-400">
                          {chat.time || ''}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col">
          {selectedChat !== null ? (
            <>
              <div className="p-4 border-b  flex items-center gap-3">
                <div
                  className="cursor-pointer"
                  onClick={() => setSidebarOpen(true)}
                >
                  <IoArrowBackSharp className="text-2xl" />
                </div>
                <Image
                  src={messages[selectedChat].avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                  width={5000}
                  height={50}
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {messages[selectedChat].name}
                  </h2>
                  {messages[selectedChat].location && (
                    <p className="text-sm text-gray-500">
                      {messages[selectedChat].location}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-3 h-96 overflow-y-auto overflow-hidden scrollbar-none">
                {messages[selectedChat].messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[300px] px-4 py-2 rounded-lg text-sm ${
                      msg.sender === 'other'
                        ? 'bg-gray-200 self-start'
                        : 'bg-blue-800 text-white self-end'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <div className="p-4 flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full p-2 h-[48px] border  rounded-lg focus:outline-none"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  className="ml-2 p-2 bg-blue-800 hover:bg-blue-700 cursor-pointer text-white rounded-lg"
                  onClick={handleSendMessage}
                >
                  <IoMdSend />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-1 text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatApp
