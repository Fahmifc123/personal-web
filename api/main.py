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

# CV Context (RAG)
CV_CONTEXT = """
===========================================================
MUHAMMAD FAHMI
Head of Data Science | AI Engineer | NLP Specialist
===========================================================

Brand Identity:
MF | Fahmi

Website Sections:
Home
Experience
Projects & Portfolio
Teaching
Contact
Ask Fahmi AI

Tagline:
Head of Data Science & AI Engineer.
Head of L&D at Intelligo ID.

Location:
Bandung, Indonesia

Contact:
Phone: 081263299950
Email: mfahmipamungkas123@gmail.com

Availability:
Available for hire
Built with Next.js & Tailwind CSS

===========================================================
PROFESSIONAL SUMMARY
===========================================================

AI & NLP Leader specializing in enterprise-grade AI systems,
Large Language Models (LLMs), ABSA, RAG architecture,
perception intelligence, and decision intelligence systems.

Currently leading Data Science division at NoLimit Indonesia,
designing scalable AI infrastructure for government and enterprise clients.

Focus Areas:
- NLP Production Systems
- Retrieval-Augmented Generation (RAG)
- Sentiment & Narrative Intelligence
- LLM Verification Systems
- GPU Optimization (L4 22GB)
- ONNX Runtime Deployment
- Kafka Streaming Architecture
- Elasticsearch Indexing & Search

===========================================================
EXPERIENCE
===========================================================

NO LIMIT INDONESIA
Head of Data Science (Jul 2024 – Present)

- Lead AI strategy & roadmap
- Architect large-scale NLP systems
- Manage Data Science & ML Engineering team
- Oversee ABSA, Narrative Intelligence, Risk Scoring systems
- Design RAG-based knowledge systems
- Optimize inference pipelines with GPU & ONNX
- Integrate Kafka-based streaming ingestion

Previous:
Data Scientist – NoLimit Indonesia (Apr 2022 – Jul 2024)

Past Roles:
Lead Data Scientist – Kebun Pintar
Data Scientist – Bank Mandiri
Data Scientist – Telkom DDB

Industry Exposure:
Banking, Mining, Automotive, Energy, FMCG, Government, Startup

===========================================================
PORTFOLIO
Strategic Data & AI Projects
===========================================================

A curated selection of enterprise-grade NLP, predictive modeling,
and AI automation solutions delivered for high-scale environments.

Categories:
All | Machine Learning | AI | NLP | Computer Vision | Data Science

-----------------------------------------------------------
1. NLP
Sentiment ABSA Engine untuk Social Media & Online Media
-----------------------------------------------------------

The Challenge:
Perusahaan kesulitan memahami sentimen publik secara spesifik 
karena satu konten sering membahas banyak isu atau aktor. 
Sentimen umum tidak cukup untuk analisis reputasi dan isu strategis.

The Impact:
Analisis sentimen menjadi kontekstual per isu/aspek dan dapat digunakan 
real-time untuk monitoring serta pengambilan keputusan strategis.

Technologies:
Python, PyTorch, Hugging Face, ONNX Runtime, FastAPI, Kafka, GPU

Scale:
Ratusan ribu hingga jutaan data social media & online media per bulan.

-----------------------------------------------------------
2. Machine Learning
Language Detection & Intelligent Routing Engine
-----------------------------------------------------------

The Challenge:
Konten non-Bahasa Indonesia membebani sistem analitik 
dan meningkatkan biaya komputasi.

The Impact:
Efisiensi resource meningkat, processing time menurun,
kualitas output NLP lebih terjaga.

Technologies:
Python, Machine Learning, NLP, FastAPI, Pandas

Scale:
Ratusan ribu data per bulan dari seluruh ingestion pipeline.

-----------------------------------------------------------
3. Data Science
Clustering & SNA/DNA Engine untuk Isu dan Narasi Publik
-----------------------------------------------------------

The Challenge:
Stakeholder kesulitan memahami isu utama, pola percakapan,
dan hubungan antar aktor dari data tidak terstruktur.

The Impact:
Peta isu & narasi lebih terstruktur dan berbasis data,
mendukung strategic communication & risk mitigation.

Technologies:
Python, Pandas, Clustering, Network Analysis, FastAPI

Scale:
Puluhan hingga ratusan ribu data percakapan per periode.

-----------------------------------------------------------
4. AI
Automated Media Summarization Engine (Daily, WA, & Report)
-----------------------------------------------------------

The Challenge:
Ringkasan manual dari ribuan data media per hari tidak efisien.

The Impact:
Waktu pembuatan laporan berkurang drastis,
insight diterima lebih cepat oleh stakeholder eksekutif.

Technologies:
Python, LLM API, NLP, FastAPI, Pandas

Scale:
Ratusan ribu data per hari dari social & online media.

-----------------------------------------------------------
5. AI
Sentiment LLM – Ignore & Verify System
-----------------------------------------------------------

The Challenge:
Konten ambigu, sarkasme, dan noise tinggi 
menurunkan akurasi model sentiment tradisional.

The Impact:
Akurasi insight meningkat signifikan,
false positive & false negative berkurang.

Technologies:
Python, LLM API, FastAPI, Pandas

Scale:
Subset data ambigu dari ratusan ribu data bulanan.

-----------------------------------------------------------
6. NLP
NER, Spokesperson & Statement Extraction Engine
-----------------------------------------------------------

The Challenge:
Sulit mengidentifikasi siapa berbicara,
mewakili siapa, dan pernyataan apa yang disampaikan.

The Impact:
Mempercepat analisis aktor & narasi,
menjadi fondasi untuk Sentiment & SNA engine.

Technologies:
Python, NLP, Regex, Machine Learning, FastAPI, Pandas

Scale:
Ratusan ribu artikel online media & social media per bulan.

===========================================================
TEACHING
===========================================================

Head of L&D – Intelligo ID (Jan 2022 – Present)

- Design AI & Data Science curriculum
- Build Job-Ready AI programs
- NLP specialization track
- Mentored 1000+ learners

Corporate Trainer:
350+ sessions (Bank Danamon, Toyota, PLN, Bayer, Freeport)

Mentor:
Skilvul x Kampus Merdeka
Binar Academy
Startup Campus

Guest Lecturer:
UI, UGM, IPB, Atma Jaya

===========================================================
TECHNICAL STACK
===========================================================

Languages:
Python, SQL

Frameworks:
PyTorch, TensorFlow, Hugging Face

Deployment:
FastAPI, ONNX Runtime, Docker

Search & Retrieval:
Elasticsearch, Vector Search, RAG

Streaming:
Kafka

Optimization:
GPU Acceleration, Quantization, Concurrency Optimization

===========================================================
CAREER POSITIONING
===========================================================

Head of Data Science & AI Engineer
Strategic NLP Architect
Enterprise AI System Designer
Decision Intelligence Builder

===========================================================
© 2026 Muhammad Fahmi.
===========================================================
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
