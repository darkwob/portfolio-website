import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[48%] lg:w-[31%]"
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className='bg-tertiary p-4 sm:p-5 rounded-2xl h-full'
      >
        <div className='relative w-full h-[200px] sm:h-[220px] md:h-[240px]'>
          <img
            src={image}
            alt='project preview'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open("https://github.com/darkwob", "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px] sm:text-[22px] md:text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[13px] sm:text-[14px] md:text-[15px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[13px] md:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-base sm:text-lg md:text-xl`}>My Projects</p>
        <h2 className={`${styles.sectionHeadText} text-2xl sm:text-3xl md:text-4xl`}>Portfolio.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[14px] sm:text-[15px] md:text-[17px] max-w-3xl leading-[24px] sm:leading-[27px] md:leading-[30px]'
        >
          The following projects showcase my skills and experience through real-world examples. 
          Each project demonstrates my ability to solve complex problems, work with different 
          technologies, and effectively manage project development. These projects reflect my 
          commitment to clean code, user experience, and technical excellence.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
