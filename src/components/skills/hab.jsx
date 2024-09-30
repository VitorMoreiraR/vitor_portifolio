import styles from '../../styles/skills/hab.module.css'

export default function Hab (props) {

    return (
        <div className={styles.label} id={props.index === 0? styles.item_0:(props.index === 1? styles.item_1:(props.index === 2? styles.item_2:(props.index === 3? styles.item_3:styles.item_4)))}>
            <img src={props.path} className={styles.icon} alt={props.alt}></img>
            <p className={styles.text}> {props.children} </p>
        </div>
    )
}