"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './skills.css';

const Skills = () => {
  const [skillsVisible, skillsIsVisible] = useState(false);
  const divControls = useAnimation();
  const ul1Controls = useAnimation();
  const ul2Controls = useAnimation();
  const ul3Controls = useAnimation();
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsTopOffset = skillsRef.current.offsetTop;
    const handleScroll = () => {
      if (window.scrollY > skillsTopOffset - window.innerHeight / 1.5) {
        skillsIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateSkills = async () => {
      if (skillsVisible) {
        await divControls.start({
          y: 0,
          scale: 1,
          opacity: 1,
          transition: { duration: 0.3 }
        });

        await ul1Controls.start({
          opacity: 1,
          y : 0,
          scale: 1.5 ,
          transition: { duration: 1}
        });

        await Promise.all([
          ul2Controls.start({
            opacity: 1,
            y : 0,
            scale: 1.5 ,
            transition: { duration: 1, delay : 0.1 }
          }),
        ]);
        await Promise.all([
          ul3Controls.start({
            opacity: 1,
            y : 0,
            scale: 1.5 ,
            transition: { duration: 1, delay : 0.1 }
          }),
        ]);
      }
    };

    animateSkills();
  }, [divControls, ul1Controls, ul2Controls, ul3Controls, skillsVisible, skillsRef]);

  return (
    <section className='skills' ref={skillsRef}>
      <h2>Skills</h2>
      <motion.div className='skills_list'
        initial={{ y: -100, opacity: 0, scale: 0 }}
        animate={divControls}
      >
        <motion.ul animate={ul1Controls} initial={{ opacity: 0, y : -100 }}>
          <li className='li_title'><img alt='logo balise de code' src='./images/code-solid.svg'></img>Front-End</li>
          <li>Next.js</li>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Sass</li>
        </motion.ul>
        <motion.ul animate={ul2Controls} initial={{ opacity: 0 , y : -100}}>
          <li className='li_title'><img alt='logo outils' src='./images/screwdriver-wrench-solid.svg'></img>Outils</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>DevTools</li>
        </motion.ul>
        <motion.ul animate={ul3Controls} initial={{ opacity: 0 , y : -100}}>
          <li className='li_title'><img alt='logo palette de peintre' src='./images/palette-solid.svg'></img>Design</li>
          <li>Figma</li>
          <li>Canva</li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default Skills;