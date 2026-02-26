"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Sparkles, ChevronLeft, Trash2 } from "lucide-react";
import { getAIChatReply, getChatbotReply } from "@/lib/chatbot";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
  time: string;
}

export default function AskAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Saya Ask Fahmi AI. Saya bisa membantu menjawab pertanyaan seputar pengalaman saya di bidang Data Science, AI, NLP, hingga aktivitas mengajar dan mentoring. Ada yang ingin Anda tanyakan?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      role: "user",
      content: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
      chatHistory.push({ role: "user", content: input });
      
      const reply = await getAIChatReply(chatHistory);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (confirm("Hapus semua percakapan?")) {
      setMessages([
        {
          role: "assistant",
          content: "Chat dibersihkan. Ada lagi yang ingin Anda tanyakan?",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-background pt-16">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-card/50 px-4 py-4 backdrop-blur-md md:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="rounded-full p-2 hover:bg-muted transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary">
              <img src="/img/fahmi.png" alt="Fahmi" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-card bg-green-500"></div>
            </div>
            <div>
              <h1 className="text-sm font-bold">Ask Fahmi AI</h1>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Sparkles size={10} className="text-primary" /> Active AI
              </p>
            </div>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="rounded-full p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
          title="Clear chat"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-xs font-bold",
                msg.role === "user" ? "bg-secondary" : "bg-primary text-black"
              )}>
                {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className={cn(
                "flex flex-col space-y-1",
                msg.role === "user" ? "items-end" : "items-start"
              )}>
                <div
                  className={cn(
                    "rounded-2xl px-4 py-2.5 text-sm shadow-sm",
                    msg.role === "user"
                      ? "bg-primary text-black font-medium"
                      : "bg-card border border-border text-foreground leading-relaxed"
                  )}
                >
                  {msg.role === "user" ? (
                    <p>{msg.content}</p>
                  ) : (
                    <div className="prose prose-sm dark:prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5 [&_strong]:text-primary [&_a]:text-primary [&_a]:underline">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground px-1">{msg.time}</span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4 items-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-black border border-border">
                <Bot size={14} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="rounded-2xl bg-card border border-border px-4 py-2 text-sm">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card/50 p-4 backdrop-blur-md">
        <form onSubmit={handleSendMessage} className="mx-auto max-w-3xl relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan sesuatu tentang pengalaman Fahmi..."
            className="w-full rounded-2xl border border-border bg-background py-4 pl-6 pr-14 text-sm shadow-inner focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-black shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
          >
            <Send size={18} />
          </button>
        </form>
        <p className="mt-2 text-center text-[10px] text-muted-foreground">
          Ask Fahmi AI can make mistakes. Consider checking important info.
        </p>
      </div>
    </div>
  );
}
