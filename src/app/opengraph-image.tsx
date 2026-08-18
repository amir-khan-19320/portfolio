import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f4ef",
          color: "#1c1917",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#0f6f7c",
          }}
        >
          {profile.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 0.95 }}>{profile.name}</div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#57534e",
              maxWidth: 820,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Magento 2.4 · Laravel · OMS · Elasticsearch · Algolia
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#57534e",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>{profile.location}</span>
          <span>{profile.email}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
