"use client"
import React, { useState } from 'react';
import './footer.css';

// Composant de la modale
const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>x</span>
        <h2>Politique de confidentialité et de protection des données</h2>
        <p>Merci de visiter mon portfolio en ligne. Votre vie privée et la protection de vos données personnelles sont
        importantes pour moi. Cette politique de confidentialité explique comment je collecte, utilise et protège
        vos informations lorsque vous utilisez le formulaire de contact sur ce site.</p>
        <h3>Collecte et utilisation des informations</h3>
        <p>Lorsque vous utilisez le formulaire de contact pour m'envoyer un message, je collecte les informations
        que vous fournissez volontairement, telles que votre nom et votre adresse e-mail. Ces informations sont utilisées
        uniquement dans le but de répondre à votre demande de contact et de vous fournir les informations demandées.</p>
        <h3>Consentement</h3>
        <p>En utilisant le formulaire de contact et en soumettant vos informations personnelles, vous consentez à ce que je
        collecte et utilise ces informations aux fins décrites ci-dessus.</p>
        <h3>Protection des données</h3>
        <p>Je m'engage à protéger vos données personnelles et à prendre des mesures pour garantir leur sécurité. Vos
        informations ne seront pas partagées avec des tiers sans votre consentement préalable, sauf si cela est nécessaire
        pour répondre à votre demande ou si la loi l'exige.</p>
        <h3>Vos droits</h3>
        <p>Vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles à tout moment. Si vous
        souhaitez exercer l'un de ces droits, veuillez me contacter en utilisant les informations de contact fournies
        ci-dessous.</p>
        <h3>Contact</h3>
        <p>Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez exercer vos droits
        en matière de protection des données, veuillez me contacter à l'adresse suivante : carneiromoreirasteven22@gmail.com</p>
        <h3>Modification de la politique de confidentialité</h3>
        <p>Je me réserve le droit de mettre à jour ou de modifier cette politique de confidentialité à tout moment. Toute
        modification sera publiée sur cette page. Nous vous encourageons à consulter régulièrement cette politique de 
        confidentialité pour rester informé de la manière dont vos données personnelles sont collectées et utilisées.</p>
      </div>
    </div>
  );
};

// Composant Footer
const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <footer>
      <section className='footer_contact'>
        <a href='mailto:carneiromoreirasteven22@gmail.com'>
          <img alt='logo mail' src='./images/envelope-solid.svg'></img> 
          <p>carneiromoreirasteven22@gmail.com</p>
        </a>
        <a href='tel:carneiromoreirasteven22@gmail.com'>
          <img alt='logo téléphone' src='./images/phone-solid.svg'></img> 
          <p>06.27.57.59.07</p>
        </a>
      </section>
      <section>
        <p onClick={openModal}>Politique de confidentialité et de protection des données</p>
        <p>© Copyright 2024 - Carneiro Moreira Steven</p>
      </section>
      {showModal && <Modal onClose={closeModal} />}
    </footer>
  );
};

export default Footer;