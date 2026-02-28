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
    title: "Real-Time NLP Platform with Kafka & Event-Driven Architecture",
    businessProblem: "Respons terhadap opini publik sangat bergantung pada ketepatan waktu. Informasi yang terlambat membuat keputusan menjadi kurang relevan. Pendekatan laporan periodik menyebabkan isu baru teridentifikasi saat situasi sudah berkembang.",
    dataScale: "Jutaan data per hari dari multiple API sources dengan lonjakan percakapan mendadak yang berpotensi membebani worker.",
    modelApproach: "Membangun streaming event-driven platform dengan Kafka untuk respons cepat terhadap perubahan percakapan. Arsitektur menggunakan time-window aggregation untuk mengurangi noise dan false alert, load distribution antar worker untuk mencegah bottleneck saat spike, dan tenant isolation untuk multi-client support. Data masuk yang tidak berurutan diatasi dengan agregasi berbasis waktu yang konsisten.",
    outcomeImpact: "Visibilitas situasi publik meningkat secara real-time, pengambilan keputusan menjadi lebih proaktif, dan risiko eskalasi isu dapat ditekan lebih awal. Sistem tetap stabil meski terjadi lonjakan traffic mendadak.",
    toolsStack: ["Python", "Apache Kafka", "FastAPI", "Redis", "Elasticsearch", "Docker"],
    link: "/projects/realtime-nlp-data-platform"
  },
  {
    id: "ai-report-generation",
    type: "Data Engineering",
    title: "Automated Report Generation with LLM & Constrained Reasoning",
    businessProblem: "Laporan operasional harian perlu dikirim ke klien dalam format presentasi, namun proses penyusunan masih manual. Menggunakan template statis tidak fleksibel terhadap variasi data, sementara penggunaan LLM bebas menghasilkan format tidak konsisten dan angka tidak terkontrol (hallucination).",
    dataScale: "Ratusan report per bulan dengan berbagai format dan kompleksitas data.",
    modelApproach: "Membangun pipeline dengan rule-based insight extraction untuk menentukan poin analisis, kemudian LLM digunakan hanya untuk penyusunan narasi (bukan mengarang angka). Data dikirim dalam JSON/API terstruktur, constrained reasoning untuk mencegah hallucination, dan engine menghasilkan dokumen PPT/PDF otomatis yang konsisten.",
    outcomeImpact: "Analist fokus pada interpretasi, bukan penulisan laporan. Laporan harian dapat dihasilkan otomatis dan konsisten, integrasi langsung dengan Dashboard/Product, dan waktu pembuatan report berkurang drastis dari jam menjadi menit.",
    toolsStack: ["Python", "Apache Airflow", "LLM API", "LangChain", "Custom Report Generator", "PPT/PDF"],
    link: "/projects/ai-report-generation"
  },
  {
    id: "mlops-auto-retrain",
    type: "Data Engineering",
    title: "MLOps Auto-Retrain with Drift Detection & Auto Evaluation",
    businessProblem: "Performa model di produksi menurun seiring perubahan data meskipun akurasi metric terlihat stabil. Label ground truth sering terlambat (delayed feedback), membuat deteksi drift akurasi menjadi sulit. Retrain berkala (schedule-based) tidak mengikuti realitas - kadang boros saat data stabil, atau terlambat saat data berubah drastis.",
    dataScale: "Ribuan sampel baru per minggu untuk continuous monitoring dan drift detection.",
    modelApproach: "Membangun drift-triggered retraining pipeline dengan monitoring distribusi data untuk mendeteksi drift secara otomatis. Retrain hanya ketika drift terdeteksi, validasi otomatis sebelum deployment, dan accuracy gate untuk safety. Sistem menentukan threshold drift yang tepat agar tidak terlalu sensitif atau terlalu lambat.",
    outcomeImpact: "Model tetap relevan tanpa monitoring manual, mengurangi risiko penurunan performa, update model lebih aman dan cepat, serta efisiensi resource karena hanya retrain saat benar-benar diperlukan.",
    toolsStack: ["Python", "Apache Airflow", "MLflow", "Docker", "FastAPI", "Drift Detection"],
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
    title: "Aspect-Based Sentiment Analysis (ABSA) Engine with IndoBERT",
    businessProblem: "Satu kalimat dapat mengandung opini berbeda terhadap beberapa entitas, sehingga label tunggal tidak cukup merepresentasikan makna sebenarnya. Contoh: 'Aplikasinya cepat, tapi CS-nya lama respon.' Sentimen general membuat insight tidak bisa ditindaklanjuti karena menggabungkan aspect A dan aspect B menjadi satu skor sentiment.",
    dataScale: "Ratusan ribu hingga jutaan data social media dan online media per bulan dengan multi-entity dalam satu kalimat.",
    modelApproach: "Membangun Aspect-Based Sentiment Analysis menggunakan fine-tuned IndoBERT (HuggingFace) untuk klasifikasi sentiment per-aspect. Input dipasangkan (aspect, text) agar model memahami target opini secara spesifik. Menggunakan probabilistic calibration + confidence threshold untuk menjaga konsistensi prediksi dan menangani bahasa informal & ironi parsial.",
    outcomeImpact: "Analisis sentimen menjadi lebih kontekstual per isu/aspek, multi-entity dalam satu kalimat dapat dipetakan dengan tepat, dan hasil analisis dapat ditindaklanjuti untuk monitoring reputasi yang lebih presisi.",
    toolsStack: ["Python", "PyTorch", "Transformers", "Hugging Face", "ONNX", "FastAPI"],
    link: "/projects/sentiment-absa-engine"
  },
  {
    id: "language-detection-routing",
    type: "Machine Learning",
    title: "Language Routing Filter with Early-Exit Pipeline (TFLite)",
    businessProblem: "Sebagian data masuk tidak relevan dengan konteks proyek (misalnya bahasa asing), namun tetap diproses oleh model utama yang berat. Filter dilakukan di akhir pipeline, sehingga resource mahal (GPU) sudah terbuang untuk memproses data sampah sebelum akhirnya dibuang.",
    dataScale: "Ratusan ribu data per bulan dari seluruh data masuk social & online media dengan dominasi emoji dan slang dalam data sosmed.",
    modelApproach: "Menggunakan Google Language Detector (TFLite) sebagai early-exit pipeline berbasis CPU untuk routing hanya bahasa yang sesuai konteks proyek. Short text (1-2 kata) yang sering tidak memiliki fitur bahasa cukup di-handle dengan recall optimization. Model utama hanya memproses bahasa relevan untuk mencegah inference pada data tidak relevan.",
    outcomeImpact: "Beban komputasi model NLP berat berkurang signifikan, pipeline lebih stabil pada volume data tinggi, dan efisiensi resource meningkat drastis karena GPU hanya memproses data yang benar-benar relevan.",
    toolsStack: ["Python", "TFLite", "Google Language Detector", "FastAPI", "Machine Learning"],
    link: "/projects/language-detection-routing"
  },
  {
    id: "clustering-sna-dna-engine",
    type: "Data Science",
    title: "Clustering & Social Network Analysis (SNA) Engine with LLM",
    businessProblem: "Data percakapan besar sulit dianalisis secara manual, sehingga diperlukan ekstraksi topik dan pemahaman komunitas secara otomatis. Visualisasi graph tanpa struktur hanya menghasilkan visual yang kusut dan tidak bermakna. Analis tidak bisa membedakan noise dari komunitas.",
    dataScale: "Puluhan hingga ratusan ribu data percakapan per periode analisis dengan cluster yang berubah seiring waktu dan noise percakapan tinggi.",
    modelApproach: "Menerapkan hybrid approach dengan BERTopic (HDBSCAN) untuk menemukan cluster percakapan tanpa label, kemudian LLM (LangChain + OpenAI) memberi nama topik tiap cluster secara otomatis. Social Network Analysis untuk menemukan komunitas interaksi dan merangkum pembahasan utama tiap komunitas menggunakan LLM. Semantic density analysis untuk actor relations mapping.",
    outcomeImpact: "Topik pembicaraan publik dapat dipahami tanpa membaca manual, komunitas dan fokus diskusinya teridentifikasi otomatis, insight dapat dicari dalam hitungan menit, dan analis dapat membedakan noise dari komunitas yang meaningful.",
    toolsStack: ["Python", "BERTopic", "HDBSCAN", "LLM API", "LangChain", "NetworkX", "IndoBERT"],
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
    title: "Hybrid ML + LLM Verification System with Confidence Threshold",
    businessProblem: "Model ML cukup akurat untuk kasus umum, namun gagal pada kalimat ambigu, sarkasme, dan konteks implisit. Menggunakan LLM (seperti GPT-4) untuk memproses semua data sangat mahal dan memiliki latensi tinggi yang tidak praktis untuk skala besar.",
    dataScale: "Subset data ambigu dari ratusan ribu data bulanan yang memerlukan eskalasi ke LLM.",
    modelApproach: "Membangun hybrid reasoning flow dimana model ML menangani mayoritas kasus secara real time dengan confidence threshold untuk menentukan kasus ambigu/anomali. Hanya prediksi ber-confidence rendah (~20% kasus kompleks) yang diverifikasi oleh LLM. Mengelola latensi tambahan saat fallback ke LLM agar tidak memblokir proses utama.",
    outcomeImpact: "±80% data diproses oleh model cepat, ±20% kasus kompleks diverifikasi LLM, akurasi meningkat tanpa lonjakan biaya, dan sistem tetap cost-efficient dengan high precision.",
    toolsStack: ["Python", "IndoBERT", "LLM API", "FastAPI", "Machine Learning"],
    link: "/projects/sentiment-llm-verify"
  },
  {
    id: "ner-spokesperson-extraction",
    type: "NLP",
    title: "NER & Statement Extraction with Entity Normalization",
    businessProblem: "Analisis narasi membutuhkan identifikasi aktor dan pernyataannya, bukan hanya kata kunci. Kutipan tidak selalu berdekatan dengan aktor, dan perlu menangani referensi implisit seperti 'dia mengatakan' atau 'pejabat itu membantah'. NER standar menemukan nama, tetapi tidak memahami hubungan pernyataan antar aktor.",
    dataScale: "Ratusan ribu artikel online media dan konten social media per bulan dengan complex quote attribution patterns.",
    modelApproach: "Membangun pipeline dengan Named Entity Recognition untuk identifikasi aktor, speaker & role detection untuk menentukan siapa berbicara, dan quote/statement extraction untuk menentukan siapa mengatakan apa. Entity normalization untuk konsistensi identitas dan handling implicit references.",
    outcomeImpact: "Analisis narasi berbasis aktor dapat dilakukan otomatis, mendukung query seperti 'siapa mengatakan apa tentang siapa', dan mempercepat ekstraksi informasi terstruktur dari teks media.",
    toolsStack: ["Python", "IndoBERT", "Transformers", "NLP", "Entity DB", "FastAPI"],
    link: "/projects/ner-spokesperson-extraction"
  },
  {
    id: "media-summarization",
    type: "AI",
    title: "Media Summarization with Vector Search & Context Preservation",
    businessProblem: "Terlalu banyak artikel berita dan laporan yang masuk setiap hari melebihi kapasitas baca manual tim analis. Ringkasan ekstraktif (memotong kalimat penting) sering kehilangan konteks nuansa dan menghasilkan informasi yang terpotong. Informasi antar sumber bisa saling bertentangan.",
    dataScale: "Ratusan ribu data per hari dari social media dan online media dengan multi-step processing latency.",
    modelApproach: "Membangun pipeline dengan deduplication & chunking untuk menghindari informasi berulang, retrieval (vector search) sebelum LLM untuk menjaga grounding sumber, dan LLM menyusun ringkasan berbasis konteks dokumen. Source grounding untuk memastikan summary tetap akurat terhadap data asli.",
    outcomeImpact: "Menghasilkan summary data dengan cepat, mendukung pengambilan keputusan cepat, context preservation terjaga, dan analis dapat fokus pada interpretasi daripada membaca manual ratusan artikel.",
    toolsStack: ["Python", "LLM API", "Vector Search", "NLP", "FastAPI", "Context Preservation"],
    link: "/projects/media-summarization"
  }
];
