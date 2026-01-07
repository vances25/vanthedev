"use client";

import styles from "./Footer.module.css";

type Props = {
  name?: string;
  year?: number;
  instagramUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
};

export default function Footer({
  name = "Vance Schaefer",
  year = new Date().getFullYear(),
  instagramUrl = "https://www.instagram.com/vanceschaefer_/",
  linkedinUrl = "https://www.linkedin.com/in/vance-schaefer-64ba19367/",
  githubUrl = "https://github.com/",
  email = "scha1202@umn.edu",
}: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.tagline}>
              Full-stack developer building clean, fast, modern web apps.
            </p>
          </div>

          <div className={styles.links}>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#templates">Templates</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contact</a>
          </div>

          <div className={styles.social}>
            <a href={`mailto:${email}`}>Email</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} {name}</span>

        </div>
      </div>
    </footer>
  );
}