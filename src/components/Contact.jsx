"use client"
import React, {useState} from 'react'
import './contact.css'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState ({
      name : "",
      email : "",
      subject : "",
      tel : "",
      message : "",
  });

  const [isSuccess, setIsSucces] = useState(false)

  const closeSend = (e) => {
    setIsSucces(false)
  }

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      console.log(formData);
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log("Message envoyé avec succès !");
          setIsSucces(true)
          setFormData({
            name: "",
            email : "",
            subject: "",
            tel: "",
            message: "",
          });
        } else {
          console.error(
            "Une erreur s'est produite lors de l'envoi du formulaire :",
            response.status, // log the status code
            response.statusText // log the status text            
            );
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'envoi du formulaire :",
          error
        );
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <section className={`contact ${isSuccess ? 'success' : ''}`}> 
    <h2 className='form_title'>Me contacter</h2>
    <form id='contact' className='form' onSubmit={handleSubmit} defer>
    {isSuccess ? (
            <div className='success_message'>
              <img onClick={closeSend} className='return_button' alt='logo button retour' src='/images/xmark-solid.svg'></img>
              <img className='validate_icon' alt='logo validation' src="/images/check-solid.svg"></img>
              <p>Votre message a été envoyé avec succès!</p>
            </div>
          ) : (
    <section className='form_container'>
      <div className='form_group'>
        <div className='name'>
            <label htmlFor='name'>Nom</label>
            <input autoComplete='name' id='name' value={formData.name} type='text' name='name' required onChange={handleChange}></input>
        </div>
        <div className='firstname'>
            <label htmlFor='firstname'>Prénom</label>
            <input autoComplete='firstname' id='firstname' value={formData.name} type='text' name='firstname' required onChange={handleChange}></input>
        </div>
        </div>
        <div className='email'>
            <label htmlFor='email'>Email</label>
            <input autoComplete='email' id='email' value={formData.email} type='email' name='email' required onChange={handleChange}></input>
        </div>
        <div className='form_group'>
        <div className='objet'>
            <label htmlFor='objet'>Objet</label>
            <input autoComplete='objet' id='objet' value={formData.subject} type='text' name='subject' required onChange={handleChange}></input>
        </div>
        <div className='tel'>
            <label htmlFor='tel'>Téléphone</label>
            <input autoComplete='tel' id='tel' value={formData.tel} type='text' name='tel' required onChange={handleChange}></input>
        </div>
        </div>
        <div className='message'>
            <label htmlFor='message'>Message</label>
            <textarea autoComplete='message' id='message' rows="6" value={formData.message} name='message' maxLength={250} required onChange={handleChange}></textarea>
        </div>
        <button className='submit' type='submit'>
                {isSubmitting ? <>En cours...</> : "Envoyer"}
        </button>
        
    </section>
    )}
    </form>
    </section>
  )
}

export default Contact