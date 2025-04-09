import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import profilePic from "../assets/images/profile.jpg";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[17px] leading-[30px] max-w-2xl'
          >
            I am Fardeen, an AI & ML Engineer with expertise in Python, Power BI, SQL, and frameworks like Numpy, Pandas, PyTorch, TensorFlow, and Scikit-learn. Additionally, I have strong data analysis skills using Power BI, creating interactive dashboards for insights-driven decision-making. I'm a fast learner, adaptable, and passionate about leveraging AI and data analytics to solve real-world problems. Let’s collaborate to build impactful solutions!
          </motion.p>

          <a
            href="https://www.linkedin.com/in/md-fardeen-ismail-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-yellow-400 transition-colors duration-300 mt-4 inline-block"
          >
            Connect with me on LinkedIn
          </a>
        </div>

        <motion.img
          variants={fadeIn("right", "spring", 0.5, 1)}
          src={profilePic}
          alt="Fardeen"
          className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-black shadow-[0_0_20px_5px_rgba(59,130,246,0.6)] -mt-10"

        />

      </div>



      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
