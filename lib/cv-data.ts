import { projects } from "./projects";
import { teachingHighlights } from "./teaching";

export function getCVContext() {
  const projectContext = projects.map(p => `
Project Title: ${p.title}
Type: ${p.type}
Business Problem: ${p.businessProblem}
Data Scale: ${p.dataScale}
Approach: ${p.modelApproach}
Impact: ${p.outcomeImpact}
Tools: ${p.toolsStack.join(", ")}
`).join("\n---\n");

  const teachingContext = teachingHighlights.map(t => `
- ${t.label}: ${t.description}
`).join("\n");

  const fullCVText = `
MUHAMMAD FAHMI - CV DATA
Current Role: Data & AI Mentor at Insignia (05/2026 - Present)
Also: Freelance Instructor, Trainer & Mentor (01/2019 - Present)
Previous Role: Head of Data Science at NoLimit Indonesia (04/2022 - 06/2026)
Expertise: AI Programming, Machine Learning, NLP, LLMs, RAG, AI Agents, MLOps.
Contact: chat via LinkedIn (linkedin.com/in/muhammad-fahmi17) for training inquiries.

PROFESSIONAL EXPERIENCE:
1. Insignia (Data & AI Mentor, 05/2026 - Present): Drives talent transformation, curriculum development, and technical mentorship across Data Science, Data Engineering, AI, NLP, and LLMs for multiple business units.
2. Freelance, Instructor, Trainer & Mentor (01/2019 - Present): Delivered 350+ training sessions on AI Programming, AI, Machine Learning, NLP, and Data Science for professionals, students, and executives. Designed enterprise programs on Building Enterprise AI Chatbots with LLM & RAG (LLM architecture, RAG pipelines, vector databases, prompt engineering, AI security & governance, Docker/Kubernetes deployment), plus developer-track programs on LangChain, RAG, ReAct agents, FastAPI, n8n workflow automation, multi-agent orchestration (CrewAI, AutoGen), and MLOps (MLflow) delivered via PT Smartindo Manajemen Informatika. Notable corporate clients: Bank Danamon, Toyota Astra Motor, Bayer, PLN, Freeport, Jasa Marga, Bank BSI, Seabank Indonesia, Pegadaian, PT Smartindo Manajemen Informatika, Ortax / PT Integral Data Prima. Academic engagements: Universitas Indonesia (UI), UGM, IPB, Atma Jaya, UPN Yogyakarta, ULBI, Politeknik Madiun.
3. NoLimit Indonesia (Head of Data Science, 04/2022 - 06/2026): NoLimit is a technology company focused on online/social media monitoring and analytics. Led and managed team projects in AI, AI Programming, and NLP — Sentiment Analysis, Topic Modeling, NER, Chatbots, Statement Extraction, and Automated Summarization. Designed and deployed AI-driven solutions using BERT, LLMs, ONNX optimization, and API integration, implementing AI pipelines with RAG, Elasticsearch, and Deep Learning frameworks for scalable social media monitoring.
4. Mentor AI & Data Science, Skilvul x IBM (Kampus Merdeka Batch 6, 01/2024 - 06/2024).
5. Facilitator Data Science - Freelance, Binar Academy (09/2022 - 09/2023): Bootcamp FGA Digitalent Kominfo, Bootcamp PJB Pembangkitan Jawa Bali, Bootcamp PT. Bayer Indonesia.
6. Data Science Mentor - Part-time, Startup Campus x Kampus Merdeka (08/2022 - 02/2023).
7. Instructor - Python Data Science - Freelance, Kodehive / PT Kode Gama Teknologi (12/2021 - 02/2023).
8. Instructor - Data, Business Analytics and Operations, Ruangguru.com (02/2022 - 06/2022).
9. Lead Data Scientist, Kebun Pintar (01/2021 - 03/2022).
10. Data Scientist, PT Bank Mandiri (Persero) Tbk (11/2021 - 12/2021): Talent Score Card project with Setneg.
11. Head of Academy Division - Student Ambassador, BISA AI Academy (02/2021 - 07/2021).
12. Data Scientist, Telkom Indonesia Direktorat Digital Business / Telkom DDB (08/2020 - 01/2021): Emerging Topic Recommendation system.

SKILLS:
Python Programming, AI Programming, Machine Learning, Deep Learning (PyTorch, TensorFlow).
LLM Orchestration Frameworks: LangChain, LlamaIndex, Hugging Face Transformers.
Large Language Models (LLMs): Llama, Mistral, Gemma, Qwen — open vs private LLM architecture.
Retrieval-Augmented Generation (RAG): retrieval pipelines, chunking strategy, document processing.
Vector Databases & Embeddings: ChromaDB, FAISS, Milvus, PGVector, semantic & similarity search.
Prompt Engineering: prompt design, system prompts, role prompting, structured output, optimization.
AI Agent & Automation: agent concepts, tool calling, multi-agent architecture (CrewAI, AutoGen), n8n workflow automation.
MLOps & Deployment: MLflow (tracking, model registry), FastAPI, Flask, Streamlit, Docker, Docker Compose, Kubernetes (overview), ONNX optimization.
Other: Elasticsearch, Looker Studio, Selenium, Ollama, Open WebUI, GitHub, Figma.
Soft skills: Leadership, Team Work, Problem Solving, Creativity, Critical Thinking, Public Speaking.

EDUCATION:
Applied Bachelor Degree in Informatics Engineering, Politeknik Pos Indonesia (2021, GPA: 3.54/4.00). Natural Sciences major, SMA Negeri 2 Kisaran (2017).

CERTIFICATIONS:
IBM: Machine Learning for Data Science Projects; Getting Started with Enterprise Data Science; Enterprise Data Science in Practice. Microsoft Certified: Azure AI Fundamentals. Junior Web Programming (Badan Nasional Sertifikasi Profesi).

LANGUAGES:
Indonesian (Native), English (Basic).

PROJECT CONFIDENTIALITY:
Most listed projects were delivered internally at NoLimit Indonesia under NDA. Business problem, architecture, and impact are shared with permission; proprietary source code and client data are not disclosed.
`;

  return `
SUMMARY:
Muhammad Fahmi is a Data Scientist and AI/NLP Engineer with expertise spanning Artificial Intelligence, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and applied NLP. Currently Data & AI Mentor at Insignia, driving talent transformation, curriculum development, and technical mentorship in Data Science, Data Engineering, AI, NLP, and LLMs across multiple business units. Previously Head of Data Science at NoLimit Indonesia, leading teams delivering AI and NLP solutions for large-scale social media analytics. Active trainer and mentor with 350+ sessions delivered on AI Programming, Machine Learning, Enterprise AI Chatbot development, and LLM/RAG architecture for corporate, academic, and public programs.

DETAILED CV INFO:
${fullCVText}

PROJECT DETAILS:
${projectContext}

TEACHING HIGHLIGHTS:
${teachingContext}
`;
}
