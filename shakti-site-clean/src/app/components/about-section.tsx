import { Download } from "lucide-react";

export function AboutSection() {
 return (
 <section id="about" style={{ background: "#F4F1EC", padding: "90px 32px" }}>
 <div style={{ maxWidth: 1200, margin: "0 auto" }}>

 <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
 <span className="mono" style={{ fontSize: 11, color: "#9A7B3C", letterSpacing: "0.2em", textTransform: "uppercase" }}>01 / About the Company</span>
 <div style={{ flex: 1, height: 1, background: "rgba(28,43,58,0.1)" }} />
 </div>

 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "56px 80px", alignItems: "start" }}>

 <div className="reveal">
 <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 42px)", color: "#1C2B3A", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.03em" }}>
 Leading manufacturer of<br />Aluminium Alloy Ingots<br />
 <em style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 500, color: "#9A7B3C" }}>for 14+ years.</em>
 </h2>

 <blockquote style={{ borderLeft: "3px solid #9A7B3C", paddingLeft: 18, margin: "0 0 20px" }}>
 <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 14, color: "#4A5A6B", lineHeight: 1.85 }}>
 "We manufacture various types of aluminium alloy as per BS, DIN & ASTM standards — and also as per customer specifications. We are an ISO 9001:2015 registered company for process control and quality certification."
 </p>
 </blockquote>

 <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#4A5A6B", lineHeight: 1.9, marginBottom: 14 }}>
 Shakti Alloys is a leading manufacturer of Aluminium Alloy Ingots situated at <strong style={{ color: "#1C2B3A" }}>Bhiwandi, near Thane, Maharashtra</strong>. We supply domestic and international clients across the automotive, electrical and industrial sectors.
 </p>
 <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#4A5A6B", lineHeight: 1.9, marginBottom: 24 }}>
 Our raw material is imported from countries across the globe. We have all in-house testing facilities including spectrometric analysis. All products are <strong style={{ color: "#1C2B3A" }}>BIS compliant</strong>.
 </p>

 {/* Memberships */}
 <div style={{ borderTop: "1px solid rgba(28,43,58,0.1)", paddingTop: 18, marginBottom: 18 }}>
 <div className="mono" style={{ fontSize: 10, color: "#9A7B3C", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Industry Memberships</div>
 <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
 {["BNMA", "MRAI", "ALEMAI"].map(m => (
 <span key={m} style={{
 fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12,
 border: "1px solid rgba(28,43,58,0.2)", padding: "7px 16px", color: "#1C2B3A",
 letterSpacing: "0.05em", transition: "all 0.2s",
 }}
 onMouseEnter={e => { e.currentTarget.style.background = "#1C2B3A"; e.currentTarget.style.color = "#C4A35A"; }}
 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1C2B3A"; }}
 >{m}</span>
 ))}
 </div>
 </div>

 {/* Certifications — text based, no fake logos */}
 <div style={{ borderTop: "1px solid rgba(28,43,58,0.1)", paddingTop: 18, marginBottom: 24 }}>
 <div className="mono" style={{ fontSize: 10, color: "#9A7B3C", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Certifications & Recognition</div>
 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
 {[
 { label: "ISO 9001:2015", sub: "Quality Management System" },
 { label: "BIS Certified", sub: "Bureau of Indian Standards" },
 { label: "Make in India", sub: "Govt. of India Initiative" },
 { label: "Startup India", sub: "DPIIT Recognised" },
 ].map(c => (
 <div key={c.label} style={{
 padding: "10px 14px",
 background: "#EDE9E1",
 border: "1px solid rgba(28,43,58,0.08)",
 }}>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, color: "#1C2B3A", marginBottom: 2 }}>{c.label}</div>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.08em" }}>{c.sub}</div>
 </div>
 ))}
 </div>
 </div>

 <a href="/shakti-alloys-brochure.pdf" download style={{
 display: "inline-flex", alignItems: "center", gap: 9,
 border: "1px solid #1C2B3A", padding: "11px 22px",
 fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12,
 letterSpacing: "0.08em", textTransform: "uppercase",
 color: "#1C2B3A", textDecoration: "none", transition: "all 0.2s",
 }}
 onMouseEnter={e => { e.currentTarget.style.background = "#1C2B3A"; e.currentTarget.style.color = "#F4F1EC"; }}
 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1C2B3A"; }}
 ><Download size={13} /> Download Company Brochure</a>
 </div>

 {/* Right */}
 <div className="reveal" style={{ transitionDelay: "0.15s" }}>
 <div style={{ position: "relative", marginBottom: 24 }}>
 <img
 src="/about-metal.png"
 alt="Shakti Alloys manufacturing facility"
 style={{ width: "100%", height: 220, objectFit: "cover", display: "block", filter: "brightness(0.88) contrast(1.05)" }}
 />
 <div style={{ position: "absolute", bottom: 0, left: 0, background: "#1C2B3A", padding: "7px 14px" }}>
 <span className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.15em", textTransform: "uppercase" }}>Manufacturing Facility · Bhiwandi, Maharashtra</span>
 </div>
 </div>

 <div style={{ border: "1px solid rgba(28,43,58,0.1)" }}>

 {/* Directors — one row, two equal columns */}
 <div style={{
   display: "grid", gridTemplateColumns: "110px 1fr",
   padding: "10px 14px", borderBottom: "1px solid rgba(28,43,58,0.06)",
   background: "#F4F1EC",
 }}>
   <span className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.1em", textTransform: "uppercase", paddingTop: 1 }}>Directors</span>
   <div style={{ display: "flex", gap: "32px" }}>
     <div>
       <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, color: "#1C2B3A" }}>Vinay Jain</span>
       <span style={{ fontFamily: "'Lora', serif", fontSize: 12, color: "#9A7B3C", marginLeft: 8 }}>+91 93222 24565</span>
     </div>
     <div>
       <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, color: "#1C2B3A" }}>Vikram Jain</span>
       <span style={{ fontFamily: "'Lora', serif", fontSize: 12, color: "#9A7B3C", marginLeft: 8 }}>+91 98212 06611</span>
     </div>
   </div>
 </div>

 {[
 ["Capacity", "12,000 MT per year"],
 ["Factory", "H no 813, Mama Compound, Saravali, Bhiwandi – 421302"],
 ["Office", "A103 Ramji House, Kalbadevi Road, Mumbai 400 002"],
 ["Email", "shaktialloys123@gmail.com"],
 ["Standards", "BS · DIN · ASTM · Custom Spec"],
 ].map(([k, v], i) => (
 <div key={k} style={{
 display: "grid", gridTemplateColumns: "110px 1fr",
 padding: "10px 14px",
 borderBottom: i < 4 ? "1px solid rgba(28,43,58,0.06)" : "none",
 background: i % 2 === 0 ? "#EDE9E1" : "#F4F1EC",
 transition: "background 0.2s", cursor: "default",
 }}
 onMouseEnter={e => e.currentTarget.style.background = "#E2DDD3"}
 onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "#EDE9E1" : "#F4F1EC"}
 >
 <span className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.1em", textTransform: "uppercase", paddingTop: 1 }}>{k}</span>
 <span style={{ fontFamily: "'Lora', serif", fontSize: 12, color: "#1C2B3A", lineHeight: 1.5 }}>{v}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
