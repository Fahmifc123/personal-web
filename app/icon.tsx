import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f39c12",
          borderRadius: 12,
          color: "#000",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        MF
      </div>
    ),
    { ...size }
  );
}
