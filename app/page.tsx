"use client";

import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDownRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Command, Download, Code2, GraduationCap, Link, Mail, BarChart3,
  Menu, X, Zap, Layers3, Boxes, FileText, Award, BookOpen, CookingPot, MapPin
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  { no: "01", title: "Swasthatha", tag: "PRODUCT + SOFTWARE", tone: "red", metric: "0→1 Mobile Product", icon: Layers3, description: "A privacy-first mental wellness companion built for thoughtful reflection.", stack: ["React Native", "Supabase", "Product Design"], role: "Product Manager · AI Engineer · Mobile Developer", status: "Ongoing", problem: "Mental wellness apps often feel either clinical and overwhelming or conversational but generic, while sensitive personal reflections raise serious questions about privacy and control.", contribution: "I shaped the product strategy, designed the emotional journey, engineered the mobile experience, connected authentication and storage, and iterated the assistant’s conversation behavior through prompt design and testing.", decisions: ["Local-only or cloud-sync privacy controls", "Context-aware breathing instead of a permanent widget", "Reflection-oriented guidance rather than dependency", "A notebook feel without sacrificing mobile usability"], outcome: "A working cross-platform product with authentication, profiles, conversations, journals, check-ins, timelines, privacy controls and session summaries.", deepDive: true, github: "https://github.com/cherisha2003/Swasthatha" },
  { no: "02", title: "Cleft Detection", tag: "AI + RESEARCH", tone: "teal", metric: "Clinical CV", icon: BrainCircuit, description: "A research-backed prenatal ultrasound classification system.", stack: ["Python", "TensorFlow", "Grad-CAM"], role: "Machine Learning Researcher · Developer", status: "Presented at ICCCNT 2025", problem: "Prenatal cleft detection from ultrasound imagery is difficult because image quality varies, relevant features can be subtle, and clinicians need more than an unexplained prediction.", contribution: "I prepared and expanded the dataset, trained and compared CNN architectures, evaluated classification performance, added Grad-CAM explanations, and helped translate the work into a research paper and conference presentation.", decisions: ["Compared multiple transfer-learning architectures", "Used augmentation for a limited medical dataset", "Added Grad-CAM for model transparency", "Included input-quality thinking for dependable inference"], outcome: "Produced a high-performing research prototype, documented the methodology in a six-page paper, and presented the work at ICCCNT 2025 at IIT Indore.", paper: "/Cleft_Detection_Antenatal_Scan_Paper.pdf", certificate: "/Cherisha_KG_ICCCNT_2025_Presentation_Certificate.pdf", github: "https://github.com/cherisha2003/cleft-detection-" },
  { no: "03", title: "Personal Finance Intelligence", tag: "DATA + PRODUCT", tone: "gold", metric: "Smart Expense Dashboard", icon: BarChart3, description: "A personal finance dashboard that turns bill screenshots into categorized expenses, savings insights and practical recommendations for better spending decisions.", stack: ["OCR", "Data Analytics", "Dashboard Design"], role: "Product Manager · Data Analyst · Developer", status: "Work in progress", problem: "Personal spending is spread across receipts, bills and transactions. Manually entering every expense is tedious, while most finance apps show totals without explaining where money is going or what behavior could realistically change.", contribution: "I am designing the end-to-end product: bill-image upload, OCR-based information extraction, automatic expense categorization, spending and savings calculations, dashboard metrics, trend analysis and personalized recommendations.", decisions: ["Use bill screenshots to reduce manual data entry", "Let users verify extracted merchant, date, total and category", "Show category spending, cash flow and savings together", "Turn patterns into specific, non-judgmental suggestions"], outcome: "The project is currently in development. The planned experience will scan bills, calculate monthly spending and savings, visualize category trends, flag unusual or avoidable expenses, and suggest realistic areas where the user can cut back." },
  { no: "04", title: "Pet Next Door", tag: "SOFTWARE ENGINEERING", tone: "peacock", metric: "Community Platform", icon: Code2, description: "A community platform connecting pet owners and local support.", stack: ["Django", "GitHub", "Agile"], role: "Software Engineer · Product Contributor", status: "Academic team project", problem: "Pet owners use separate channels for playdates, lost-pet alerts, adoption and safety information, making local coordination slow and inconsistent.", contribution: "I helped define stakeholders and requirements, shaped the feature set and architecture, supported sprint planning, and contributed to the Django-based implementation and project communication.", decisions: ["Unified several community needs in one platform", "Used location-aware flows for lost-pet alerts", "Structured work through requirements and agile sprints", "Balanced owner, shelter and community stakeholder needs"], outcome: "Delivered a documented software product concept and implementation covering pet profiles, playdates, lost-and-found, adoption or foster workflows and safety alerts.", github: "https://github.com/dubemmmm/swe-fall-2025-project" },
];

