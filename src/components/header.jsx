"use client";

import styles from "../styles/header.module.css"
import { useState, useEffect } from 'react';

export default function Header () {

    const [menuAtivo, fun_menuAtivo] = useState(null)
    const [corHeader, fun_corHEeader] = useState(false)

    

    useEffect( function () {


        let value_change_header = null

        if (window.innerWidth < 1024) 
            value_change_header = 800;
        else
            value_change_header = 556;

            function posicao_scroll () {
                if(window.scrollY > value_change_header)
                    fun_corHEeader(true)
                else
                    fun_corHEeader(false)
             //posição do scroll
            }
            posicao_scroll() //como o useEffect é chamado uma vez no início, chamar essa função no início garante a troca da cor do header no caso em que a página seja carregada de uma parte(caminho) onde o header já deva ter outra cor
            window.addEventListener('scroll', posicao_scroll) //o addEvent... serve para que sempre que o elemento(no caso o scroll) for manipulado será chamada a função call_back(posicao_scroll)
        }
    , [])


    return (

        <header className={`${styles.header} ${corHeader == true? styles.header_transp:''}`}>
            <div className={styles.esquerdo}>
                <img src="/images/icon.png" className={styles.v}></img>
                <h1 className={`${styles.text} ${corHeader == true? styles.text_transp:''}`}>Portifólio</h1>
            </div>
            
            <nav className={styles.header_drop}>
                <div className={styles.menu} >
                    <img src={menuAtivo == "Ativo"? (corHeader == true? "/icons/seta-verde.png":"/icons/seta-branca.png"):(corHeader == true? "/icons/menu-verde.png":"/icons/menu-branco.png")} 
                    onClick={() => fun_menuAtivo(menuAtivo == "Ativo"? "Desativado":"Ativo")}></img>
                </div>
                <div className={`${styles.itens} ${menuAtivo ? (menuAtivo == "Ativo" ? styles.ani : styles.aniEsconde) : ""}`}
                >
                     <a href='#homepage'>Início</a>
                    <a href='#aboutme'>Sobre mim</a>
                    <a href='#skills'>Habilidades</a>
                    <a href='#projects_articles'>Projetos e Artigos</a>
                </div>
            </nav>
            
        </header>

    )
}