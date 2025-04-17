import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';

import { styles } from '../styles';
import { BoatCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#2563EB]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm  <span className="text-[#2563EB]">Nick</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop software <br />
            in C++, Java, and Python
          </p>
          <div className="text-secondary mt-4">
            <div className="flex">
              <MapPin className="w-4 h-4 relative top-[4px] mr-1" />
              <span>Boston, MA and Los Angeles, CA</span>
            </div>

            <div className="flex">
              <Mail className="w-4 h-4 relative top-[4px] mr-1" />
              <a href="mailto:nickmhfrank@gmail.com" className="hover:underline">
                nickmhfrank@gmail.com
              </a>
            </div>

            <div className="flex">
              <Linkedin className="w-4 h-4 relative top-[4px] mr-1" />
              <a
                href="https://linkedin.com/in/nmhfrank"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/nmhfrank
              </a>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className="h-full w-full"
      >
        <BoatCanvas />
      </motion.div>

      <motion.svg
        className="absolute bottom-0 left-0 w-[200%] h-[30vh]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ x: 0 }}
        animate={{ x: ['0%', '-50%', '0%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      >
        <path
          fill="#2563EBb3"
          d="
            M0,10
            C20,0 80,20 100,10
            L100,100
            L0,100
            Z"
        />
      </motion.svg>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
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