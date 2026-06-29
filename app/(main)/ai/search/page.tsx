"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Sparkles, Mic, Lightbulb, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";

const recommendations = [
  'Best restaurants under ₹1000 nearby',
  'Cheapest iPhone available',
  'Jobs matching my profile',
];

export default function AiSearchPage() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi there! I am your personal AI Assistant. How can I help you today?' },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue("");

    // Simulate AI reply
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: `I found some great options for "${text}". Let me pull them up for you!` 
      }]);
    }, 1000);
  };

  const handleVoiceSearch = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      handleSend('Show me the best restaurants nearby');
    }, 3000);
  };

  return (
    <div className="max-w-[1280px] mx-auto w-full h-[100dvh] bg-[var(--background)] flex flex-col relative overflow-hidden">
      {/* App Bar */}
      <div className="px-4 py-3 flex items-center justify-between bg-[var(--background)] border-b border-[var(--border-light)] shrink-0 z-10">
        <button onClick={() => router.back()} className="text-[var(--text-primary)] p-2">
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--primary)]" />
          <h1 className="font-bold text-[var(--text-primary)] text-lg">AI Search Assistant</h1>
        </div>
        <div className="w-10" />
      </div>

      {/* Recommendations */}
      <div className="bg-[var(--background)] border-b border-[var(--border-light)] py-3 shrink-0 z-10">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar px-4">
          {recommendations.map((rec, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(rec)}
              className="flex items-center gap-2 bg-[var(--primary-light)] text-[var(--primary)] px-4 py-2 rounded-full shrink-0 hover:bg-[var(--primary)]/20 transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
              <span className="text-xs font-bold">{rec}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat View */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-4 z-0">
        {messages.map((msg, idx) => {
          const isAi = msg.sender === 'ai';
          return (
            <div key={idx} className={cn("flex w-full", isAi ? "justify-start" : "justify-end")}>
              <div className="flex items-end gap-2 max-w-[80%]">
                {isAi && (
                  <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] shrink-0 mb-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
                <div className={cn(
                  "p-4 shadow-sm",
                  isAi 
                    ? "bg-white border border-[var(--border-light)] rounded-2xl rounded-bl-none text-[var(--text-primary)]" 
                    : "bg-[var(--primary)] text-white rounded-2xl rounded-br-none"
                )}>
                  <p className="text-[15px] leading-relaxed">{msg.text}</p>
                </div>
                {!isAi && (
                  <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] shrink-0 mb-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Voice Overlay */}
      {isListening && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-20 flex flex-col items-center justify-end">
          <div className="bg-white w-full rounded-t-3xl p-8 flex flex-col items-center animate-in slide-in-from-bottom">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Listening...</h2>
            <div className="w-24 h-24 rounded-full bg-[var(--primary-light)] flex items-center justify-center my-8 relative">
              <div className="absolute inset-0 rounded-full bg-[var(--primary)]/20 animate-ping" />
              <Mic className="w-10 h-10 text-[var(--primary)] relative z-10" />
            </div>
            <p className="text-[var(--text-secondary)]">Speak now to search</p>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="px-4 py-3 bg-white border-t border-[var(--border-light)] shadow-[0_-5px_15px_rgba(0,0,0,0.02)] shrink-0 z-10 pb-safe-bottom">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-100 rounded-3xl pl-4 pr-1 py-1.5 flex items-center">
            <input 
              type="text"
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
              className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--text-primary)] h-8"
            />
            <button onClick={handleVoiceSearch} className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-gray-200 transition-colors">
              <Mic className="w-5 h-5" />
            </button>
          </div>
          
          <button 
            onClick={() => handleSend(inputValue)}
            className="w-11 h-11 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shrink-0 hover:bg-[var(--primary)]/90 transition-colors"
          >
            <Send className="w-5 h-5 -ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
