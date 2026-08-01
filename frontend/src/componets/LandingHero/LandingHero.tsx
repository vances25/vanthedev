"use client";

import styles from "./LandingHero.module.css";

export default function LandingHero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.kicker}>
          <span className={styles.dot} />
          COMPUTER ENGINEERING · OFFENSIVE SECURITY · EMBEDDED SYSTEMS
        </p>

        <h1 className={styles.title}>
          I break things, then learn how to <span>build</span> them{" "}
          <span>right</span>.
        </h1>

        <p className={styles.sub}>
          I&apos;m Vance — a Computer Engineering sophomore at the{" "}
          <b>University of Minnesota</b>. I started in full-stack development,
          moved into offensive security through CTFs and pentesting labs, and
          I&apos;m now pushing down into embedded systems, wireless hardware,
          and low-level firmware.
        </p>

        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
            <span className={styles.terminalTitle}>whoami.sh</span>
          </div>
          <div className={styles.terminalBody}>
            <p>
              <span className={styles.promptChar}>$</span> whoami
            </p>
            <p className={styles.out}>vance_schaefer — CompE @ UMN, class of 2029</p>
            <p>
              <span className={styles.promptChar}>$</span> cat interests.txt
            </p>
            <p className={styles.out}>
              pentesting · CTFs · ESP32/Arduino · circuit design · firmware
            </p>
            <p>
              <span className={styles.promptChar}>$</span> status
            </p>
            <p className={styles.out}>
              open to internships in cybersecurity + computer engineering
              <span className={styles.blinkCursor}>_</span>
            </p>
          </div>
        </div>

        <div className={styles.ctaRow}>
          <a className={styles.primary} href="#projects">
            View Projects
          </a>
          <a className={styles.secondary} href="#contacts">
            Get In Touch
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.photoWrap}>
          <img className={styles.photo} src="/me.png" alt="Vance Schaefer" />
          <div className={styles.frameTag}>
            <span className={styles.frameDot} />
            status: online
          </div>
        </div>
      </div>
    </section>
  );
}
