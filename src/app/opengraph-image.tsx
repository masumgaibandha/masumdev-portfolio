import { ImageResponse } from "next/og";

export const alt = "MasumDev — Abdullah Al Masum, Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            MasumDev
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 76,
              lineHeight: 1.1,
              fontWeight: 600,
              color: "#fafafa",
            }}
          >
            Abdullah Al Masum
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 40,
              lineHeight: 1.3,
              color: "#a1a1aa",
            }}
          >
            Full Stack Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: 36,
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          <div style={{ display: "flex" }}>
            Next.js · React · MongoDB · Node.js
          </div>

          <div style={{ display: "flex", color: "#fafafa" }}>masumdev.com</div>
        </div>
      </div>
    ),
    size,
  );
}
