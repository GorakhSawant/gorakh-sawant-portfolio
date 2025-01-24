// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gorakhsawant',
      icon: <FaGithub className="text-xl" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/gorakh-sawant',
      icon: <FaLinkedin className="text-xl" />,
    },
    {
      name: 'Email',
      url: 'mailto:gorakh.r.sawant@gmail.com',
      icon: <FaEnvelope className="text-xl" />,
    },
  ];

    return (
    <footer className="relative mt-20">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-12">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-gray-900/40"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="backdrop-blur-md bg-gray-900/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-8">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white font-orbitron">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-300 font-rajdhani">
                Find me on any of these platforms.
              </h5>
              <div className="mt-6 mb-8 lg:mb-0">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 mr-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2 font-tech-mono">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-300 hover:text-white font-rajdhani block pb-2 text-sm"
                        href="/about"
                      >
                        About Me
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-white font-rajdhani block pb-2 text-sm"
                        href="/projects"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-white font-rajdhani block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2 font-tech-mono">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-300 hover:text-white font-rajdhani block pb-2 text-sm"
                        href="https://github.com/gorakhsawant"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github Repository
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-white font-rajdhani block pb-2 text-sm"
                        href="https://linkedin.com/in/gorakh-sawant"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200/10" />

          <div className="flex flex-wrap items-center md:justify-between justify-center pb-6">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-300 font-rajdhani py-1 flex items-center justify-center">
                Made with 
                <FaHeart className="text-red-500 mx-1" /> 
                by{" "}
                <a
                  href="https://github.com/gorakhsawant"
                  className="text-white hover:text-blue-400 ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gorakh Sawant
                </a>
              </div>
        </div>
          </div>
        </div>
          </div>
      </footer>
    );
  };
  
  export default Footer;
  