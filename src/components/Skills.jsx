import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const skills = {
  frontend: ['JavaScript', 'HTML', 'CSS', 'React'],
  backend: ['PHP', 'JAVA', 'C+', 'C++', 'C#', 'Node.js', 'RESTful', 'Laravel'],
  database: ['MySQL/MSSQL', 'MongoDB', 'Database Design', 'SQL/NoSQL'],
  general: [
    'Git',
    'System Architecture',
    'SEO Optimization',
    'Responsive Design',
    'OOP',
    'Arduino'
  ]
};

const SkillCard = ({ title, items }) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.5, 0.75)}
    className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-[2px] rounded-[20px] shadow-xl"
  >
    <div className="bg-tertiary rounded-[20px] py-6 px-12 min-h-[280px] flex flex-col backdrop-blur-lg bg-opacity-90">
      <h3 className="text-white text-[28px] font-bold text-center mb-4">{title}</h3>
      <div className="flex-1 flex flex-wrap gap-3 justify-center items-center">
        {items.map((skill, index) => (
          <span
            key={index}
            className="text-white bg-black/30 px-4 py-2 rounded-full text-[16px] font-medium 
                     hover:bg-black/50 transition-all duration-300 cursor-pointer
                     border border-white/20 backdrop-blur-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Skills</p>
        <h2 className={styles.sectionHeadText}>Expertise</h2>
      </motion.div>

      <div className="mt-20 flex flex-col gap-10">
        <SkillCard title="Front-End Development" items={skills.frontend} />
        <SkillCard title="Back-End Development" items={skills.backend} />
        <SkillCard title="Database Management" items={skills.database} />
        <SkillCard title="General Skills" items={skills.general} />
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills'); 