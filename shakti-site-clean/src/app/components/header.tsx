import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const nav = [
 { label: "About", href: "#about" },
 { label: "Products", href: "#products" },
 { label: "Facilities", href: "#facilities" },
 { label: "Global Reach", href: "#global" },
 { label: "Contact", href: "#contact" },
];

export function Header() {
 const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [active, setActive] = useState("");

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 10);
 window.addEventListener("scroll", onScroll);
 const sections = nav.map(n => document.querySelector(n.href));
 const obs = new IntersectionObserver(
 entries => entries.forEach(e => { if (e.isIntersecting) setActive("#" + e.target.id); }),
 { threshold: 0.3 }
 );
 sections.forEach(s => s && obs.observe(s));
 return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
 }, []);

 return (
 <header style={{
 position: "sticky", top: 0, zIndex: 100,
 background: scrolled ? "rgba(244,241,236,0.97)" : "#F4F1EC",
 borderBottom: "1px solid rgba(28,43,58,0.1)",
 backdropFilter: scrolled ? "blur(10px)" : "none",
 transition: "all 0.25s ease",
 }}>
 <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

 {/* Real SA logo from brochure */}
 <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
 <img src="/logo.png" alt="Shakti Alloys" style={{ width: 44, height: 44, objectFit: "contain" }} />
 <div>
 <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: "#1C2B3A", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1 }}>Shakti Alloys</div>
 <div className="mono" style={{ fontSize: 9, color: "#9A7B3C", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 3 }}>Aluminium Alloy Ingots · Est. 2012</div>
 </div>
 </a>

 <nav style={{ display: "flex", alignItems: "center" }} className="desk-nav">
 {nav.map(n => (
 <a key={n.href} href={n.href} style={{
 padding: "8px 15px", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13,
 color: active === n.href ? "#1C2B3A" : "#4A5A6B", textDecoration: "none",
 letterSpacing: "0.02em", transition: "color 0.2s",
 borderBottom: active === n.href ? "2px solid #9A7B3C" : "2px solid transparent",
 }}
 onMouseEnter={e => e.currentTarget.style.color = "#1C2B3A"}
 onMouseLeave={e => e.currentTarget.style.color = active === n.href ? "#1C2B3A" : "#4A5A6B"}
 >{n.label}</a>
 ))}
 <a href="#contact" style={{
 marginLeft: 14, padding: "9px 20px", background: "#1C2B3A", color: "#F4F1EC",
 fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12,
 letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s",
 }}
 onMouseEnter={e => e.currentTarget.style.background = "#9A7B3C"}
 onMouseLeave={e => e.currentTarget.style.background = "#1C2B3A"}
 >Request Quote</a>
 </nav>

 <button onClick={() => setOpen(!open)} className="mob-btn" style={{ background: "none", border: "none", cursor: "pointer", color: "#1C2B3A", padding: 4 }}>
 {open ? <X size={20} /> : <Menu size={20} />}
 </button>
 </div>

 {open && (
 <div style={{ background: "#F4F1EC", borderTop: "1px solid rgba(28,43,58,0.08)", padding: "12px 28px 20px" }}>
 {nav.map(n => (
 <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
 display: "block", padding: "12px 0", fontFamily: "'Outfit', sans-serif",
 fontWeight: 500, fontSize: 15, color: "#1C2B3A", textDecoration: "none",
 borderBottom: "1px solid rgba(28,43,58,0.06)",
 }}>{n.label}</a>
 ))}
 <a href="#contact" onClick={() => setOpen(false)} style={{
 display: "inline-block", marginTop: 16, padding: "10px 24px", background: "#1C2B3A",
 color: "#F4F1EC", fontFamily: "'Outfit', sans-serif", fontWeight: 600,
 fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
 }}>Request Quote</a>
 </div>
 )}
 <style>{`
 @media(max-width:860px){.desk-nav{display:none!important}.mob-btn{display:block!important}}
 @media(min-width:861px){.mob-btn{display:none!important}}
 `}</style>
 </header>
 );
}
