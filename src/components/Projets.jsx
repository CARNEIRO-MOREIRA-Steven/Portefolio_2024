"use client"
import React, { useEffect, useRef, useState } from 'react';
import {motion, useAnimation} from "framer-motion";
import './projets.css';

const Projets = () => {
  const [projetsVisible, projetsIsVisible] = useState(false);
  const sectionControls = useAnimation();
  const h3FormationControls = useAnimation();
  const h3PersonnelControls = useAnimation();
  const h4aside1Controls = useAnimation ();
  const aside1Controls = useAnimation();
  const h4aside2Controls = useAnimation ();
  const aside2Controls = useAnimation();
  const h4aside3Controls = useAnimation ();
  const aside3Controls = useAnimation();
  const projetRef = useRef(null)

  useEffect(() => {
    const projetTopOffset = projetRef.current.offsetTop;
    const handleScroll = () => {
      if (window.scrollY > projetTopOffset - window.innerHeight / 1.8){
        projetsIsVisible(true)
      }
    };

    window.addEventListener('scroll' , handleScroll);

    
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  }, []);

  useEffect (() => {
    const animateProjets = async () => {
      if(projetsVisible){
        await sectionControls.start({
          opacity : 1,
        });
        await h3FormationControls.start({
          opacity : 1,
          x : 0,
          transition : { duration : 1}
        });
        await aside1Controls.start({
          scale : 1,
          transition : { duration : 0.8 }
        });
        await h4aside1Controls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.7 }
        })
        await aside2Controls.start({
          scale : 1,
          transition : { duration : 0.8 }
        });
        await h4aside2Controls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.7 }
        })
        await h3PersonnelControls.start({
          opacity : 1,
          x : 0,
          transition : { duration : 1}
        });
        await aside3Controls.start({
          scale : 1,
          transition : { duration : 0.8 }
        });
        await h4aside3Controls.start({
          opacity : 1,
          y : 0,
          transition : { duration : 0.7 }
        })

      }
    };
    animateProjets();
  },[sectionControls,h4aside1Controls, h4aside2Controls, h4aside3Controls,
    aside1Controls, aside2Controls, aside3Controls, h3FormationControls, h3PersonnelControls,
     projetsVisible,])



  return (
    <section ref={projetRef}>
      <h2>Mes Projets</h2>
      <motion.section className='projets_diferents' 
      initial={{opacity : 0}}
      animate={sectionControls}>
        <motion.section className='projets_formation'
        animate={sectionControls}
        initial={{opacity : 0}}>
          <motion.h3 animate={h3FormationControls} initial={{opacity : 0, x : -250}}>Projets Formation</motion.h3>
          <motion.aside className='site events'
          animate={aside1Controls}
          initial={{scale : 0}}>
            <a href='https://77events-three.vercel.app/' target='_blank'>
            <motion.h4
             animate={h4aside1Controls}
              initial={{opacity : 0, y : -150}}
              style={{ position: "relative"}}>77events</motion.h4>
            <img alt='image site 77events' src='./images/77events.webp'></img>
            </a>
          </motion.aside>
          <motion.aside className='site argent_bank'
          animate={aside2Controls}
          initial={{scale : 0}}>
          <a href='https://argent-bank-iota.vercel.app/' target='_blank'>
            <motion.h4 animate={h4aside2Controls} initial={{opacity : 0, y : -150}}>Argent-Bank</motion.h4>
            <img alt='image site argent bank' src='./images/argent_bank.webp'></img>
            </a>
          </motion.aside>
        </motion.section>
        <motion.section className='projets_personnels'
        animate={sectionControls}
        initial={{opacity : 0}}>
          <motion.h3 animate={h3PersonnelControls} initial={{opacity : 0, x : -250}}>Projets Personnels</motion.h3>
          <motion.aside className='site codemeta'
          animate={aside3Controls}
          initial={{scale : 0}}>
          <a href='https://www.codemeta-solutions.com/' target='_blank'>
            <motion.h4 animate={h4aside3Controls} initial={{opacity : 0, y : -150}}>CodeMeta Solutions</motion.h4>
            <img alt='image site codemeta solutions' src='./images/codemeta.webp'></img>
            </a>
          </motion.aside>
        </motion.section>
      </motion.section>
    </section>
  );
};

export default Projets;