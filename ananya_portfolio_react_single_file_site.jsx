import React, { useEffect, useMemo, useState, createContext, useContext } from "react";
import { motion } from "framer-motion";

// --- Lightweight UI primitives (single-file, Tailwind-based) ---
const cx = (...c) => c.filter(Boolean).join(" ");
export const Button = ({ asChild, className = "", variant = "default", size = "md", children, ...props }) => {
  const base = "inline-flex items-center justify-center rounded-2xl border transition-all active:scale-[.98]";
  const variants = {
    default: "bg-fuchsia-500 text-fuchsia-500-foreground border-transparent px-4 py-2 shadow hover:opacity-90",
    outline: "bg-transparent border-muted-foreground/20 hover:bg-accent/40 px-4 py-2",
    ghost: "bg-transparent border-transparent hover:bg-accent/40 px-3 py-2",
    icon: "h-10 w-10 p-0 border-muted-foreground/20 bg-background hover:bg-accent/40"
  };
  const sizes = { md: "h-10", sm: "h-9 text-sm", lg: "h-11 text-base" };
  const Comp = asChild ? "a" : "button";
  return <Comp className={cx(base, variants[variant]||variants.default, sizes[size]||sizes.md, className)} {...props}>{children}</Comp>;
};
export const Card = ({ className = "", children }) => (<div className={cx("rounded-3xl border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50", className)}>{children}</div>);
export const CardHeader = ({ children }) => (<div className="p-5 pb-0">{children}</div>);
export const CardTitle = ({ children, className="" }) => (<h3 className={cx("text-xl font-semibold tracking-tight", className)}>{children}</h3>);
export const CardContent = ({ children, className="" }) => (<div className={cx("p-5 pt-4", className)}>{children}</div>);
export const Badge = ({ children, className="", variant="secondary" }) => (<span className={cx("inline-flex items-center rounded-full border px-3 py-1 text-xs", variant==="secondary" && "bg-muted/60", className)}>{children}</span>);

// Tabs (minimal)
const TabsCtx = createContext(null);
export const Tabs = ({ defaultValue, children, className="" }) => {
  const [value, setValue] = useState(defaultValue);
  return <TabsCtx.Provider value={{ value, setValue }}><div className={className}>{children}</div></TabsCtx.Provider>;
};
export const TabsList = ({ children, className="" }) => (<div className={cx("rounded-2xl border p-1 bg-background/60 grid", className)}>{children}</div>);
export const TabsTrigger = ({ value, children }) => {
  const ctx = useContext(TabsCtx);
  const active = ctx?.value === value;
  return (<button onClick={() => ctx?.setValue(value)} className={cx("text-sm rounded-xl px-3 py-2 transition", active ? "bg-fuchsia-500 text-fuchsia-500-foreground" : "hover:bg-purple-500/30 transition-all duration-500")}>{children}</button>);
};
export const TabsContent = ({ value, children, className="" }) => {
  const ctx = useContext(TabsCtx);
  if (ctx?.value !== value) return null;
  return <div className={className}>{children}</div>;
};

// Tooltip (no-op fallback for preview)
export const TooltipProvider = ({ children }) => <>{children}</>;
export const Tooltip = ({ children }) => <>{children}</>;
export const TooltipTrigger = ({ children }) => <>{children}</>;
export const TooltipContent = ({ children }) => <span className="sr-only">{children}</span>;

export const Input = (props) => (<input {...props} className={cx("h-10 w-full rounded-2xl border px-3 bg-background/50", props.className)} />);
import { Mail, Phone, Github, Linkedin, Link as LinkIcon, ArrowRight, Download, Sparkles, FileText, MapPin, GraduationCap, Building2, ChevronRight, Star, Cpu, Send, Sun, Moon } from "lucide-react";

// NOTE: This is a single-file React portfolio component.
// TailwindCSS + shadcn/ui + framer-motion + lucide-react
// Add this file to a React/Vite/Next app and render <Portfolio />
// Place your photo file at /public/ananya.jpg (or update the src below).
// ---------------------------------------------------------------

