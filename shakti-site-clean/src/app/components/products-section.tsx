import { useState } from "react";
import { Search, X } from "lucide-react";

// ── ALLOY INGOTS ──────────────────────────────────────────────────────────────
const alloyIngots = [
 {
 grade: "ADC12", spec: "Al–Si–Cu", tag: "⭐ Most Exported",
 si: "9.6–12.0%", cu: "1.5–3.5%", fe: "≤1.3%", mg: "≤0.3%",
 standard: "JIS H5302 · ASTM B85",
 applications: ["Automotive crankcases", "Gearbox housings", "Engine mounts", "Structural die castings"],
 desc: "The global workhorse of pressure die casting. ADC12 offers outstanding fluidity, minimal shrinkage and superior machinability — making it the alloy of choice for automotive Tier-1 suppliers worldwide. Its well-balanced Si–Cu composition delivers high strength with good surface finish after machining.",
 industries: "Automotive · General Engineering",
 },
 {
 grade: "ADC6", spec: "Al–Mg", tag: " High Ductility",
 si: "≤1.0%", cu: "≤0.1%", fe: "≤0.8%", mg: "2.5–4.0%",
 standard: "JIS H5302",
 applications: ["Structural castings", "Corrosion-resistant parts", "Marine fittings", "Consumer electronics"],
 desc: "An Al–Mg alloy with high ductility and excellent corrosion resistance. ADC6 is preferred where dimensional stability and anodisability are required. Lower silicon content gives a cleaner anodised surface — widely used in consumer electronics enclosures and coastal/marine environments.",
 industries: "Marine · Electronics · Architecture",
 },
 {
 grade: "A380", spec: "Al–Si–Cu", tag: "️ General Purpose",
 si: "7.5–9.5%", cu: "3.0–4.0%", fe: "≤1.3%", mg: "≤0.1%",
 standard: "ASTM B85",
 applications: ["Motor housings", "Power tools", "Pumps", "Automotive brackets"],
 desc: "The most widely specified die casting alloy in North America and Latin America. A380 provides an excellent combination of casting, mechanical and thermal properties. Ideal for complex thin-walled parts requiring good strength-to-weight ratio with easy machinability.",
 industries: "Automotive · Power Tools · Industrial",
 },
 {
 grade: "A356", spec: "Al–Si–Mg", tag: "️ High Strength",
 si: "6.5–7.5%", cu: "≤0.2%", fe: "≤0.2%", mg: "0.25–0.45%",
 standard: "ASTM B85 · EN AC-42100",
 applications: ["Wheel hubs", "Suspension arms", "Aerospace brackets", "Structural castings"],
 desc: "A premium heat-treatable Al–Si–Mg alloy offering the highest strength-to-weight ratio in our portfolio. A356 is T6 heat-treatable, making it the specified alloy for safety-critical automotive structural parts, aerospace castings and wheel rims where tensile strength is non-negotiable.",
 industries: "Automotive Structural · Aerospace · Wheels",
 },
 {
 grade: "LM2", spec: "Al–Si–Cu", tag: " Electrical",
 si: "9.0–11.5%", cu: "0.7–2.5%", fe: "≤1.0%", mg: "≤0.3%",
 standard: "BS 1490 LM2 · EN AC-46500",
 applications: ["Electrical fittings", "Consumer goods", "Household equipment", "Light engineering"],
 desc: "A versatile general-purpose die casting alloy with good fluidity and surface finish. LM2 is the standard specification for electrical industry die castings — junction boxes, switch gear housings and consumer appliance components where moderate strength and good appearance are needed.",
 industries: "Electrical · Consumer Goods",
 },
 {
 grade: "LM4", spec: "Al–Si–Cu", tag: " Versatile",
 si: "4.0–6.0%", cu: "2.0–4.0%", fe: "≤0.8%", mg: "≤0.15%",
 standard: "BS 1490 LM4 · EN AC-45000",
 applications: ["Sand castings", "Gravity die castings", "Machine parts", "Manifolds"],
 desc: "A traditional sand and gravity die casting alloy with a long track record across general engineering. LM4 offers good machinability, pressure tightness and a wide casting temperature range — making it the choice for manifolds, brackets and machine parts produced by gravity casting.",
 industries: "General Engineering · Pumps · Valves",
 },
 {
 grade: "LM6", spec: "Al–Si", tag: " Marine Grade",
 si: "10.0–13.0%", cu: "≤0.1%", fe: "≤0.6%", mg: "≤0.1%",
 standard: "BS 1490 LM6 · EN AC-44100",
 applications: ["Marine hardware", "Chemical plant fittings", "Thin-wall castings", "Architectural elements"],
 desc: "High silicon content gives LM6 outstanding corrosion resistance, making it the specified alloy for marine and chemical industry castings. Excellent fluidity allows filling of thin-wall and intricate sections. The near-eutectic composition produces minimal shrinkage — ideal for pressure-tight castings.",
 industries: "Marine · Chemical · Architecture",
 },
 {
 grade: "LM9", spec: "Al–Si–Mg", tag: " Ductile",
 si: "10.0–13.0%", cu: "≤0.1%", fe: "≤0.6%", mg: "0.2–0.6%",
 standard: "BS 1490 LM9",
 applications: ["Thin-wall sand castings", "Pump casings", "Pistons", "Marine castings"],
 desc: "A modified high-silicon alloy with controlled magnesium for improved ductility and impact strength over LM6. When heat treated to T6 condition, LM9 achieves significantly higher mechanical properties — making it suitable for pistons and other parts requiring elevated temperature performance.",
 industries: "Automotive · Marine · Pumps",
 },
 {
 grade: "LM13", spec: "Al–Si–Cu–Mg", tag: "️ Piston Alloy",
 si: "10.0–12.0%", cu: "0.8–1.5%", fe: "≤1.0%", mg: "0.8–1.5%",
 standard: "BS 1490 LM13",
 applications: ["Engine pistons", "High temp components", "Compressor parts", "Diesel engine parts"],
 desc: "The premier piston alloy. LM13's high silicon content reduces thermal expansion while Cu and Mg additions provide elevated temperature strength. Used exclusively where components operate at sustained high temperatures — diesel and petrol engine pistons are the primary application globally.",
 industries: "Automotive Pistons · Compressors",
 },
 {
 grade: "LM16", spec: "Al–Si–Cu–Mg", tag: " Heat Treatable",
 si: "4.5–5.5%", cu: "1.0–1.5%", fe: "≤0.6%", mg: "0.4–0.65%",
 standard: "BS 1490 LM16",
 applications: ["High-stress components", "Pressure die castings", "Structural parts", "Aerospace"],
 desc: "A heat-treatable alloy that, after T6 treatment, achieves the highest tensile strength of the standard LM series. LM16 is specified for structural components subjected to dynamic loads — the combination of Si, Cu and Mg enables age hardening to produce a premium-strength casting alloy.",
 industries: "Structural · Aerospace · Defence",
 },
 {
 grade: "LM20", spec: "Al–Si", tag: " Pressure Tight",
 si: "10.0–13.0%", cu: "≤0.1%", fe: "≤0.9%", mg: "≤0.1%",
 standard: "BS 1490 LM20",
 applications: ["Pressure die castings", "Hydraulic components", "Automotive parts", "Valves"],
 desc: "Specifically developed for pressure die casting, LM20 has tighter iron control than LM6 — providing improved pressure tightness and reduced hot-tearing in complex die geometries. The standard choice for hydraulic valve bodies and automotive pressure die castings requiring leak-free performance.",
 industries: "Hydraulics · Automotive HPDC",
 },
 {
 grade: "LM24", spec: "Al–Si–Cu", tag: "️ HPDC",
 si: "7.5–9.5%", cu: "3.0–4.0%", fe: "≤1.3%", mg: "≤0.3%",
 standard: "BS 1490 LM24 · EN AC-46000",
 applications: ["Complex HPDC parts", "Electronics housings", "Lighting", "Thin-wall sections"],
 desc: "Optimised specifically for high-pressure die casting, LM24 offers exceptional die-filling properties enabling complex thin-wall geometries. Widely used across automotive electronics, EV battery housings and modern LED lighting fixtures — wherever HPDC complexity and volume production are demanded.",
 industries: "HPDC · EV · Electronics · Lighting",
 },
 {
 grade: "LM25", spec: "Al–Si–Mg", tag: " Engineering",
 si: "6.5–7.5%", cu: "≤0.1%", fe: "≤0.5%", mg: "0.2–0.6%",
 standard: "BS 1490 LM25 · EN AC-42100",
 applications: ["General engineering", "Food processing equipment", "Optical instruments", "Medical devices"],
 desc: "A clean, low-copper alloy with excellent corrosion resistance and good mechanical properties after T6 heat treatment. LM25 is the preferred alloy for food processing equipment and pharmaceutical machinery where copper contamination is not permissible. Also widely used in optical and scientific instruments.",
 industries: "Food · Medical · Optical · Engineering",
 },
 {
 grade: "AC2B", spec: "Al–Si–Cu", tag: " JIS Auto",
 si: "5.5–6.5%", cu: "2.0–4.0%", fe: "≤1.0%", mg: "≤0.3%",
 standard: "JIS H5202",
 applications: ["Cylinder blocks", "Cylinder heads", "Manifolds", "Japanese OEM parts"],
 desc: "A JIS-standard alloy widely specified by Japanese automotive OEMs and their global Tier-1 supply chains. AC2B provides good casting properties with sufficient strength for engine block and cylinder head applications. Essential for suppliers serving Honda, Toyota, Nissan and other Japanese OEM specifications.",
 industries: "Japanese Automotive OEM",
 },
 {
 grade: "AC4B", spec: "Al–Si–Cu", tag: " JIS Cylinder",
 si: "7.0–10.0%", cu: "2.0–4.0%", fe: "≤1.0%", mg: "≤0.3%",
 standard: "JIS H5202",
 applications: ["Cylinder heads", "Intake manifolds", "Engine covers", "JIS OEM castings"],
 desc: "The JIS standard alloy for cylinder head castings across the Japanese automotive industry. AC4B's silicon–copper balance provides good heat resistance and machinability for complex cylinder head geometries. Standard specification for Japanese motorcycle engine components and light vehicle cylinder heads.",
 industries: "Japanese Automotive · Motorcycles",
 },
 {
 grade: "AC4C", spec: "Al–Si–Mg", tag: " Wheels",
 si: "6.5–7.5%", cu: "≤0.2%", fe: "≤0.35%", mg: "0.2–0.4%",
 standard: "JIS H5202",
 applications: ["Alloy wheels", "Suspension parts", "Steering knuckles", "Structural castings"],
 desc: "The JIS equivalent of A356. AC4C is the benchmark alloy for aluminium alloy wheels and safety-critical suspension components in the Japanese supply chain. After T6 heat treatment, it delivers high elongation and yield strength critical for wheel fatigue performance under dynamic road loads.",
 industries: "Alloy Wheels · Suspension · Safety Parts",
 },
 {
 grade: "AlSi10Mg", spec: "Al–Si–Mg", tag: "️ Additive",
 si: "9.0–11.0%", cu: "≤0.05%", fe: "≤0.55%", mg: "0.2–0.45%",
 standard: "EN AC-43000 · DIN 1725",
 applications: ["Additive manufacturing", "Structural castings", "Automotive lightweight", "EV housings"],
 desc: "A modern EN-standard alloy gaining rapid adoption in lightweight automotive and EV applications. AlSi10Mg is the primary alloy used in selective laser melting (SLM/DMLS) additive manufacturing — making it increasingly critical as automotive and aerospace companies explore 3D-printed aluminium parts alongside traditional castings.",
 industries: "EV · Additive Mfg · Lightweight Auto",
 },
 {
 grade: "AlSi9Cu3", spec: "Al–Si–Cu", tag: " EN Standard",
 si: "8.0–11.0%", cu: "2.0–4.0%", fe: "≤1.3%", mg: "≤0.55%",
 standard: "EN AC-46000 · DIN 1725",
 applications: ["General HPDC", "Automotive parts", "Industrial castings", "European OEM spec"],
 desc: "The dominant European standard alloy for high-pressure die casting — functionally equivalent to ADC12 for the European market. AlSi9Cu3 is the benchmark specification across European automotive Tier-1 suppliers (Bosch, Continental, ZF) and is the most widely consumed HPDC alloy in the EU by volume.",
 industries: "European Automotive · Industrial HPDC",
 },
];

