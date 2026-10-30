"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  MotionValue,
} from "framer-motion";

import { ArrowUpRight, Menu, X, Code2, Sparkles, Layers } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "My Web Project",
    type: "Pizzacorner website",
    link: "https://project-alijah.vercel.app/",
    images: [
      "https://thumbs.dreamstime.com/b/pieces-pizza-different-various-types-banner-old-retro-boards-still-life-concept-closeup-129819511.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AqV9FDoGhbclxmrTRXG8za9nIRCGZ-QuQGNyj38hOkCgI-RMBEHdxS1o&s=10",
      "https://thumbs.dreamstime.com/b/set-pizza-background-various-kinds-italian-fast-food-lunch-top-view-265118910.jpg",
    ],
  },
  {
    number: "02",
    name: "Creative Portfolio",
    type: "My basic intro",
    link: "https://portfolio-lyssintyn-alijah1.vercel.app/",
    images: [
      "https://i.ytimg.com/vi/JSFIGIA9Zrk/hqdefault.jpg",
      "https://cdn.dribbble.com/userupload/15359924/file/original-43c55306aaf7ee375f35a8bfc46064de.png?format=webp&resize=400x300&vertical=center",
      "https://s3.envato.com/files/655812123/Preview.__large_preview.jpg",
    ],
  },
  {
    number: "03",
    name: "Creative Web Design",
    type: "Developed clone od prime video",
    link: "https://web-evx8lrdd9-alijah1.vercel.app/",
    images: [
      "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
      "https://m.media-amazon.com/images/S/pv-target-images/7dff7d0cccead780f98462888e41a195a7354eda677d6c983cd1346f7700e2c9._SX1080_FMpng_.png",
      "https://image.slidesharecdn.com/amazonprimeclone11-251222100148-e55ab8f2/85/AMAZON-PRIME-CLONE-1-1-pdf-college-mini-project-3-320.jpg",
    ],
  },
];

const extraProjects = [
  {
    name: "Grid Design",
    link: "https://grid-n7c61uzcf-alijah1.vercel.app/",
  },
  {
    name: "Rhode Concept",
    link: "https://rhode-1gkm-ob78iffu3-alijah1.vercel.app/",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Figma",
  "JavaScript · Learning",
  "Python · Learning",
];

const services = [
  {
    no: "01",
    name: "WEB DEVELOPMENT",
    desc: "Building responsive and modern websites using HTML, CSS, Tailwind CSS and exploring JavaScript.",
  },
  {
    no: "02",
    name: "UI / UX DESIGN",
    desc: "Exploring creative layouts, clean interfaces and user-friendly digital experiences with Figma.",
  },
  {
    no: "03",
    name: "FRONTEND DEVELOPMENT",
    desc: "Turning design ideas into interactive web experiences while learning modern frontend technologies.",
  },
  {
    no: "04",
    name: "AI & DATA SCIENCE",
    desc: "Exploring artificial intelligence, Python and the exciting possibilities of data-driven technology.",
  },
  {
    no: "05",
    name: "CREATIVE EXPERIMENTS",
    desc: "Experimenting with animations, layouts, visual effects and new ideas to improve my creative skills.",
  },
];

const gallery = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ContactButton() {
  return (
    <motion.a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="contact-pill"
    >
      Contact Me <ArrowUpRight size={19} />
    </motion.a>
  );
}

function LiveProjectButton({ link }: { link: string }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ backgroundColor: "rgba(215,226,234,0.12)" }}
      className="live-pill"
    >
      Live Project <ArrowUpRight size={17} />
    </motion.a>
  );
}

