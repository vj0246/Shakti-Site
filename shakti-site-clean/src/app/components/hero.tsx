import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const frames = 72; let frame = 0;
        const t = setInterval(() => {
          frame++;
          const p = 1 - Math.pow(1 - frame / frames, 3);
          setVal(Math.floor(p * to));
          if (frame >= frames) { setVal(to); clearInterval(t); }
        }, 18);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <div ref={ref}>{val.toLocaleString()}{suffix}</div>;
}

export function Hero() {
  return (
    <section style={{ background: "#F4F1EC", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", height: "88vh", minHeight: 540 }}>
        {/* Molten aluminium foundry pour — dramatic, real, industrial */}
        <img
          src="/foundry-hero.png"
          alt="Aluminium foundry manufacturing"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(15,22,32,0.97) 0%, rgba(15,22,32,0.62) 40%, rgba(15,22,32,0.18) 100%)",
        }} />

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxWidth: 1200, margin: "0 auto", padding: "0 28px 52px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ display: "block", width: 28, height: 1, background: "#9A7B3C" }} />
            <span className="mono" style={{ fontSize: 11, color: "#C4A35A", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Bhiwandi, India · ISO 9001:2015 · BIS Certified
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(34px, 5vw, 64px)", color: "#F4F1EC",
            lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 20, maxWidth: 740,
          }}>
            India's Trusted Manufacturer<br />
            of <span style={{ color: "#C4A35A" }}>Aluminium Alloy Ingots</span>
          </h1>

          <p style={{
            fontFamily: "'Lora', serif", fontSize: "clamp(13px, 1.5vw, 15px)",
            color: "rgba(244,241,236,0.72)", lineHeight: 1.85, maxWidth: 500, marginBottom: 32,
          }}>
            14+ years of manufacturing excellence. Supplying ADC12, LM series, master alloys
            and more — to automotive, electrical and industrial clients across 52 nations.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <a href="#products" style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: "#9A7B3C", color: "#F4F1EC", padding: "12px 26px",
              fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13,
              letterSpacing: "0.07em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#C4A35A"}
              onMouseLeave={e => e.currentTarget.style.background = "#9A7B3C"}
            >Our Products <ArrowRight size={13} /></a>

            <a href="/shakti-alloys-brochure.pdf" download style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(244,241,236,0.08)", border: "1px solid rgba(244,241,236,0.25)",
              color: "#F4F1EC", padding: "11px 22px",
              fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13,
              letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C4A35A"; e.currentTarget.style.color = "#C4A35A"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(244,241,236,0.25)"; e.currentTarget.style.color = "#F4F1EC"; }}
            ><Download size={13} /> Download Brochure</a>

            <a href="#contact" style={{
              color: "rgba(244,241,236,0.7)", fontFamily: "'Outfit', sans-serif",
              fontWeight: 500, fontSize: 13, textDecoration: "none",
              borderBottom: "1px solid rgba(244,241,236,0.25)", paddingBottom: 2, transition: "color 0.2s, border-color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#C4A35A"; e.currentTarget.style.borderColor = "#C4A35A"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(244,241,236,0.7)"; e.currentTarget.style.borderColor = "rgba(244,241,236,0.25)"; }}
            >Request a Quote</a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ background: "#1C2B3A", borderBottom: "3px solid #9A7B3C" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
          {[
            { n: 12000, suf: "+", label: "MT Annual Capacity" },
            { n: 14, suf: "+", label: "Years of Excellence" },
            { n: 18, suf: "+", label: "Alloy Grades" },
            { n: 3, suf: "+", label: "Industry Memberships" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "26px 22px", borderRight: i < 3 ? "1px solid rgba(244,241,236,0.06)" : "none" }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#C4A35A", lineHeight: 1, marginBottom: 6 }}>
                <Counter to={s.n} suffix={s.suf} />
              </div>
              <div className="mono" style={{ fontSize: 10, color: "#7A8A9B", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
