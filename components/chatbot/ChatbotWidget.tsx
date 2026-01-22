"use client";

import { useEffect, useState } from "react";
import type { ChatMessage as Msg } from "@/lib/chatbot";
import { getAIChatReply, getChatbotReply } from "@/lib/chatbot";
import { ChatMessage } from "./ChatMessage";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Halo, saya Ask Fahmi AI. Saya versi AI dari Muhammad Fahmi — Head of Data Scientist, Data Scientist & AI & NLP Engineer, sekaligus trainer dan mentor freelance. Silakan tanya soal peran, project NLP & automation, pengalaman mengajar, atau program Intelligo ID.",
      createdAt: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    document.addEventListener("open-chatbot", handler);
    return () => document.removeEventListener("open-chatbot", handler);
  }, []);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Msg = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
      chatHistory.push({ role: "user", content: trimmed });
      
      const reply = await getAIChatReply(chatHistory);
      const botMessage: Msg = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: reply,
        createdAt: Date.now(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Msg = {
        id: `bot-error-${Date.now()}`,
        role: "assistant",
        content:
          "Maaf, terjadi kendala teknis pada versi demo. Silakan coba lagi beberapa saat lagi.",
        createdAt: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-400 md:bottom-6 md:right-6"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-800" />
        Ask Fahmi AI
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 z-40 w-[320px] max-w-[90vw] rounded-3xl border border-slate-800 bg-slate-950/95 shadow-2xl backdrop-blur md:bottom-24 md:right-6">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <div>
              <p className="text-xs font-semibold text-slate-100">Ask Fahmi AI</p>
              <p className="text-[11px] text-slate-400">
                Tanya seputar peran full-time sebagai Data Scientist/AI &amp; NLP Engineer,
                aktivitas mengajar/mentoring, atau program Intelligo ID.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-800"
            >
              ✕
            </button>
          </div>

          <div className="flex max-h-[320px] flex-col gap-3 overflow-y-auto px-4 py-3">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <p className="text-[11px] text-slate-400">
                Fahmi AI sedang menyusun jawaban...
              </p>
            )}
          </div>

          <form
            className="flex items-center gap-2 border-t border-slate-800 px-3 py-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              className="flex-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
              placeholder="Tanya peran, project, atau program Intelligo ID..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-full bg-emerald-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 disabled:opacity-60"
            >
              Kirim
            </button>
          </form>
        </div>
      )}
    </>
  );
}
