"use client";

import styles from "./page.module.css";
import Header from "../componets/Header/Header";
import ProjectItem from "../componets/ProjectItem/ProjectItem";
import LandingHero from "../componets/LandingHero/LandingHero";
import Experience from "../componets/Experience/Experience";
import Skills from "../componets/Skills/Skills";
import ContactSection from "../componets/ContactSection/ContactSection";
import Footer from "@/componets/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header
          name="Vance Schaefer"
          links={[
            { label: "about", href: "#about" },
            { label: "experience", href: "#experience" },
            { label: "skills", href: "#skills" },
            { label: "projects", href: "#projects" },
            { label: "contact", href: "#contacts" },
          ]}
        />

        <LandingHero />

        <Experience />

        <Skills />

        <div id="projects" className={styles.myprojects}>
          <p className={styles.eyebrow}>
            <span className={styles.promptChar}>$</span> ls ./projects
          </p>
          <h2 className={styles.projectTitle}>Projects</h2>

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

        <ContactSection
          email="scha1202@umn.edu"
          instagramUrl="https://www.instagram.com/vanceschaefer_/"
          linkedinUrl="https://www.linkedin.com/in/vance-schaefer-64ba19367/"
        />
      </div>

      <Footer />
    </>
  );
}