function Magnet({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    if (
      Math.abs(dx) < rect.width / 2 + 150 &&
      Math.abs(dy) < rect.height / 2 + 150
    ) {
      x.set(dx / 3);
      y.set(dy / 3);
    }
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

/* Individual animated character component */

function AnimatedCharacter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.04), Math.min(1, end + 0.04)],
    [0, 1],
  );

  return (
    <span className="character">
      {char === " " ? "\u00A0" : char}

      <motion.span className="character-overlay" style={{ opacity }}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={ref} className="animated-copy">
      {text.split("").map((char, index) => (
        <AnimatedCharacter
          key={index}
          char={char}
          index={index}
          total={text.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero-section" id="home">
      <motion.nav
        className="top-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <a href="#home" className="brand-logo">
          AM<span>.</span>
        </a>

        <div className="desktop-nav">
          <a href="#about">About</a>
          <a href="#services">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <div className="mobile-nav">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </motion.nav>

      <div className="hero-title-wrap">
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        ></motion.p>

        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
        >
          HI,I &apos; M ALIJAH
        </motion.h1>
      </div>

      <div className="hero-orb-wrap">
        <Magnet>
          <motion.div
            className="hero-orb"
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="orb-ring ring-one"></div>
            <div className="orb-ring ring-two"></div>

            <div className="orb-core">
              <span>A</span>
              <small>CREATIVE MIND</small>
            </div>

            <Sparkles className="orb-spark" size={25} />
          </motion.div>
        </Magnet>
      </div>

      <div className="hero-bottom">
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          A B.VOC AI & DATA SCIENCE STUDENT DRIVEN BY CREATIVITY, TECHNOLOGY AND
          THE ART OF BUILDING DIGITAL EXPERIENCES.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ContactButton />
        </motion.div>
      </div>

      <span className="hero-side-label">DESIGN / DEVELOP / EXPLORE</span>
    </section>
  );
}

function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rowOneX = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const rowTwoX = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section className="marquee-section" ref={ref}>
      <div className="marquee-label">
        <span>Web Idea&apos;s</span>
        <span>CREATIVITY HAS NO LIMITS ↗</span>
      </div>

      <motion.div className="marquee-row" style={{ x: rowOneX }}>
        {[
          ...gallery.slice(0, 11),
          ...gallery.slice(0, 11),
          ...gallery.slice(0, 11),
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Creative website inspiration"
            loading="lazy"
          />
        ))}
      </motion.div>

      <motion.div className="marquee-row" style={{ x: rowTwoX }}>
        {[...gallery.slice(11), ...gallery.slice(11), ...gallery.slice(11)].map(
          (src, i) => (
            <img
              key={i}
              src={src}
              alt="Creative design inspiration"
              loading="lazy"
            />
          ),
        )}
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const aboutText =
    "I'm Alijah Malik, a first-year B.Voc Artificial Intelligence and Data Science student.I enjoy exploring web development, creative design and emerging technologies. Every project gives me an opportunity to learn, experiment and turn an idea into something real.  I'm building my skills one step at a time, and this is just the beginning of my journey.";

  return (
    <section className="about-section" id="about">
      <motion.div
        className="decor decor-moon"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.9 }}
      >
        <span>☾</span>
      </motion.div>

      <motion.div
        className="decor decor-star"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.9 }}
      >
        <Sparkles size={100} strokeWidth={0.7} />
      </motion.div>

      <motion.div
        className="decor decor-cube"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.9 }}
      >
        <Layers size={100} strokeWidth={0.7} />
      </motion.div>

      <motion.div
        className="decor decor-code"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        <Code2 size={100} strokeWidth={0.7} />
      </motion.div>

      <div className="about-content">
        <FadeIn>
          {/* <span className="section-kicker">A LITTLE INTRODUCTION</span> */}
          <h2 className="hero-heading about-title">ABOUT ME</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <FadeIn delay={0.2}>
            <div className="w-full max-w-2xl whitespace-normal break-words">
              <AnimatedText text={aboutText} />
            </div>
          </FadeIn>
        </FadeIn>

        <FadeIn delay={0.3}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <FadeIn>
        <span className="section-kicker dark-kicker">WHAT I'M EXPLORING</span>
        <h2 className="services-heading">MY SKILLS</h2>
      </FadeIn>

      <div className="service-list">
        {services.map((service, index) => (
          <FadeIn delay={index * 0.1} key={service.no}>
            <div className="service-item">
              <span className="service-number">{service.no}</span>

              <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>

              <ArrowUpRight className="service-arrow" size={25} />
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="skills-strip">
          <span>MY TOOLKIT</span>

          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const container = useRef<HTMLDivElement>(null);

  const targetScale = 1 - (projects.length - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={container} className="project-container">
      <motion.article
        className="project-card"
        style={{
          scale,
          top: `calc(6rem + ${index * 28}px)`,
        }}
      >
        <div className="project-card-top">
          <span className="project-index">{project.number}</span>

          <div className="project-title-group">
            <span className="project-type">{project.type}</span>
            <h3>{project.name}</h3>
          </div>

          <LiveProjectButton link={project.link} />
        </div>

        <div className="project-image-grid">
          <div className="project-image-left">
            <img
              src={project.images[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
            />

            <img
              src={project.images[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
            />
          </div>

          <div className="project-image-right">
            <img
              src={project.images[2]}
              alt={`${project.name} main preview`}
              loading="lazy"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <FadeIn>
          <h2 className="hero-heading">PROJECTS</h2>

          <p>Some of the digital experiences I've been working on.</p>
        </FadeIn>
      </div>

      <div className="project-stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>

      <div className="extra-projects">
        <FadeIn>
          <span className="section-kicker">MORE EXPERIMENTS</span>

          <div className="extra-project-grid">
            {extraProjects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
                className="extra-project"
              >
                <span>0{index + 4}</span>
                <h3>{project.name}</h3>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <FadeIn>
        <span className="section-kicker">HAVE AN IDEA?</span>

        <h2 className="hero-heading footer-heading">
          LET'S CONNECT<span>.</span>
        </h2>

        <p>
          Learning today, creating tomorrow. Let's connect and explore new
          possibilities.
        </p>

        <div className="footer-actions">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <Code2 size={20} />
            GITHUB
            <ArrowUpRight size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <Code2 size={20} />
            LINKDIN
            <ArrowUpRight size={18} />
          </a>

          <a href="#home" className="back-top">
            BACK TO TOP ↑
          </a>
        </div>
      </FadeIn>

      <div className="footer-bottom">
        <a href="#home" className="brand-logo">
          AM<span>.</span>
        </a>

        <span>DESIGNED & BUILT BY ALIJAH MALIK</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="portfolio-wrapper">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
