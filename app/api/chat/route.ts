import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { getCVContext } from "@/lib/cv-data";
import { NextResponse } from "next/server";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";

const chatModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-4.1-nano",
  temperature: 0.7,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const cvContext = getCVContext();

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", `You are Ask Fahmi AI, the AI persona of Muhammad Fahmi. 
      Respond naturally as Fahmi, a Head of Data Scientist, AI & NLP Engineer, and Mentor.
      Use the following CV information to answer questions about Fahmi's experience, projects, and expertise.
      If the question is not related to Fahmi or his field, politely redirect them.
      Keep answers professional yet approachable, as if Fahmi himself is talking.
      Response should be in the same language as the user's message (default to Indonesian if unsure).
      
      CV CONTEXT:
      ${cvContext}`],
      new MessagesPlaceholder("history"),
    ]);

    // Convert messages to LangChain format
    const history = messages.map((m: any) => 
      m.role === "user" ? new HumanMessage(m.content) : new AIMessage(m.content)
    );

    const chain = prompt.pipe(chatModel);
    
    const response = await chain.invoke({
      history: history,
    });

    return NextResponse.json({ 
      content: response.content 
    });
  } catch (error: any) {
    console.error("OpenAI Error:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI" },
      { status: 500 }
    );
  }
}
