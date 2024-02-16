import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <aside className='navbar'>
        <div>
        <a href='tel:06.27.57.59.07'>
        <img alt='logo téléphone navbar' src='./images/phone-solid.svg'></img>
        </a>
        </div>
        <div>
        <a href='https://github.com/CARNEIRO-MOREIRA-Steven' target='_blank'>
        <img alt='logo github navbar' src='./images/github.svg'></img>
        </a>
        </div>
        <div className='no_likedin'>
        <a href='https://www.linkedin.com/in/steven-carneiro-moreira-742626264/'>
        <img alt='logo linkedin' src='./images/linkedin.svg'></img> 
        </a>
        </div>
    </aside>

  )
}

export default NavBar