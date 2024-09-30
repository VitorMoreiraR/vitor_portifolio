import styles from "../../styles/homepage/buttons.module.css"

export default function Buttons () {

    return (
        <div className={`${styles.conjunto_botoes} ${styles.animation_botao_csv}`}>
            <div className={`${styles.botao_csv} ${styles.animation_botoes}`}>
                <p>Download CV</p>
                <img src="icons/baixar.svg"/>
            </div>
            <div className={`${styles.botao_contact} ${styles.animation_botoes}`}><a href="mailto:vitorrafael20111@gmail.com" title="email" target="_blank">Contatar</a></div>
        </div>
    )

}