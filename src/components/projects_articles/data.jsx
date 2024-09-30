import styles from '../../styles/projects_articles/data.module.css'

export default function data (props) {

    return (
        <div className={styles.main}>
            <div className={styles.description}>
                <h3 className={styles.title}>{props.title}</h3>
               
                <p className={`${styles.text} ${props.article === "No"? "":styles.text_article}`}> {props.children}</p>
            </div>
           
            <div className={`${styles.group_buttons} ${props.have_buttons === "No"? styles.without_buttons:''} ${props.article === "No"? "":styles.button_link}`} >
                <button className= {`${styles.button}`} >{props.left}</button>
                <button className={props.article === "No"? styles.button:styles.button_article}>{props.right}</button>
            </div>
        </div>
    )
}