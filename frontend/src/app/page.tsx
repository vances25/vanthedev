"use client";

import styles from "./page.module.css";
import ProjectItem from "../../componets/ProjectItem/ProjectItem";


export default function Home() {

  const randomRotation = () => {
    const angle = Math.random() > 0.5 ? 5 : -5;
    return `rotate(${angle}deg) scale(1.05)`;
  };

  return (
    <>
    <div className={`${styles.blobWrapper}`}>
      <img className={styles.blob} src="/blob.svg" />
    </div>
    <div className={`${styles.container}`}>

      <div className={`${styles.navbar}`}>
        <p>Vance Schaefer</p>

        <div>
          <a onMouseEnter={(e) => {
    (e.currentTarget as HTMLElement).style.transform = randomRotation();
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLElement).style.transform = "none";
  }} href="/">About</a>
          <a onMouseEnter={(e) => {
    (e.currentTarget as HTMLElement).style.transform = randomRotation();
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLElement).style.transform = "none";
  }} href="/#projects">Projects</a>
          <a onMouseEnter={(e) => {
    (e.currentTarget as HTMLElement).style.transform = randomRotation();
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLElement).style.transform = "none";
  }} href="/#contacts">Contacts</a>
        </div>

      </div>

      <div className={styles.action}>

        <div className={`${styles.about}`}>
        <p className={styles.program}>PROGRAMMER</p>

        <div className={styles.nameDisplay}>
            <h1>Hello, my name is</h1>
        
            <h1 className="fadeIn">Vance Schaefer</h1>
         </div>  

        <p style={{"color": "#4d4d4d"}} className="fadeInFast">I’m a passionate programmer who’s driven by a desire to make real impact not just in companies, but across the world.<br/><br/>I’ve built skills in Next.js for frontend, and FastAPI with Uvicorn to create clean, efficient CRUD APIs. I’ve dabbled in cybersecurity and AI, and I’m eager to go deeper in both fields.<br/><br/>Beyond code, I’ve learned how valuable teamwork is and how ideas grow stronger through collaboration.<br/><br/>I’m always open to working with others, learning together, and building something meaningful. If you’ve got a project, I’m in.</p>

        <div className={styles.linkTop}>
          <button onClick={() => window.location.href = "/#projects"} className={styles.projects}>Projects</button>
          <button onClick={()=> window.location.href = "https://www.linkedin.com/in/vance-schaefer-64ba19367/"} className={styles.linkedin}>LinkedIn</button>
        </div>

      </div>
     
      <img className={`${styles.image} fadeSlideIn`} src="/me.png" />


      </div>

      <div id="projects" className={styles.myprojects}>
        <h1 className={styles.projectTitle}>Projects</h1>

        <ProjectItem name="Skipdish" description={"Skipdish is a food truck pre ordering app I built to solve a real world problem.\n\nWhile working at Culver’s, I saw how larger chains use QR codes to let customers order online, but smaller food vendors, like those at state fairs, don’t usually have access to that kind of tech. So instead of building another basic calculator app, I challenged myself to create something more impactful.\n\nSkipdish lets customers scan a code, place orders, and skip the wait, saving food trucks time and reducing the need for extra staff.\n\nI developed the full app and launched a working demo by myself. While it’s not fully deployed due to lack of funding or a team, it taught me a ton and shows what I’m capable of building on my own.\n\nNOTE: When registering please check your spam because gmail flags my domain :("}
        image="/skipdish.png" link="https://skipdish.org"/>

        <ProjectItem name="SpaceSync" description={"SpaceSync is a collaborative project built to solve time coordination between Earth scientists and astronauts on other planets.\n\nWe created formulas to calculate local time on celestial bodies like Mars or Jupiter using real orbital data and a custom space calendar.\n\nI helped improve frontend UX and collaborated closely with my teammates on design and strategy.\n\nWe built it as part of the NASA HUNCH program and presented it throughout the year, including at reviews with NASA engineers.\n\nThis project taught me the power of teamwork, problem solving, and made space feel a little closer to home."}
        image="/spacesync.png" link="https://spacesync-preview.vercel.app"/>

      </div>

      <div id="contacts" className={styles.contactme}>
        <h1 className={styles.projectTitle}>Let's Build Something Together</h1>

        <p>I’m currently open to freelance work, internships, or collaborations. If you’re looking for a developer who delivers clean fullstack apps fast, let’s connect.<br/><br/>Reach out on Instagram or LinkedIn through the buttons below — I’d love to connect.</p>
        <div>
          <img onClick={()=>window.location.href = "https://www.instagram.com/vanceschaefer_/"} src="/insta.png"/>
          <img onClick={()=> window.location.href = "https://www.linkedin.com/in/vance-schaefer-64ba19367/"} src="/link.png"/>
        </div>
      </div>

    </div>
    </>
  );
}
