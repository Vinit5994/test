'use client';

import { motion } from 'framer-motion';
import { Rocket, Shield, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Pharos',
      description:
        "Pharos is a decentralized raffle platform that enables fair, verifiable raffles for physical goods, digital assets, and crypto prizes. It uses Pyth Network's entropy for on-chain randomness, so winners are provable and cannot be predicted or manipulated.",
      icon: Rocket,
      gradient: 'from-indigo-500 to-purple-500',
      tags: ['Web3', 'DeFi', 'Pyth Network', 'Smart Contracts'],
    },
    {
      title: 'GovLens',
      description:
        'GovLens is a platform designed to provide a comprehensive governance health score and insights into the performance of Decentralized Autonomous Organizations (DAOs). By aggregating and analyzing critical governance data, GovLens empowers DAO members, leaders, and stakeholders to make informed decisions.',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-500',
      tags: ['DAO', 'Governance', 'Analytics', 'Web3'],
    },
  ];

  return (
    <section
      id="projects"
      className="w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative grid-bg"
    >
      {/* Subtle floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 rounded-full opacity-40 animate-float" style={{ backgroundColor: '#4A70A9' }} />
        <div className="absolute bottom-32 left-20 w-2.5 h-2.5 rounded-full opacity-40 animate-float delay-200" style={{ backgroundColor: '#8FABD4' }} />
      </div>

      <div className="max-w-6xl w-full h-full flex flex-col justify-center py-6 sm:py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 mb-2">
            Building the future of decentralized applications
          </p>
          <p className="text-xs sm:text-sm md:text-base italic text-indigo-600 dark:text-indigo-400 opacity-80">
            Decentralization meets fairness — building transparent blockchain solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 overflow-y-auto scrollbar-hide max-h-[65vh] sm:max-h-[70vh]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-hover"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 blur-xl`}
              />

              <div className="relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-full hover:bg-white/5 transition-all duration-300 glow-effect">
                {/* Icon */}
                <div
                  className={`inline-flex p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.gradient} mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4 md:mb-6 line-clamp-3 sm:line-clamp-4 md:line-clamp-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-xs sm:text-sm font-medium">
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">View Project</span>
                    <span className="sm:hidden">View</span>
                  </button>
                  <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass hover:bg-white/10 transition-colors text-xs sm:text-sm font-medium">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    Code
                  </button>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
