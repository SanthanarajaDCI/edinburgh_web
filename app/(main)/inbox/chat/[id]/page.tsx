"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Phone, Video, MoreVertical, Plus, Mic, Image as ImageIcon, File, MapPin, User as UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const messages = [
  { sender: 'them', text: 'Hey! Are we still on for lunch today?', time: '11:45 AM', type: 'text' },
  { sender: 'me', text: 'Yes! Let me send you the location.', time: '11:48 AM', type: 'text' },
  { sender: 'me', type: 'location', text: 'Central Cafe, 123 Main St', time: '11:49 AM' },
  { sender: 'them', type: 'voice', duration: '0:12', time: '11:51 AM' },
  { sender: 'them', text: 'I will be there in 10 minutes.', time: '11:52 AM', type: 'text' },
];

export default function ChatDetailPage() {
  const router = useRouter();
  const params = useParams();
  const chatId = params.id as string;
  const [showAttachments, setShowAttachments] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto w-full h-[100dvh] bg-[var(--background)] flex flex-col relative overflow-hidden">
      {/* App Bar */}
      <div className="px-4 py-3 flex items-center justify-between bg-[var(--background)] border-b border-[var(--border-light)] shrink-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="text-[var(--text-primary)]">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full relative overflow-hidden border border-[var(--border-light)] bg-white">
              <Image src="https://picsum.photos/seed/user/100/100" alt="Avatar" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[var(--text-primary)] text-sm">Alex Smith</span>
              <span className="text-xs text-green-500 font-bold">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[var(--text-primary)]">
          <button onClick={() => router.push(`/inbox/call/${chatId}`)} className="p-2">
            <Phone className="w-5 h-5" />
          </button>
          <button onClick={() => router.push(`/inbox/call/${chatId}?video=true`)} className="p-2">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-4 z-0">
        {messages.map((msg, index) => {
          const isMe = msg.sender === 'me';
          return (
            <div key={index} className={cn("flex w-full", isMe ? "justify-end" : "justify-start")}>
              <div className="flex gap-2 max-w-[70%]">
                {!isMe && (
                  <div className="w-8 h-8 rounded-full relative overflow-hidden shrink-0 mt-auto border border-[var(--border-light)] bg-white">
                    <Image src="https://picsum.photos/seed/user/100/100" alt="Avatar" fill className="object-cover" />
                  </div>
                )}
                
                <div className={cn(
                  "p-3 shadow-sm relative flex flex-col",
                  isMe 
                    ? "bg-[var(--primary)] rounded-2xl rounded-br-none" 
                    : "bg-white border border-[var(--border-light)] rounded-2xl rounded-bl-none"
                )}>
                  {msg.type === 'text' && (
                    <span className={cn("text-base leading-relaxed", isMe ? "text-white" : "text-[var(--text-primary)]")}>
                      {msg.text}
                    </span>
                  )}
                  {msg.type === 'location' && (
                    <div className="flex flex-col gap-2">
                      <div className="w-[200px] h-[120px] bg-gray-200 rounded-xl relative overflow-hidden flex items-center justify-center">
                        <Image src="https://picsum.photos/seed/map/200/120" alt="Map" fill className="object-cover" />
                        <MapPin className="w-10 h-10 text-red-500 relative z-10 drop-shadow-md" />
                      </div>
                      <span className={cn("text-sm", isMe ? "text-white" : "text-[var(--text-primary)]")}>
                        {msg.text}
                      </span>
                    </div>
                  )}
                  {msg.type === 'voice' && (
                    <div className="flex items-center gap-2">
                      <button className={cn("w-8 h-8 rounded-full flex items-center justify-center", isMe ? "bg-white" : "bg-[var(--primary)]")}>
                        <div className={cn("w-3 h-3 translate-x-0.5", isMe ? "border-transparent border-l-[var(--primary)]" : "border-transparent border-l-white")} style={{ borderStyle: 'solid', borderWidth: '6px 0 6px 10px', backgroundColor: 'transparent' }} />
                      </button>
                      <div className={cn("h-1 w-24 rounded-full", isMe ? "bg-white/30" : "bg-[var(--primary)]/20")}>
                        <div className={cn("h-full w-[30%] rounded-full", isMe ? "bg-white" : "bg-[var(--primary)]")} />
                      </div>
                      <span className={cn("text-xs font-bold", isMe ? "text-white" : "text-[var(--text-primary)]")}>
                        {msg.duration}
                      </span>
                    </div>
                  )}
                  <span className={cn("text-[10px] mt-1 self-end", isMe ? "text-white/70" : "text-[var(--text-secondary)]")}>
                    {msg.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Attachments Overlay */}
      {showAttachments && (
        <div className="absolute bottom-[72px] left-0 right-0 bg-white border-t border-[var(--border-light)] rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.1)] p-6 z-20 transition-all duration-300">
          <div className="grid grid-cols-4 gap-6 max-w-sm mx-auto">
            <AttachmentOption icon={ImageIcon} label="Media" color="bg-purple-100 text-purple-600" />
            <AttachmentOption icon={File} label="File" color="bg-blue-100 text-blue-600" />
            <AttachmentOption icon={MapPin} label="Location" color="bg-green-100 text-green-600" />
            <AttachmentOption icon={UserIcon} label="Contact" color="bg-orange-100 text-orange-600" />
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="px-4 py-3 bg-white border-t border-[var(--border-light)] shadow-[0_-5px_15px_rgba(0,0,0,0.02)] shrink-0 z-30 pb-safe-bottom">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowAttachments(!showAttachments)}
            className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0", showAttachments ? "bg-[var(--primary)] text-white" : "bg-gray-100 text-[var(--primary)]")}
          >
            <Plus className={cn("w-6 h-6 transition-transform", showAttachments && "rotate-45")} />
          </button>
          
          <div className="flex-1 bg-gray-100 rounded-3xl px-4 py-2 flex items-center">
            <input 
              type="text"
              placeholder="Message..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--text-primary)]"
            />
          </div>
          
          <button className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shrink-0">
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function AttachmentOption({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group">
      <div className={cn("w-14 h-14 rounded-full flex items-center justify-center transition-transform group-active:scale-95", color)}>
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-xs font-bold text-[var(--text-primary)]">{label}</span>
    </button>
  );
}
