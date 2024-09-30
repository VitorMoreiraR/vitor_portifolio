import styles from '../../styles/projects_articles/projects_articles.module.css'
import Frames from '../../components/projects_articles/frames'

export default function project_article () {

    return (
        <section id="projects_articles">
            <div className={styles.main} >
                <h2 className={styles.title}>Projetos e Artigos</h2>
                <div className={styles.line}></div>
                <Frames></Frames>
            </div>
        </section>
      
    )

}