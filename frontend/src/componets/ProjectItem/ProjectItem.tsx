import styles from "./style.module.css";

interface Props{
    name: string,
    description: string,
    link: string,
    image: string
}

export default function ProjectItem({ name, description, link, image  }: Props){


    return (
        <>
        <div className={styles.container}>
            <div className={`${styles.projectInfo}`}>
                <h1>{name}</h1>
                <p style={{ whiteSpace: "pre-line" }}>{description}</p>
                <button onClick={()=> window.location.href = link}>View Project</button>
            </div>
            <img src={image}></img>
        </div>
        </>
    )
}