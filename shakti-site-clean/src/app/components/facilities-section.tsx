export function FacilitiesSection() {
 const specs = [
 ["️ Annual Capacity", "12,000 MT"],
 [" Rotary Furnaces", "8 Units"],
 [" Daily Output", "~35 MT"],
 [" QC Method", "On-Site OES Spectrometry"],
 [" Operations", "24 × 7"],
 [" Plant Area", "20,000 sq.ft"],
 [" Total Land", "1,10,000 sq.ft +"],
 ["️ Storage", "Multiple Godowns Locally"],
 ];

 const processes = [
 { n: "01", emoji: "", title: "Scrap Intake & Segregation", body: "Incoming aluminium scrap — Zorba, Taint Tabor, Painted Siding and more — is graded, weighed and batch-coded on arrival. Only approved material enters production." },
 { n: "02", emoji: "", title: "Pre-Melt Spectrometric Analysis", body: "Representative samples from each incoming batch are analysed in our OES lab. Furnace charge compositions are calculated to hit target alloy chemistry before a single kilogram is melted." },
 { n: "03", emoji: "", title: "Rotary Furnace Smelting", body: "Eight high-efficiency rotary furnaces operate at precisely controlled temperatures with automated flux addition and degassing cycles. Dross is removed and weighed at every heat." },
 { n: "04", emoji: "", title: "Final Melt Verification", body: "The finished melt is re-sampled on the floor and re-run through the OES spectrometer. Only heats that pass the chemical window specification proceed to casting." },
 { n: "05", emoji: "", title: "Casting & Dimensional QC", body: "Melt is cast onto our automated conveyor casting lines. Ingot weight (±50g), surface quality and dimensional conformance are checked at every casting station." },
 { n: "06", emoji: "", title: "Bundling, Tagging & Dispatch", body: "Ingots are stacked, strapped, heat-numbered and tagged. A Certificate of Analysis is generated per heat. Export lots are palletised to buyer specification." },
 ];

 const usps = [
 { emoji: "", title: "Precision Chemistry", body: "Every heat is spectrometrically verified before and after melting. We don't ship until the chemistry is right — guaranteed to BS, DIN and ASTM tolerances." },
 { emoji: "", title: "Consistent Quality", body: "Our ISO 9001:2015 process control system ensures every batch you receive matches the last. No surprises — just predictable, reliable alloy every time." },
 { emoji: "", title: "Reliable Supply", body: "24×7 operations with 8 rotary furnaces and 12,000 MT annual capacity means we can meet your schedule — including short-notice and surge orders." },
 { emoji: "", title: "Full Traceability", body: "Every ingot is tagged to its heat number. Certificate of Analysis, packing list and batch records are provided with every shipment — domestic or export." },
 { emoji: "", title: "Eco-Friendly Recycling", body: "We complete the full aluminium cycle — from scrap collection and sorting to finished ingot — in the most environmentally responsible manner possible." },
 { emoji: "", title: "Customer-First Specifications", body: "Can't find your grade on our standard list? We manufacture to your exact specification. Just send us your chemistry and we'll develop the alloy for you." },
 ];

 return (
 <section id="facilities" style={{ background: "#F4F1EC", padding: "90px 0" }}>
 <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>

 {/* Section label */}
 <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 52 }}>
 <span className="mono" style={{ fontSize: 11, color: "#9A7B3C", letterSpacing: "0.2em", textTransform: "uppercase" }}>03 / Facilities, Quality & USP</span>
 <div style={{ flex: 1, height: 1, background: "rgba(28,43,58,0.1)" }} />
 </div>

 {/* ── INFRASTRUCTURE ── */}
 <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px 80px", alignItems: "start", marginBottom: 64 }}>
 <div>
 <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.2vw, 42px)", color: "#1C2B3A", lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 16 }}>
 Infrastructure<br />Built for Scale
 </h2>
 <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#4A5A6B", lineHeight: 1.9 }}>
 Our Bhiwandi plant is equipped with 8 rotary furnaces, on-site OES spectrometry and 20,000 sq.ft of production space — backed by 90,000+ sq.ft of land and multiple storage godowns. Every operational decision is driven by data from our in-house metallurgical lab.
 </p>
 </div>

 {/* Spec table */}
 <div style={{ border: "1px solid rgba(28,43,58,0.1)" }}>
 {specs.map(([k, v], i) => (
 <div key={k} style={{
 display: "grid", gridTemplateColumns: "1fr 1fr",
 padding: "12px 18px",
 borderBottom: i < specs.length - 1 ? "1px solid rgba(28,43,58,0.07)" : "none",
 background: i % 2 === 0 ? "#F4F1EC" : "#EDE9E1",
 transition: "background 0.2s",
 }}
 onMouseEnter={e => e.currentTarget.style.background = "#E2DDD3"}
 onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "#F4F1EC" : "#EDE9E1"}
 >
 <span className="mono" style={{ fontSize: 10, color: "#9A7B3C", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</span>
 <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: "#1C2B3A" }}>{v}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Factory image */}
 <div className="reveal" style={{ position: "relative", marginBottom: 72 }}>
 <img
 src="/spectro-lab.png"
 alt="Manufacturing plant interior"
 style={{ width: "100%", height: 340, objectFit: "cover", objectPosition: "center top", display: "block", filter: "brightness(0.85) contrast(1.05)" }}
 />
 <div style={{ position: "absolute", bottom: 0, right: 0, background: "rgba(28,43,58,0.9)", padding: "12px 20px" }}>
 <p className="mono" style={{ fontSize: 10, color: "#9A7B3C", letterSpacing: "0.14em", textTransform: "uppercase" }}>
 On-Site OES Spectrometric Testing · Every Heat Verified Before Dispatch
 </p>
 </div>
 </div>

 {/* ── USP — QUALITY, PRECISION, RELIABILITY ── */}
 <div className="reveal" style={{ marginBottom: 52 }}>
 <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
 <span className="mono" style={{ fontSize: 11, color: "#9A7B3C", letterSpacing: "0.2em", textTransform: "uppercase" }}>Why Choose Shakti Alloys</span>
 <div style={{ flex: 1, height: 1, background: "rgba(28,43,58,0.1)" }} />
 </div>

 <div style={{ marginBottom: 28 }}>
 <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 38px)", color: "#1C2B3A", lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 10 }}>
 Quality. Precision. <em style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 500, color: "#9A7B3C" }}>Reliability.</em>
 </h3>
 <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#4A5A6B", lineHeight: 1.85, maxWidth: 620 }}>
 These are not marketing words — they are the operating principles behind every heat we melt, every ingot we cast, and every shipment we dispatch. Our clients come back because the alloy is right, every single time.
 </p>
 </div>

 <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(28,43,58,0.1)" }}>
 {usps.map((u, i) => (
 <div key={i} style={{
 background: "#F4F1EC", padding: "26px 22px",
 transition: "background 0.2s",
 borderLeft: "3px solid transparent",
 }}
 onMouseEnter={e => {
 e.currentTarget.style.background = "#EDE9E1";
 e.currentTarget.style.borderLeftColor = "#9A7B3C";
 }}
 onMouseLeave={e => {
 e.currentTarget.style.background = "#F4F1EC";
 e.currentTarget.style.borderLeftColor = "transparent";
 }}
 >
 <div style={{ fontSize: 26, marginBottom: 12 }}>{u.emoji}</div>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: "#1C2B3A", marginBottom: 8, letterSpacing: "-0.01em" }}>{u.title}</div>
 <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "#4A5A6B", lineHeight: 1.8 }}>{u.body}</div>
 </div>
 ))}
 </div>
 </div>

 {/* ── PRODUCTION PROCESS ── */}
 <div className="reveal">
 <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
 <span className="mono" style={{ fontSize: 11, color: "#9A7B3C", letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Zero-Defect Production Process</span>
 <div style={{ flex: 1, height: 1, background: "rgba(28,43,58,0.1)" }} />
 </div>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(28,43,58,0.08)" }}>
 {processes.map((step, i) => (
 <div key={i} style={{ background: "#F4F1EC", padding: "28px 24px", transition: "background 0.2s" }}
 onMouseEnter={e => e.currentTarget.style.background = "#EDE9E1"}
 onMouseLeave={e => e.currentTarget.style.background = "#F4F1EC"}
 >
 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
 <span className="mono" style={{ fontSize: 11, color: "#C4A35A", letterSpacing: "0.12em" }}>{step.n}</span>
 <span style={{ fontSize: 18 }}>{step.emoji}</span>
 </div>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: "#1C2B3A", marginBottom: 8, lineHeight: 1.3 }}>{step.title}</div>
 <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: "#4A5A6B", lineHeight: 1.8 }}>{step.body}</div>
 </div>
 ))}
 </div>
 </div>

 </div>
 </section>
 );
}
