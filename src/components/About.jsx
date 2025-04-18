import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { profile } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[174px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.35 * index, 0.5)}
        className="w-full blue-red-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{max:30, scale:1, speed:450}} 
          className="bg-tertiary rounded-[20px] py-1 px-4 min-h-[240px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-32 h-32 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title} </h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
    </motion.div>
    <motion.p 
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Software Engineer with early-career experience in collaborative development environments. Exhibited 
      strength in both implementing new functionality and ensuring code quality through testing. Thrived 
      within rigorous course schedule covering a wide breadth of software disciplines. Eager to contribute by 
      leveraging technical expertise and collaborative skills to build reliable and impactful solutions. 
    </motion.p>
    <div className="mt-10 max-w-[760px] lgabt:max-w-[1280px] ml-[-16px]">
      <div className="grid gap-4 justify-center grid-cols-[repeat(auto-fit,_minmax(174px,_174px))]">
        <div className="blue-red-gradient p-[1px] rounded-[20px] shadow-card h-[496px] w-[364px] col-span-2 row-span-2">
          <img 
            src={profile} 
            alt="Profile"
            loading="lazy"
            decoding="async"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")