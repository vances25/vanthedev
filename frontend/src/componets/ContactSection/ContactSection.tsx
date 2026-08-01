"use client";

import styles from "./ContactSection.module.css";

type Props = {
  id?: string;
  heading?: string;
  subheading?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  email?: string;
};

export default function ContactSection({
  id = "contacts",
  heading = "Let’s Talk",
  subheading = "Open to internships and collaborations in cybersecurity and computer engineering.",
  instagramUrl = "https://www.instagram.com/vanceschaefer_/",
  linkedinUrl = "https://www.linkedin.com/in/vance-schaefer-64ba19367/",
  email = "scha1202@umn.edu",
}: Props) {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Internship / opportunity"
  )}&body=${encodeURIComponent(
    `Hey Vance,\n\nReaching out about:\n\n`
  )}`;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.promptChar}>$</span> ./contact --init
          </p>
          <h2 className={styles.title}>{heading}</h2>
          <p className={styles.sub}>{subheading}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>What I&apos;m looking for</h3>
            <ul className={styles.list}>
              <li>Internships in cybersecurity or computer engineering</li>
              <li>CTF teams, research groups, and hardware collaborations</li>
              <li>Freelance web/full-stack work on the side</li>
            </ul>

            <div className={styles.badges}>
              <span className={styles.badge}>Security</span>
              <span className={styles.badge}>Embedded/HW</span>
              <span className={styles.badge}>Full-stack</span>
            </div>
          </div>

          <div className={styles.cardHighlight}>
            <h3 className={styles.cardTitle}>Contact</h3>

            <div className={styles.btnRow}>
              <a className={styles.primaryBtn} href={mailto}>
                Email me
              </a>
              <a
                className={styles.ghostBtn}
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className={styles.ghostBtn}
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <p className={styles.note}>
              Email is best for details. IG/LinkedIn is fine for a quick intro.
            </p>

            <div className={styles.small}>
              <span className={styles.smallLabel}>Email:</span>{" "}
              <a className={styles.emailLink} href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>
        </div>

        <p className={styles.footerLine}>
          Based in Minneapolis, MN. Usually replies within a day or two.
        </p>
      </div>
    </section>
  );
}