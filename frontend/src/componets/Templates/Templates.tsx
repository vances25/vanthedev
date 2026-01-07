"use client";

import styles from "./Templates.module.css";

export type TemplateItem = {
  tag?: string;
  title: string;
  desc: string;
  price?: string;
  demoUrl: string;
  stack?: string[];
  highlight?: boolean;
};

type Props = {
  id?: string;
  heading?: string;
  subheading?: string;
  items?: TemplateItem[];
};

const DEFAULT_ITEMS: TemplateItem[] = [
 {
  tag: "Portfolio",
  title: "Studio One",
  desc: "Modern tattoo portfolio with hero, filtered gallery, pricing, booking form, and aftercare. Designed to convert visitors into bookings.",
  price: "$179",
  demoUrl: "https://studio-one-tattoo.vercel.app",
  stack: [
    "Next.js",
    "CSS Modules",
    "Responsive",
    "SEO-ready",
    "Image-optimized",
  ],
}

];

export default function Templates({
  id = "templates",
  heading = "Templates",
  subheading =
    "These are real, ready-to-deploy templates. Pick one you like and I’ll launch it fast with your branding + content.",
  items = DEFAULT_ITEMS,
}: Props) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{heading}</h2>
        <p className={styles.sub}>{subheading}</p>
      </div>

      <div className={styles.grid}>
        {items.map((t, idx) => (
          <article
            key={`${t.title}-${idx}`}
            className={t.highlight ? styles.cardHighlight : styles.card}
          >
            <div className={styles.topRow}>
              <span className={styles.tag}>{t.tag ?? "Template"}</span>
              {t.price && <span className={styles.price}>{t.price}</span>}
            </div>

            <h3 className={styles.title}>{t.title}</h3>
            <p className={styles.desc}>{t.desc}</p>

            {t.stack?.length && (
              <div className={styles.chips}>
                {t.stack.map((s) => (
                  <span key={s} className={styles.chip}>
                    {s}
                  </span>
                ))}
              </div>
            )}

            <div className={styles.actions}>
              <a
                className={styles.btn}
                href={t.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a className={styles.btnPrimary} href="#contacts">
                Use this template
              </a>
            </div>

            <p className={styles.micro}>
              Delivered branded + deployed. Colors, sections, and copy are customizable.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}