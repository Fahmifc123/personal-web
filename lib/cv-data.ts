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
Current Role: Head of Data Scientist at NoLimit Indonesia (04/2022 - Present)
Expertise: AI, NLP, Machine Learning, AI Programming.
Contact: 081263299950 | mfahmipamungkas123@gmail.com

PROFESSIONAL EXPERIENCE:
1. NoLimit Indonesia (Head of Data Scientist): Leads projects in AI/NLP (Sentiment Analysis, Topic Modeling, NER, Chatbots, Automated Summarization). Uses BERT, LLMs, ONNX, RAG, Elasticsearch.
2. Intelligo ID (Head of L&D): Built AI & Data Science curricula for Bootcamps and Job Ready programs.
3. Freelance Trainer: Delivered 350+ training sessions for clients like Bank Danamon, Toyota, Bayer, PLN, Freeport.
4. Mentoring: Skilvul (Kampus Merdeka Batch 6), Binar Academy, Startup Campus.
5. Past Roles: Lead Data Scientist at Kebun Pintar, Data Scientist at Bank Mandiri, Telkom DDB.

SKILLS:
Python, NLP, Machine Learning, Deep Learning (PyTorch, TensorFlow), Model Deployment (FastAPI, ONNX), Chatbot & RAG Development.

EDUCATION:
Applied Bachelor Degree in Informatics Engineering, Politeknik Pos Indonesia (GPA: 3.54).

CERTIFICATIONS:
IBM Enterprise Data Science, Microsoft Certified Azure AI Fundamentals.
`;

  return `
SUMMARY:
Muhammad Fahmi is an experienced Data Science leader focused on NLP and AI automation. He leads data teams to deliver production-grade AI solutions. He is also the Head of L&D at Intelligo ID.

DETAILED CV INFO:
${fullCVText}

PROJECT DETAILS:
${projectContext}

TEACHING HIGHLIGHTS:
${teachingContext}
`;
}
