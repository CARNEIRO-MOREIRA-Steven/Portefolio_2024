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
            <img alt='image site 77events' src='./images/77events.webp'></img>
            </a>
          </aside>
          <aside className='site argent_bank'>
          <a href='https://argent-bank-iota.vercel.app/' target='_blank'>
            <h4>Argent-Bank</h4>
            <img alt='image site argent bank' src='./images/argent_bank.webp'></img>
            </a>
          </aside>
        </section>
        <section className='projets_personnels'>
          <h3>Projets Personnels</h3>
          <aside className='site codemeta'>
          <a href='https://www.codemeta-solutions.com/' target='_blank'>
            <h4>CodeMeta Solutions</h4>
            <img alt='image site codemeta solutions' src='./images/codemeta.webp'></img>
            </a>
          </aside>
        </section>
      </section>
    </section>
  );
};

export default Projets;