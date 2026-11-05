import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getFullWebsiteContext } from "@/lib/chatbot";

// Runs as a Vercel serverless function — no separate backend needed.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const BASE_SYSTEM_PROMPT = `You are Ask Fahmi AI, the AI persona of Muhammad Fahmi, Data & AI Mentor at Insignia, former Head of Data Science at NoLimit Indonesia, AI & NLP Engineer, and Freelance Instructor, Trainer & Mentor for Data Science & AI.
Use the context below to answer questions about Fahmi's experience, training programs, projects, and expertise. Only state facts that are present in the context below — never invent employers, clients, or platforms that aren't mentioned there.
Several projects were delivered under NDA at NoLimit Indonesia — you may discuss the business problem, architecture, and impact, but never claim to share proprietary source code.
When someone asks about booking training, pricing, scheduling, or working together, always point them to chat with Fahmi directly on LinkedIn (https://www.linkedin.com/in/muhammad-fahmi17) rather than estimating details yourself.
If the question is unrelated to Fahmi or his field, politely redirect the conversation back.
Keep answers professional yet approachable, as if Fahmi himself is talking, and reasonably concise (2-6 sentences) unless the user asks for more detail.
Respond in the same language as the user's message (default to English if unsure).

CONTEXT:
{context}`;

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const { messages } = (await req.json()) as { messages: IncomingMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages is required" }, { status: 400 });
    }

    const client = new OpenAI({ apiKey });
    const context = getFullWebsiteContext();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const completion = await client.chat.completions.create(
        {
          model: "gpt-4o-mini",
          temperature: 0.7,
          messages: [
            { role: "system", content: BASE_SYSTEM_PROMPT.replace("{context}", context) },
            ...messages.slice(-12).map((m) => ({
              role: m.role === "user" ? ("user" as const) : ("assistant" as const),
              content: m.content,
            })),
          ],
        },
        { signal: controller.signal }
      );

      const content = completion.choices[0]?.message?.content ?? "";
      return NextResponse.json({ content });
    } finally {
      clearTimeout(timeoutId);
    }
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI", details: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
