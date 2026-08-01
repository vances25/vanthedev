"use client";

import styles from "./Skills.module.css";

type SkillGroup = {
  label: string;
  items: string[];
};

const GROUPS: SkillGroup[] = [
  {
    label: "Cybersecurity",
    items: [
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "Wireshark",
      "Gobuster",
      "John the Ripper",
      "Linux privesc",
      "Web exploitation",
      "CTFs (TryHackMe)",
    ],
  },
  {
    label: "Embedded Systems",
    items: [
      "ESP32",
      "Arduino",
      "Raspberry Pi",
      "Wireless/WiFi integration",
      "Circuit design",
      "Firmware dev",
    ],
  },
  {
    label: "Programming",
    items: [
      "Python",
      "C++",
      "TypeScript",
      "JavaScript",
      "React / Next.js",
      "MongoDB",
      "JWT Auth",
    ],
  },
  {
    label: "DevOps & Tools",
    items: ["Linux", "GitHub", "Cloudflare", "Vercel"],
  },
  {
    label: "AI & LLMs",
    items: [
      "Claude",
      "GPT",
      "Local LLMs (Ollama)",
      "LLaMA / Mistral",
      "Prompt engineering",
      "AI agents",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.eyebrow}>
        <span className={styles.promptChar}>$</span> cat skills.json
      </p>
      <h2 className={styles.sectionTitle}>Skills &amp; Tools</h2>

      <div className={styles.grid}>
        {GROUPS.map((g) => (
          <div key={g.label} className={styles.card}>
            <h3 className={styles.groupLabel}>{g.label}</h3>
            <div className={styles.chips}>
              {g.items.map((item) => (
                <span key={item} className={styles.chip}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