// ── MASTER ALLOYS ────────────────────────────────────────────────────────────
const masterAlloys = [
 {
 element: "Silicon", emoji: "",
 grades: ["AlSi 30", "AlSi 20", "AlSi 13"],
 use: "Increases fluidity, improves castability and reduces shrinkage. Used to adjust Si content in Al–Si casting alloys. AlSi 13 is used for near-eutectic composition adjustment; AlSi 30 for rapid dilution of lean melts.",
 series: "All Al–Si casting alloys",
 },
 {
 element: "Manganese", emoji: "",
 grades: ["AlMn 5", "AlMn 10", "AlMn 15"],
 use: "Improves strength, hardness and elevated-temperature performance. Neutralises the harmful effect of iron by forming Al–Fe–Mn compounds that are less detrimental to ductility. Critical for 3XXX series wrought alloys.",
 series: "3XXX wrought · Al–Si casting alloys",
 },
 {
 element: "Titanium", emoji: "️",
 grades: ["AlTi 5", "AlTi 10"],
 use: "Primary grain refiner for both wrought and cast aluminium. Refines the as-cast grain structure, improving mechanical properties, surface finish and resistance to hot tearing. Used at addition levels of 0.01–0.15%.",
 series: "All casting & wrought alloys",
 },
 {
 element: "Chromium", emoji: "",
 grades: ["AlCr 5", "AlCr 10"],
 use: "Inhibits grain growth and recrystallisation in wrought alloys. Improves stress corrosion cracking resistance. Standard addition in 6XXX (AlMgSi) and 7XXX (AlZnMg) alloys for aerospace and structural applications.",
 series: "6XXX · 7XXX wrought alloys",
 },
 {
 element: "Strontium", emoji: "",
 grades: ["AlSr 5", "AlSr 10"],
 use: "Modifies the eutectic silicon morphology in Al–Si alloys from coarse acicular plates to fine fibrous structure — dramatically improving tensile strength, elongation and fatigue life. Essential for A356, LM25 and AlSi10Mg applications.",
 series: "Al–Si casting alloys · A356 · LM25",
 },
 {
 element: "Zinc", emoji: "",
 grades: ["AlZn 5", "AlZn 10"],
 use: "Hardener master alloy for 7XXX series (AlZnMg, AlZnMgCu). Zinc is the primary strengthening element in 7075 and 7050 — the highest-strength commercially available aluminium alloys. Used in aerospace, defence and high-performance sports equipment.",
 series: "7XXX high-strength wrought alloys",
 },
 {
 element: "Titanium Boron", emoji: "️",
 grades: ["AlTi5B1"],
 use: "The most potent grain refiner for wrought aluminium. TiB₂ particles act as heterogeneous nucleation sites, providing a finer, more uniform grain structure than Ti alone. Industry standard for continuous casting of rolling slab and extrusion billet. Supplied as rod for in-line addition.",
 series: "Wrought alloys · DC casting · Billet",
 },
 {
 element: "Boron", emoji: "",
 grades: ["Al Boron 5", "Al Boron 8"],
 use: "Used to precipitate titanium, vanadium and chromium from electrical conductor alloys (1XXX, 8XXX) — elements which severely reduce electrical conductivity. Al–B addition recovers conductivity in EC-grade aluminium. Also used as a supplementary grain refiner.",
 series: "1XXX EC grade · 8XXX conductor alloys",
 },
];

