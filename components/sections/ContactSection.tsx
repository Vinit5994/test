'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vinitpithadiya@gmail.com',
      href: 'mailto:vinitpithadiya@gmail.com',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-6354669654',
      href: 'tel:+916354669654',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/vinit',
      href: 'https://github.com',
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vinit',
      href: 'https://linkedin.com',
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section
      id="contact"
      className="w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden grid-bg"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-6xl w-full z-10 h-full flex flex-col justify-center py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-full mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
            <span className="text-xs sm:text-sm font-medium">Let&apos;s Connect</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? Feel free to reach out
            through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 overflow-y-auto scrollbar-hide max-h-[45vh] sm:max-h-[50vh]">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-hover"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`}
              />

              <div className="relative glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-white/5 transition-all duration-300 h-full glow-effect">
                <div
                  className={`inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${method.color} mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>

                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">{method.label}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 break-words line-clamp-2">
                  {method.value}
                </p>

                {/* Hover arrow */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="inline-flex flex-col items-center gap-3 sm:gap-4 glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 px-2">
              Open to exciting Web3 opportunities and collaborations
            </p>
            <motion.a
              href="mailto:vinitpithadiya@gmail.com"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold flex items-center gap-1 sm:gap-2 cursor-hover group glow-effect text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Send me an email</span>
              <span className="sm:hidden">Email Me</span>
              <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-6 sm:mt-8 md:mt-12 text-[10px] sm:text-xs md:text-sm text-gray-500"
        >
          <p>© 2024 Vinit Pithadiya. Built with Next.js & Framer Motion</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
