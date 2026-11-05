import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(243,156,18,0.25), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#f39c12",
              color: "#000",
              fontSize: 28,
              fontWeight: 800,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            MF
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 800, color: "#fff" }}>
            Muhammad Fahmi
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 54, fontWeight: 800, color: "#fff", maxWidth: 900, lineHeight: 1.15 }}>
          Data &amp; AI Corporate Trainer &amp; Mentor
        </div>
        <div style={{ display: "flex", gap: 32, marginTop: 48 }}>
          {[
            ["350+", "SESSIONS"],
            ["7,000+", "LEARNERS"],
            ["20+", "COMPANIES"],
          ].map(([num, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#f39c12" }}>{num}</div>
              <div style={{ display: "flex", fontSize: 16, fontWeight: 700, letterSpacing: 2, color: "#999" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
