export type Program = {
  slug: string;
  title: string;
  audience: string;
  duration: string;
  format: string[];
  outcomes: string[];
  tools: string[];
};

export const programs: Program[] = [
  {
    slug: "ai-automation-n8n",
    title: "AI Automation with n8n",
    audience: "Corporate teams, operations, and analysts",
    duration: "1-4 days",
    format: ["Onsite", "Online"],
    outcomes: [
      "Build working automation workflows connected to everyday tools",
      "Integrate LLMs into workflows for summarizing, classifying, and drafting",
      "Leave with ready-to-use workflows for your own use cases",
    ],
    tools: ["n8n", "LLM APIs", "Google Workspace", "Webhooks"],
  },
  {
    slug: "ai-agents",
    title: "Intelligent AI Agents for Workflow Automation",
    audience: "Developers and technical teams",
    duration: "1-3 days",
    format: ["Onsite", "Online"],
    outcomes: [
      "Understand agent architectures, tools, and memory",
      "Build agents that call APIs and handle multi-step tasks",
      "Apply guardrails and evaluation before deployment",
    ],
    tools: ["Python", "LLM APIs", "n8n", "RAG"],
  },
  {
    slug: "genai-productivity",
    title: "Generative AI for Productivity",
    audience: "All employees, non-technical friendly",
    duration: "1 day",
    format: ["Onsite", "Online"],
    outcomes: [
      "Write effective prompts for daily work tasks",
      "Use AI tools for documents, analysis, and presentations",
      "Know the risks: data privacy, accuracy, and responsible use",
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "Copilot"],
  },
  {
    slug: "ai-video-creation",
    title: "AI-Assisted Video Creation",
    audience: "Communication, PR, and public sector teams",
    duration: "1-2 days",
    format: ["Onsite"],
    outcomes: [
      "Plan scripts and storyboards with AI",
      "Generate visuals, voice-over, and edits with AI tools",
      "Produce finished videos during the session",
    ],
    tools: ["Generative video tools", "AI voice tools", "Video editors"],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Visualization",
    audience: "Analysts and business teams",
    duration: "2-5 days",
    format: ["Onsite", "Online"],
    outcomes: [
      "Clean and analyze data with Excel, SQL, and Python",
      "Build dashboards in Power BI or Looker Studio",
      "Present insights with clear data storytelling",
    ],
    tools: ["Excel", "SQL", "Python", "Power BI", "Looker Studio"],
  },
  {
    slug: "private-mentoring",
    title: "1-on-1 Private Mentoring",
    audience: "Students and professionals switching to Data & AI",
    duration: "Flexible, per session",
    format: ["Online", "Offline (Bandung/Jakarta)"],
    outcomes: [
      "Personalized learning path based on your goals",
      "Hands-on Python, Machine Learning, and NLP practice",
      "Portfolio-ready projects with code review",
    ],
    tools: ["Python", "scikit-learn", "Hugging Face", "Streamlit"],
  },
];
