"use client"
import React from 'react'
import {motion} from "framer-motion";
import './banner.css'

const Banner = () => {
  return (
    <motion.section className='banner'>
        <motion.div >  
        <section className='banner_texte'>
        <h1>CARNEIRO MOREIRA Steven</h1>
        <motion.p initial={{x : 200 , opacity : 0 }} animate={{ x : 0 , opacity : 1 , transition : {duration : 0.7}}}>Bonjour et bienvenue !</motion.p>
        <motion.p initial={{x : 200 , opacity : 0 }} animate={{ x : 0 , opacity : 1 , transition : {duration : 0.7}}} >Développeur Front-end passionné</motion.p>
        <motion.aside initial={{opacity : 0 ,y : 250}} animate={{ opacity : 1, y : 0,  transition : {duration : .7, delay : 0.5}}}>
        <button>
            <a href='#contact'>Me contacter</a>
        </button>
        <button>
            <a href='#mes_skills'>Mes Skills</a>
        </button>
        </motion.aside>
        </section>
        <motion.img initial={{ opacity: 0 ,x : 300}} animate={{transition : {duration : .5 , delay : 2} , opacity : 1 , x: 0 , }}  loading='eager' alt='ma photo' src='./images/maphoto.webp'>
        </motion.img>
        </motion.div>
    </motion.section>
  )
}

export default Banner