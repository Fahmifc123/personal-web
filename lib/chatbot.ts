import { projects } from "./projects";
import { teachingHighlights } from "./teaching";
import { getCVContext } from "./cv-data";

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: number;
}

const personaIntro =
  "Saya Ask Fahmi AI, versi AI dari Muhammad Fahmi – Head of Data Scientist di NoLimit Indonesia, " +
  "Data Scientist, AI & NLP Engineer, sekaligus trainer dan mentor AI & Data Science secara freelance. " +
  "Saya akan menjawab dengan sudut pandang seorang praktisi dan pemimpin tim data.";

// Python Backend URL via ngrok (HTTPS)
const PYTHON_BACKEND_URL = "https://7a31-43-134-70-75.ngrok-free.app";

// Experience data
const experiences = [
  {
    role: "HEAD OF DATA SCIENCE",
    company: "NOLIMIT INDONESIA",
    location: "BANDUNG, INDONESIA",
    dateRange: "APR 2022 - PRESENT",
    description: "Currently leading the data science team (Jul 2024 - Present) in managing AI & NLP projects like Sentiment Analysis, NER, and Chatbots. Previously served as a Data Scientist (Apr 2022 - Jul 2024) implementing AI pipelines with RAG and Deep Learning frameworks."
  },
  {
    role: "FREELANCE TRAINER & MENTOR",
    company: "FREELANCE",
    location: "REMOTE & SEASONAL",
    dateRange: "JAN 2019 - PRESENT",
    description: "Delivered 350+ training sessions on AI, Machine Learning, and NLP for professionals and corporate clients like Bank Danamon, Toyota, PLN, and Freeport. Built and delivered AI Programming & Data Science curricula for Bootcamps and Job Ready programs."
  },
  {
    role: "MENTOR AI & DATA SCIENCE",
    company: "SKILVUL (KAMPUS MERDEKA BATCH 6)",
    location: "REMOTE",
    dateRange: "JAN 2024 - JUN 2024",
    description: "Mentored students in AI Programming & NLP projects under Kampus Merdeka Batch 6 (Skilvul x IBM)."
  },
  {
    role: "DATA SCIENCE FACILITATOR",
    company: "BINAR ACADEMY",
    location: "REMOTE",
    dateRange: "SEP 2022 - SEP 2023",
    description: "Facilitated Data Science bootcamps for B2B and B2C programs, including Digitalent Kominfo and corporate partners like PT. Bayer Indonesia."
  },
  {
    role: "LEAD DATA SCIENTIST",
    company: "KEBUN PINTAR",
    location: "REMOTE",
    dateRange: "JAN 2021 - MAR 2022",
    description: "Led data science initiatives for agricultural technology solutions."
  },
  {
    role: "DATA SCIENTIST",
    company: "PT BANK MANDIRI (PERSERO) TBK",
    location: "REMOTE",
    dateRange: "NOV 2021 - DEC 2021",
    description: "Worked on the Talent Score Card project in collaboration with Setneg."
  },
  {
    role: "DATA SCIENTIST",
    company: "TELKOM INDONESIA (DDB)",
    location: "BANDUNG, INDONESIA",
    dateRange: "AUG 2020 - JAN 2021",
    description: "Developed Emerging Topic Recommendation systems within the Digital Business Directorate."
  }
];

// Generate comprehensive context from all website data
export function getFullWebsiteContext(): string {
  const projectContext = projects.map((p) => `
PROJECT: ${p.title}
Type: ${p.type}
Business Problem: ${p.businessProblem}
Data Scale: ${p.dataScale}
Approach: ${p.modelApproach}
Impact: ${p.outcomeImpact}
Tools: ${p.toolsStack.join(", ")}
`).join("\n---\n");

  const teachingContext = teachingHighlights.map((t) => `
- ${t.label}: ${t.description}
`).join("\n");

  const experienceContext = experiences.map((e) => `
${e.role} at ${e.company} (${e.dateRange})
Location: ${e.location}
Description: ${e.description}
`).join("\n---\n");

  return `
${getCVContext()}

=== DETAILED PROJECTS ===
${projectContext}

=== TEACHING & MENTORING ===
${teachingContext}

=== FULL WORK EXPERIENCE ===
${experienceContext}
`;
}