// ── TRADING ──────────────────────────────────────────────────────────────────
const trading = [
 {
 emoji: "", title: "Silicon Metal",
 grades: "553 · 441 · 3301 · 2202",
 origin: "China & Malaysia",
 detail: "Industrial-grade silicon metal used as a primary alloying addition in aluminium casting alloys and as a raw material for silicones and solar-grade silicon. Grade 553 is the standard for aluminium alloying; 441 and higher purities for chemical and electronics applications.",
 },
 {
 emoji: "⬜", title: "Zinc Ingots",
 grades: "HZL · KZ · Iranian",
 origin: "Iran · Domestic (HZL)",
 detail: "High purity zinc ingots (99.95%+ Zn) for die casting, galvanising and brass production. HZL (Hindustan Zinc) is the domestic benchmark. KZ and Iranian grades are cost-effective alternatives meeting LME specifications for die casting applications.",
 },
 {
 emoji: "", title: "Tin Ingots",
 grades: "99.9% purity",
 origin: "Indonesia & Malaysia",
 detail: "Primary tin ingots from leading Southeast Asian smelters. Used in soldering alloys, tin–lead and lead-free solders, babbitt/bearing metals and tin plating. Purity 99.9% minimum, supplied in 25 kg ingots conforming to BS EN ISO 9453.",
 },
 {
 emoji: "", title: "Aluminium Ingots",
 grades: "EC Grade · CG Grade · Low Iron",
 origin: "NALCO · HINDALCO",
 detail: "Primary aluminium ingots from India's leading smelters — NALCO (National Aluminium Company) and HINDALCO. EC Grade (99.7% Al) for electrical conductor applications; CG Grade for general casting; Low Iron (<0.15% Fe) for high-ductility alloys and anodising quality castings.",
 },
 {
 emoji: "", title: "Extrusion Scrap",
 grades: "6063 · 6061",
 origin: "Middle East · Singapore · Australia · NZ",
 detail: "Clean aluminium extrusion scrap (Tread/Profile) in 6063 and 6061 alloys. Sourced from reliable industrial generators in the Middle East, Singapore, Australia and New Zealand. Consistent chemistry and low contamination make this a premium feedstock for secondary smelters.",
 },
 {
 emoji: "", title: "Taint Tabor",
 grades: "Clean & Mixed",
 origin: "USA · EU · Singapore",
 detail: "Aluminium Taint Tabor — a mixed low-copper aluminium scrap grade (ISRI grade) consisting primarily of painted and coated aluminium sheet. One of the most traded aluminium scrap categories globally. Sourced from established exporters in the USA, EU and Singapore.",
 },
];

