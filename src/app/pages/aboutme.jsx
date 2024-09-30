import styles from "../../styles/aboutme/aboutme.module.css"

export default function Aboutme () {

    return (
        <section  id='aboutme'>
            <div className={styles.main}>
                <div className={styles.box}>
                    <img src="/images/foto_perfil3.jpeg" className={styles.profile_photo} alt="Foto de Vitor Moreira"></img>
                    <div className={styles.bloco_textos}>
                        <h2 className={styles.title}>Sobre mim</h2>
                        <div className={styles.line}></div>
                            <p className={styles.descrition}>
                            Olá! Meu nome é Vitor, sou graduando em Sistemas de Informação pela UFMG. Tenho buscado ampliar meus conhecimentos em diferentes áreas da TI, como análise de dados e desenvolvimento web, sempre com o objetivo de me aprimorar continuamente para oferecer o melhor. Atualmente, estou focado em aprofundar meus conhecimentos nessas áreas e expandir minhas habilidades.
                            </p>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}