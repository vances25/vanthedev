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
  price: "$149",
  demoUrl: "https://studio-one-template.vercel.app",
  stack: [
    "Next.js",
    "CSS Modules",
    "Responsive",
    "SEO-ready",
    "Image-optimized",
  ],
},
{
    tag: "Landing",
    title: "Acid Ink",
    desc: "Bold tattoo studio landing page with artist showcase, services overview, booking flow, aftercare guidance, and contact sections. Designed to feel artistic, modern, and professional without corporate fluff.",
    price: "$149",
    demoUrl: "https://acid-ink.vercel.app/",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "CSS Modules",
      "Responsive",
      "Sticky Header",
      "Accessible Nav",
      "SEO-ready",
    ],
  },

];

export default function Templates({
  id = "templates",
  heading = "Ready-Made Templates",
  subheading =
    "Lower-cost, pre-built layouts that can be branded and deployed fast.",
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