// ── SCRAP PURCHASE ───────────────────────────────────────────────────────────
const scrapItems = [
 { name: "Aluminium Tense", note: "Clean Al scrap, <0.5% other metals" },
 { name: "Taint Tabor", note: "Painted/coated Al sheet" },
 { name: "Tread (6063/6061)", note: "Extrusion profile scrap" },
 { name: "Talon – Soft", note: "Soft aluminium casting scrap" },
 { name: "Talon – Hard", note: "Hard aluminium casting scrap" },
 { name: "Twang", note: "Al wire & cable scrap" },
 { name: "Telic", note: "Insulated Al cable scrap" },
 { name: "Tally – Clean", note: "Al auto body sheet, clean" },
 { name: "Tally – Dirty", note: "Al auto body sheet, mixed" },
 { name: "Troma", note: "Al auto castings scrap" },
 { name: "Twitch", note: "Al auto shredder fraction" },
 { name: "Mix Aluminium Scrap", note: "All grades considered" },
 { name: "Zorba", note: "Shredded non-ferrous metals" },
 { name: "Zurik", note: "Non-ferrous heavy melt" },
 { name: "Mix Heavy Metals", note: "All types considered" },
];

type Tab = "ingots" | "master" | "trading" | "scrap";

export function ProductsSection() {
 const [tab, setTab] = useState<Tab>("ingots");
 const [activeGrade, setActiveGrade] = useState(alloyIngots[0].grade);

 const active = alloyIngots.find(g => g.grade === activeGrade)!;

 const tabStyle = (t: Tab): React.CSSProperties => ({
 padding: "10px 18px", fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12,
 letterSpacing: "0.07em", textTransform: "uppercase", border: "none", cursor: "pointer",
 background: tab === t ? "#1C2B3A" : "transparent",
 color: tab === t ? "#C4A35A" : "#4A5A6B",
 borderBottom: tab === t ? "2px solid #9A7B3C" : "2px solid transparent",
 transition: "all 0.2s", whiteSpace: "nowrap",
 });

 return (
 <section id="products" style={{ background: "#EDE9E1", padding: "90px 0" }}>
 <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>

 <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 52 }}>
 <span className="mono" style={{ fontSize: 11, color: "#9A7B3C", letterSpacing: "0.2em", textTransform: "uppercase" }}>02 / Our Offerings</span>
 <div style={{ flex: 1, height: 1, background: "rgba(28,43,58,0.12)" }} />
 </div>

 <div className="reveal" style={{ marginBottom: 36 }}>
 <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 44px)", color: "#1C2B3A", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 10 }}>
 What We Manufacture & Supply
 </h2>
 <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#4A5A6B", lineHeight: 1.8, maxWidth: 600 }}>
 18+ alloy grades manufactured to BS, DIN & ASTM standards. Master alloys for the wrought industry.
 Trading in non-ferrous metals globally. All-in scrap purchasing. <strong style={{ color: "#1C2B3A" }}>One partner for the complete aluminium value chain.</strong>
 </p>
 </div>

 {/* Tabs */}
 <div className="reveal" style={{ display: "flex", gap: 0, borderBottom: "1px solid rgba(28,43,58,0.12)", marginBottom: 32, overflowX: "auto" }}>
 {([
 ["ingots", " Alloy Ingots"],
 ["master", "️ Master Alloys"],
 ["trading", " Trading"],
 ["scrap", "️ Scrap Purchase"],
 ] as [Tab, string][]).map(([t, label]) => (
 <button key={t} onClick={() => setTab(t)} style={tabStyle(t)}>{label}</button>
 ))}
 </div>

 {/* ── ALLOY INGOTS — interactive grade explorer ── */}
 {tab === "ingots" && (
 <div>
 <div style={{ display: "grid", gridTemplateColumns: "minmax(140px,200px) 1fr", border: "1px solid rgba(28,43,58,0.1)", background: "#F4F1EC" }}>
 {/* Left — grade list */}
 <div style={{ borderRight: "1px solid rgba(28,43,58,0.08)", maxHeight: 560, overflowY: "auto" }}>
 {alloyIngots.map(g => (
 <button key={g.grade} onClick={() => setActiveGrade(g.grade)} style={{
 width: "100%", textAlign: "left", display: "block",
 padding: "12px 14px", background: "none", border: "none",
 borderLeft: `3px solid ${activeGrade === g.grade ? "#9A7B3C" : "transparent"}`,
 borderBottom: "1px solid rgba(28,43,58,0.06)",
 cursor: "pointer",
 background: activeGrade === g.grade ? "#EDE9E1" : "transparent",
 transition: "all 0.15s",
 }}>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: activeGrade === g.grade ? "#1C2B3A" : "#7A8A9B", transition: "color 0.15s" }}>{g.grade}</div>
 <div className="mono" style={{ fontSize: 8, color: "#9A7B3C", letterSpacing: "0.1em", marginTop: 3, textTransform: "uppercase" }}>{g.spec}</div>
 </button>
 ))}
 </div>

 {/* Right — grade detail */}
 <div style={{ padding: "32px 36px" }}>
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap", gap: 10 }}>
 <div>
 <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 38, color: "#1C2B3A", lineHeight: 1, letterSpacing: "-0.02em" }}>{active.grade}</h3>
 <div className="mono" style={{ fontSize: 10, color: "#9A7B3C", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 5 }}>{active.spec}</div>
 </div>
 <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, background: "#1C2B3A", color: "#C4A35A", padding: "5px 12px", letterSpacing: "0.1em", alignSelf: "flex-start" }}>{active.tag}</span>
 </div>

 <hr style={{ border: "none", borderTop: "1px solid rgba(28,43,58,0.09)", margin: "18px 0" }} />

 <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "#2E3F50", lineHeight: 1.9, marginBottom: 22, maxWidth: 560 }}>{active.desc}</p>

 {/* Chemical composition */}
 <div style={{ marginBottom: 20 }}>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>Chemical Composition</div>
 <div style={{ display: "flex", border: "1px solid rgba(28,43,58,0.09)" }}>
 {[["Si", active.si], ["Cu", active.cu], ["Fe", active.fe], ["Mg", active.mg]].map(([k, v], i) => (
 <div key={k} style={{ flex: 1, padding: "12px 10px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(28,43,58,0.09)" : "none", background: i % 2 === 0 ? "#EDE9E1" : "#F4F1EC" }}>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 5 }}>{k}</div>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12, color: "#1C2B3A" }}>{v}</div>
 </div>
 ))}
 </div>
 </div>

 {/* Applications */}
 <div style={{ marginBottom: 16 }}>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>Key Applications</div>
 <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
 {active.applications.map(a => (
 <span key={a} style={{ fontFamily: "'Lora', serif", fontSize: 12, background: "#EDE9E1", border: "1px solid rgba(28,43,58,0.09)", padding: "4px 12px", color: "#4A5A6B" }}>{a}</span>
 ))}
 </div>
 </div>

 <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
 <div>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Standards</div>
 <div className="mono" style={{ fontSize: 10, color: "#4A5A6B" }}>{active.standard}</div>
 </div>
 <div>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Industries</div>
 <div className="mono" style={{ fontSize: 10, color: "#4A5A6B" }}>{active.industries}</div>
 </div>
 </div>

 <a href="#contact" style={{
 display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22,
 padding: "10px 22px", border: "1px solid #1C2B3A", color: "#1C2B3A",
 fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 11,
 letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s",
 }}
 onMouseEnter={e => { e.currentTarget.style.background = "#1C2B3A"; e.currentTarget.style.color = "#F4F1EC"; }}
 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1C2B3A"; }}
 >Enquire About {active.grade} →</a>
 </div>
 </div>
 <p className="mono" style={{ fontSize: 10, color: "#9A7B3C", marginTop: 12, letterSpacing: "0.1em" }}>
 ALL GRADES AVAILABLE TO CUSTOM SPECIFICATION
 </p>
 </div>
 )}

 {/* ── MASTER ALLOYS ── */}
 {tab === "master" && (
 <div>
 <div style={{ background: "#F4F1EC", border: "1px solid rgba(28,43,58,0.1)", padding: "20px 24px", marginBottom: 24 }}>
 <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "#4A5A6B", lineHeight: 1.85 }}>
 ️ <strong style={{ color: "#1C2B3A" }}>Master alloys</strong> are concentrated binary or ternary alloys used to introduce specific alloying elements into a melt with controlled chemistry and minimal temperature impact. They dissolve faster and more completely than pure metals — ensuring accurate, reproducible additions every heat.
 Available for <strong style={{ color: "#1C2B3A" }}>3XXX, 6XXX, 7XXX and 8XXX series</strong> wrought alloys.
 </p>
 </div>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 1, background: "rgba(28,43,58,0.1)" }}>
 {masterAlloys.map((m, i) => (
 <div key={m.element} style={{ background: i % 2 === 0 ? "#F4F1EC" : "#EDE9E1", padding: "22px 20px", transition: "background 0.2s", borderLeft: "3px solid transparent" }}
 onMouseEnter={e => { e.currentTarget.style.background = "#E2DDD3"; e.currentTarget.style.borderLeftColor = "#9A7B3C"; }}
 onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? "#F4F1EC" : "#EDE9E1"; e.currentTarget.style.borderLeftColor = "transparent"; }}
 >
 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
 <span style={{ fontSize: 20 }}>{m.emoji}</span>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: "#1C2B3A" }}>{m.element}</div>
 </div>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.1em", marginBottom: 10 }}>{m.grades.join(" · ")}</div>
 <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: "#4A5A6B", lineHeight: 1.75, marginBottom: 10 }}>{m.use}</div>
 <div className="mono" style={{ fontSize: 9, color: "#7A8A9B", letterSpacing: "0.08em" }}>Series: {m.series}</div>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* ── TRADING ── */}
 {tab === "trading" && (
 <div>
 <div style={{ background: "#F4F1EC", border: "1px solid rgba(28,43,58,0.1)", padding: "20px 24px", marginBottom: 24 }}>
 <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "#4A5A6B", lineHeight: 1.85 }}>
 Beyond manufacturing, Shakti Alloys is an active <strong style={{ color: "#1C2B3A" }}>trader and importer</strong> of non-ferrous metals — sourcing from verified global suppliers to serve our customers' complete material requirements. All traded material is quality-checked on arrival.
 </p>
 </div>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 1, background: "rgba(28,43,58,0.1)" }}>
 {trading.map((t, i) => (
 <div key={t.title} style={{ background: i % 2 === 0 ? "#F4F1EC" : "#EDE9E1", padding: "24px 20px", transition: "background 0.2s", borderLeft: "3px solid transparent" }}
 onMouseEnter={e => { e.currentTarget.style.background = "#E2DDD3"; e.currentTarget.style.borderLeftColor = "#9A7B3C"; }}
 onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? "#F4F1EC" : "#EDE9E1"; e.currentTarget.style.borderLeftColor = "transparent"; }}
 >
 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
 <span style={{ fontSize: 20 }}>{t.emoji}</span>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: "#1C2B3A" }}>{t.title}</div>
 </div>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.1em", marginBottom: 10 }}>Grades: {t.grades}</div>
 <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: "#4A5A6B", lineHeight: 1.75, marginBottom: 10 }}>{t.detail}</div>
 <div className="mono" style={{ fontSize: 9, color: "#7A8A9B", letterSpacing: "0.08em" }}> Origin: {t.origin}</div>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* ── SCRAP PURCHASE ── */}
 {tab === "scrap" && (
 <div>
 <div style={{ background: "#F4F1EC", border: "1px solid rgba(28,43,58,0.1)", padding: "20px 24px", marginBottom: 24 }}>
 <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "#4A5A6B", lineHeight: 1.85 }}>
 ️ We are <strong style={{ color: "#1C2B3A" }}>active buyers and importers</strong> of all grades of aluminium and non-ferrous scrap. With 14+ years of import experience, we offer competitive pricing, fast response and reliable payment terms. Contact us with material details, quantity and origin for an immediate offer.
 </p>
 </div>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 1, background: "rgba(28,43,58,0.1)", marginBottom: 24 }}>
 {scrapItems.map((s, i) => (
 <div key={s.name} style={{ background: i % 2 === 0 ? "#F4F1EC" : "#EDE9E1", padding: "16px 16px", transition: "all 0.2s", cursor: "default", borderLeft: "3px solid transparent" }}
 onMouseEnter={e => { e.currentTarget.style.background = "#1C2B3A"; (e.currentTarget.querySelector(".sn") as HTMLElement).style.color = "#C4A35A"; (e.currentTarget.querySelector(".snt") as HTMLElement).style.color = "#7A8A9B"; e.currentTarget.style.borderLeftColor = "#9A7B3C"; }}
 onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? "#F4F1EC" : "#EDE9E1"; (e.currentTarget.querySelector(".sn") as HTMLElement).style.color = "#1C2B3A"; (e.currentTarget.querySelector(".snt") as HTMLElement).style.color = "#7A8A9B"; e.currentTarget.style.borderLeftColor = "transparent"; }}
 >
 <div className="sn" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: "#1C2B3A", transition: "color 0.2s", marginBottom: 3 }}>{s.name}</div>
 <div className="snt" style={{ fontFamily: "'Lora', serif", fontSize: 11, color: "#7A8A9B", transition: "color 0.2s", fontStyle: "italic" }}>{s.note}</div>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* CTA */}
 <div className="reveal" style={{ marginTop: 32, padding: "22px 24px", background: "#1C2B3A", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
 <div>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: "#F4F1EC", marginBottom: 4 }}> Need a custom grade or can't find what you're looking for?</div>
 <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "#7A8A9B" }}>We manufacture to customer specification and source on request. One call, full solution.</div>
 </div>
 <a href="#contact" style={{
 padding: "11px 24px", background: "#9A7B3C", color: "#F4F1EC",
 fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12,
 letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
 whiteSpace: "nowrap", transition: "background 0.2s",
 }}
 onMouseEnter={e => e.currentTarget.style.background = "#C4A35A"}
 onMouseLeave={e => e.currentTarget.style.background = "#9A7B3C"}
 >Enquire Now →</a>
 </div>
 </div>
 </section>
 );
}
