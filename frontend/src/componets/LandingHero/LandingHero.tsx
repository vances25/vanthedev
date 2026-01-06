"use client";

import styles from "./LandingHero.module.css";

export default function LandingHero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.kicker}>FULL-STACK DEVELOPER</p>

        <h1 className={styles.title}>
          Building clean web apps that feel <span>fast</span> and{" "}
          <span>modern</span>.
        </h1>

        <p className={styles.sub}>
          I’m Vance — a <b>University of Minnesota</b> student studying{" "}
          <b>Computer Engineering</b>. I build <b>Next.js / React</b> frontends and{" "}
          <b>FastAPI</b> backends with a strong focus on clean code, performance,
          and polished UI.
        </p>

        <div className={styles.chips}>
          <span>Next.js</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>FastAPI</span>
          <span>MongoDB</span>
          <span>REST APIs</span>
          <span>Auth / JWT</span>
        </div>

        <p className={styles.sub}>
          I’m currently open to <b>freelance work</b>, <b>internships</b>, and{" "}
          <b>collaborations</b>. If you need a landing page, a full-stack app, or a
          clean backend API, I can help bring it to life.
        </p>

        <div className={styles.ctaRow}>
          <a className={styles.primary} href="#projects">
            See My Work
          </a>

          <a className={styles.secondary} href="mailto:scha1202@umn.edu">
            Email Me
          </a>

          <a
            className={styles.secondary}
            href="https://www.linkedin.com/in/vance-schaefer-64ba19367/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.photoWrap}>
          <img className={styles.photo} src="/me.png" alt="Vance" />
        </div>
      </div>
    </section>
  );
}