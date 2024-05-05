import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    // Votre EmailJs service ID, Template ID et Public Key
    const serviceId = "service_pu2nf79";
    const templateId = "template_tesmtac";
    const publicKey = "DcIo_T4gWNj5iiy-o";

    // Création d'un nouvel Objet dynamic
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "ChabinDev",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!");
        setName("");
        setEmail("");
        setMessage("");
        formMess.innerHTML = "<p id='success'>Message envoyé !</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 2500);
      },
      (error) => {
        console.log("FAILED...", error.text);
        formMess.innerHTML =
          "<p id='error'>Une erreur s'est produite , veuillez réessayer</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 2500);
      }
    );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={sendEmail} className="form-content">
        <label for="nom">Nom</label>
        <input
          name="nom"
          type="text"
          id="nom"
          required
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          required
          placeholder="exemmple@domaine.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Ecrivez votre message ici"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
