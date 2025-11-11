import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  GraduationCap,
  Code2,
  Send,
  Sparkles,
  Phone,
  Filter,
  CircleDot,
  ChevronRight,
} from "lucide-react";

/************************************
 * Ananya Baghel — Professional Portfolio (Final)
 * - Professional tone
 * - Subtitle (chosen): "Where data, intelligence, and engineering come together."
 * - Gradients: buttons only (minimal accent)
 * - Dynamic skills toggles → live GitHub project filtering
 * - Education & Achievements separated
 * - Achievements highlight cards with image slot (GCloud Arcade)
 * - Experience timeline
 ************************************/

const CONTACT = {
  name: "Ananya Baghel",
  phone: "+91 7827100429",
  email: "ananyabaghel0001@gmail.com",
  linkedin: "http://www.linkedin.com/in/ananya-baghel-731a62249",
  github: "https://github.com/Ananya-Baghel",
  // ▼▼ Paste your public resume link here (Drive/Vercel/GitHub raw URL)
  resume: "YOUR_RESUME_LINK_HERE",
};

// Buttons accent only
const ACCENT_GRADIENT = "bg-gradient-to-r from-fuchsia-500 via-amber-400 to-lime-400";

// Skill filters drive repo search
const SKILL_FILTERS = {
  Python: ["python"],
  "Data Science": ["pandas", "numpy", "statistics", "data"],
  "Machine Learning": ["scikit", "sklearn", "ml", "regression", "classifier", "model"],
  "Generative AI": ["transformers", "llm", "gpt", "genai", "openai"],
  "Web (Streamlit/FastAPI)": ["streamlit", "fastapi", "flask", "api"],
  Databases: ["mysql", "sql", "db", "database"],
  Visualization: ["plotly", "matplotlib", "seaborn", "chart"],
};

const smoothScrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm bg-white/10 border border-white/10">
    {children}
  </span>
);

