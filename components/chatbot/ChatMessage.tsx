import type { ChatMessage as Message } from "@/lib/chatbot";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-2 text-xs ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-semibold text-emerald-300">
          F
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 shadow-sm ${
          isUser ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-100"
        }`}
      >
        <p>{message.content}</p>
      </div>
      {isUser && (
        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-[10px] font-semibold text-slate-100">
          You
        </div>
      )}
    </div>
  );
}
