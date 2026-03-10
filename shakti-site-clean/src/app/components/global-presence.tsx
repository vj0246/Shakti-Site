import { useState } from "react";

const regions = [
  {
    id: "middleeast", label: "Middle East", flag: "🇦🇪",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Jordan", "Bahrain"],
    color: "#C4A35A",
    detail: "Our strongest and most established export corridor. Long-term supply relationships with major Gulf foundries and die-casters across the GCC.",
  },
  {
    id: "europe", label: "Europe", flag: "🇩🇪",
    countries: ["UK", "Germany", "Netherlands", "France", "Italy", "Spain", "Poland", "Turkey"],
    color: "#B47FFF",
    detail: "Specialty and custom alloy grades supplied to precision die-casters and foundry operations across Western and Eastern Europe.",
  },
  {
    id: "africa", label: "Africa", flag: "🌍",
    countries: ["Nigeria", "Kenya", "Egypt", "Morocco", "Ghana", "Tanzania", "South Africa", "Ethiopia"],
    color: "#50E3A4",
    detail: "Active relationships with light engineering and automotive manufacturers across North, West, East and Southern Africa.",
  },
  {
    id: "asia", label: "South & SE Asia", flag: "🇸🇬",
    countries: ["Sri Lanka", "Bangladesh", "Thailand", "Malaysia", "Singapore", "Indonesia", "Vietnam"],
    color: "#4DB8FF",
    detail: "Key supplier to automotive Tier-1 manufacturers and die-casters expanding across Southeast Asian production hubs.",
  },
  {
    id: "americas", label: "Americas", flag: "🌎",
    countries: ["USA", "Canada", "Mexico", "Brazil", "Colombia", "Chile", "Argentina"],
    color: "#FF7F7F",
    detail: "Growing presence supplying North and South American foundries for JIS and ASTM-specification alloys.",
  },
  {
    id: "oceania", label: "Oceania", flag: "🇦🇺",
    countries: ["Australia", "New Zealand"],
    color: "#FFB347",
    detail: "Reliable supply partner for Australian and New Zealand secondary smelters and die-casters.",
  },
];

export function GlobalPresence() {
  const [active, setActive] = useState<string | null>(null);
  const activeRegion = regions.find(r => r.id === active);

  return (
    <section id="global" style={{ background: "#EDE9E1", padding: "90px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>

        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 52 }}>
          <span className="mono" style={{ fontSize: 11, color: "#9A7B3C", letterSpacing: "0.2em", textTransform: "uppercase" }}>04 / Global Reach</span>
          <div style={{ flex: 1, height: 1, background: "rgba(28,43,58,0.1)" }} />
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px", alignItems: "start", marginBottom: 48 }}>
          <div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.2vw,44px)", color: "#1C2B3A", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12 }}>
              Import &amp; Export Network
            </h2>
            <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#4A5A6B", lineHeight: 1.85 }}>
              From Mumbai, we supply foundries across <strong style={{ color: "#1C2B3A" }}>52+ nations on 6 continents</strong>. Every shipment ships with a Certificate of Analysis, packing list and full heat traceability.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(28,43,58,0.1)" }}>
            {[
              { v: "52+", l: "Export Nations" },
              { v: "6",   l: "Continents" },
              { v: "100%", l: "With CoA" },
            ].map((s, i) => (
              <div key={i} style={{ background: "#1C2B3A", padding: "20px 16px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 26, color: "#C4A35A", lineHeight: 1, marginBottom: 5 }}>{s.v}</div>
                <div className="mono" style={{ fontSize: 9, color: "#7A8A9B", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Region grid — 3 cols, fills completely */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(28,43,58,0.1)", marginBottom: 2 }}>
          {regions.map(r => (
            <div key={r.id}
              onClick={() => setActive(active === r.id ? null : r.id)}
              style={{
                background: active === r.id ? "#1C2B3A" : "#F4F1EC",
                padding: "28px 24px", cursor: "pointer",
                borderLeft: `4px solid ${active === r.id ? r.color : "transparent"}`,
                transition: "all 0.25s",
              }}
              onMouseEnter={e => { if (active !== r.id) { e.currentTarget.style.background = "#EDE9E1"; e.currentTarget.style.borderLeftColor = r.color + "60"; } }}
              onMouseLeave={e => { if (active !== r.id) { e.currentTarget.style.background = "#F4F1EC"; e.currentTarget.style.borderLeftColor = "transparent"; } }}
            >
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: active === r.id ? r.color : "#1C2B3A", marginBottom: 4, transition: "color 0.25s" }}>
                  {r.label}
                </div>
                <div className="mono" style={{ fontSize: 9, color: active === r.id ? "#7A8A9B" : "#9A7B3C", letterSpacing: "0.12em" }}>{r.countries.length} NATIONS</div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                {r.countries.map(c => (
                  <span key={c} style={{
                    fontFamily: "'Lora', serif", fontSize: 11,
                    background: active === r.id ? "rgba(244,241,236,0.07)" : "#EDE9E1",
                    border: `1px solid ${active === r.id ? r.color + "30" : "rgba(28,43,58,0.08)"}`,
                    padding: "3px 9px", color: active === r.id ? "#A8B2C8" : "#4A5A6B",
                    transition: "all 0.25s",
                  }}>{c}</span>
                ))}
              </div>

              {active === r.id && (
                <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 13, color: "#7A8A9B", lineHeight: 1.75, borderTop: "1px solid rgba(244,241,236,0.08)", paddingTop: 12, marginTop: 4 }}>
                  {r.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Origin note */}
        <div style={{ padding: "16px 20px", background: "#1C2B3A", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C4A35A", flexShrink: 0 }} />
          <span className="mono" style={{ fontSize: 10, color: "#7A8A9B", letterSpacing: "0.12em" }}>
            ALL SHIPMENTS ORIGINATE FROM MUMBAI, INDIA · CERTIFICATE OF ANALYSIS PROVIDED WITH EVERY HEAT
          </span>
        </div>

      </div>
    </section>
  );
}
