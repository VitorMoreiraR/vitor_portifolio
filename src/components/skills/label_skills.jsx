"use client";
import styles from "../../styles/skills/label_skills.module.css";
import { useEffect, useState, useRef } from "react";
import Hab from "./hab";

export default function Label_skills () {

    const items_list = [ //todas as habilidades
        { i: 0, src: "./icons/cplusplus.svg", alt: "Logo do C++", description: "C++"},
        { i: 1, src: "./icons/python.svg", alt: "Logo do Python", description: "Python"},
        { i: 2, src: "./icons/js.svg", alt: "Logo do Javascript", description: "Javascript"},
        { i: 3, src: "./icons/sql.svg", alt: "Logo do sql", description: "SQL"},
        { i: 4, src: "./icons/html.svg", alt: "Logo do HTML", description: "HTML"},
        { i: 5, src: "./icons/css.svg", alt: "Logo do CSS",  description: "CSS"},
        { i: 6, src: "./icons/react.svg", alt: "Logo do React", description: "React"},
        { i: 7, src: "./icons/figma.svg", alt: "Logo do figma", description: "Figma"},
        { i: 8, src: "./icons/excel.svg", alt: "Logo do Excel", description: "Excel"}
    ];

    const [itens_currents, fun_itens_currents] = useState([ //habilidades mostradas na tela
        ...items_list.slice(7,9),
        ...items_list.slice(0,3)
    ]);

    const ref_itens_currents = useRef(itens_currents); //referenciando as habilidades mostradas na tela
    ref_itens_currents.current = itens_currents; //guardando o valor atual das habilidades currents, já que a referência não salva a cada recarregamento
    const ref_list = useRef(null); //referência para a lista <ul> que possui o scroll

    const image_click = (type) => {

        const element_list = ref_list.current;

        const arrow_event = new KeyboardEvent("keydown", { key: type });
        element_list?.dispatchEvent(arrow_event); // Dispara o evento de tecla
      };

    useEffect( () => {

       
        const element_list = ref_list.current; //pegando a lista <ul> corrente que possui o scroll

        let change_scroll = null;
        let event = null;
        let value_top = null;
        let value_down = null;
        let value_speed = null;
        let no_scroll = null;

        if (window.innerWidth < 1024) {

            event = "touchmove"; /**O wheel é a bolinha de rolagem do mouse, então não funciona no celular*/
            change_scroll = 31;
            value_top = 25;
            value_down = 35;
            value_speed = 0.19;
            no_scroll = true;
        } //verificando se o site está sendo mostrado em um celular ou não
        else {

            event = "wheel"; /**O wheel é a bolinha de rolagem do mouse, então não funciona no celular*/
            change_scroll = 32;
            value_top = 26;
            value_down = 40;
            value_speed = 0.25;
            no_scroll = false;  
        }

        element_list.scrollTo(0, change_scroll); //iniciando o scroll nos 50px, lembrando que o useEffect é chamado no início
        console.log( element_list.scrollTop)
        console.log(change_scroll)
        function alterar_lista (tipo) {

            const current_itens_currents = ref_itens_currents.current //pegando as habilidades currents(estado atual)

            if (tipo == "Up") {
                const i = current_itens_currents[0].i === 0? 8: current_itens_currents[0].i - 1;
                fun_itens_currents([items_list[i], ...current_itens_currents.slice(0,4)]);
               
            } else if (tipo == "Down") {
                const i = current_itens_currents[4].i === 8? 0: current_itens_currents[4].i + 1;
                fun_itens_currents([...current_itens_currents.slice(1,5), items_list[i]]);
               
            }
            
        }

        function manipulate_list (e) { //manipular as setas do teclado e cirando o scroll "infinito"
           
            e.preventDefault()
                
            if(e.key === "ArrowUp" || e.key === "ArrowDown") {
                alterar_lista(e.key === "ArrowUp" ? "Up" : "Down");
                requestAnimationFrame(() => {
                    element_list.scrollTo(0, change_scroll);
                }); 
            }
        } 

        function scroll_low (e) {

            if (no_scroll)
                return

            e.preventDefault(); // impede que o padrão ocorra para criar um novo padrão
            
            const speed_scroll = value_speed;
            const delta = e.deltaY * speed_scroll; //e.deltaY o quão o usuário quis mover o scroll
            element_list.scrollTo(0,  element_list.scrollTop + delta);
        }

        function manipulate_list_wheel () { //manipular as setas do teclado e criando o scroll "infinito"
                //50 90

            if (no_scroll)
                return

            if(element_list.scrollTop < value_top || element_list.scrollTop > value_down) {
                alterar_lista(element_list.scrollTop < value_top ? "Up" : "Down");
                requestAnimationFrame(() => {
                    element_list.scrollTo(0, change_scroll);
                });
            } 
        }

        element_list.addEventListener(event, manipulate_list_wheel);
        element_list.addEventListener(event, scroll_low); /** wheel é um evento de mouse no JavaScript que é disparado quando o usuário gira a roda de rolagem (scroll wheel) de um mouse ou utiliza gestos de rolagem em um trackpad. Este evento é geralmente utilizado para capturar a intenção do usuário de rolar o conteúdo de uma página ou de um elemento, permitindo que os desenvolvedores customizem o comportamento de rolagem. */
        element_list.addEventListener("keydown", manipulate_list)
        
        // Limpar o evento quando o componente desmonta
        return () => {
            element_list.removeEventListener("wheel", manipulate_list);
            element_list.removeEventListener("wheel", scroll_low);
            element_list.removeEventListener("keydown", manipulate_list)
        }
        
       
    }, [])


    return (

        <>
            <img src="./images/arrow_skills.png" className={styles.group_arrows} id={styles.arrow_1} onClick={() => image_click("ArrowUp")}></img>
            <ul className={styles.list} ref={ref_list} tabIndex={0}>
                {itens_currents.map( (item, index) => (
                        <li key={item.i}> <Hab path={item.src} alt={item.alt} index={index}>{item.description}</Hab> </li>
                )
            
                )}
            </ul>
            <img src="./images/arrow_skills.png" className={styles.group_arrows} id={styles.arrow_2} onClick={() => image_click("ArrowDown")}></img>
        </>
        
    )
}
