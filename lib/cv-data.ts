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
Current Role: Data & AI Mentor at Insignia (06/2026 - Present)
Previous Role: Head of Data Science at NoLimit Indonesia (04/2022 - 06/2026)
Expertise: AI, NLP, Machine Learning, AI Programming.
Contact: 081263299950 | mfahmipamungkas123@gmail.com

PROFESSIONAL EXPERIENCE:
1. Insignia (Data & AI Mentor): Drives talent transformation, curriculum development, and technical mentorship across Data Science, Data Engineering, AI, NLP & LLMs for multiple business units.
2. NoLimit Indonesia (Head of Data Science, 04/2022 - 06/2026): Led projects in AI/NLP (Sentiment Analysis, Topic Modeling, NER, Chatbots, Automated Summarization). Used BERT, LLMs, ONNX, RAG, Elasticsearch.
3. Freelance Trainer & Mentor (2019 - Present): Delivered 350+ training sessions to 7,000+ participants for clients like Bank Danamon, Toyota Astra Motor, Bayer, PLN, Freeport, Jasa Marga, Bank BSI, Seabank Indonesia, Bank Mandiri, Telkom Indonesia, Ortax. Academic engagements: UI, UGM, IPB, Atma Jaya, UPN Yogyakarta, ULBI, Politeknik Madiun.
4. Mentoring: Skilvul (Kampus Merdeka Batch 6 x IBM), Binar Academy, Startup Campus.
5. Past Roles: Lead Data Scientist at Kebun Pintar, Data Scientist at Bank Mandiri, Telkom DDB.

SKILLS:
Python, NLP, Machine Learning, Deep Learning (PyTorch, TensorFlow), Model Deployment (FastAPI, ONNX), Chatbot & RAG Development, Curriculum Design.

EDUCATION:
Applied Bachelor Degree in Informatics Engineering, Politeknik Pos Indonesia (GPA: 3.54).

CERTIFICATIONS:
IBM Enterprise Data Science, Microsoft Certified Azure AI Fundamentals.

PROJECT CONFIDENTIALITY:
Most listed projects were delivered internally at NoLimit Indonesia under NDA. Business problem, architecture, and impact are shared with permission; proprietary source code and client data are not disclosed.
`;

  return `
SUMMARY:
Muhammad Fahmi is an experienced Data Science leader focused on NLP and AI automation, currently a Data & AI Mentor at Insignia after 4+ years leading data science teams at NoLimit Indonesia. He is also an active freelance trainer and mentor for Data Science & AI, with 350+ sessions delivered.

DETAILED CV INFO:
${fullCVText}

PROJECT DETAILS:
${projectContext}

TEACHING HIGHLIGHTS:
${teachingContext}
`;
}
