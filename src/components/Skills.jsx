import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section className='skills'>
    <h2 id='mes_skills'>Skills</h2>
    <div className='skills_list'>
    <ul>
    <li className='li_title'><img alt='logo balise de code' src='./images/code-solid.svg'></img>Front-End</li>
    <li>Next.js</li>
    <li>React.js</li>
    <li>JavaScript</li>
    <li>Sass</li>
    </ul>
    <ul>
    <li className='li_title'><img alt='logo outils' src='./images/screwdriver-wrench-solid.svg'></img>Outils</li>
    <li>Git</li>
    <li>GitHub</li>
    <li>DevTools</li>
    </ul>
    <ul>
    <li className='li_title'><img alt='logo palette de peintre' src='./images/palette-solid.svg'></img>Design</li>
    <li>Figma</li>
    <li>Canva</li>
    </ul>
    </div>
    </section>
  )
}

export default Skills