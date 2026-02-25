import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
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

# CV Context (RAG) - Ringkas dan fokus
CV_CONTEXT = """
MUHAMMAD FAHMI - Head of Data Science & AI Engineer

POSISI SEKARANG:
- Head of Data Science di NoLimit Indonesia (Jul 2024 - Present)
- Data Scientist di NoLimit Indonesia (Apr 2022 - Jul 2024)
- Head of L&D di Intelligo ID (Jan 2022 - Present)

LOKASI: Bandung, Indonesia
KONTAK: mfahmipamungkas123@gmail.com | 081263299950

KEAHLIAN UTAMA:
- NLP & Large Language Models (LLMs)
- Sentiment Analysis & ABSA (Aspect-Based Sentiment Analysis)
- RAG (Retrieval-Augmented Generation)
- Machine Learning & Deep Learning
- GPU Optimization (L4 22GB, ONNX Runtime)
- MLOps: FastAPI, Kafka, Elasticsearch

PROJECT UTAMA:
1. Sentiment ABSA Engine - Analisis sentimen per aspek untuk social media & online media (PyTorch, Hugging Face, ONNX, GPU)
2. Language Detection & Routing - Filter konten non-Indonesia (ML, NLP)
3. Clustering & SNA Engine - Topic modeling dan network analysis untuk narasi publik
4. Automated Media Summarization - Ringkasan otomatis ribuan data media per hari (LLM)
5. Sentiment LLM Verify - Validasi sentimen ambigu menggunakan LLM
6. NER & Statement Extraction - Ekstraksi entitas dan pernyataan dari teks

PENGALAMAN MENGAJAR:
- 350+ sesi corporate training (Bank Danamon, Toyota, PLN, Bayer, Freeport)
- Mentor: Skilvul x Kampus Merdeka, Binar Academy, Startup Campus
- Guest Lecturer: UI, UGM, IPB, Atma Jaya
- 1000+ learners mentored

RIWAYAT KERJA:
- NoLimit Indonesia: Head of Data Science (2024-present), Data Scientist (2022-2024)
- Kebun Pintar: Lead Data Scientist
- Bank Mandiri: Data Scientist
- Telkom DDB: Data Scientist

PENDIDIKAN:
- Applied Bachelor in Informatics Engineering, Politeknik Pos Indonesia (GPA 3.54)

SERTIFIKASI:
- IBM Enterprise Data Science
- Microsoft Certified Azure AI Fundamentals
"""

# Setup LangChain
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.7,
    api_key=OPENAI_API_KEY
)

prompt = ChatPromptTemplate.from_messages([
    ("system", f"""You are Ask Fahmi AI, the AI persona of Muhammad Fahmi.
Respond naturally as Fahmi, a Head of Data Scientist, AI & NLP Engineer, and Mentor.
Use the following CV information to answer questions about Fahmi's experience, projects, and expertise.
If the question is not related to Fahmi or his field, politely redirect them.
Keep answers professional yet approachable, as if Fahmi himself is talking.
Response should be in the same language as the user's message (default to Indonesian if unsure).

CV CONTEXT:
{CV_CONTEXT}"""),
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
        
        # Create chain and invoke
        chain = prompt | llm
        response = chain.invoke({"history": history})
        
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
