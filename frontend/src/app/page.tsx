"use client";

import styles from "./page.module.css";
import Header from "../componets/Header/Header";
import ProjectItem from "../componets/ProjectItem/ProjectItem";
import LandingHero from "../componets/LandingHero/LandingHero";
import Templates from "../componets/Templates/Templates";
import ContactSection from "../componets/ContactSection/ContactSection";
import Footer from "@/componets/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.blobWrapper}>
        <img className={styles.blob} src="/blob.svg" alt="" />
      </div>

      <div className={styles.container}>
        <Header
          name="Vance Schaefer"
          links={[
            { label: "About", href: "#about" },
            { label: "Pricing", href: "#pricing" },
            { label: "Hosting", href: "#hosting" },
            { label: "Projects", href: "#projects" },
            { label: "Contacts", href: "#contacts" },
          ]}
        />

        <LandingHero />

        <section id="pricing" className={styles.pricingSection}>
          <h2 className={styles.sectionTitle}>Pricing</h2>

          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <p className={styles.priceLabel}>Landing Pages</p>
              <p className={styles.priceAmount}>$250–$800</p>
              <p className={styles.priceSub}>1–3 pages · mobile-friendly · fast load</p>
            </div>

            <div className={styles.priceCardHighlight}>
              <p className={styles.priceLabel}>Full-Stack Apps</p>
              <p className={styles.priceAmount}>$1k–$3k+</p>
              <p className={styles.priceSub}>auth · database · APIs · deployment help</p>
            </div>
          </div>

          <p className={styles.pricingNote}>
            Want a quick quote? Message me on Instagram with what you want built + your timeline.
          </p>
        </section>


        <Templates />

        <section id="hosting" className={styles.hostingSection}>
          <h2 className={styles.sectionTitle}>Hosting & Deployment</h2>

          <div className={styles.hostingGrid}>
            <div className={styles.hostingCard}>
              <h3 className={styles.hostingTitle}>What you provide</h3>
              <ul className={styles.hostingList}>
                <li>Your own VPS/hosting plan (DigitalOcean, Linode, etc.)</li>
                <li>Your domain name (Namecheap, Cloudflare, GoDaddy, etc.)</li>
                <li>SSH login access so I can deploy (or we do it together)</li>
              </ul>
            </div>

            <div className={styles.hostingCardHighlight}>
              <h3 className={styles.hostingTitle}>What I do</h3>
              <ul className={styles.hostingList}>
                <li>Deploy the site/app to your VPS</li>
                <li>Set up SSL (HTTPS), server config, and basic hardening</li>
                <li>Guide you to connect your domain → your server IP (DNS)</li>
              </ul>
            </div>
          </div>

          <div className={styles.hostingNoteBox}>
            <p className={styles.hostingNote}>
              After launch, I’ll handle <b>minor fixes</b> for free (small UI tweaks I missed, quick
              config adjustments, or updating versions to patch common issues). Bigger feature work
              is billed separately.
            </p>

            <p className={styles.hostingNote}>
              You keep full ownership of the hosting account + domain. I’m just the builder and
              deployment help.
            </p>
          </div>
        </section>

        <div id="projects" className={styles.myprojects}>
          <h1 className={styles.projectTitle}>Projects</h1>

          <ProjectItem
            name="FeedToVote"
            description={
              "FeedToVote is a web project exploring how social media feeds shape civic engagement and voter motivation.\n\nI built the site with a clean, modern UI and focused on smooth performance and mobile-first layout.\n\nIt’s designed like a real product: clear sections, strong typography, and an experience that feels fast."
            }
            image="/feedtovote.png"
            link="https://feedtovote.org"
          />

          <ProjectItem
            name="SpaceSync"
            description={
              "SpaceSync is a collaborative project built to solve time coordination between Earth scientists and astronauts on other planets.\n\nWe created formulas to calculate local time on celestial bodies like Mars or Jupiter using real orbital data and a custom space calendar.\n\nI helped improve frontend UX and collaborated closely with my teammates on design and strategy.\n\nWe built it as part of the NASA HUNCH program and presented it throughout the year, including at reviews with NASA engineers."
            }
            image="/spacesync.png"
            link="https://spacesync-preview.vercel.app"
          />
        </div>

       
            <ContactSection
            email="vanceschaefer@yourdomain.com"
            instagramUrl="https://www.instagram.com/vanceschaefer_/"
            linkedinUrl="https://www.linkedin.com/in/vance-schaefer-64ba19367/"
          />

      </div>
        
        <Footer />

    </>
  );
}