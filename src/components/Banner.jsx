import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <section className='banner'>
        <section className='banner_texte'>
        <h1>CARNEIRO MOREIRA Steven</h1>
        <p>Bonjour et bienvenue !</p>
        <p>Développeur Front-end passionné</p>
        <aside>
        <button>
            <a href='#contact'>Me contacter</a>
        </button>
        <button>
            <a href='#mes_skills'>Mes Skills</a>
        </button>
        </aside>
        </section>
        <img loading='eager' alt='ma photo' src='./images/maphoto.webp'></img>
    </section>
  )
}

export default Banner