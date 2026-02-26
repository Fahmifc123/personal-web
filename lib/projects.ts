export type ProjectType = "Machine Learning" | "AI" | "NLP" | "Computer Vision" | "Data Science" | "Data Engineering";

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  businessProblem: string;
  dataScale: string;
  modelApproach: string;
  outcomeImpact: string;
  toolsStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "realtime-nlp-data-platform",
    type: "Data Engineering",
    title: "Real-Time NLP Data Platform for Social Media Analytics",
    businessProblem: "Perusahaan membutuhkan sistem yang mampu mengolah jutaan data social media secara real-time untuk menghasilkan insight sentiment, emotion, dan language detection yang langsung tersedia di dashboard monitoring.",
    dataScale: "Jutaan data per hari dari multiple API sources (social media & online media).",
    modelApproach: "Membangun end-to-end data pipeline: API ingestion → AI inference service (sentiment/emotion/language detection) → Kafka streaming → Elasticsearch → Real-time dashboard. Arsitektur dirancang untuk horizontal scaling dan fault tolerance.",
    outcomeImpact: "Pipeline mampu memproses data dalam hitungan detik dari ingestion hingga tampil di dashboard, mendukung multi-tenant clients, dan memungkinkan monitoring real-time untuk decision making.",
    toolsStack: ["Python", "Apache Kafka", "FastAPI", "Elasticsearch", "ONNX Runtime", "Docker", "GPU", "Redis"],
    link: "/projects/realtime-nlp-data-platform"
  },
  {
    id: "mlops-auto-retrain",
    type: "Data Engineering",
    title: "MLOps Pipeline: Automated Model Retraining & Deployment",
    businessProblem: "Model sentiment analysis mengalami degradasi akurasi seiring waktu karena data drift. Tim ML membutuhkan sistem yang dapat secara otomatis mendeteksi penurunan performa, re-train dengan data baru, dan melakukan deployment hanya jika model lebih baik dari versi sebelumnya.",
    dataScale: "Ribuan sampel baru per minggu untuk continuous training dan model evaluation.",
    modelApproach: "Membangun MLOps pipeline dengan fitur: automated data ingestion → model training → accuracy comparison → conditional deployment. Sistem membandingkan akurasi model baru vs model production, dan hanya melakukan deployment jika akurasi meningkat. Model registry digunakan untuk versioning dan rollback capability.",
    outcomeImpact: "Model selalu up-to-date dengan data terbaru, akurasi meningkat 15% dalam 3 bulan, dan deployment risk berkurang karena adanya accuracy gate sebelum promote ke production.",
    toolsStack: ["Python", "MLflow", "FastAPI", "Docker", "Kubernetes", "GitHub Actions", "PostgreSQL", "ONNX"],
    link: "/projects/mlops-auto-retrain"
  },
  {
    id: "multi-source-web-scraper",
    type: "Data Engineering",
    title: "Multi-Source Web Data Collection Pipeline",
    businessProblem: "Tim data dan analytics membutuhkan data dari berbagai sumber publik (e-commerce, news portal, image repositories) untuk analisis market research, sentiment monitoring, dan content aggregation. Pengumpulan manual tidak scalable dan rawan error.",
    dataScale: "Puluhan hingga ratusan ribu records dari multiple sources (Shopee reviews, Kompas articles, Unsplash images).",
    modelApproach: "Membangun modular web scraping framework menggunakan Selenium dengan fitur: dynamic element detection, anti-bot handling, data validation layer, dan automated scheduling. Output di-standardisasi ke format CSV/Parquet untuk downstream analytics.",
    outcomeImpact: "Framework mengurangi waktu collection dari hari menjadi jam, meningkatkan data quality melalui validation layer, dan mendukung penambahan data source baru dengan minimal code changes.",
    toolsStack: ["Python", "Selenium", "Pandas", "BeautifulSoup", "Docker", "CSV", "Parquet"],
    link: "/projects/multi-source-web-scraper"
  },
  {
    id: "sentiment-absa-engine",
    type: "NLP",
    title: "Sentiment ABSA Engine untuk Social Media & Online Media",
    businessProblem: "Perusahaan kesulitan memahami sentimen publik secara spesifik karena satu konten sering membahas banyak isu atau aktor. Sentimen umum tidak cukup untuk mendukung analisis reputasi dan isu strategis.",
    dataScale: "Ratusan ribu hingga jutaan data social media dan online media per bulan.",
    modelApproach: "Membangun Aspect-Based Sentiment Analysis (ABSA) Bahasa Indonesia dengan pipeline language detection, aspect mapping, dan sentiment classification. Engine dioptimasi untuk GPU dan ONNX runtime serta mendukung human validation.",
    outcomeImpact: "Analisis sentimen menjadi lebih kontekstual per isu/aspek dan dapat digunakan secara real-time untuk monitoring dan pengambilan keputusan.",
    toolsStack: ["Python", "PyTorch", "Hugging Face", "ONNX Runtime", "FastAPI", "Kafka", "GPU"],
    link: "/projects/sentiment-absa-engine"
  },
  {
    id: "language-detection-routing",
    type: "Machine Learning",
    title: "Language Detection & Intelligent Routing Engine",
    businessProblem: "Konten non-relevan (non-Bahasa Indonesia) membebani sistem analitik dan meningkatkan biaya komputasi jika diproses tanpa penyaringan.",
    dataScale: "Ratusan ribu data per bulan dari seluruh data masuk social & online media.",
    modelApproach: "Menggunakan model language detection berbasis machine learning untuk mengklasifikasikan bahasa dan melakukan routing otomatis ke pipeline sentiment atau ignore/LLM verification.",
    outcomeImpact: "Efisiensi resource meningkat, processing time berkurang, dan kualitas output NLP lebih terjaga.",
    toolsStack: ["Python", "Machine Learning", "NLP", "FastAPI", "Pandas"],
    link: "/projects/language-detection-routing"
  },
  {
    id: "clustering-sna-dna-engine",
    type: "Data Science",
    title: "Clustering & SNA/DNA Engine untuk Isu dan Narasi Publik",
    businessProblem: "Stakeholder kesulitan memahami isu utama, pola percakapan, dan hubungan antar aktor dari data percakapan yang besar dan tidak terstruktur.",
    dataScale: "Puluhan hingga ratusan ribu data percakapan per periode analisis.",
    modelApproach: "Menerapkan topic clustering, treemap, dan Social Network Analysis (SNA/DNA) untuk memetakan isu, aktor, dan relasi percakapan.",
    outcomeImpact: "Analyst dapat melihat peta isu dan narasi secara lebih terstruktur dan berbasis data.",
    toolsStack: ["Python", "Pandas", "Clustering", "Network Analysis", "FastAPI"],
    link: "/projects/clustering-sna-dna-engine"
  },
  {
    id: "automated-media-summarization",
    type: "AI",
    title: "Automated Media Summarization Engine (Daily, WA, & Report)",
    businessProblem: "Pembuatan ringkasan manual dari ribuan data media setiap hari tidak efisien dan tidak konsisten.",
    dataScale: "Ratusan ribu data per hari dari social media dan online media.",
    modelApproach: "Menggunakan AI dan LLM untuk menghasilkan ringkasan otomatis dalam berbagai format (daily summary, WhatsApp summary, custom report).",
    outcomeImpact: "Waktu pembuatan laporan berkurang drastis dan insight dapat diterima lebih cepat oleh stakeholder.",
    toolsStack: ["Python", "LLM API", "NLP", "FastAPI", "Pandas"],
    link: "/projects/automated-media-summarization"
  },
  {
    id: "sentiment-llm-verify",
    type: "AI",
    title: "Sentiment LLM – Ignore & Verify System",
    businessProblem: "Konten ambigu, sarkasme, dan noise tinggi menurunkan akurasi model sentiment tradisional.",
    dataScale: "Subset data ambigu dari ratusan ribu data bulanan.",
    modelApproach: "Mengintegrasikan LLM sebagai sistem verifikasi dan confidence checking untuk meningkatkan keandalan hasil sentiment.",
    outcomeImpact: "Akurasi insight meningkat dan risiko kesalahan analisis berkurang secara signifikan.",
    toolsStack: ["Python", "LLM API", "FastAPI", "Pandas"],
    link: "/projects/sentiment-llm-verify"
  },
  {
    id: "ner-spokesperson-extraction",
    type: "NLP",
    title: "NER, Spokesperson & Statement Extraction Engine",
    businessProblem: "Sulit mengidentifikasi siapa yang berbicara, mewakili siapa, dan pernyataan apa yang disampaikan dalam satu berita atau konten media.",
    dataScale: "Ratusan ribu artikel online media dan konten social media per bulan.",
    modelApproach: "Menggabungkan Named Entity Recognition (NER), spokesperson detection, dan statement extraction untuk menghasilkan data terstruktur dari teks media.",
    outcomeImpact: "Mempercepat analisis aktor dan narasi serta menjadi fondasi untuk sentiment dan SNA engine.",
    toolsStack: ["Python", "NLP", "Regex", "Machine Learning", "FastAPI", "Pandas"],
    link: "/projects/ner-spokesperson-extraction"
  }
];
