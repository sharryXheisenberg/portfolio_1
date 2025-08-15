import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const traits = [
  //   {
  //     icon: <Heart className="w-8 h-8" />,
  //     title: "Passionate Creator",
  //     description: "I pour my heart into every line of code, creating digital experiences that make a difference."
  //   },
  //   {
  //     icon: <Target className="w-8 h-8" />,
  //     title: "Problem Solver",
  //     description: "I thrive on challenges and love turning complex problems into elegant, simple solutions."
  //   },
  //   {
  //     icon: <Zap className="w-8 h-8" />,
  //     title: "Avid Learner",
  //     description: "Technology evolves rapidly, and so do I. Always exploring, always growing, always adapting."
  //   }
  // ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
           I'm a frontend developer who enjoys turning project ideas into clean, functional, and engaging user interfaces. I have a passion for creating responsive web experiences using technologies like React and Next.js.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-3 gap-8">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                {trait.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {trait.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          {/* <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            <h3 className="text-6xl md:text-8xl font-bold mb-4">AVID LEARNER</h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            "The beautiful thing about learning is that no one can take it away from you." 
            This philosophy drives me to continuously expand my horizons and embrace new technologies.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;