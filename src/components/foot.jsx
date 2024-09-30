import styles from "../styles/foot.module.css"

export default function foot () {

    return (
        <footer className={styles.main}>

            <div className={styles.text}>

                <p className={styles.name}>Vitor Moreira</p>

                <div className={styles.email}>
                <a href="mailto:vitorrafael20111@gmail.com" title="email" target="_blank"><img src="/icons/email.svg"/></a>
                    <p>vitorrafael20111@gmail.com</p>
                </div>
                
            </div>

            <div className={styles.icons}>
                
               <a href="https://www.linkedin.com/in/vitor-moreira-ramos-de-rezende-a231a4228/" title="Página do Linkedin" target="_blank"><img src="/icons/linkedin.svg" alt="icon Linkedin"/></a>
               <a href="https://github.com/VitorMoreiraR" title="Página do GitHub" target="_blank"><img src="/icons/github.svg" alt="icon Linkedin"/></a>
            
            </div>

        </footer>
    )
}