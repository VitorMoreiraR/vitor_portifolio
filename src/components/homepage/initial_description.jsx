import styles from "../../styles/homepage/initial_description.module.css"
import Buttons from "./buttons"

export default function Initial_description () {


    return (

        <div className={styles.main}>
                <div className={styles.description_p1}>
                    <img src="./icons/ola_mao.svg" className={`${styles.hi} ${styles.animar_rotation}`} alt="icon saudação"/>
                    <p className={`${styles.text_p1} ${styles.typing_animation_p1}`}>Olá! Eu sou o Vitor!</p>
                </div>
                <p className={`${styles.text_p2} ${styles.typing_animation_p2}`}>Sou um desenvolvedor full-stack!</p>
            <div className={`${styles.line} ${styles.typing_animation_line}`}> </div>
            <Buttons></Buttons>
        </div>
    )
}