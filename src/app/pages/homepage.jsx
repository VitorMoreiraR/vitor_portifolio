import styles from "../../styles/homepage/homepage.module.css"
import Initial_description from "../../components/homepage/initial_description"

export default function Homepage () {

    return (
        <section id="homepage">
            <div className={styles.homepage}>
                <Initial_description></Initial_description>
                <div className={styles.perfil}>
                    <img src="/images/foto_perfil1.png" className={styles.foto_perfil}/>
                </div>
            </div>
        </section>
        
    )
}