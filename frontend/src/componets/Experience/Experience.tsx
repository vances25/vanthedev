"use client";

import styles from "./Experience.module.css";

type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  highlight?: boolean;
};

const ENTRIES: ExperienceEntry[] = [
  {
    role: "Software Developer",
    org: "NASA HUNCH Program",
    period: "2024 — 2025",
    highlight: true,
    bullets: [
      "Collaborated with a team of 3 to design and build SpaceSync, a web app calculating real-time time conversions across every planet in the solar system for space mission scheduling",
      "Built and shipped core frontend UI components in Next.js for a clean, responsive experience",
      "Selected from a competitive national pool to fly to Houston, TX and present the project directly to NASA engineers at Johnson Space Center",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Independent",
    period: "2024 — Present",
    bullets: [
      "Delivered 4+ custom websites for small businesses and individuals, owning the full lifecycle from requirements through deployment",
      "Built full-stack apps with Next.js, FastAPI, and MongoDB, including JWT authentication",
      "Managed deployment, hosting, and ongoing maintenance via Cloudflare and Vercel",
    ],
  },
  {
    role: "WiFi-Enabled Embedded Devices & Security Testing",
    org: "Self-Directed Study",
    period: "Ongoing",
    bullets: [
      "Building WiFi-connected devices on ESP32 and Arduino, integrating sensors and wireless communication",
      "Applying offensive security skills to embedded/IoT contexts — packet sniffing, network exposure, and other real-world attack surfaces",
      "Extending self-study into circuit design and firmware development, plus mechanical and automotive diagnostics",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <p className={styles.eyebrow}>
        <span className={styles.promptChar}>$</span> git log --experience
      </p>
      <h2 className={styles.sectionTitle}>Experience</h2>

      <div className={styles.timeline}>
        {ENTRIES.map((e) => (
          <div
            key={e.role}
            className={e.highlight ? styles.cardHighlight : styles.card}
          >
            <div className={styles.cardTop}>
              <h3 className={styles.role}>{e.role}</h3>
              <span className={styles.period}>{e.period}</span>
            </div>
            <p className={styles.org}>{e.org}</p>
            <ul className={styles.bullets}>
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
