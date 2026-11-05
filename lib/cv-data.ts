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
Current Role: Data & AI Corporate Trainer & Mentor (Freelance, 2019 - Present)
Previous Role: Head of Data Science at NoLimit Indonesia (Jul 2024 - May 2026); Data Scientist at NoLimit Indonesia (Apr 2022 - Jul 2024)
Expertise: AI Automation, Generative AI, NLP, Machine Learning, Data Analytics.
Contact: chat via LinkedIn (linkedin.com/in/muhammad-fahmi17) for training inquiries.

PROFESSIONAL EXPERIENCE:
1. Freelance Data & AI Trainer & Mentor (2019 - Present): Delivered 350+ training sessions to 7,000+ learners for clients like Bank Danamon, Toyota Astra Motor, Bayer, PLN, Freeport, Jasa Marga, Bank BSI, Seabank Indonesia, Bank Mandiri, Telkom Indonesia, Ortax. Academic engagements: UI, UGM, IPB, Atma Jaya, UPN Yogyakarta, ULBI, Politeknik Madiun.
2. Intelligo ID (Lead Trainer, 2024 - Present): Lead Trainer at Intelligo ID, an EduTech platform for Data Science & AI — delivering Corporate Training, Job Ready Bootcamp, and 1-on-1 Private Courses covering AI & Generative AI, advanced Machine Learning, Data & Programming, and Business Intelligence for corporate clients such as Telkom Corporate University, AXA Mandiri, BPK PENABUR, Ortax, and IPB University.
3. NoLimit Indonesia (Head of Data Science, Jul 2024 - May 2026): Led projects in AI/NLP (Sentiment Analysis, Topic Modeling, NER, Chatbots, Automated Summarization). Used BERT, LLMs, ONNX, RAG, Elasticsearch.
4. NoLimit Indonesia (Data Scientist, Apr 2022 - Jul 2024): Implemented AI pipelines with BERT, LLMs, ONNX optimization and RAG for large-scale social media monitoring.
5. Mentoring: Skilvul (Kampus Merdeka Batch 6 x IBM), Binar Academy, Startup Campus.
6. Past Roles: Lead Data Scientist at Kebun Pintar, Data Scientist at Bank Mandiri, Telkom DDB.

SKILLS:
Python, NLP, Machine Learning, Deep Learning (PyTorch, TensorFlow), Model Deployment (FastAPI, ONNX), AI Automation (n8n), Chatbot & RAG Development, Curriculum Design.

EDUCATION:
Applied Bachelor Degree in Informatics Engineering, Politeknik Pos Indonesia (GPA: 3.54).

CERTIFICATIONS:
IBM Enterprise Data Science, Microsoft Certified Azure AI Fundamentals.

PROJECT CONFIDENTIALITY:
Most listed projects were delivered internally at NoLimit Indonesia under NDA. Business problem, architecture, and impact are shared with permission; proprietary source code and client data are not disclosed.
`;

  return `
SUMMARY:
Muhammad Fahmi is a Data & AI Corporate Trainer & Mentor and former Head of Data Science, with 4+ years leading data science teams at NoLimit Indonesia. He has delivered 350+ training sessions to 7,000+ learners across 20+ companies and 10+ academic partners, focused on AI Automation, Generative AI, NLP, and Data Analytics.

DETAILED CV INFO:
${fullCVText}

PROJECT DETAILS:
${projectContext}

TEACHING HIGHLIGHTS:
${teachingContext}
`;
}
