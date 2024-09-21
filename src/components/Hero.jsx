import { motion } from "framer-motion";

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff7e30]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>
        <div className="hello">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Oi, Eu sou &nbsp;
            <span className="text-[#ff7e30]">
              Jean
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Sou Desenvolvedor Fullstack e estudante, trabalho com ênfase em Interfaces de Usuário e Aplicações Web.
          </p>
        </div>
        </div>

        <ComputersCanvas />

        <div className="absolute h-1 xs:bottom-10 bottom-32 flex w-full justify-center items-center">
          <a href="#about">
            <div className="w-[33px] h-[66px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">  
            <motion.div 
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
            </div>
          </a>
        </div>

    </section>
  )
}

export default Hero