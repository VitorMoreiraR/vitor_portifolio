"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../../styles/projects_articles/frames.module.css";
import Data from "./data";

export default function Frames () {

   
    const [ratio_current, fun_ratio_current] = useState("radio1");
    const [counter, fun_counter] = useState(1);

    const ref_ratio_current = useRef(ratio_current)
    ref_ratio_current.current = ratio_current

    useEffect(() => {
        const interval_id = setInterval(() => {

            const ratio_corrent = ref_ratio_current.current
            let value_counter = counter

            if (value_counter != parseInt(ratio_corrent.slice(-1))) /**Se o counter está no mesmo ratio que está clicado, então esse caso aqui não é necessário, mas se não estiver, é necessário*/
                value_counter = parseInt(ratio_corrent.slice(-1))
            
            const new_counter = value_counter === 3 ? 1 : value_counter + 1;
            fun_counter(new_counter);
           
            fun_ratio_current(`radio${new_counter}`);
            
        }, 6000);

        return () => clearInterval(interval_id);
    }, [counter]);
    
    

    return (
        <div className={styles.slides}>

                <input type="radio" name="p_a" id="radio1" className={`${styles.points} ${styles.i1}`}  checked={ratio_current == 'radio1'}
                onChange={() => fun_ratio_current("radio1")}/>
                <input type="radio" name="p_a" id="radio2" className={`${styles.points} ${styles.i2}`} checked={ratio_current == 'radio2'}
                onChange={() => fun_ratio_current("radio2")}/>
                <input type="radio" name="p_a" id="radio3" className={`${styles.points} ${styles.i3}`} checked={ratio_current == 'radio3'}
                onChange={() => fun_ratio_current("radio3")}/>

                <div className={styles.main}>

                    <section className={ `${styles.f1} ${styles.frame}`}>
                        <div className={styles.bloco_image}>
                            <img src="./images/portifolio_marca.png" className={styles.image_1} alt="imagem projeto"/>
                            <img src="./images/portifolio_tela.png" className={styles.image_2} alt="imagem projeto"/>
                        </div>
                        <Data title = "Portifólio" left= "Modelagem" right = "Demo" have_buttons = "No" article = "No"> Portfólio desenvolvido para me apresentar e aprimorar minhas habilidades em desenvolvimento web.</Data>
                    </section>  

                    <section className={ `${styles.f2} ${styles.frame}`}>

                        <div className={styles.bloco_image}>
                            <img src="./images/signo_futsent.png" className={styles.image_1} alt="imagem projeto"/>
                            <img src="./images/Home_futsent.png" className={styles.image_2} alt="imagem projeto"/>
                        </div>
                        <Data title = "FutSent" left= "Modelagem" right = "Demo" have_buttons = "No" article = "No"> Um sistema interativo capaz de averiguar se um time de futebol foi avaliado de forma mais positiva, negativa ou neutra por seus torcedores no youtube durante cada mês. </Data>
                    </section>

                    
                    <section className={ `${styles.f3} ${styles.frame}`}>

                            <div className={styles.img_article}>
                                    <img src="./images/logo_webmidia.png" alt="imagem artigo"/>
                            </div>
                            <Data title = "Sentiment Analysis of Shared Content in Brazilian Reddit Communities: A Human Labeled Dataset" left= "link" right = "" have_buttons = "Yes" article = "Yes" click_left="https://sol.sbc.org.br/index.php/webmedia/article/view/30297">
                                <br/>
                                    <strong>Eu participei da elaboração!</strong> 
                                <br/>
                                
                            </Data>
                    </section>

                </div>

                <div className={styles.manual}>
                        <label htmlFor="radio1" className={`${styles.btn} ${styles.p1}`} ></label>
                        <label htmlFor="radio2" className={`${styles.btn} ${styles.p2}`} ></label>
                        <label htmlFor="radio3" className={`${styles.btn} ${styles.p3}`} ></label>
                </div>  
                
        </div>
    )

}
// <input type="radio" name="p_a" id="i1" /> -> para criar os botões
//as labels são usadas para fazerem referência aos inputs
