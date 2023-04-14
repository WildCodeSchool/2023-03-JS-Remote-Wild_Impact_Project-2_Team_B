import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID, form.current,
      process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => { alert('message sent successfully...'); console.log(result.text); },
        (error) => { console.log(error.text); });
  };


  return (
    <div>
      <div className="container-form">
        <h1 className='contacttitle'>Contactez nous</h1>
        <form className="ContactForm" ref={form} onSubmit={sendEmail}>
          <label htmlFor="firstName">Prénom</label>
          <input
            name='user_firstName'
            type="text"
            id="firstName"
            className="firstname formEntry animated"
            placeholder="Prenom"
          />
          <label htmlFor="lastName">Nom</label>
          <input
            name='user_lastName'
            type="text"
            id="lastName"
            className="name formEntry animated"
            placeholder="Nom"
          />
          <label htmlFor="Email">Adresse mail</label>
          <input
            name='user_email'
            type="text"
            id="email"
            className="email formEntry animated"
            placeholder="Email"
          />
          <label htmlFor="Message">Message</label>
          <textarea
            name='umessage'
            id="message"
            className="message formEntry"
            placeholder="Votre message"
          ></textarea>
          <br />
          <button type="submit" className="submit" onClick={() => {
            alert("Message Sent.");
          }}>
            Envoyer
          </button>

        </form>
      </div>
      <div class="messagedefilant">

        <div>
          <p> <span class="puce">•</span> HIRE SUPERHERO<span class="puce">•</span> HIRE SUPERHERO <span
            class="puce">•</span>
            HIRE SUPERHERO<span class="puce">•</span> HIRE SUPERHERO
            <span class="puce">•</span> HIRE SUPERHERO<span class="puce">•</span> HIRE SUPERHERO
            <span class="puce">•</span> HIRE SUPERHERO <span class="puce">•</span> HIRE SUPERHERO<span class="puce">•</span>
            HIRE SUPERHERO
            <span class="puce">•</span> HIRE SUPERHERO
          </p>

        </div>
      </div>
    </div>
  );
};

export default Contact;