export async function getAIChatReply(messages: { role: string; content: string }[]): Promise<string> {
  try {
    // Get full website context
    const websiteContext = getFullWebsiteContext();
    
    // Direct connection to Python backend via ngrok HTTPS
    const response = await fetch(`${PYTHON_BACKEND_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages, context: websiteContext }),
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("Chat API Error:", error);
    return "Maaf, sepertinya ada kendala teknis saat menghubungkan ke otak AI saya. Coba lagi nanti ya!";
  }
}

export async function getChatbotReply(userMessage: string): Promise<string> {
  const text = userMessage.toLowerCase();

  if (
    text.includes("head of data science") ||
    text.includes("tanggung jawab") ||
    text.includes("jobdesk") ||
    (text.includes("role") && text.includes("head"))
  ) {
    return (
      personaIntro +
      " " +
      "Sebagai Head of Data Science, fokus utama saya adalah memastikan inisiatif data dan AI selaras dengan kebutuhan bisnis. " +
      "Secara praktis, tanggung jawab saya mencakup: " +
      "menentukan prioritas project, memilih pendekatan teknis yang realistis, membangun dan mengembangkan tim data, " +
      "serta menjaga kualitas solusi dari tahap eksplorasi sampai berjalan stabil di produksi. " +
      "Saya juga banyak berinteraksi dengan stakeholder lintas fungsi untuk menyamakan ekspektasi dan mengkomunikasikan insight."
    );
  }

  if (
    text.includes("nlp") ||
    text.includes("sentiment") ||
    text.includes("sentimen") ||
    text.includes("pipeline text") ||
    text.includes("social listening")
  ) {
    return (
      personaIntro +
      " " +
      "Saya banyak bekerja dengan NLP dan sentiment analysis, khususnya untuk teks berbahasa Indonesia. " +
      "Contohnya, membangun sentiment engine dan pipeline NLP yang memproses percakapan dari berbagai kanal, " +
      "mulai dari cleaning, deteksi bahasa, klasifikasi sentimen, sampai pengelompokan topik. " +
      "Biasanya solusi ini dibungkus dalam bentuk API sehingga bisa diintegrasikan ke dashboard, sistem internal, atau automation lainnya."
    );
  }

  if (
    text.includes("automation") ||
    text.includes("otomasi") ||
    text.includes("sla") ||
    text.includes("produksi") ||
    text.includes("production")
  ) {
    return (
      personaIntro +
      " " +
      "Untuk project skala besar, saya tidak hanya memikirkan akurasi model, tetapi juga reliability: " +
      "bagaimana model dipanggil lewat API, bagaimana latency dan error rate dijaga, dan bagaimana monitoring dilakukan sehari-hari. " +
      "Hal-hal seperti SLA, alerting, dan fallback behavior menjadi bagian penting dari desain solusi, " +
      "supaya tim bisnis bisa mengandalkan sistem tersebut dalam jangka panjang."
    );
  }

  if (
    text.includes("leadership") ||
    text.includes("memimpin") ||
    text.includes("team data") ||
    text.includes("tim data") ||
    text.includes("keputusan") ||
    text.includes("decision")
  ) {
    return (
      personaIntro +
      " " +
      "Dalam memimpin tim data, saya berusaha menjaga keseimbangan antara eksplorasi teknis dan delivery yang jelas. " +
      "Saat mengambil keputusan, saya biasanya mempertimbangkan: seberapa besar impact bisnis, effort teknis, risiko implementasi, " +
      "dan kesiapan tim untuk memelihara solusi tersebut. " +
      "Saya juga memprioritaskan komunikasi yang terbuka sehingga anggota tim paham konteks dan bisa berkembang secara profesional."
    );
  }

  if (
    text.includes("mengajar") ||
    text.includes("ngajar") ||
    text.includes("mentor") ||
    text.includes("mentoring") ||
    text.includes("kelas") ||
    text.includes("bootcamp") ||
    text.includes("training")
  ) {
    return (
      personaIntro +
      " " +
      "Sebagai mentor dan pengajar freelance, saya mendesain kelas dan program yang mendekati situasi nyata di industri. " +
      "Saya telah membawakan 350+ sesi training untuk berbagai perusahaan seperti Bank Danamon, Toyota, PLN, dan Freeport. " +
      "Pendekatan saya biasanya: mulai dari pondasi (Python, SQL, pemahaman data), lalu masuk ke modelling dan deployment bertahap, " +
      "dengan review dan diskusi yang jujur namun tetap suportif."
    );
  }

  if (
    text.includes("kurikulum") ||
    text.includes("silabus") ||
    (text.includes("bootcamp") && text.includes("data"))
  ) {
    return (
      personaIntro +
      " " +
      "Secara garis besar, kurikulum yang saya desain untuk training Data Science biasanya mencakup: " +
      "fundamental Python dan pengolahan data, SQL dan analisis di level database, " +
      "pengenalan statistik dan machine learning, hingga project end-to-end yang melibatkan problem bisnis, " +
      "data exploration, modelling, dan penyajian hasil. " +
      "Di level yang lebih lanjut, bisa masuk ke topik AI, NLP, dan deployment sesuai kebutuhan peserta."
    );
  }

  if (
    (text.includes("belajar") || text.includes("mulai")) &&
    (text.includes("data science") || text.includes("ds"))
  ) {
    return (
      personaIntro +
      " " +
      "Jika Anda ingin belajar Data Science dari nol, saya biasanya menyarankan urutan seperti ini: " +
      "pertama, kuasai dasar Python dan logika pemrograman; kedua, biasakan diri dengan analisis data menggunakan pandas dan visualisasi; " +
      "ketiga, pelajari SQL untuk berinteraksi dengan data di database; keempat, masuk ke konsep statistik dasar dan machine learning. " +
      "Di sepanjang perjalanan, usahakan selalu punya project kecil yang relevan dengan minat Anda, dan jangan ragu mencari mentor untuk review dan arahan."
    );
  }

  if (
    text.includes("lanjut") ||
    text.includes("advanced") ||
    text.includes("level berikut") ||
    (text.includes("sudah") && text.includes("dasar"))
  ) {
    return (
      personaIntro +
      " " +
      "Jika Anda sudah melewati dasar Python, SQL, dan modelling klasik, langkah berikutnya bisa fokus ke: " +
      "memperdalam satu domain (misalnya NLP atau time series), memahami aspek deployment dan monitoring model, " +
      "serta mengasah kemampuan menjelaskan solusi ke non-teknis. " +
      "Di titik ini, kualitas portofolio dan cara Anda menceritakannya seringkali lebih menentukan dibanding jumlah tool yang dikuasai."
    );
  }

  return (
    personaIntro +
    " " +
    "Saat ini versi demo Ask Fahmi AI menggunakan jawaban berbasis pola, " +
    "jadi mungkin belum selalu tepat dengan konteks spesifik Anda. " +
    "Coba jelaskan: apakah Anda ingin tahu tentang peran Head of Data Science, " +
    "contoh project NLP & automation, pengalaman mengajar dan mentoring, " +
    "atau rekomendasi jalur belajar Data Science untuk kondisi Anda saat ini?"
  );
}
