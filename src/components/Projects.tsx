import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Gauge, Star, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "PasteManager",
      description: " A modern React-based application for managing and sharing text snippets with ease. Built with Vite, Tailwind CSS, and Redux Toolkit, this app offers robust functionalities with a better user interface.",
      image: "/pastemanager.png",
      liveLink: "https://paste-manager-2.vercel.app/",
      githubLink: "https://github.com/sharryXheisenberg/PasteManager",
      pageSpeedScore: 95,
      pageSpeedLink: "https://pagespeed.web.dev/analysis/https-paste-manager-2-vercel-app/m6pkaigpy2?form_factor=desktop",
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      featured: false
    },
    {
      id: 2,
      title: "YourDashboard",
      description: "   A modern, responsive admin dashboard built with React, TypeScript, and Tailwind CSS. Features real-time data updates, interactive charts, and a clean, professional design.",
      image: "/yourDashboard.png",
      liveLink: "https://newdashboard-tan.vercel.app/",
      githubLink: "https://github.com/sharryXheisenberg/sales_data_dashboard",
      pageSpeedScore: 92,
      pageSpeedLink: "https://pagespeed.web.dev/analysis/https-newdashboard-tan-vercel-app/83mwzvmjdd?form_factor=desktop",
      tech: ["React", "TypeScript", "Tailwind CSS" , "Chart.js"],
      featured: false
    },
    {
      id: 3,
      title: "AppointFlow",
      description: " A modern TypeScript + React-based application for managing and scheduling appointments with ease. Built with Vite, Tailwind CSS, and Redux Toolkit, this app offers robust functionalities with a better user interface.",
      image: "/appointFlow.png",
      liveLink: "https://booking-and-calendar-ui-template.vercel.app/",
      githubLink: "https://github.com/sharryXheisenberg/booking_and_calendar_UI_template",
      pageSpeedScore: 88,
      pageSpeedLink: "https://pagespeed.web.dev/analysis/https-booking-and-calendar-ui-template-vercel-app/tdevidb250?form_factor=desktop",
      tech: ["React", "TypeScript", "Tailwind CSS","Redux"],
      featured: false
    },
    {
      id: 4,
      title: "Task Board ",
      description: "  A modern React-based Task Board Application for efficient collaboration within organizations. Built with Vite, TypeScript and Tailwind CSS this app allows users to organize tasks visually on boards.",
      image: "/taskBoard.png",
      liveLink: "https://task-bar-sigma.vercel.app/",
      githubLink: "https://github.com/sharryXheisenberg/task_bar",
      pageSpeedScore: 95,
      pageSpeedLink: "https://pagespeed.web.dev/analysis/https-task-bar-sigma-vercel-app/4ehc2kqc3m?form_factor=desktop",
      tech: ["Vue.js", "TypeScript", "Tailwind CSS"],
      featured: false
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900';
    if (score >= 70) return 'bg-yellow-100 dark:bg-yellow-900';
    return 'bg-red-100 dark:bg-red-900';
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating technical expertise and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                project.featured ? 'ring-2 ring-purple-300 dark:ring-purple-600' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 text-sm font-medium">
                  <Star className="inline w-4 h-4 mr-1" />
                  Featured Project
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* PageSpeed Score */}
                <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg mb-4 ${getScoreBg(project.pageSpeedScore)}`}>
                  <Gauge className={`w-4 h-4 ${getScoreColor(project.pageSpeedScore)}`} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    PageSpeed: 
                  </span>
                  <span className={`font-bold ${getScoreColor(project.pageSpeedScore)}`}>
                    {project.pageSpeedScore}/100
                  </span>
                  <motion.a
                    href={project.pageSpeedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.a>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/sharryXheisenberg"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;