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
            { label: "Contacts", href: "#contacts" },
            { label: "Projects", href: "#projects" },
          ]}
        />

        <LandingHero />

        <section id="pricing" className={styles.pricingSection}>
          <h2 className={styles.sectionTitle}>Custom Pricing</h2>

          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <p className={styles.priceLabel}>Custom Landing Pages</p>
              <p className={styles.priceAmount}>Starting at $250</p>
              <p className={styles.priceSub}>
                Designed and built from scratch · tailored layout · brand-focused
              </p>
            </div>

            <div className={styles.priceCardHighlight}>
              <p className={styles.priceLabel}>Custom Web Apps</p>
              <p className={styles.priceAmount}>Starting at $800+</p>
              <p className={styles.priceSub}>
                Built to your exact needs · auth, databases, APIs, and deployment
              </p>
            </div>
          </div>

          <p className={styles.pricingNote}>
          Looking for something more affordable? Check out the ready-to-deploy templates below.
          Custom projects are quoted based on scope and timeline.
        </p>
        </section>


        <Templates />

        <section id="hosting" className={styles.hostingSection}>
          <h2 className={styles.sectionTitle}>Launch & Hosting Setup</h2>

          <div className={styles.hostingGrid}>
            <div className={styles.hostingCard}>
              <h3 className={styles.hostingTitle}>What you provide</h3>
              <ul className={styles.hostingList}>
                <li>Your domain name (or I’ll help you pick one)</li>
                <li>A hosting option: Vercel (simple) or a VPS like Linode/DigitalOcean</li>
                <li>Access so I can launch it (invite me on Vercel or share SSH for a VPS)</li>
              </ul>
            </div>

            <div className={styles.hostingCardHighlight}>
             <h3 className={styles.hostingTitle}>What I do</h3>
              <ul className={styles.hostingList}>
                <li>Recommend the best option (Vercel vs VPS) based on what you need</li>
                <li>Deploy the site and make sure it’s fast, secure, and working</li>
                <li>Connect your domain (DNS) and set up HTTPS</li>
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
            You own the domain + hosting account (Vercel or VPS). I just guide the setup and handle the launch.
          </p>
          </div>
        </section>


        <ContactSection
        email="scha1202@umn.edu"
        instagramUrl="https://www.instagram.com/vanceschaefer_/"
        linkedinUrl="https://www.linkedin.com/in/vance-schaefer-64ba19367/"
      />

        <div id="projects" className={styles.myprojects}>
          <h1 className={styles.projectTitle}>Projects</h1>

          <ProjectItem
          name="FeedToVote"
          description={
            "FeedToVote began as a research-based school project exploring how social media feeds influence civic engagement and voter motivation.\n\nAfter completing extensive research and writing a formal paper on the topic, the final requirement was to present the findings in a clear, public-facing format. I chose to turn it into a fully designed website.\n\nI built the site with a clean, modern UI and a mobile-first layout, focusing on readability, structure, and performance so the research could be explored like a real product rather than a static assignment."
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

      </div>
        
        <Footer />

    </>
  );
}