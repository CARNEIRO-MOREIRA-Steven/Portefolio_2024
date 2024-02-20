"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './parcours.css'

const Parcours = () => {
  const [parcoursVisible, parcoursIsVisible] = useState(false);
  const h2Controls = useAnimation();
  const sectionRncpControls = useAnimation();
  const sectionCertificatControls = useAnimation();
  const pRncpControls = useAnimation();
  const pCertificatControls = useAnimation();
  const imageRncpControls = useAnimation();
  const imageCertificatControls = useAnimation();
  const parcoursRef = useRef(null);

  useEffect(() => {
    const parcoursTopOffset = parcoursRef.current.offsetTop;
    const handleScroll = () =>{
      if(window.scrollY > parcoursTopOffset - window.innerHeight / 1.8){
        parcoursIsVisible(true)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const animateParcours = async () => {
      if (parcoursVisible) {
        await h2Controls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.5}
        });
        await Promise.all([
           sectionRncpControls.start({
            x : 0,
            opacity : 1,
            transition : { duration : 0.8}
          }),
          sectionCertificatControls.start({
            x : 0,
            opacity : 1,
            transition : { duration : 0.8}
          }),
        ]);
        await Promise.all([
          imageRncpControls.start({
            opacity : 1,
            scale : 1,
            transition : {duration : 1}
          }),
          imageCertificatControls.start({
            opacity : 1,
            scale : 1,
            transition : {duration : 1}

          }),
        ])
        await Promise.all([
          pCertificatControls.start({
            opacity : 1,
            scale : 1,
            transition : {duration : 0.5}
          }),
          pRncpControls.start({
            opacity : 1,
            scale : 1,
            transition : {duration : 0.5}
          })
        ])

      }
    };

    animateParcours();
  }, [sectionRncpControls, pCertificatControls, pRncpControls, imageCertificatControls, parcoursVisible]);
  




  return (
    <section className='parcours' ref={parcoursRef}>
        <motion.h2 animate={h2Controls} initial={{opacity : 0, y : -100}}>Mon Parcours</motion.h2>
        <section className='parcours_section'>
        <motion.section
        animate={sectionRncpControls}
        initial={{x: -500, opacity : 0}} 
        className='rncp_pdf'>
        <h3>Titre RNCP niveau 5 - Développeur intégrateur Web - OpenClassrooms</h3>
        <div className='pdf_container'>
        <a href='./images/rncp.pdf' target='_blank'>
        <motion.img 
        initial={{scale: 0, opacity : 0}}
        animate={imageRncpControls}
        alt='titre RNCP Dévéloppeut intégrateur web' 
        src='./images/rncp.webp' defer></motion.img>
        <motion.p 
        animate={pRncpControls}
        initial={{opacity : 0, scale : 0}}
        >Consultez mon Titre RNCP</motion.p></a></div>
        </motion.section>
        <motion.section 
        animate={sectionCertificatControls}
        initial={{x: 500, opacity : 0}} 
        className='certificat_pdf'>
        <h3>Formation - Prép'fullstack - OpenClassrooms</h3>
        <div className='pdf_container'>
        <a href='./images/Atestation_Fullstack.pdf' target='_blank'>
        <motion.img
        initial={{scale:0, opacity : 0}}
        animate={imageCertificatControls}
         alt='Certificat Formation Prepfullstack' 
         className='certificat_image' 
         src='./images/fullstack.webp' defer></motion.img>
        <motion.p 
        animate={pCertificatControls}
        initial={{opacity : 0, scale : 0}}
        >Consultez mon Certificat</motion.p></a></div>
        </motion.section>
        </section>

        </section>
  )
}

export default Parcours