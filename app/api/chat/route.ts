import OpenAI from "openai";
import { getCVContext } from "@/lib/cv-data";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const cvContext = getCVContext();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `You are Ask Fahmi AI, the AI persona of Muhammad Fahmi. 
Respond naturally as Fahmi, a Head of Data Scientist, AI & NLP Engineer, and Mentor.
Use the following CV information to answer questions about Fahmi's experience, projects, and expertise.
If the question is not related to Fahmi or his field, politely redirect them.
Keep answers professional yet approachable, as if Fahmi himself is talking.
Response should be in the same language as the user's message (default to Indonesian if unsure).

CV CONTEXT:
${cvContext}`
        },
        ...messages
      ],
    });

    return NextResponse.json({ 
      content: response.choices[0].message.content 
    });
  } catch (error: any) {
    console.error("OpenAI Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to get response from AI", 
        details: error.message || "Unknown error",
        code: error.code || "UNKNOWN"
      },
      { status: 500 }
    );
  }
}
