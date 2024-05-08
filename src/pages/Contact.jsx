import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import SocialNetwork from "../components/SocialNetwork";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Contact() {
  const year = new Date();

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        {/* <div className='contact-infos'>
          <div className='adress'>
            <div className='content'>
              <h4>Adresse</h4>
              <p>44 Rue Beau Soleil</p>
              <p>44850 Saint-Mars-du-Désert</p>
            </div>
          </div>
          <div className='phone'>
            <div className='content'>
              <h4>Téléphone</h4>
              <CopyToClipboard text="0675225429" className="hover">
                <p style={{cursor: "pointer"}} className='clipboard' onClick={() => alert("Numéro de Téléphone copié !")}>06 75 22 54 29</p>
              </CopyToClipboard>
            </div>
          </div>
          <div className='email'>
          <div className='content'>
            <h4>Email</h4>
            <CopyToClipboard text="chabin_972@hotmail.fr" className="hover">
                <p style={{cursor: "pointer"}} className='clipboard' onClick={() => alert("Adresse Email copié !")}>chabin_972@hotmail.fr</p>
              </CopyToClipboard>
          </div>
          </div>
        <SocialNetwork />
        <div className='credits'>
          <p>ChabinDev - {year.getFullYear()} © - All Rights Reserved</p>
        </div>
        </div> */}
        <Buttons left={"/projet-4"} />
        <Footer />
      </motion.div>
    </main>
  );
}
