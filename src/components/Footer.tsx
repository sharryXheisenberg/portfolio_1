import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/sharryXheisenberg",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/saurabh-pande-8a9b7026a/",
      label: "LinkedIn"
    },
    {
      icon: <Twitter size={24} />,
      href: "https://x.com/Saurabh86576",
      label: "Twitter"
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:saurabhpande6578@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Saurabh Pande
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring full-stack developer wants to solve real world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <div className="space-y-2 text-gray-400">
              <p>saurabhpande6578@gmail.com</p>
              <p>+91-8237553541</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-all duration-200 p-2 rounded-full hover:bg-white/10"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm flex items-center">
                Made  by Saurabh Pande
              </p>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full hover:shadow-lg transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Saurabh Pande. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;