"use client";

import { useState } from "react";
import {
  Search,
  Pin,
  Clock,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Send,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ChatItem from "@/components/ui/ChatItem";

const pinnedChats = [
  { id: "1", name: "Design Team", message: "Please check the latest Figma file.", time: "10:30 AM", unreadCount: 0, isGroup: true, isPinned: true, isOnline: true },
  { id: "2", name: "Alex Smith", message: "See you at lunch!", time: "Yesterday", unreadCount: 0, isGroup: false, isPinned: true, isOnline: false },
];

const recentChats = [
  { id: "3", name: "Marketing Group", message: "Campaign goes live tomorrow.", time: "09:15 AM", unreadCount: 5, isGroup: true, isPinned: false, isOnline: true },
  { id: "4", name: "Sarah Jenkins", message: "Thanks for the update.", time: "Yesterday", unreadCount: 0, isGroup: false, isPinned: false },
  { id: "5", name: "David Lee", message: "Can we reschedule?", time: "Monday", unreadCount: 1, isGroup: false, isPinned: false },
  { id: "6", name: "Project Alpha", message: "Meeting notes attached.", time: "Monday", unreadCount: 0, isGroup: true, isPinned: false },
  { id: "7", name: "Emma Watson", message: "Okay, sounds good.", time: "Oct 20", unreadCount: 0, isGroup: false, isPinned: false },
];

const chatMessages = [
  { id: "1", content: "Hi there! Can we reschedule our call for tomorrow morning? Something urgent came up on my end.", time: "09:45 AM", isSent: false },
  { id: "2", content: "Of course, David. No problem at all. Does 10:00 AM work for you?", time: "10:02 AM", isSent: true },
  { id: "3", content: "Perfect. I'll send over a calendar invite shortly. Thanks!", time: "10:05 AM", isSent: false },
];

const calls = [
  { id: "1", name: "Alex Smith", type: "voice" as const, status: "missed" as const, time: "10:30 AM" },
  { id: "2", name: "Design Team", type: "video" as const, status: "outgoing" as const, time: "Yesterday, 02:15 PM" },
  { id: "3", name: "Sarah Jenkins", type: "voice" as const, status: "incoming" as const, time: "Monday, 11:00 AM" },
  { id: "4", name: "David Lee", type: "video" as const, status: "missed" as const, time: "Oct 20, 09:45 AM" },
];

export default function InboxPage() {
  const [activeTab, setActiveTab] = useState<"messaging" | "calls">("messaging");
  const [selectedChat, setSelectedChat] = useState("5"); // David Lee selected

  const selectedChatData = [...pinnedChats, ...recentChats].find(
    (c) => c.id === selectedChat
  );

  return (
    <div className="max-w-[1280px] mx-auto w-full h-[calc(100vh-64px)] flex flex-col md:flex-row">
      {/* Sidebar — Chat List */}
      <div className="w-full md:w-[320px] lg:w-[360px] md:border-r border-[var(--border-light)] flex flex-col bg-white shrink-0">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-[var(--border-light)]">
          <h2 className="text-playfair text-2xl font-bold text-[var(--text-primary)] mb-3">
            Inbox
          </h2>

          {/* Search */}
          <div className="flex items-center bg-[var(--background)] rounded-xl px-3 py-2.5">
            <Search className="w-4 h-4 text-[var(--text-secondary)] mr-2" />
            <input
              type="text"
              placeholder="Search chats..."
              className="flex-1 text-sm bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none"
            />
          </div>

          {/* Tabs */}
          <div className="flex mt-3">
            <button
              onClick={() => setActiveTab("messaging")}
              className={cn(
                "flex-1 py-2.5 text-sm font-medium border-b-2 transition-default",
                activeTab === "messaging"
                  ? "text-[var(--primary)] border-[var(--primary)]"
                  : "text-[var(--text-secondary)] border-transparent hover:text-[var(--primary)]"
              )}
            >
              Messaging
            </button>
            <button
              onClick={() => setActiveTab("calls")}
              className={cn(
                "flex-1 py-2.5 text-sm font-medium border-b-2 transition-default",
                activeTab === "calls"
                  ? "text-[var(--primary)] border-[var(--primary)]"
                  : "text-[var(--text-secondary)] border-transparent hover:text-[var(--primary)]"
              )}
            >
              Calls
            </button>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "messaging" ? (
            <>
              {/* Pinned */}
              <div className="px-4 py-2 flex items-center gap-2">
                <Pin className="w-3 h-3 text-[var(--primary)]" />
                <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
                  Pinned Chats
                </span>
              </div>
              {pinnedChats.map((chat) => (
                <ChatItem
                  key={chat.id}
                  {...chat}
                  href={`/inbox/chat/${chat.id}`}
                  isActive={selectedChat === chat.id}
                  onClick={(e) => {
                    if (window.innerWidth >= 768) {
                      e.preventDefault();
                      setSelectedChat(chat.id);
                    }
                  }}
                />
              ))}

              <div className="px-4 py-2 flex items-center gap-2 mt-1">
                <Clock className="w-3 h-3 text-[var(--primary)]" />
                <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
                  Recent Chats
                </span>
              </div>
              {recentChats.map((chat) => (
                <ChatItem
                  key={chat.id}
                  {...chat}
                  href={`/inbox/chat/${chat.id}`}
                  isActive={selectedChat === chat.id}
                  onClick={(e) => {
                    if (window.innerWidth >= 768) {
                      e.preventDefault();
                      setSelectedChat(chat.id);
                    }
                  }}
                />
              ))}
            </>
          ) : (
            /* Calls List */
            <div className="py-2">
              {calls.map((call) => (
                <div
                  key={call.id}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--primary-light)] transition-default cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-medium)] flex items-center justify-center text-[var(--primary)] font-bold">
                    {call.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className={cn(
                        "text-sm font-bold truncate",
                        call.status === "missed"
                          ? "text-red-500"
                          : "text-[var(--text-primary)]"
                      )}
                    >
                      {call.name}
                    </h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      {call.status === "missed" ? (
                        <PhoneMissed className="w-3 h-3 text-red-500" />
                      ) : call.status === "outgoing" ? (
                        <PhoneOutgoing className="w-3 h-3 text-[var(--text-secondary)]" />
                      ) : (
                        <PhoneIncoming className="w-3 h-3 text-[var(--text-secondary)]" />
                      )}
                      <span className="text-xs text-[var(--text-secondary)]">
                        {call.time}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-[var(--primary-medium)] transition-default">
                    {call.type === "video" ? (
                      <Video className="w-5 h-5 text-[var(--primary)]" />
                    ) : (
                      <Phone className="w-5 h-5 text-[var(--primary)]" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="hidden md:flex flex-1 flex-col bg-[var(--background)]">
        {selectedChatData ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[var(--border-light)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-medium)] flex items-center justify-center text-[var(--primary)] font-bold">
                  {selectedChatData.name[0]}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">
                    {selectedChatData.name}
                  </h3>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                </button>
                <button className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default">
                  <Video className="w-5 h-5 text-[var(--primary)]" />
                </button>
                <button className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default">
                  <MoreVertical className="w-5 h-5 text-[var(--primary)]" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {/* Date label */}
              <div className="flex justify-center mb-6">
                <span className="text-xs text-[var(--text-secondary)] bg-white px-3 py-1 rounded-full">
                  MONDAY, OCT 23
                </span>
              </div>

              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex mb-4",
                    msg.isSent ? "justify-end" : "justify-start"
                  )}
                >
                  {!msg.isSent && (
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-medium)] flex items-center justify-center mr-2 mt-1 shrink-0">
                      <span className="text-xs font-bold text-[var(--primary)]">D</span>
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[420px] rounded-2xl px-4 py-3",
                      msg.isSent
                        ? "bg-[var(--primary)] text-white rounded-br-sm"
                        : "bg-white text-[var(--text-primary)] rounded-bl-sm shadow-[var(--shadow-sm)]"
                    )}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <p
                      className={cn(
                        "text-[10px] mt-1.5 text-right",
                        msg.isSent ? "text-white/60" : "text-[var(--text-secondary)]"
                      )}
                    >
                      {msg.time}
                    </p>
                  </div>
                  {msg.isSent && (
                    <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center ml-2 mt-1 shrink-0">
                      <span className="text-xs font-bold text-[var(--primary)]">M</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="px-6 py-4 bg-white border-t border-[var(--border-light)]">
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default shrink-0">
                  <Paperclip className="w-5 h-5 text-[var(--text-secondary)]" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 py-3 px-4 bg-[var(--background)] rounded-full text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none"
                />
                <button className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary)]/90 transition-default shrink-0">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[var(--text-secondary)]">
              Select a chat to start messaging
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
