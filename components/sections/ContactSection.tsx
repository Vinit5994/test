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
      className="w-screen h-screen flex items-center justify-center px-8 md:px-16 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
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

      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium">Let&apos;s Connect</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out
            through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

              <div className="relative glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 h-full">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="w-6 h-6" />
                </div>

                <h3 className="font-semibold mb-2 text-lg">{method.label}</h3>
                <p className="text-sm text-gray-400 break-words">
                  {method.value}
                </p>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send className="w-4 h-4 text-indigo-400" />
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
            className="inline-flex flex-col items-center gap-4 glass rounded-3xl p-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg text-gray-400">
              Open to exciting Web3 opportunities and collaborations
            </p>
            <motion.a
              href="mailto:vinitpithadiya@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold flex items-center gap-2 cursor-hover group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Send me an email
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-sm text-gray-500"
        >
          <p>© 2024 Vinit Pithadiya. Built with Next.js & Framer Motion</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
