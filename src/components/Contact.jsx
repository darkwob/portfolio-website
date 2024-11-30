import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-4 sm:p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} text-base sm:text-lg md:text-xl`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-2xl sm:text-3xl md:text-4xl`}>Contact.</h3>

        <ContactForm />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] sm:h-[350px] h-[250px] w-full relative'
      >
        <div className='absolute w-full h-full'>
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
