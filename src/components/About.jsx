import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Visão Geral</p>
        <h2 className={styles.sectionHeadText}>Introdução.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Sou um desenvolvedor de software com experiência
        em aplicações web fazendo uso de Javascript e Typescript,
        e com experiência em frameworks como React,
        Node.js, Next.js e outros.
        Aprendo rápido e a maioria das minhas habilidades
        desenvolvi sozinho sendo autodidata.
        Por isso tenho uma forma muito eficiente
        de trabalhar e resolver problemas quando se trata
        do processo de desenvolvimento de software.
        Estou ansioso para colaborar estreitamente com
        clientes e colegas de trabalho para criar soluções eficientes,
        escaláveis ​​e fáceis de usar que resolvem
        problemas do mundo real.
        Vamos trabalhar juntos e dar vida às suas ideias!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");