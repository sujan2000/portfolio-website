import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#020617",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: 64, fontWeight: 700 }}>
          Your Name
        </h1>

        <p
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#94a3b8",
          }}
        >
          Full-Stack Developer · Next.js · Stripe · TypeScript
        </p>
      </div>
    ),
    size
  );
}
