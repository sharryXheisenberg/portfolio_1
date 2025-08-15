import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Example icons from react-icons (install with: npm install react-icons)
import { FaReact, FaNodeJs, FaPython, FaGit, FaDocker, FaAws, FaFigma, FaLinux, FaJs,  } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';

const skillIcons: { [key: string]: React.ReactNode } = {
  "React": <FaReact className="text-blue-500" />,
  "TypeScript": <SiTypescript className="text-blue-700" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "JavaScript": <FaJs className="text-yellow-400" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "Python": <FaPython className="text-yellow-600" />,
  "Express.js": <SiExpress className="text-gray-700 dark:text-gray-200" />,
  "MongoDB": <SiMongodb className="text-green-700" />,
  "PostgreSQL": <SiPostgresql className="text-blue-700" />,
  "Git": <FaGit className="text-orange-500" />,
  "Docker": <FaDocker className="text-blue-400" />,
  "AWS": <FaAws className="text-orange-400" />,
  "Figma": <FaFigma className="text-pink-500" />,
  "Linux": <FaLinux className="text-black dark:text-white" />,
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "JavaScript" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Python" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "PostgreSQL" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "Figma" },
        { name: "Linux" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-4">
                    <span className="text-2xl">{skillIcons[skill.name] || null}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;