type Project = (typeof projects)[number];

const caseStudies = [
  { index: "A", label: "PRODUCT CASE STUDY", title: "Designing trust into an AI wellness product", project: "Swasthatha", summary: "How I translated a sensitive user problem into privacy controls, contextual interventions and a calmer conversation experience.", details: [["Problem", "Support should feel human without taking away user control."], ["My role", "Product strategy, UX decisions and full-stack implementation."], ["Focus", "Privacy, retention, emotional safety and usability."]] },
  { index: "B", label: "DATA + PRODUCT CASE STUDY", title: "Turning bill screenshots into better money decisions", project: "Personal Finance Intelligence", summary: "A work-in-progress dashboard that removes manual expense tracking and translates everyday bills into spending patterns, savings visibility and useful next steps.", details: [["Problem", "Expense data is scattered and manual tracking creates friction."], ["My role", "Product design, data logic and dashboard development."], ["Focus", "OCR extraction, categorization, cash flow, savings and recommendations."]] },
];

const experience = [
  ["2026", "Software Engineering Intern", "Fluezen Technology", "Built and tested client-focused web and mobile application features."],
  ["2024", "Software Engineering Intern", "TYNYBAY", "Shipped features, debugged systems and collaborated in agile product workflows."],
  ["2023", "Web Development Intern", "Acaprep", "Redesigned the education platform, lifting traffic 73% YoY and reducing load time 30%."],
  ["2023", "Product Engineering Intern", "TANSAM", "Developed an automated starter-motor defect monitoring solution."],
  ["2022", "Machine Learning Intern", "Edu-versity", "Built diabetes prediction and fraudulent transaction detection models."],
];

const swasthathaPrinciples = [
  ["01", "Human-centered AI", "Respond like a thoughtful listener: acknowledge the moment, offer a gentle option and avoid scripted interrogation."],
  ["02", "Context-aware support", "Recognize anxiety, stress, loneliness and emotional overload, then adapt the response to the user’s intensity."],
  ["03", "Privacy by choice", "Let users decide whether sensitive conversations stay on-device or synchronize securely through Supabase."],
  ["04", "Reflection, not dependency", "Encourage journaling, communication and healthy coping strategies without positioning the product as a therapist."],
  ["05", "Calm by design", "Use warm neutrals, notebook cues, generous spacing and restrained motion to lower cognitive load."],
];

const swasthathaFeatures = ["Context-aware AI conversations", "Smart journal + gratitude prompts", "Daily emotional check-ins", "Timeline-based reflection history", "AI-generated session summaries", "On-device or cloud privacy controls", "Emotion tracking + insights", "Distress-triggered guided breathing"];

function CommandPalette({ open, close }: { open: boolean; close: () => void }) {
  const items = [["Selected work", "#work"], ["Experience", "#experience"], ["About", "#about"], ["LinkedIn", "https://www.linkedin.com/in/cherishakg/"]];
  return <AnimatePresence>{open && <motion.div className="palette-wrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={close}>
    <motion.div className="palette" initial={{opacity:0, y:-20, scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-12,scale:.98}} onMouseDown={e=>e.stopPropagation()}>
      <div className="palette-search"><Command size={16}/><input autoFocus placeholder="Type a command or search…"/><kbd>ESC</kbd></div>
      <p>QUICK NAVIGATION</p>
      {items.map(([label, href],i)=><a key={label} href={href} onClick={close}><span>0{i+1}</span>{label}<ArrowUpRight size={16}/></a>)}
    </motion.div>
  </motion.div>}</AnimatePresence>;
}

