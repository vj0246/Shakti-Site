import { useState } from "react";
import { Download, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const FACTORY_MAPS = "https://www.google.com/maps/search/H+no+813+Mama+Compound+Thane+Nasik+Bypass+Saravali+Bhiwandi+421302";
const OFFICE_MAPS  = "https://www.google.com/maps/search/A103+Ramji+House+Kalbadevi+Road+Mumbai+400002";

const EMAILJS_SERVICE  = "service_shaktialloys";
const EMAILJS_TEMPLATE = "template_shaktialloys";
const EMAILJS_KEY      = "o1rNlis8Nij1IKM_1";

export function Footer() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", product:"", qty:"", message:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          company:   form.company  || "Not provided",
          reply_to:  form.email,
          phone:     form.phone    || "Not provided",
          product:   form.product  || "Not specified",
          qty:       form.qty      || "Not specified",
          message:   form.message  || "—",
        },
        EMAILJS_KEY
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const field: React.CSSProperties = {
    width:"100%", background:"#F4F1EC",
    border:"1px solid rgba(28,43,58,0.15)", color:"#1C2B3A",
    padding:"10px 13px", fontSize:13,
    fontFamily:"'Lora', serif", outline:"none", transition:"border-color 0.2s", boxSizing:"border-box",
  };
  const lbl: React.CSSProperties = {
    fontFamily:"'IBM Plex Mono', monospace", fontSize:9, color:"#9A7B3C",
    letterSpacing:"0.18em", textTransform:"uppercase", display:"block", marginBottom:5,
  };

  return (
    <footer id="contact" style={{ background:"#1C2B3A" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"80px 28px 0" }}>

        <div className="reveal" style={{ display:"flex", alignItems:"center", gap:16, marginBottom:52 }}>
          <span className="mono" style={{ fontSize:11, color:"#9A7B3C", letterSpacing:"0.2em", textTransform:"uppercase" }}>05 / Get In Touch</span>
          <div style={{ flex:1, height:1, background:"rgba(244,241,236,0.07)" }}/>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"60px 90px", marginBottom:64, alignItems:"start" }}>

          {/* ── LEFT — contacts + addresses ── */}
          <div className="reveal">
            <h2 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:"clamp(26px,3.5vw,42px)", color:"#F4F1EC", lineHeight:1.08, letterSpacing:"-0.03em", marginBottom:22 }}>
              Request a<br/><em style={{ fontFamily:"'Lora',serif", fontStyle:"italic", fontWeight:500, color:"#C4A35A" }}>Quotation</em>
            </h2>
            <p style={{ fontFamily:"'Lora',serif", fontSize:13, color:"#7A8A9B", lineHeight:1.85, marginBottom:28, maxWidth:300 }}>
              Send your grade, quantity and destination. We respond within one working day.
            </p>

            {/* Directors — identical cards, equal size */}
            <div className="mono" style={{ fontSize:9, color:"#9A7B3C", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:10 }}>Directors</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:24 }}>
              {[
                { name:"Vinay Jain",  phone:"+91 93222 24565", tel:"tel:+919322224565" },
                { name:"Vikram Jain", phone:"+91 98212 06611", tel:"tel:+919821206611" },
              ].map(d => (
                <div key={d.name} style={{ background:"rgba(154,123,60,0.1)", border:"1px solid rgba(154,123,60,0.22)", padding:"14px 16px" }}>
                  <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:13, color:"#F4F1EC", marginBottom:6 }}>{d.name}</div>
                  <a href={d.tel} style={{ fontFamily:"'Lora',serif", fontSize:13, color:"#C4A35A", textDecoration:"none", display:"block", marginBottom:4 }}>{d.phone}</a>
                  <a href="mailto:shaktialloys123@gmail.com" style={{ fontFamily:"'Lora',serif", fontSize:11, color:"#7A8A9B", textDecoration:"none" }}>shaktialloys123@gmail.com</a>
                </div>
              ))}
            </div>

            {/* Locations */}
            <div className="mono" style={{ fontSize:9, color:"#9A7B3C", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:10 }}>Our Locations</div>
            {[
              { label:"Mumbai Office", addr:"A103 Ramji House, Kalbadevi Road\nMumbai 400 002 · 022 22003237", href:OFFICE_MAPS },
              { label:"Factory",       addr:"H no 813, Mama Compound, Saravali\nBhiwandi, Dist Thane – 421302",  href:FACTORY_MAPS },
            ].map(loc => (
              <a key={loc.label} href={loc.href} target="_blank" rel="noopener noreferrer" style={{
                display:"block", padding:"12px 14px", marginBottom:8,
                background:"rgba(244,241,236,0.04)", border:"1px solid rgba(244,241,236,0.07)",
                textDecoration:"none", transition:"border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor="rgba(154,123,60,0.4)"}
                onMouseLeave={e => e.currentTarget.style.borderColor="rgba(244,241,236,0.07)"}
              >
                <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:5 }}>
                  <MapPin size={11} color="#9A7B3C"/>
                  <span className="mono" style={{ fontSize:9, color:"#9A7B3C", letterSpacing:"0.12em", textTransform:"uppercase" }}>{loc.label}</span>
                </div>
                <div style={{ fontFamily:"'Lora',serif", fontSize:12, color:"#A8B2C8", lineHeight:1.6, whiteSpace:"pre-line" }}>{loc.addr}</div>
                <div className="mono" style={{ fontSize:9, color:"#9A7B3C", marginTop:6, letterSpacing:"0.1em" }}>View on Google Maps →</div>
              </a>
            ))}

            <a href="/shakti-alloys-brochure.pdf" download style={{
              display:"inline-flex", alignItems:"center", gap:8, marginTop:16,
              border:"1px solid rgba(154,123,60,0.5)", padding:"10px 20px",
              fontFamily:"'Outfit',sans-serif", fontWeight:600, fontSize:11,
              letterSpacing:"0.08em", textTransform:"uppercase",
              color:"#C4A35A", textDecoration:"none", transition:"all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background="#9A7B3C"; e.currentTarget.style.color="#F4F1EC"; }}
              onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#C4A35A"; }}
            ><Download size={12}/> Download Brochure</a>
          </div>

          {/* ── RIGHT — form with EmailJS ── */}
          <div className="reveal" style={{ transitionDelay:"0.1s" }}>
            {status === "sent" ? (
              <div style={{ border:"1px solid rgba(154,123,60,0.3)", padding:"48px 32px", textAlign:"center" }}>
                <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:17, color:"#C4A35A", marginBottom:12 }}>Enquiry Received</div>
                <p style={{ fontFamily:"'Lora',serif", fontSize:13, color:"#7A8A9B", lineHeight:1.8 }}>
                  Thank you. We will respond within one working day.<br/>
                  Urgent? Call <span style={{ color:"#C4A35A" }}>+91 93222 24565</span>
                </p>
                <button onClick={() => { setStatus("idle"); setForm({ name:"",company:"",email:"",phone:"",product:"",qty:"",message:"" }); }}
                  style={{ marginTop:20, background:"none", border:"1px solid rgba(154,123,60,0.4)", color:"#C4A35A", padding:"8px 20px", cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontSize:11, letterSpacing:"0.08em" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:12 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  <div><label style={lbl}>Full Name *</label><input name="name" required value={form.name} onChange={set} style={field} onFocus={e=>e.target.style.borderColor="#9A7B3C"} onBlur={e=>e.target.style.borderColor="rgba(28,43,58,0.15)"}/></div>
                  <div><label style={lbl}>Company</label><input name="company" value={form.company} onChange={set} style={field} onFocus={e=>e.target.style.borderColor="#9A7B3C"} onBlur={e=>e.target.style.borderColor="rgba(28,43,58,0.15)"}/></div>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  <div><label style={lbl}>Email *</label><input name="email" type="email" required value={form.email} onChange={set} style={field} onFocus={e=>e.target.style.borderColor="#9A7B3C"} onBlur={e=>e.target.style.borderColor="rgba(28,43,58,0.15)"}/></div>
                  <div><label style={lbl}>Phone</label><input name="phone" value={form.phone} onChange={set} style={field} onFocus={e=>e.target.style.borderColor="#9A7B3C"} onBlur={e=>e.target.style.borderColor="rgba(28,43,58,0.15)"}/></div>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  <div>
                    <label style={lbl}>Product / Grade</label>
                    <select name="product" value={form.product} onChange={set} style={{ ...field, color:form.product?"#1C2B3A":"#7A8A9B" }}>
                      <option value="">Select grade</option>
                      {["ADC12","ADC6","A380","A356","LM2","LM4","LM6","LM9","LM13","LM16","LM20","LM24","LM25","AC2B","AC4B","AC4C","AlSi10Mg","AlSi9Cu3","Master Alloy","Silicon Metal","Zinc Ingots","Tin Ingots","Scrap Purchase","Custom Spec"].map(g=><option key={g}>{g}</option>)}
                    </select>
                  </div>
                  <div><label style={lbl}>Quantity (MT)</label><input name="qty" placeholder="e.g. 25 MT / month" value={form.qty} onChange={set} style={field} onFocus={e=>e.target.style.borderColor="#9A7B3C"} onBlur={e=>e.target.style.borderColor="rgba(28,43,58,0.15)"}/></div>
                </div>
                <div>
                  <label style={lbl}>Message / Requirements</label>
                  <textarea name="message" rows={4} placeholder="Destination, application, delivery schedule, custom spec..." value={form.message} onChange={set} style={{ ...field, resize:"vertical" }} onFocus={e=>e.target.style.borderColor="#9A7B3C"} onBlur={e=>e.target.style.borderColor="rgba(28,43,58,0.15)"}/>
                </div>
                {status === "error" && (
                  <div style={{ fontFamily:"'Lora',serif", fontSize:12, color:"#FF7F7F", padding:"8px 12px", border:"1px solid rgba(255,127,127,0.3)", background:"rgba(255,127,127,0.06)" }}>
                    Something went wrong. Please call us directly or email shaktialloys123@gmail.com
                  </div>
                )}
                <button type="submit" disabled={status==="sending"} style={{
                  background: status==="sending" ? "#5A6A7A" : "#9A7B3C",
                  color:"#F4F1EC", padding:"13px 28px", border:"none",
                  fontFamily:"'Outfit',sans-serif", fontWeight:600,
                  fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase",
                  cursor: status==="sending" ? "not-allowed" : "pointer", transition:"background 0.2s",
                }}
                  onMouseEnter={e => { if(status!=="sending") e.currentTarget.style.background="#C4A35A"; }}
                  onMouseLeave={e => { if(status!=="sending") e.currentTarget.style.background="#9A7B3C"; }}
                >
                  {status==="sending" ? "Sending..." : "Send Enquiry →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop:"1px solid rgba(244,241,236,0.07)", maxWidth:1200, margin:"0 auto", padding:"20px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
        <span className="mono" style={{ fontSize:10, color:"#4A5A6B", letterSpacing:"0.1em" }}>© 2025 SHAKTI ALLOYS PRIVATE LIMITED · BHIWANDI, MAHARASHTRA</span>
        <span className="mono" style={{ fontSize:10, color:"#4A5A6B", letterSpacing:"0.1em" }}>ISO 9001:2015 · BIS CERTIFIED · EST. 2012</span>
      </div>
    </footer>
  );
}
