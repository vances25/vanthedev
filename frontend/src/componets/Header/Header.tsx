"use client";

import Link from "next/link";
import styles from "./Header.module.css";

type HeaderLink = { label: string; href: string };

function randomRotation() {
  const angle = Math.random() > 0.5 ? 5 : -5;
  return `rotate(${angle}deg) scale(1.05)`;
}

export default function Header({
  name = "Vance Schaefer",
  links = [
    { label: "About", href: "/" },
    { label: "Contacts", href: "/#contacts" },
    { label: "Projects", href: "/#projects" },
  ],
}: {
  name?: string;
  links?: HeaderLink[];
}) {
  return (
    <header className={styles.navbar}>
      <p className={styles.brand}>{name}</p>

      <nav className={styles.nav}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={styles.link}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = randomRotation();
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}