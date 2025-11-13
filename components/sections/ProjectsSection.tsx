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
      className="w-screen h-screen flex items-center justify-center px-8 md:px-16 relative"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-400">
            Building the future of decentralized applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              <div className="relative glass rounded-3xl p-8 h-full hover:bg-white/5 transition-all duration-300">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors text-sm font-medium">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