export default function Home() {
  const [palette, setPalette] = useState(false);
  const [menu, setMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(()=>{
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let id=0; const raf=(t:number)=>{lenis.raf(t); id=requestAnimationFrame(raf)}; id=requestAnimationFrame(raf);
    const key=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();setPalette(v=>!v)}if(e.key==="Escape")setPalette(false)};
    window.addEventListener("keydown",key); return()=>{cancelAnimationFrame(id);lenis.destroy();window.removeEventListener("keydown",key)};
  },[]);
  return <main>
    <CommandPalette open={palette} close={()=>setPalette(false)}/>
    <AnimatePresence>{selectedProject && <motion.div className="project-modal-wrap" data-lenis-prevent initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={()=>setSelectedProject(null)}>
      <motion.article className={`project-modal ${selectedProject.tone}`} initial={{opacity:0,y:28,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:18,scale:.98}} onMouseDown={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button className="modal-close" onClick={()=>setSelectedProject(null)} aria-label="Close project details"><X/></button>
        <div className="modal-kicker"><span>{selectedProject.no} / {selectedProject.tag}</span><b>{selectedProject.status}</b></div>
        <h2 id="project-modal-title">{selectedProject.title}</h2>
        <p className="modal-lead">{selectedProject.description}</p>
        <div className="modal-meta"><div><span>MY ROLE</span><b>{selectedProject.role}</b></div><div><span>TOOLS</span><b>{selectedProject.stack.join(" · ")}</b></div></div>
        <div className="modal-sections">
          <section><span>01 / THE PROBLEM</span><h3>Why this needed to exist</h3><p>{selectedProject.problem}</p></section>
          <section><span>02 / WHAT I DID</span><h3>My contribution</h3><p>{selectedProject.contribution}</p></section>
          <section><span>03 / KEY DECISIONS</span><h3>How I approached it</h3><ul>{selectedProject.decisions.map(item=><li key={item}>{item}</li>)}</ul></section>
          <section><span>04 / OUTCOME</span><h3>Where the work stands</h3><p>{selectedProject.outcome}</p></section>
        </div>
        <div className="modal-actions">
          {selectedProject.deepDive && <a href="https://github.com/cherisha2003/Swasthatha" target="_blank">EXPLORE CASE STUDY <ArrowUpRight/></a>}
          {"github" in selectedProject && selectedProject.github && <a href={selectedProject.github} target="_blank"><Code2/> VIEW CODE ON GITHUB</a>}
          {selectedProject.paper && <a href={selectedProject.paper} target="_blank"><FileText/> VIEW PAPER</a>}
          {selectedProject.certificate && <a href={selectedProject.certificate} target="_blank"><Award/> VIEW CERTIFICATE</a>}
        </div>
      </motion.article>
    </motion.div>}</AnimatePresence>
    <nav className="nav shell">
      <a className="brand" href="#top"><span>CKG</span><div>CHERISHA<br/><b>TECH · DATA · PRODUCT</b></div></a>
      <div className="nav-links"><a href="#work">PROJECTS</a><a href="#experience">EXPERIENCE</a><a href="#about">ABOUT</a></div>
      <button className="command-btn" onClick={()=>setPalette(true)}><Command size={14}/> COMMAND <kbd>⌘ K</kbd></button>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
      {menu&&<div className="mobile-menu"><a href="#work">PROJECTS</a><a href="#experience">EXPERIENCE</a><a href="#about">ABOUT</a></div>}
    </nav>

    <section id="top" className="hero shell">
      <div className="hero-copy">
        <div className="eyebrow"><i/> COMPUTER SCIENCE + PRODUCT <span>/</span> ATLANTA, GA</div>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>CHERISHA<br/><em>KILLARI</em><br/>GIRIBABU.</motion.h1>
        <p>Computer science graduate student building thoughtful work across software engineering, data, AI/ML and product.</p>
        <div className="hero-actions"><a className="primary" href="#work">EXPLORE MY WORK <ArrowDownRight size={17}/></a><a className="text-link" href="/Cherisha_KG_Resume.docx" download><Download size={15}/> RESUME</a></div>
      </div>
      <div className="hero-focus" aria-label="Areas of focus"><span>AREAS OF FOCUS</span><div>SOFTWARE ENGINEERING</div><div>DATA &amp; ANALYTICS</div><div>AI &amp; MACHINE LEARNING</div><div>PRODUCT MANAGEMENT</div></div>
      <div className="hero-side"><span>EXPLORE THE WORK</span><div/><ArrowDownRight size={16}/></div>
    </section>

    <section className="status shell">
      <div><span className="pulse"/><small>STATUS</small><b>OPEN TO OPPORTUNITIES</b></div>
      <div><small>CURRENTLY</small><b>MS COMPUTER SCIENCE @ GSU</b></div>
      <div><small>DISCIPLINES</small><b>SOFTWARE · DATA · AI/ML · PRODUCT</b></div>
      <div><small>LOCAL TIME</small><b>ATL / EST</b></div>
    </section>

    <section id="work" className="section shell">
      <div className="section-head"><div><span>01 / SELECTED WORK</span><h2>BUILT WITH<br/><em>PURPOSE</em></h2></div><p>A cross-disciplinary portfolio of software, data, machine learning and product work—each chosen for the problem it solves.</p></div>
      <div className="projects">{projects.map((p,i)=><motion.article className={`project ${p.tone}`} key={p.title} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.06}}>
        <div className="project-top"><span>{p.no}</span><b>{p.tag}</b><ArrowUpRight/></div>{p.title === "Cleft Detection" ? <div className="cleft-proof-visual"><a href="/Cleft_Detection_Antenatal_Scan_Paper.pdf" target="_blank"><img src="/cleft-detection-paper-cover.png" alt="First page of Cherisha KG's cleft detection research paper"/><span><FileText/> RESEARCH PAPER</span></a><a href="/Cherisha_KG_ICCCNT_2025_Presentation_Certificate.pdf" target="_blank"><img src="/cleft-presentation-certificate.png" alt="ICCCNT 2025 presentation certificate awarded to Cherisha KG"/><span><Award/> PRESENTATION CERTIFICATE</span></a></div> : <div className="project-visual"><div className="visual-grid"/><p.icon/><strong>{p.metric}</strong></div>}
        <h3>{p.title}</h3><p>{p.description}</p><div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div><button className="project-link" onClick={()=>setSelectedProject(p)}>VIEW PROJECT <ArrowUpRight size={14}/></button>{p.title === "Cleft Detection" && <div className="proof-links"><a href="/Cleft_Detection_Antenatal_Scan_Paper.pdf" target="_blank"><FileText size={14}/> VIEW PAPER</a><a href="/Cherisha_KG_ICCCNT_2025_Presentation_Certificate.pdf" target="_blank"><Award size={14}/> VIEW CERTIFICATE</a></div>}
      </motion.article>)}</div>
    </section>

    <section id="swasthatha" className="section shell swasthatha-study">
      <div className="study-hero">
        <div className="study-kicker"><span>FEATURED PRODUCT CASE STUDY</span><b>ONGOING</b></div>
        <div className="study-title"><div><small>SWASTHATHA</small><h2>AI-POWERED<br/><em>MENTAL WELLNESS</em><br/>COMPANION</h2></div><p>A privacy-first mobile product designed to make emotional reflection feel more human, more useful and less clinical—without pretending to replace professional therapy.</p></div>
        <div className="study-meta"><div><span>ROLE</span><b>Product Manager · AI Engineer · Mobile Developer</b></div><div><span>PLATFORM</span><b>React Native · Expo · TypeScript</b></div><div><span>SYSTEMS</span><b>Supabase · OpenAI API · AsyncStorage</b></div></div>
      </div>
      <div className="study-grid"><aside><span>THE OPPORTUNITY</span><strong>01</strong></aside><div className="study-copy"><h3>Supportive technology often misses the emotional middle.</h3><p>Mental wellness products commonly feel either clinical and overwhelming or conversational but generic. AI companions repeat questions, lose context and sound robotic; journaling apps preserve text but provide little guidance or continuity. For users sharing deeply sensitive thoughts, uncertainty about who can access that data creates another barrier.</p><div className="problem-pair"><div><b>AI companions</b><p>Repetitive dialogue, shallow memory, unnecessary follow-ups and limited emotional awareness.</p></div><div><b>Digital journals</b><p>Static note storage, minimal personalization and few useful summaries or contextual insights.</p></div></div></div></div>
      <div className="study-grid"><aside><span>PRODUCT GOAL</span><strong>02</strong></aside><div className="study-copy"><h3>Reduce emotional friction while preserving agency.</h3><p>I defined the product around one question: how might an AI companion encourage meaningful reflection while keeping users in control? The resulting goal was not maximum engagement. It was a calmer, safer interaction that helps someone pause, understand what they are feeling and choose a healthy next step.</p><div className="principles">{swasthathaPrinciples.map(([no,title,copy])=><div key={no}><span>{no}</span><h4>{title}</h4><p>{copy}</p></div>)}</div></div></div>
      <div className="study-grid"><aside><span>DESIGN PROCESS</span><strong>03</strong></aside><div className="study-copy"><h3>From broad wellness idea to focused emotional journey.</h3><div className="process-flow">{[["Research","Reviewed journaling products, AI companions, CBT-inspired language, mindfulness patterns and Apple’s interface guidance."],["Journey","Simplified the experience into check-in → journal → conversation → summary → insight, with one calm task at a time."],["AI behavior","Iterated prompts to acknowledge emotion, remember context, reduce repetition and trigger breathing only when distress is present."],["Journal UX","Replaced fragile individual notebook lines with a reliable multiline editor that retains the handwritten-page feeling."],["Privacy","Designed local-only persistence and optional cloud sync so the storage decision remains visible and user-controlled."]].map(([title,copy],i)=><div key={title}><span>0{i+1}</span><b>{title}</b><p>{copy}</p></div>)}</div></div></div>
      <div className="study-grid"><aside><span>THE PRODUCT</span><strong>04</strong></aside><div className="study-copy"><h3>One connected system for conversation, journaling and insight.</h3><div className="feature-grid">{swasthathaFeatures.map((feature,i)=><div key={feature}><span>{String(i+1).padStart(2,"0")}</span><b>{feature}</b></div>)}</div><blockquote>“That sounds exhausting. Would taking a short walk or writing down what’s bothering you help today?”<span>CONVERSATION PRINCIPLE · VALIDATE, THEN OFFER A CHOICE</span></blockquote></div></div>
      <div className="study-grid"><aside><span>TRADEOFFS</span><strong>05</strong></aside><div className="study-copy"><h3>The hardest work sits between technical capability and user trust.</h3><div className="challenge-list">{[["Safety","Create empathy without presenting the assistant as a licensed therapist."],["Privacy","Offer useful cloud continuity without making sensitive-data ownership unclear."],["Memory","Preserve conversational context while keeping mobile interactions responsive."],["Usability","Keep notebook aesthetics without sacrificing editing, wrapping or persistence."],["Restraint","Design a calming interface without adding distracting wellness features everywhere."]].map(([title,copy])=><div key={title}><b>{title}</b><p>{copy}</p></div>)}</div></div></div>
      <div className="study-outcome"><div><span>CURRENT PROGRESS</span><h3>A working product, still becoming more personal.</h3><p>Authentication, user profiles, AI conversations, journaling, gratitude entries, daily check-ins, timelines, privacy controls and responsive mobile flows are implemented. Current work focuses on the advanced journal editor, stronger conversation memory, mood analytics and personalized coping recommendations.</p></div><div className="outcome-card"><span>PRODUCT THESIS</span><strong>MEANINGFUL INTERACTION<br/>OVER MAXIMUM ENGAGEMENT</strong><p>Swasthatha demonstrates how product judgment, mobile engineering and responsible AI can work together to create trust around an intensely personal use case.</p></div></div>
    </section>

    <section id="case-studies" className="section shell case-section">
      <div className="section-head"><div><span>02 / CASE STUDIES</span><h2>HOW I<br/><em>THINK</em></h2></div><p>Deeper stories about the choices behind the work: framing the problem, balancing constraints and deciding what to build.</p></div>
      <div className="case-list">{caseStudies.map((study, i)=><motion.article className="case-card" key={study.project} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}}>
        <div className="case-index">{study.index}</div><div className="case-main"><span>{study.label} · {study.project}</span><h3>{study.title}</h3><p>{study.summary}</p></div><div className="case-details">{study.details.map(([key,value])=><div key={key}><b>{key}</b><p>{value}</p></div>)}</div><ArrowUpRight className="case-arrow"/>
      </motion.article>)}</div>
    </section>

    <section id="experience" className="section shell experience">
      <div className="section-head compact"><div><span>03 / EXPERIENCE</span><h2>WHERE I’VE<br/><em>CONTRIBUTED</em></h2></div><BriefcaseBusiness/></div>
      <div className="timeline">{experience.map(([year,role,company,desc])=><div className="timeline-row" key={company}><span>{year}</span><h3>{role}<small>{company}</small></h3><p>{desc}</p><ArrowUpRight/></div>)}</div>
    </section>

    <section id="about" className="section shell about">
      <div className="about-copy"><span>03 / ABOUT</span><h2>A LITTLE<br/><em>ABOUT ME.</em></h2><p>I’m Cherisha, an MS Computer Science student at Georgia State University with a background in software engineering, data, machine learning and product thinking. I like understanding why a problem matters, learning the domain and building solutions that are useful—not just technically impressive.</p><p>Outside work and university, I enjoy cooking, reading novels and exploring new places around town.</p><div className="about-hobbies"><span><CookingPot/> Cooking</span><span><BookOpen/> Reading novels</span><span><MapPin/> Exploring places</span></div><div className="about-links"><a href="https://github.com/cherisha2003" target="_blank"><Code2/> GITHUB</a><a href="https://www.linkedin.com/in/cherishakg/" target="_blank"><Link/> LINKEDIN</a><a href="mailto:cherishakg2003@gmail.com"><Mail/> EMAIL</a></div><div className="education"><GraduationCap/><div><b>Georgia State University</b><span>MS Computer Science · Present</span></div><div><b>Hindustan Institute of Technology</b><span>B.Tech CSE (AI & ML) · 2025</span></div></div></div>
      <div className="skills-panel"><div className="panel-head"><Boxes size={17}/><span>OVERVIEW</span><i/></div><div className="skill-grid">{["Software Engineering","Data Analysis","Product Strategy","Machine Learning"].map((s,i)=><div key={s}><span>0{i+1}</span>{s}<b style={{width:`${94-i*5}%`}}/></div>)}</div><div className="terminal-line"><span>›</span> Curious about people, systems and better ways to build.<i/></div></div>
    </section>

    <section className="contact shell"><div className="contact-orb"><Zap/></div><span>LET’S CONNECT</span><h2>WANT TO<br/><em>TALK?</em></h2><a href="https://www.linkedin.com/in/cherishakg/" target="_blank">CONNECT WITH ME <ArrowUpRight/></a></section>
    <footer className="shell"><div className="brand"><span>CKG</span><div>CHERISHA<br/><b>TECH · DATA · PRODUCT</b></div></div><p>BUILT AROUND CURIOSITY, CLARITY &amp; REAL PROBLEMS © 2026</p><div><a href="https://www.linkedin.com/in/cherishakg/" target="_blank" aria-label="LinkedIn"><Link/></a><a href="mailto:cherishakg2003@gmail.com" aria-label="Email"><Mail/></a><a href="https://github.com/cherisha2003" target="_blank" aria-label="GitHub"><Code2/></a></div></footer>
  </main>;
}
