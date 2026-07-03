import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Zap, Wrench, ShieldCheck, Home, Building2, Droplets, Lightbulb, Fan, Cable,
  Plug, Gauge, Waves, Bath, ChefHat, Container, Cog, Phone, MessageCircle,
  Mail, MapPin, Clock, ChevronDown, CheckCircle2, Star, ArrowRight, Sparkles,
  PhoneCall, Menu, X,
} from "lucide-react";

import heroHome from "@/assets/hero-home.jpg";
import imgPanel from "@/assets/electrical-panel.jpg";
import imgBathroom from "@/assets/bathroom-plumbing.jpg";
import imgTools from "@/assets/tools.jpg";
import imgLighting from "@/assets/lighting.jpg";
import imgKitchen from "@/assets/kitchen.jpg";
import imgOutdoor from "@/assets/outdoor-lighting.jpg";
import imgTank from "@/assets/water-tank.jpg";
import imgCommercial from "@/assets/commercial-panel.jpg";
import textureDark from "@/assets/texture-dark.jpg";
import logoImg from "@/assets/logo.jpeg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const PHONE = "+919999999999";
const WHATSAPP = "919999999999";

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Stats />
        <Testimonials />
        <ServiceAreas />
        <EmergencyCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ---------------- NAV ---------------- */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-[0_4px_20px_-12px_rgba(11,44,95,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <AHLogo className="h-9 w-9" />
          <div className="leading-tight">
            <div className={`font-display text-lg font-bold tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>AH</div>
            <div className={`text-[10px] uppercase tracking-[0.18em] ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>Electricals · Plumbing</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform ${
                scrolled ? "text-foreground/80 hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="btn-electric inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
            Request Service <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button className={`lg:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`} onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-foreground hover:text-accent">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-electric mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              Request Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function AHLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-elegant ${className}`}>
      <img src={logoImg} alt="AH Logo" className="h-full w-full object-contain" />
      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold pulse-ring" />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroHome} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Malappuram · Kerala
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Professional Electrical <span className="text-gold">&</span> Plumbing Solutions
            <span className="block text-white/70 mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium">for Homes & Businesses</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Reliable installation, maintenance and emergency repair services across Malappuram.
            Fast response, expert workmanship and lasting solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-electric inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
              Request Service <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white">
            {[
              ["24/7", "Emergency"],
              ["5+ yrs", "Experience"],
              ["1000+", "Projects"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-2xl font-bold text-gold">{k}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto hidden lg:block"
        >
          <div className="relative aspect-square w-full max-w-md">
            <div className="">
              <div className="text-center w-full px-8">
                <div className="mx-auto grid h-88 w-98 place-items-center rounded-3xl bg-white shadow-lg overflow-hidden">
                  <img src={logoImg} alt="AH Logo" className="h-full w-full object-contain" />
                </div>
                <div className="mt-8 font-display text-3xl font-bold text-white">Electricals</div>
                <div className="text-sm uppercase tracking-[0.3em] text-gold mt-1">& Plumbing</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const items = [
    { icon: Zap, label: "Certified Professionals", desc: "Licensed technicians you can trust" },
    { icon: Wrench, label: "Quality Workmanship", desc: "Built to last, done right the first time" },
    { icon: ShieldCheck, label: "Emergency Support", desc: "24/7 rapid response across Malappuram" },
    { icon: Home, label: "Residential & Commercial", desc: "Homes, shops, offices and buildings" },
  ];
  return (
    <section className="border-y border-border bg-mist">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.08}>
            <div className="card-premium group flex items-start gap-4 p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-accent group-hover:shadow-glow">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-semibold text-primary">{it.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <img src={imgTools} alt="Professional electrical and plumbing tools" width={1280} height={960} loading="lazy"
              className="w-full rounded-3xl shadow-elegant object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-elegant md:block">
              <div className="font-display text-3xl font-bold text-gold">5+</div>
              <div className="text-xs uppercase tracking-widest">Years serving Malappuram</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <SectionEyebrow>About AH</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Powering homes. <span className="text-gradient-navy">Fixing flows.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At AH Electricals & Plumbing, we deliver reliable electrical and plumbing services with a commitment to
              safety, precision, and customer satisfaction. Whether it's a new installation, an urgent repair, or complete
              maintenance, our experienced technicians ensure every project is completed to the highest standard.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-mist p-5">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold">Our goal</div>
              <div className="mt-1 font-display text-xl font-semibold text-primary">
                Deliver dependable service you can trust.
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Licensed & Insured", "Safety First", "Transparent Pricing", "Local & Trusted"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const electrical = [
    { icon: Cable, name: "House Wiring" },
    { icon: Zap, name: "Rewiring" },
    { icon: Gauge, name: "DB Panel Installation" },
    { icon: Lightbulb, name: "Lighting Installation" },
    { icon: Fan, name: "Fan Installation" },
    { icon: Plug, name: "Switch & Socket Repairs" },
    { icon: ShieldCheck, name: "MCB & RCCB Installation" },
    { icon: Wrench, name: "Electrical Maintenance" },
  ];
  const plumbing = [
    { icon: Waves, name: "Pipe Installation" },
    { icon: Droplets, name: "Leak Detection" },
    { icon: Bath, name: "Bathroom Plumbing" },
    { icon: ChefHat, name: "Kitchen Plumbing" },
    { icon: Container, name: "Water Tank Installation" },
    { icon: Cog, name: "Motor Installation" },
    { icon: Wrench, name: "Pump Repair" },
    { icon: Droplets, name: "Drainage Solutions" },
  ];
  return (
    <section id="services" className="relative overflow-hidden bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionEyebrow>Our services</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            End-to-end electrical & plumbing, done right.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            From routine maintenance to full installations, our certified team handles it with care, safety and precision.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ServiceGroup
            title="Electrical Services"
            accent="electric"
            icon={<Zap className="h-5 w-5" />}
            items={electrical}
            ripple={false}
          />
          <ServiceGroup
            title="Plumbing Services"
            accent="water"
            icon={<Droplets className="h-5 w-5" />}
            items={plumbing}
            ripple
          />
        </div>

        {/* Maintenance strip */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Annual Maintenance Contracts",
            "Commercial Maintenance",
            "Preventive Inspection",
            "24/7 Emergency Service",
          ].map((m) => (
            <div key={m} className="card-premium flex items-center gap-3 p-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold text-navy-deep">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-medium text-primary">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceGroup({
  title, icon, items, accent, ripple,
}: {
  title: string; icon: ReactNode; accent: "electric" | "water";
  items: { icon: any; name: string }[]; ripple?: boolean;
}) {
  return (
    <Reveal>
      <div className="card-premium overflow-hidden">
        <div className={`flex items-center gap-3 px-6 py-5 border-b border-border ${accent === "electric" ? "bg-primary text-primary-foreground" : "bg-navy-deep text-primary-foreground"}`}>
          <div className={`grid h-10 w-10 place-items-center rounded-lg ${accent === "electric" ? "bg-gold text-navy-deep" : "bg-accent text-white"}`}>
            {icon}
          </div>
          <h3 className="font-display text-xl font-bold">{title}</h3>
        </div>
        <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {items.map((it) => (
            <li
              key={it.name}
              className={`group flex items-center gap-3 bg-card px-5 py-4 transition-colors hover:bg-mist ${ripple ? "ripple" : ""}`}
              onMouseMove={(e) => {
                if (!ripple) return;
                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                (e.currentTarget as HTMLElement).style.setProperty("--x", `${e.clientX - r.left}px`);
                (e.currentTarget as HTMLElement).style.setProperty("--y", `${e.clientY - r.top}px`);
              }}
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-mist text-accent transition group-hover:bg-accent group-hover:text-white group-hover:shadow-glow">
                <it.icon className="h-4 w-4" />
              </div>
              <span className="font-medium text-foreground">{it.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    "Skilled Technicians", "Quality Materials", "Affordable Pricing", "On-Time Service",
    "Clean Work", "Transparent Quotations", "Fast Response", "Safety First",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <img src={imgPanel} alt="Electrical distribution board" width={1280} height={960} loading="lazy"
              className="w-full rounded-3xl object-cover shadow-elegant aspect-[4/3]" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <SectionEyebrow>Why choose us</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Why customers trust <span className="text-gradient-navy">AH</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every job — big or small — gets the same commitment to quality, safety and clean execution.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-accent hover:shadow-glow">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium text-foreground">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    ["Contact Us", "Reach us via call, WhatsApp or the form."],
    ["Site Inspection", "We visit and assess the requirement."],
    ["Quotation", "Transparent, itemised pricing — no surprises."],
    ["Work Begins", "Certified technicians start on schedule."],
    ["Quality Check", "Full safety & performance verification."],
    ["Customer Satisfaction", "Handover, warranty and after-care."],
  ];
  return (
    <section className="relative overflow-hidden bg-navy-mesh py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionEyebrow tone="dark">Our process</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            A calm, structured way to get things done.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-accent hover:bg-white/10">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric to-electric-glow font-display text-lg font-bold text-white shadow-glow">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display text-xl font-semibold">{t}</div>
                </div>
                <p className="mt-4 text-sm text-white/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const projects = [
    { img: heroHome, title: "Modern Villa Wiring", tag: "Residential" },
    { img: imgCommercial, title: "Commercial Building", tag: "Commercial" },
    { img: imgBathroom, title: "Bathroom Plumbing", tag: "Plumbing" },
    { img: imgTank, title: "Water Pump Installation", tag: "Plumbing" },
    { img: imgOutdoor, title: "Outdoor Lighting", tag: "Electrical" },
    { img: imgPanel, title: "Electrical Panel Upgrade", tag: "Electrical" },
  ];
  const [lightbox, setLightbox] = useState<null | { img: string; title: string }>(null);
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <SectionEyebrow>Featured projects</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            A closer look at recent work.
          </h2>
        </div>
        <a href="#contact" className="text-sm font-semibold text-accent hover:underline">Start your project →</a>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <button
              onClick={() => setLightbox(p)}
              className="group relative block w-full overflow-hidden rounded-3xl border border-border text-left shadow-elegant transition hover:shadow-glow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{p.tag}</div>
                <div className="mt-1 font-display text-xl font-semibold">{p.title}</div>
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/95 p-2 text-primary opacity-0 transition group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-navy-deep/90 p-4 backdrop-blur-lg" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-white hover:text-gold">
              <X className="h-6 w-6" />
            </button>
            <img src={lightbox.img} alt={lightbox.title} className="w-full rounded-2xl shadow-elegant" />
            <div className="mt-4 text-center text-white">
              <div className="font-display text-xl font-semibold">{lightbox.title}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const items = [
    { v: 700, suffix: "+", label: "Happy Customers" },
    { v: 1000, suffix: "+", label: "Projects Completed" },
    { v: 5, suffix: "+", label: "Years Experience" },
    { v: 24, suffix: "/7", label: "Emergency Support" },
  ];
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <img src={textureDark} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.08}>
            <div className="text-center">
              <Counter to={it.v} suffix={it.suffix} />
              <div className="mt-2 text-xs uppercase tracking-widest text-white/70">{it.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v));
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setVal(v));
    return () => { controls.stop(); unsub(); };
  }, [inView, mv, rounded, to]);
  return (
    <span ref={ref} className="inline-flex items-baseline font-display text-4xl font-bold text-gold sm:text-5xl">
      {val}<span className="text-white">{suffix}</span>
    </span>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const t = [
    { q: "Excellent workmanship and quick service. Highly professional from start to finish.", n: "Homeowner, Malappuram" },
    { q: "Very professional team. They fixed a tricky leak the same day I called.", n: "Restaurant Owner, Manjeri" },
    { q: "Affordable and highly recommended. Clean job and clear pricing.", n: "Homeowner, Perinthalmanna" },
  ];
  return (
    <section id="testimonials" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Trusted by families and businesses.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.map((it, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="card-premium h-full p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{it.q}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm font-medium text-muted-foreground">— {it.n}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICE AREAS ---------------- */
function ServiceAreas() {
  const areas = ["Malappuram", "Perinthalmanna", "Manjeri", "Kondotty", "Kottakkal", "Nilambur", "Tirur", "Irumbuzhi"];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <div>
            <SectionEyebrow>Service areas</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              We proudly serve across Malappuram district.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fast response times across these locations. Not sure if we cover yours? Give us a call.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {areas.map((a) => (
                <div key={a} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 transition hover:border-accent hover:shadow-glow">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Service area map"
              src="https://www.google.com/maps?q=Malappuram,Kerala&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- EMERGENCY CTA ---------------- */
function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-white">
      <div className="absolute inset-0 bg-navy-mesh opacity-90" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row">
        <div className="flex items-center gap-5">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-navy-deep shadow-gold pulse-ring">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Need immediate electrical or plumbing assistance?</h3>
            <p className="mt-1 text-white/70">Available for urgent repair services — day or night.</p>
          </div>
        </div>
        <a href={`tel:${PHONE}`} className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold">
          <PhoneCall className="h-5 w-5" /> Call Now
        </a>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    ["Do you provide emergency services?", "Yes, we operate 24/7 for urgent electrical and plumbing emergencies across Malappuram."],
    ["Do you work on commercial buildings?", "Absolutely. We handle offices, retail, hospitality and small industrial projects."],
    ["Can I schedule maintenance?", "Yes — we offer Annual Maintenance Contracts and preventive inspection schedules."],
    ["Do you provide wiring for new homes?", "Full house wiring, DB panels, MCB/RCCB and lighting layouts are our specialty."],
    ["Do you install water pumps?", "Yes, we install, repair and service residential and commercial water pumps."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
          Frequently asked questions
        </h2>
      </div>
      <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map(([q, a], i) => (
          <div key={q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-base font-semibold text-primary sm:text-lg">{q}</span>
              <ChevronDown className={`h-5 w-5 text-accent transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="min-h-0">
                <p className="px-6 pb-6 text-muted-foreground">{a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Get a quick quote or book a service.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach us by phone, WhatsApp, email or send a message — we typically respond within an hour.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Phone", value: "+91 85930 00097", href: `tel:${PHONE}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${WHATSAPP}` },
              { icon: Mail, label: "Email", value: "hello@ahelectricals.in", href: "mailto:hello@ahelectricals.in" },
              { icon: MapPin, label: "Location", value: "Malappuram, Kerala", href: "#" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sun · 24/7 emergency", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="card-premium flex items-center gap-4 p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="truncate font-medium text-primary">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="card-premium space-y-5 p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name"><input required className="input-base" placeholder="Your name" /></Field>
              <Field label="Phone"><input required type="tel" className="input-base" placeholder="+91 …" /></Field>
            </div>
            <Field label="Email"><input type="email" className="input-base" placeholder="you@email.com" /></Field>
            <Field label="Service Needed">
              <select className="input-base" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Electrical — new installation</option>
                <option>Electrical — repair / maintenance</option>
                <option>Plumbing — new installation</option>
                <option>Plumbing — repair / leak</option>
                <option>Emergency service</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message"><textarea rows={4} className="input-base resize-none" placeholder="Tell us what you need..." /></Field>
            <button type="submit" className="btn-electric inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold">
              {sent ? "Thanks! We'll be in touch." : "Send Request"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <style>{`.input-base{width:100%;border-radius:0.75rem;border:1px solid var(--color-border);background:var(--color-card);padding:0.75rem 1rem;font-size:0.9rem;color:var(--color-foreground);outline:none;transition:border-color .2s,box-shadow .2s;} .input-base:focus{border-color:var(--color-accent);box-shadow:0 0 0 4px color-mix(in oklab, var(--color-accent) 18%, transparent);}`}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <AHLogo className="h-10 w-10" />
            <div>
              <div className="font-display text-lg font-bold text-white">AH</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Electricals · Plumbing</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Reliable electrical & plumbing services across Malappuram. Powering homes. Fixing flows.
          </p>
        </div>
        <FooterCol title="Quick Links" links={navLinks} />
        <FooterCol title="Services" links={[
          { label: "House Wiring", href: "#services" },
          { label: "Bathroom Plumbing", href: "#services" },
          { label: "Water Tank Installation", href: "#services" },
          { label: "Emergency Repairs", href: "#services" },
          { label: "AMC & Maintenance", href: "#services" },
        ]} />
        <div>
          <div className="font-display font-semibold text-white">Get in touch</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`tel:${PHONE}`} className="hover:text-gold">+91 85930 00097</a></li>
            <li><a href={`https://wa.me/${WHATSAPP}`} className="hover:text-gold">WhatsApp</a></li>
            <li><a href="mailto:hello@ahelectricals.in" className="hover:text-gold">hello@ahelectricals.in</a></li>
            <li>Malappuram, Kerala</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} AH Electricals & Plumbing. All rights reserved.</div>
          <div>Made with care in Kerala.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="font-display font-semibold text-white">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-gold">{l.label}</a></li>)}
      </ul>
    </div>
  );
}

/* ---------------- FLOATING ACTIONS ---------------- */
function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP}`}
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105 floaty"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call"
        className="grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-glow transition hover:scale-105 md:hidden"
      >
        <PhoneCall className="h-6 w-6" />
      </a>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */
function SectionEyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${tone === "dark" ? "text-gold" : "text-accent"}`}>
      <span className={`h-px w-8 ${tone === "dark" ? "bg-gold" : "bg-accent"}`} />
      {children}
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function Building() { return <Building2 />; }
