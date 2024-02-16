"use client"
import React, { useEffect } from 'react';
import './projets.css';

const Projets = () => {

  return (
    <section>
      <h2>Mes Projets</h2>
      <section className='projets_diferents'>
        <section className='projets_formation'>
          <h3>Projets Formation</h3>
          <aside className='site events'>
            <a href='https://77events-three.vercel.app/' target='_blank'>
            <h4>77events</h4>
            <iframe title='77events' src='https://77events-three.vercel.app/' scrolling="no" width={600} height={400} defer></iframe>
            </a>
          </aside>
          <aside className='site argent_bank'>
          <a href='https://argent-bank-iota.vercel.app/' target='_blank'>
            <h4>Argent-Bank</h4>
            <iframe title='Argent Bank' src='https://argent-bank-iota.vercel.app/' scrolling="no" width={600} height={400} defer></iframe>
            </a>
          </aside>
        </section>
        <section className='projets_personnels'>
          <h3>Projets Personnels</h3>
          <aside className='site codemeta'>
          <a href='https://www.codemeta-solutions.com/' target='_blank'>
            <h4>CodeMeta Solutions</h4>
            <iframe title='CodeMeta Solutions' src='https://www.codemeta-solutions.com/' scrolling="no" width={600} height={400} defer></iframe>
            </a>
          </aside>
        </section>
      </section>
    </section>
  );
};

export default Projets;