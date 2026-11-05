export type Client = {
  name: string;
  type: "corporate" | "academic";
};

// Only list organizations named in the official CV as training clients/academic partners.
export const clients: Client[] = [
  { name: "Bank Danamon", type: "corporate" },
  { name: "Toyota Astra Motor", type: "corporate" },
  { name: "Bayer", type: "corporate" },
  { name: "PLN", type: "corporate" },
  { name: "Freeport", type: "corporate" },
  { name: "Jasa Marga", type: "corporate" },
  { name: "Bank BSI", type: "corporate" },
  { name: "Seabank Indonesia", type: "corporate" },
  { name: "Pegadaian", type: "corporate" },
  { name: "PT Smartindo Manajemen Informatika", type: "corporate" },
  { name: "Ortax / PT Integral Data Prima", type: "corporate" },
  { name: "Universitas Indonesia", type: "academic" },
  { name: "UGM", type: "academic" },
  { name: "IPB", type: "academic" },
  { name: "Atma Jaya", type: "academic" },
  { name: "UPN Yogyakarta", type: "academic" },
  { name: "ULBI", type: "academic" },
  { name: "Politeknik Madiun", type: "academic" },
];

export const corporateClients = clients.filter((c) => c.type === "corporate").map((c) => c.name);
export const academicPartners = clients.filter((c) => c.type === "academic").map((c) => c.name);