const Card = ({ className = "", children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className={"rounded-2xl p-5 md:p-6 border border-white/10 bg-white/[0.04] backdrop-blur-xl " + className}
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  const hueRef = useRef(null);

  // subtle animated accent blob (very light)
  useEffect(() => {
    let hue = 0;
    let raf;
    const tick = () => {
      hue = (hue + 0.15) % 360;
      if (hueRef.current) hueRef.current.style.filter = "hue-rotate(" + hue + "deg)";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ===== GitHub dynamic repos & filters =====
  const [repos, setRepos] = useState([]);
  the const [loadingRepos, setLoadingRepos] = useState(false);
  const [activeFilters, setActiveFilters] = useState([
    "Generative AI",
    "Data Science",
    "Python",
  ]);

  useEffect(() => {
    const run = async () => {
      try {
        setLoadingRepos(true);
        const res = await fetch("https://api.github.com/users/Ananya-Baghel/repos?per_page=100");
        const data = await res.json();
        if (Array.isArray(data)) setRepos(data);
      } catch (_) {
        // silent fallback
      } finally {
        setLoadingRepos(false);
      }
    };
    run();
  }, []);

  const toggleFilter = (key) => {
    setActiveFilters((prev) => (prev.includes(key) ? prev.filter((x) => x !== key) : prev.concat(key)));
  };

  const filteredRepos = useMemo(() => {
    if (activeFilters.length === 0) return repos;
    const needles = activeFilters.flatMap((k) => SKILL_FILTERS[k] || []).map((s) => s.toLowerCase());
    return repos.filter((r) => {
      const hay = [r.name, r.description, ...(r.topics || [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return needles.some((n) => hay.includes(n));
    });
  }, [repos, activeFilters]);

  // Static info
  const education = [
    {
      school: "HMR Institute of Technology and Management, Delhi (GGSIPU)",
      degree: "B.Tech, Computer Science Engineering",
      time: "Oct 2022 – Jul 2026",
      extra: "CGPA: 9.0",
    },
    {
      school: "Vivekanand School",
      degree: "Class XII — 92.00% | Class X — 94.83%",
      time: "Apr 2019 – Apr 2022",
    },
  ];

  const achievements = [
    {
      title: "Google Cloud Arcade Program (Sept 2024) — Skills Boost",
      detail:
        "Badges: Cloud APIs, BigQuery, Kubernetes, Firebase, MongoDB. High trivia scores.",
      imgAlt: "Google Cloud Arcade Badge",
      // ▼▼ Paste your badge image URL here
      imgSrc: "YOUR_BADGE_IMAGE_URL",
    },
    { title: "Advanced Python, DSA & Frameworks — DUCAT" },
    { title: "1st Position — G20 Case Study Competition (Mar 2023)" },
    { title: "2nd Rank — Academic Standing (Branch Topper)" },
    { title: "Event Host — Technical Symposiums (incl. ICAMC 2023)" },
  ];

  const experience = [
    {
      role: "Data Science Intern",
      org: "4Aisoft Pvt. Ltd.",
      time: "Jul 2025 – Present",
      points: [
        "SummarifyAI: −70% text length with ~90% accuracy (NLTK + Transformers).",
        "Automated PDF report generation in Python (−80% manual effort).",
        "Building a Generative AI project.",
      ],
      link: { label: "SummarifyAI", href: "https://github.com/Ananya-Baghel/SummarifyAI" },
    },
    {
      role: "Intern",
      org: "HCL Technologies",
      time: "Jan 2025 – Feb 2025",
      points: [
        "Text‑to‑Diagram Generator (PlantUML + GenAI) ↑ documentation efficiency ~70%.",
        "Streamlit‑FastAPI chat interface ↓ response time ~40%.",
        "Transformer models to interpret NL with 85%+ accuracy.",
      ],
    },
    {
      role: "Intern / Campus Ambassador",
      org: "Ducat",
      time: "Jun 2024 – Dec 2024",
      points: [
        "Collaborated on Python + SQL real‑time projects.",
        "Supported development & promotional operations.",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-clip bg-[#0b0c10]">
      {/* subtle animated accent blob */}
      <div ref={hueRef} aria-hidden className="pointer-events-none fixed -z-10 inset-0">
        <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-15 bg-fuchsia-500" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-base md:text-lg">{CONTACT.name}</div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-95">
            <button onClick={() => smoothScrollTo("about")} className="hover:opacity-100 transition-opacity">About</button>
            <button onClick={() => smoothScrollTo("skills")} className="hover:opacity-100 transition-opacity">Skills</button>
            <button onClick={() => smoothScrollTo("work")} className="hover:opacity-100 transition-opacity">Work</button>
            <button onClick={() => smoothScrollTo("education")} className="hover:opacity-100 transition-opacity">Education</button>
            <button onClick={() => smoothScrollTo("achievements")} className="hover:opacity-100 transition-opacity">Achievements</button>
            <button onClick={() => smoothScrollTo("experience")} className="hover:opacity-100 transition-opacity">Experience</button>
            <button onClick={() => smoothScrollTo("contact")} className="hover:opacity-100 transition-opacity">Contact</button>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={CONTACT.resume}
              className="hidden sm:inline-flex items-center gap-2 text-xs md:text-sm px-3 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              <Download className="size-4" />Resume
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label="email" className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
              <Mail className="size-4" />
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="github" className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
              <Github className="size-4" />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin" className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-18 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 opacity-90">
              <Sparkles className="size-5" />
              <span className="uppercase tracking-widest text-[11px]">driven • analytical • innovative</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{CONTACT.name}</h1>
            <div>
              <p className="text-xl md:text-2xl font-semibold">DATA SCIENCE & GENERATIVE AI</p>
              <p className="text-sm md:text-base opacity-85 mt-1">Where data, intelligence, and engineering come together.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => smoothScrollTo("work")} className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl ${ACCENT_GRADIENT} text-black font-semibold shadow-lg hover:scale-[1.02] active:scale-100 transition-transform`}>
                View Work <ArrowRight className="size-4" />
              </button>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                Contact <Send className="size-4" />
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                <Phone className="size-4" /> {CONTACT.phone}
              </a>
            </div>
          </motion.div>

          {/* PHOTO PLACEHOLDER */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-square rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-sm opacity-85">Photo Placeholder</p>
                <p className="text-xs opacity-70">Add your image here later</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-18">
        <Card>
          <p className="text-base md:text-lg leading-relaxed">
            I’m <span className="font-semibold">Ananya</span> — a data‑driven builder focused on <span className="font-semibold">Python</span>,
            <span className="font-semibold"> Machine Learning</span>, and <span className="font-semibold">Generative AI</span>. I design and
            deliver practical systems: summarization pipelines, diagram generation from natural language, Streamlit/FastAPI
            apps, and research prototypes powered by modern transformers. I value clarity, reliability, and elegant execution.
          </p>
        </Card>
      </section>

      {/* SKILLS (interactive switches) */}
      <section id="skills" className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-18">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 opacity-90 mb-2"><Filter className="size-5" /><span className="uppercase tracking-widest text-[11px]">interactive filters</span></div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Skills</h2>
          <p className="opacity-80 mt-2 text-sm md:text-base">Toggle skills to filter the work below in real‑time.</p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {Object.keys(SKILL_FILTERS).map((key) => {
            const on = activeFilters.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggleFilter(key)}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/15 transition ${on ? "bg-white/90 text-black" : "bg-white/5 hover:bg-white/10"}`}
              >
                <CircleDot className="size-4" /> {key}
              </button>
            );
          })}
        </div>
      </section>

      {/* WORK & OPEN‑SOURCE — dynamic horizontal spotlight */}
      <section id="work" className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-18">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 opacity-90 mb-2"><Code2 className="size-5" /><span className="uppercase tracking-widest text-[11px]">recent code</span></div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Work & Open‑Source</h2>
          <p className="opacity-80 mt-2 text-sm md:text-base">Auto‑filtered by your skill toggles. Data is fetched live from GitHub.</p>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-5 md:gap-6 min-w-full pb-2">
            {loadingRepos && <Card className="min-w-[22rem]">Loading repositories…</Card>}
            {!loadingRepos && filteredRepos.length === 0 && (
              <Card className="min-w-[22rem]">No repositories matched the selected filters. Try turning more on.</Card>
            )}
            {filteredRepos.map((r) => (
              <motion.div key={r.id} whileHover={{ y: -4 }} className="min-w-[22rem] max-w-[26rem] shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <a className="opacity-80 hover:opacity-100" href={r.html_url} target="_blank" rel="noreferrer"><ExternalLink className="size-4" /></a>
                </div>
                {r.description && <p className="opacity-85 text-sm mt-2">{r.description}</p>}
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.language && <Chip>{r.language}</Chip>}
                  {Array.isArray(r.topics) && r.topics.slice(0, 4).map((t) => <Chip key={t}>{t}</Chip>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-18">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 opacity-90 mb-2"><GraduationCap className="size-5" /><span className="uppercase tracking-widest text-[11px]">academics</span></div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((e, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{e.school}</h3>
                  <p className="opacity-85 text-sm md:text-base">{e.degree}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs md:text-sm opacity-85">{e.time}</div>
                  {e.extra && <div className="text-xs md:text-sm opacity-85">{e.extra}</div>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS — highlight with logo slot */}
      <section id="achievements" className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-18">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 opacity-90 mb-2"><Award className="size-5" /><span className="uppercase tracking-widest text-[11px]">recognition</span></div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Achievements</h2>
          <p className="opacity-80 mt-2 text-sm md:text-base">Highlights with proof‑of‑work.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <Card key={i}>
              <div className="flex gap-4 items-start">
                {/* image/logo slot */}
                <div className="w-20 h-20 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                  {a.imgSrc && a.imgSrc !== "YOUR_BADGE_IMAGE_URL" ? (
                    <img src={a.imgSrc} alt={a.imgAlt || "achievement"} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[10px] opacity-70 text-center p-2">Badge Image</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold">{a.title}</h3>
                  {a.detail && <p className="opacity-85 text-sm mt-1">{a.detail}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* EXPERIENCE — vertical timeline */}
      <section id="experience" className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-18">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 opacity-90 mb-2"><Sparkles className="size-5" /><span className="uppercase tracking-widest text-[11px]">journey</span></div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Experience</h2>
        </div>

        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/15"></div>
          <div className="space-y-6">
            {experience.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-white" />
                <Card>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-semibold">{e.role} — {e.org}</h3>
                      <div className="text-xs md:text-sm opacity-85 mt-1">{e.time}</div>
                    </div>
                    {e.link && (
                      <a href={e.link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition">
                        {e.link.label} <ChevronRight className="size-3.5" />
                      </a>
                    )}
                  </div>
                  <ul className="mt-4 list-disc list-inside text-sm space-y-2 opacity-95">
                    {e.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-20">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 opacity-90 mb-2"><Send className="size-5" /><span className="uppercase tracking-widest text-[11px]">availability</span></div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Get in Touch</h2>
          <p className="opacity-80 mt-2 text-sm md:text-base">Open to internships, freelance, and collaboration around Data Science & GenAI.</p>
        </div>
        <Card>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${CONTACT.email}`} className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl ${ACCENT_GRADIENT} text-black font-semibold shadow-lg hover:scale-[1.02] active:scale-100 transition-transform`}>
              <Mail className="size-4" /> Email
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
              <Github className="size-4" /> GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
              <Phone className="size-4" /> Call
            </a>
          </div>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="py-10 md:py-12 border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 text-sm opacity-85 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {CONTACT.name}. All rights reserved.</p>
          <div className="flex gap-3">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"><Github className="size-4" /></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"><Linkedin className="size-4" /></a>
            <a href={`mailto:${CONTACT.email}`} className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"><Mail className="size-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
