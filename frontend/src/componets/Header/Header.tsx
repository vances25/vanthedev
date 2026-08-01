"use client";

import Link from "next/link";
import styles from "./Header.module.css";

type HeaderLink = { label: string; href: string };

export default function Header({
  name = "Vance Schaefer",
  links = [
    { label: "about", href: "/" },
    { label: "contact", href: "/#contacts" },
    { label: "projects", href: "/#projects" },
  ],
}: {
  name?: string;
  links?: HeaderLink[];
}) {
  return (
    <header className={styles.navbar}>
      <p className={styles.brand}>
        <span className={styles.prompt}>~/</span>
        {name}
        <span className={styles.cursor}>_</span>
      </p>

      <nav className={styles.nav}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={styles.link}>
            <span className={styles.linkTag}>./</span>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