const data = {
  name: "Ananya Baghel",
  role: "Software Engineer • Data Science & GenAI Enthusiast",
  location: "Delhi, India",
  email: "ananyabaghel0001@gmail.com",
  phone: "+91 7827100429",
  links: {
    github: "https://github.com/Ananya-Baghel",
    linkedin: "http://www.linkedin.com/in/ananya-baghel-731a62249",
    summarify: "https://github.com/Ananya-Baghel/SummarifyAI",
  },
  hero: {
    tagline: "Turning ideas into fast, beautiful, and intelligent products",
    sub: "I build end‑to‑end experiences across web, ML, and GenAI — from clean UIs to deployable, data‑driven systems.",
  },
  skills: {
    languages: ["Python", "C", "C++", "Java", "JavaScript", "HTML5", "CSS3", "SQL", "PHP"],
    frameworks: ["React", "Angular", "Streamlit", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "jQuery", "Bootstrap", "Materialize", "LESS", "SASS"],
    concepts: ["DSA", "Machine Learning", "Statistics", "OOP", "Networking", "OS", "API Integration", "Kubernetes", "BigQuery", "AI Agents", "Prompt Engineering", "SDLC", "NLTK"],
    platforms: ["MySQL", "Firebase", "Google Cloud", "DBMS", "FastAPI"],
    tools: ["Git", "VS Code", "PyCharm", "Jupyter", "PowerBI", "Google Colab", "IntelliJ IDEA", "Excel (Advanced)"],
    design: ["Figma", "Canva", "CapCut", "VN Editor", "Adobe Creative Suite"],
  },
  experience: [
    {
      company: "4Aisoft Pvt. Ltd.",
      title: "Data Science Intern",
      period: "Jul 2025 – Present",
      bullets: [
        "Built SummarifyAI, reducing text length by 70% with ~90% accuracy using NLTK/Transformers.",
        "Automated PDF report generation in Python, cutting manual effort by 80%.",
        "Actively developing a Generative AI project."
      ],
      tech: ["Python", "Transformers", "NLTK"],
      link: "https://github.com/Ananya-Baghel/SummarifyAI",
    },
    {
      company: "HCL Technologies",
      title: "Intern",
      period: "Jan 2025 – Feb 2025",
      bullets: [
        "Text‑to‑Diagram Generator converting natural language to UML (PlantUML + GenAI).",
        "Built Streamlit‑FastAPI chat interface; reduced response time by 40%.",
        "Applied transformer models to interpret NL with 85%+ accuracy; cross‑functional collaboration."
      ],
      tech: ["Python", "FastAPI", "Streamlit", "HuggingFace", "PlantUML", "Git"],
    },
    {
      company: "Ducat",
      title: "Intern / Campus Ambassador",
      period: "Jun 2024 – Dec 2024",
      bullets: [
        "Contributed to real‑time collaborative projects in Python and SQL.",
        "Supported development and promotional operations."
      ],
      tech: ["Python", "SQL"],
    },
    {
      company: "Bharat Intern",
      title: "Intern",
      period: "Jan 2024 – Feb 2024",
      bullets: [
        "Completed three responsive full‑stack web projects (HTML, CSS, JS, SQL)."
      ],
      tech: ["HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      company: "Social House Learning (NDGYS 23)",
      title: "Practicum — Social Welfare & Tech Ops",
      period: "May 2023 – Oct 2023",
      bullets: [
        "Database management and media operations using SQL and Adobe tools."
      ],
      tech: ["SQL", "Adobe"],
    },
  ],
  projects: [
    {
      name: "PreCon — Maternal Health Risk Predictor",
      desc: "Deployed ML model on Streamlit to assess childbirth risks.",
      tech: ["Python", "Pandas", "NumPy", "Statistics", "Machine Learning", "Streamlit"],
      links: [],
    },
    {
      name: "HealthHub — Patient Care DB System",
      desc: "Digital patient history platform with QR access.",
      tech: ["PHP", "MySQL"],
      links: [],
    },
    {
      name: "Filme — Movie Streaming Platform",
      desc: "Secure playback, ratings, personalization, recommendations.",
      tech: ["Full‑stack", "Recommenders"],
      links: [],
    },
    {
      name: "Guardian — Post‑Pregnancy Diabetes Predictor",
      desc: "Predictive model for post‑childbirth risk.",
      tech: ["Python", "Excel", "NumPy", "Machine Learning", "Streamlit"],
      links: [],
    },
    {
      name: "Unifest — Predicting Colleges",
      desc: "Data‑driven predictions using Decision Tree & KNN.",
      tech: ["Pandas", "NumPy", "Plotly", "Matplotlib", "Seaborn"],
      links: [],
    },
  ],
  achievements: [
    {
      title: "Google Cloud Arcade Program — Skills Boost",
      period: "Sept 2024",
      desc: "Badges in Cloud APIs, BigQuery, Kubernetes, Firebase, MongoDB; topped trivia rounds.",
    },
    { title: "Advanced Python, DSA & Frameworks — DUCAT", period: "—" },
    { title: "1st Position — G20 Case Study Competition", period: "Mar 2023" },
    { title: "2nd Rank — Academic Standing (Branch Topper)", period: "—" },
    { title: "Event Host — Technical Symposiums (incl. ICAMC 2023)", period: "—" },
  ],
  education: [
    {
      school: "HMR Institute of Technology and Management, Delhi",
      degree: "B.Tech, Computer Science Engineering (CGPA 9.0)",
      period: "Oct 2022 – Jul 2026",
      detail: "Affiliated to GGSIPU",
    },
    {
      school: "Vivekanand School",
      degree: "Class XII — 92.00% | Class X — 94.83%",
      period: "Apr 2019 – Apr 2022",
    },
  ],
};

function useThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

const Section = ({ id, title, icon: Icon, children, className = "" }) => (
  <section id={id} className={`relative scroll-mt-24 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 md:px-6"
    >
      <div className="flex items-center gap-2 mb-6">
        {Icon && <Icon className="w-5 h-5 text-fuchsia-500" />}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

const GradientBlobs = () => (
  <div aria-hidden className=\"pointer-events-none fixed inset-0 -z-10 overflow-hidden animate-gradientShift\">
    <div className=\"absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-purple-600 blur-3xl opacity-70 mix-blend-screen\" />
    <div className=\"absolute top-96 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 blur-[110px] opacity-60 mix-blend-screen\" />
    <div className=\"absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 blur-3xl opacity-70 mix-blend-screen\" />
  </div>
);

const Pill = ({ children }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm bg-muted/60 hover:bg-muted">
    {children}
  </Badge>
);

const ProjectCard = ({ p }) => (
  <Card className="group relative overflow-hidden border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:shadow-xl transition-shadow duration-300">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-fuchsia-500/40 to-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg">
        <Sparkles className="w-4 h-4" /> {p.name}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
      <div className="flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      {p.links?.length ? (
        <div className="pt-2 flex gap-3">
          {p.links.map((l) => (
            <Button key={l.href} variant="outline" size="sm" asChild>
              <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <LinkIcon className="w-4 h-4" /> {l.label}
              </a>
            </Button>
          ))}
        </div>
      ) : null}
    </CardContent>
  </Card>
);

const ExperienceItem = ({ item }) => (
  <div className="relative pl-8 pb-10">
    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-fuchsia-500 shadow ring-4 ring-primary/20" />
    <div className="absolute left-1.5 top-3 bottom-0 w-px bg-border" />
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div className="text-lg font-medium flex items-center gap-2">
        <Building2 className="w-4 h-4 text-fuchsia-500" /> {item.company}
      </div>
      <div className="text-sm text-muted-foreground">{item.period}</div>
    </div>
    <div className="text-muted-foreground mt-1">{item.title}</div>
    <ul className="mt-3 space-y-2 list-disc pl-4">
      {item.bullets.map((b, i) => (
        <li key={i} className="leading-relaxed">{b}</li>
      ))}
    </ul>
    <div className="mt-3 flex flex-wrap gap-2">
      {item.tech.map((t) => (
        <Pill key={t}>{t}</Pill>
      ))}
    </div>
    {item.link && (
      <div className="mt-3">
        <Button variant="ghost" size="sm" asChild>
          <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <LinkIcon className="w-4 h-4" /> View Work
          </a>
        </Button>
      </div>
    )}
  </div>
);

const ContactRow = ({ icon: Icon, children, href }) => (
  <a href={href} className="group flex items-center gap-3 rounded-xl border p-3 hover:bg-accent/40 transition-colors" target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
    <Icon className="w-4 h-4" />
    <span className="group-hover:underline underline-offset-4">{children}</span>
    <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
);

export default function Portfolio() {
  // Inject keyframes for gradient shift
  const GlobalStyles = () => (
    <style>{`
      @keyframes gradientShift {
        0% { transform: translate3d(0,0,0) scale(1); filter:hue-rotate(0deg);}
        50% { transform: translate3d(2%, -2%, 0) scale(1.05); filter:hue-rotate(30deg);}
        100% { transform: translate3d(0,0,0) scale(1); filter:hue-rotate(0deg);}
      }
      .animate-gradientShift { animation: gradientShift 12s ease-in-out infinite; }
    `}</style>
  );
  const { dark, setDark } = useThemeToggle();

  const allSkillTags = useMemo(() => (
    [
      ...data.skills.languages,
      ...data.skills.frameworks,
      ...data.skills.concepts,
      ...data.skills.platforms,
      ...data.skills.tools,
      ...data.skills.design,
    ]
  ), []);

  const [query, setQuery] = useState("");
  const filtered = useMemo(() => allSkillTags.filter(s => s.toLowerCase().includes(query.toLowerCase())), [query, allSkillTags]);

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,80,180,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(80,200,255,0.35),transparent_60%)] transition-colors duration-700 text-foreground antialiased selection:bg-fuchsia-500/20">
        <GlobalStyles />
        <GradientBlobs />

        {/* NAV */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight">Ananya • Portfolio</a>
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild className="hidden md:inline-flex">
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" asChild className="hidden md:inline-flex">
                <a href="#experience">Experience</a>
              </Button>
              <Button variant="ghost" asChild className="hidden md:inline-flex">
                <a href="#skills">Skills</a>
              </Button>
              <Button variant="ghost" asChild className="hidden md:inline-flex">
                <a href="#education">Education</a>
              </Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">
                    {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle theme</TooltipContent>
              </Tooltip>
              <Button asChild>
                <a href="#contact"><Send className="w-4 h-4 mr-2" />Contact</a>
              </Button>
            </div>
          </nav>
        </header>

        {/* HERO */}
        <section id="home" className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-[1.15fr_.85fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-sm">
                <Sparkles className="w-4 h-4" /> Open to Internships & Projects
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                {data.name}
              </h1>
              <p className="mt-2 text-lg md:text-xl text-muted-foreground flex items-center gap-2">
                <Cpu className="w-5 h-5" /> {data.role}
              </p>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                {data.hero.sub}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <a href="#projects"><Sparkles className="w-4 h-4 mr-2" />View Projects</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#experience"><FileText className="w-4 h-4 mr-2" />Experience</a>
                </Button>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={data.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full border hover:bg-purple-500/30 transition-all duration-500 transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full border hover:bg-purple-500/30 transition-all duration-500 transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </motion.div>

            {/* PHOTO PLACEHOLDER */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
              <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-3xl border bg-gradient-to-br from-muted/60 to-background/60 backdrop-blur flex items-center justify-center overflow-hidden shadow-xl">
                {/* Replace src with your actual photo path (e.g., /ananya.jpg) */}
                <img src="/ananya.jpg" alt="Ananya's portrait placeholder" className="w-full h-full object-cover hidden" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center px-6">
                    <div className="text-sm text-muted-foreground">Photo Placeholder</div>
                    <div className="text-base font-medium mt-1">Add your photo at <code>/public/ananya.jpg</code></div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -inset-3 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/20 to-amber-300/20 blur-2xl" />
            </motion.div>
          </div>
        </section>

        {/* ABOUT ME */}
        <Section id="about" title="About Me" icon={Sparkles} className="py-16">
          <div className="max-w-4xl text-lg leading-relaxed text-muted-foreground space-y-4">
            <p>
              Hi! I’m <span className="font-semibold text-foreground">Ananya Baghel</span>, a passionate and curious
              <span className="font-medium"> Software Engineer and GenAI Enthusiast</span> who loves building meaningful, intelligent,
              and aesthetically delightful digital experiences. I’m obsessed with blending <span className="font-medium">technology, creativity,
              and problem‑solving</span> to craft solutions that make life easier, smarter, and more fun.
            </p>
            <p>
              Whether it’s creating beautiful interfaces, building AI‑powered tools, or turning raw data into powerful insights,
              I put my heart into everything I build. I love exploring new technologies, experimenting with ideas, and continuously learning
              whatever helps me become a better engineer and a more creative individual.
            </p>
            <p>
              Outside of tech, I enjoy designing, organizing events, capturing memories, and working on projects that inspire people.
              I believe in growing with every step and creating an impact—no matter how small.
            </p>
            <p className="font-medium text-foreground">
              If my work resonates with you, scroll down — there’s so much more I’d love to show you! ✨
            </p>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills & Stack" icon={Sparkles}>
          <Tabs defaultValue="by-cat" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
              <TabsTrigger value="by-cat">By Category</TabsTrigger>
              <TabsTrigger value="all">All Tags</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="concepts">Concepts</TabsTrigger>
              <TabsTrigger value="platforms">Platforms</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            <TabsContent value="by-cat" className="mt-6 grid md:grid-cols-2 gap-6">
              {Object.entries(data.skills).map(([k, arr]) => (
                <Card key={k} className="border-border/60">
                  <CardHeader>
                    <CardTitle className="capitalize">{k}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {arr.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="all" className="mt-6">
              <div className="mb-4 flex items-center gap-3">
                <Input placeholder="Filter skills…" value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-xs" />
                <Badge variant="secondary">{filtered.length} shown</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {filtered.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="frameworks" className="mt-6">
              <div className="flex flex-wrap gap-2">{data.skills.frameworks.map((s) => <Pill key={s}>{s}</Pill>)}</div>
            </TabsContent>
            <TabsContent value="concepts" className="mt-6">
              <div className="flex flex-wrap gap-2">{data.skills.concepts.map((s) => <Pill key={s}>{s}</Pill>)}</div>
            </TabsContent>
            <TabsContent value="platforms" className="mt-6">
              <div className="flex flex-wrap gap-2">{data.skills.platforms.map((s) => <Pill key={s}>{s}</Pill>)}</div>
            </TabsContent>
            <TabsContent value="design" className="mt-6">
              <div className="flex flex-wrap gap-2">{data.skills.design.map((s) => <Pill key={s}>{s}</Pill>)}</div>
            </TabsContent>
          </Tabs>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Selected Projects" icon={Star}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <a href={data.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Github className="w-4 h-4" /> See more on GitHub
              </a>
            </Button>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience" icon={Building2}>
          <div className="relative">
            {data.experience.map((item) => (
              <ExperienceItem key={item.company} item={item} />
            ))}
          </div>
        </Section>

        {/* EDUCATION & ACHIEVEMENTS */}
        <Section id=\"education\" title=\"Education & Achievements\" icon={GraduationCap} className=\"pb-20 pt-14\">
          <div className=\"grid md:grid-cols-2 gap-12\">
            <Card className=\"border-border/60\">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className=\"space-y-6\">
                {data.education.map((e) => (
                  <div key={e.school} className=\"rounded-xl border p-5 shadow-sm bg-background/60 backdrop-blur-lg\">
                    <div className=\"font-medium text-lg\">{e.school}</div>
                    <div className=\"text-muted-foreground text-sm\">{e.period}</div>
                    <div className=\"mt-1 font-medium\">{e.degree}</div>
                    {e.detail && <div className=\"text-muted-foreground text-sm\">{e.detail}</div>}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className=\"border-border/60\">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className=\"space-y-4\">
                {data.achievements.map((a) => (
                  <div key={a.title} className=\"flex items-start gap-3 p-3 rounded-xl border bg-background/50 backdrop-blur\">
                    <ChevronRight className=\"w-4 h-4 mt-1 text-fuchsia-500\" />
                    <div>
                      <div className=\"font-medium leading-tight text-base\">{a.title}</div>
                      {a.period !== \"—\" && <div className=\"text-muted-foreground text-sm\">{a.period}</div>}
                      {a.desc && <div className=\"text-muted-foreground text-sm mt-1\">{a.desc}</div>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" icon={Send} className="pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Based in {data.location}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <ContactRow icon={Mail} href={`mailto:${data.email}`}>{data.email}</ContactRow>
                <ContactRow icon={Phone} href={`tel:${data.phone.replace(/\s/g, "")}`}>{data.phone}</ContactRow>
                <ContactRow icon={Github} href={data.links.github}>GitHub /Ananya-Baghel</ContactRow>
                <ContactRow icon={Linkedin} href={data.links.linkedin}>LinkedIn Profile</ContactRow>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader>
                <CardTitle>Resume</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Want the PDF version of my resume?</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="/Ananya_Baghel_Resume.pdf" download>
                      <Download className="w-4 h-4 mr-2" /> Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#home"><ArrowRight className="w-4 h-4 mr-2" />Back to top</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="border-t py-8">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4" /> {data.name} • {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-2">
              <a href="#home" className="hover:underline">Home</a>
              <span>•</span>
              <a href="#projects" className="hover:underline">Projects</a>
              <span>•</span>
              <a href="#experience" className="hover:underline">Experience</a>
              <span>•</span>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
