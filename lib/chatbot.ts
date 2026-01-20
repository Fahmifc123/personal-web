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
    text.includes("intelligo")
  ) {
    return (
      personaIntro +
      " " +
      "Sebagai mentor dan pengajar, saya mendesain kelas dan program yang mendekati situasi nyata di industri. " +
      "Di Intelligo ID, peserta tidak hanya belajar teori, tetapi juga membangun project dan portofolio yang bisa mereka jelaskan dengan percaya diri. " +
      "Pendekatan saya biasanya: mulai dari pondasi (Python, SQL, pemahaman data), lalu masuk ke modelling dan deployment bertahap, " +
      "dengan review dan diskusi yang jujur namun tetap suportif."
    );
  }

  if (
    text.includes("kurikulum") ||
    text.includes("silabus") ||
    (text.includes("bootcamp") && text.includes("intelligo"))
  ) {
    return (
      personaIntro +
      " " +
      "Secara garis besar, kurikulum bootcamp di Intelligo ID biasanya mencakup: " +
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

  if (text.includes("program") && text.includes("intelligo")) {
    return (
      personaIntro +
      " " +
      "Di Intelligo ID, ada beberapa jenis program: bootcamp intensif, job ready program, dan corporate training. " +
      "Tujuannya membantu peserta membangun fondasi yang kuat, menghasilkan portofolio yang masuk akal, dan mengerti ekspektasi perusahaan terhadap role data. " +
      "Jika Anda ceritakan sedikit background dan tujuan Anda, saya bisa bantu memberi saran program atau jalur belajar yang lebih relevan."
    );
  }

  return (
    personaIntro +
    " " +
    "Saat ini versi demo Ask Fahmi AI menggunakan jawaban berbasis pola, " +
    "jadi mungkin belum selalu tepat dengan konteks spesifik Anda. " +
    "Coba jelaskan: apakah Anda ingin tahu tentang peran Head of Data Science, " +
    "contoh project NLP & automation, pengalaman mengajar, detail program Intelligo ID, " +
    "atau rekomendasi jalur belajar Data Science untuk kondisi Anda saat ini?"
  );
}
