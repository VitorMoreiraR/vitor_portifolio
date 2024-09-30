import Header from "./header"
import styles from "../styles/layout.module.css"
import Foot from "./foot"
export default function Layout (props) {
    
    return (
        <main className={styles.layout}>
            <Header></Header>
            {props.children}
            <Foot></Foot>
        </main>
    )
}