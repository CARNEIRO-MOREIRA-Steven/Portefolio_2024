import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
        <section className='header_name'>
        <p id='header_name_initial'>CMS</p>
        <h2>CARNEIRO MOREIRA Steven</h2>
        </section>
        <nav>
            <section className='nav_icone'>
                <a href='mailto:carneiromoreirasteven22@gmail.com'>
                <img alt='logo mail' src='./images/envelope-solid.svg'></img> 
                </a>
            </section>
            <section className='nav_icone'>
                <a href='https://www.linkedin.com/in/steven-carneiro-moreira-742626264/'>
                <img alt='logo linkedin' src='./images/linkedin.svg'></img> 
                </a>
            </section>
            <section className='nav_icone'>
                <a href='https://www.facebook.com/steven.carneiro.566'>
                <img alt='logo facebook' src='./images/facebook.svg'></img> 
                </a>
            </section>
        </nav>
    </header>
  )
}

export default Header