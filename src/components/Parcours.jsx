import React from 'react';
import './parcours.css'

const Parcour = () => {

  return (
    <section className='parcours'>
        <h2>Mon Parcours</h2>
        <section className='parcours_section'>
        <section className='rncp_pdf'>
        <h3>Titre RNCP niveau 5 - Développeur intégrateur Web - OpenClassrooms</h3>
        <div className='pdf_container'>
        <a href='./images/rncp.pdf' target='_blank'>
        <img alt='titre RNCP Dévéloppeut intégrateur web' src='./images/rncp.webp' defer></img>
        Consultez mon Titre RNCP</a></div>
        </section>
        <section className='certificat_pdf'>
        <h3>Formation - Prép'fullstack - OpenClassrooms</h3>
        <div className='pdf_container'>
        <a href='./images/Atestation_Fullstack.pdf' target='_blank'>
        <img alt='Certificat Formation Prepfullstack' className='certificat_image' src='./images/fullstack.webp' defer></img>
        Consultez mon Certificat</a></div>
        </section>
        </section>

        </section>
  )
}

export default Parcour