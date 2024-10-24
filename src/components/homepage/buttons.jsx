import styles from "../../styles/homepage/buttons.module.css"

export default function Buttons () {

    return (
        <div className={`${styles.conjunto_botoes} ${styles.animation_botao_csv}`}>
            <div className={`${styles.botao_csv} ${styles.animation_botoes}`}>
                <a href="./Curriculo_Vitor.pdf" download={'Curriculo_Vitor.pdf'}>
                    <p>Download CV</p>
                    <img src="./icons/baixar.svg" alt="icone baixar"/>
                </a>
            </div>
            <div className={`${styles.botao_contact} ${styles.animation_botoes}`}><a href="mailto:vitormoreira2r@gmail.com" title="email" target="_blank">Contatar</a></div>
        </div>
    )

}
