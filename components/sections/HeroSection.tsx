"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, User } from "lucide-react";
import { getAIChatReply, getChatbotReply } from "@/lib/chatbot";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Muhammad's AI persona. How can I help you today?",
      time: "2:41 PM",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = {
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

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              AVAILABLE FOR STRATEGIC CONSULTING
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              I Lead Data Science Teams, Build AI, and Educate in<br />
              <span className="text-primary">DS, AI & NLP.</span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground">
              Head of Data Science at NoLimit Indonesia · AI & NLP Engineer <br />
              Data Science Mentor at leading tech academies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/ask-ai"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <Send className="mr-2 h-4 w-4" /> Ask Fahmi AI
              </Link>
              <Link
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 text-base font-bold text-foreground transition-all hover:bg-accent"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Column: Integrated Chatbot UI */}
          <div id="hero-chat" className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-cyan-500 opacity-20 blur-xl"></div>
            <div className="relative flex h-[500px] flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black font-bold overflow-hidden">
                    <img src="/img/fahmi.png" alt="Fahmi" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Fahmi AI</h3>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> Online
                    </div>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <span className="text-xl">...</span>
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex flex-col space-y-1",
                      msg.role === "user" ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-xl px-4 py-2 text-sm",
                        msg.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-muted text-foreground"
                      )}
                    >
                      {msg.content}
                    </div>
                    <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start">
                    <div className="max-w-[85%] rounded-xl bg-muted px-4 py-2 text-sm animate-pulse">
                      typing...
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="border-t border-border p-4 bg-muted/30">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full rounded-md border border-border bg-background px-4 py-2 pr-12 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-1 flex h-10 w-10 items-center justify-center rounded bg-primary text-black disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
