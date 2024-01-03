import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name , value } = e.target;

    setForm({ ...form, [name] : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_87sli4b', 'template_xrlgr6w',
    {
      from_name: form.name,
      to_name: 'Jean',
      from_email: form.email,
      to_email: 'jeandonascmento@gmail.com',
      message: form.message,
      
    },
    'Kuu9XKBKiIfHFiXll',
    ) 
    
    .then(() => {
      if (form.name || form.email || form.message==['']) {
        setLoading(false);
        alert('você se esqueceu de preencher um dos campos.');
      }
      else{
      setLoading(false);
      alert('Obrigado! Irei retornar o mais rápido possível. :)');
      
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }
    }, (error)=> {
      console.log(error);

      alert('Algo deu errado.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Converse comigo</p>
        <h3 className={styles.sectionHeadText}>Contatar.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu Nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual o seu nome?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual o seu email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Sua Mensagem</span>
            <input
              rows="19"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Escreva o que quiser!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")