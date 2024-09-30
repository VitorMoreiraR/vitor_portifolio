import styles from "../../styles/skills/skills.module.css"
import Label_skills from "../../components/skills/label_skills"


export default function Skills () {

    return (

        <section id="skills">
            <div className={styles.main}> 
                <h2 className={styles.title}>Habilidades</h2>
                <div className={styles.line}></div>
                <Label_skills></Label_skills>
            </div>
        </section>
    )
}