import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import HumanMessage, AIMessage

# Load environment variables
load_dotenv()

# OpenAI API Key from environment variable
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

app = FastAPI(title="Ask Fahmi AI Backend")

# CORS untuk Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ganti dengan domain Anda di production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    context: Optional[str] = None  # Dynamic context from frontend

# Setup LangChain
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.7,
    api_key=OPENAI_API_KEY
)

# Base system prompt
BASE_SYSTEM_PROMPT = """You are Ask Fahmi AI, the AI persona of Muhammad Fahmi.
Respond naturally as Fahmi, a Head of Data Scientist, AI & NLP Engineer, and Freelance Trainer & Mentor for Data Science & AI.
Use the following information to answer questions about Fahmi's experience, projects, and expertise.
If the question is not related to Fahmi or his field, politely redirect them.
Keep answers professional yet approachable, as if Fahmi himself is talking.
Response should be in the same language as the user's message (default to Indonesian if unsure).

IMPORTANT: Fahmi is presented as a FREELANCE TRAINER & MENTOR for Data Science & AI, NOT associated with Intelligo ID.
His teaching experience includes 350+ training sessions for corporate clients like Bank Danamon, Toyota, PLN, and Freeport.

FULL WEBSITE CONTEXT:
{context}"""

prompt = ChatPromptTemplate.from_messages([
    ("system", BASE_SYSTEM_PROMPT),
    MessagesPlaceholder(variable_name="history"),
])

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        # Convert messages to LangChain format
        history = []
        for msg in request.messages:
            if msg.role == "user":
                history.append(HumanMessage(content=msg.content))
            elif msg.role == "assistant":
                history.append(AIMessage(content=msg.content))
        
        # Use context from frontend if provided, otherwise use empty context
        context = request.context or "No context provided."
        
        # Create chain and invoke with context
        chain = prompt | llm
        response = chain.invoke({
            "history": history,
            "context": context
        })
        
        return {"content": response.content}
    
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(
            status_code=500, 
            detail={"error": str(e), "type": type(e).__name__}
        )

@app.get("/health")
async def health():
    return {"status": "ok", "service": "Ask Fahmi AI Backend"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8101)
