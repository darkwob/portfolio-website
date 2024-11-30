import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] sm:w-[280px] md:w-[320px] w-full max-w-[320px]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-4 sm:py-5 px-6 sm:px-8 md:px-12 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain" />
          <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-base sm:text-lg md:text-xl`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-2xl sm:text-3xl md:text-4xl`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[15px] md:text-[17px] max-w-3xl leading-[24px] sm:leading-[27px] md:leading-[30px]"
      >
        Born and raised in Adana, Turkey, my journey into the digital world began when my father brought home our first computer. Like many young enthusiasts, I started with gaming, but my curiosity led me down a fascinating path. I became intrigued by game modifications and began writing game cheats, which naturally evolved into an interest in ethical hacking.

        This exploration of digital systems and their vulnerabilities sparked a deeper passion for web development. While my initial adventures were in manipulating games and understanding system securities, I found my true calling in web development, particularly in backend technologies.

        Today, I'm a Full Stack Developer with expertise in PHP, HTML, CSS, and JavaScript. My background in system manipulation has given me a unique perspective on security and optimization in web development. I also have experience with Java, C-family languages, and Arduino programming, along with foundational knowledge in Node.js and React.

        With over 1.5 years of professional experience, I've worked on corporate websites and tactical laser systems, focusing on backend development. My journey from gaming enthusiast to professional developer has equipped me with strong problem-solving skills, team adaptability, leadership qualities, and a disciplined approach to work.

        I'm constantly inspired by the evolving nature of software technologies and aim to be among the distinguished professionals in this field. My principle is to continuously bridge the gap between my current knowledge and future goals, never tiring in the pursuit of excellence.
      </motion.p>

      <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
