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
  heading = "Let’s Build Something Together",
  subheading = "Tell me what you want. I’ll reply with a quick plan + quote.",
  instagramUrl = "https://www.instagram.com/vanceschaefer_/",
  linkedinUrl = "https://www.linkedin.com/in/vance-schaefer-64ba19367/",
  email = "scha1202@umn.edu",
}: Props) {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Website / template project"
  )}&body=${encodeURIComponent(
    `Hey Vance,\n\nI’m interested in:\n- Template: (name)\n- Pages/sections:\n- Brand/colors:\n- Deadline:\n- Budget:\n\nDetails:\n`
  )}`;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
          <p className={styles.sub}>{subheading}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Fast start</h3>
            <ul className={styles.list}>
              <li>Pick a template you like</li>
              <li>Send your logo/colors + copy</li>
              <li>I deploy it and connect your domain</li>
            </ul>

            <div className={styles.badges}>
              <span className={styles.badge}>Template-ready</span>
              <span className={styles.badge}>Mobile-first</span>
              <span className={styles.badge}>Deployed for you</span>
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
          If you already picked a template, include the name + your timeline.
        </p>
      </div>
    </section>
  );
}