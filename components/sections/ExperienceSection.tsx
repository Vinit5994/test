'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    company: 'Lampros Tech',
    location: 'Ahmedabad, India',
    role: 'Software Development Engineer',
    team: 'Apps for Enterprises',
    period: 'Feb 2024 - Present',
    projects: [
      {
        title: 'Chora Club',
        description:
          'Designed and implemented backend APIs and custom Subgraphs for Optimism and Arbitrum DAOs to retrieve delegate and proposal data for Chora Club. Utilized Next.js and The Graph to enable seamless Web3 integration, powering dynamic data flows and user interactions within the DAO exploration and engagement platform.',
        tags: ['Next.js', 'The Graph', 'Web3', 'Optimism', 'Arbitrum'],
      },
      {
        title: 'Pravahini',
        description:
          'Developed Pravahini, a feature-rich AI platform with integrated frontend for marketplace, data visualization, code editor, and decentralized task management using React and Tailwind CSS.',
        tags: ['React', 'Tailwind CSS', 'AI', 'Task Management'],
      },
      {
        title: 'GovPunk - AI Delegate of Optimism',
        description:
          'Developed GovPunk: AI-powered governance proposal analyzer using RAG (Retrieval-Augmented Generation), vector search with Pinecone, web scraping via DuckDuckGo API, and FastAPI backend with MongoDB integration for Optimism blockchain governance.',
        tags: ['RAG', 'Pinecone', 'FastAPI', 'MongoDB', 'AI'],
      },
    ],
  };

  return (
    <section
      id="experience"
      className="w-screen h-screen flex items-center justify-center px-8 md:px-16 relative overflow-y-auto"
    >
      <div className="max-w-6xl w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-400">
            Professional journey and contributions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 mb-8"
        >
          {/* Company header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 pb-6 border-b border-gray-700">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{experience.company}</h3>
                  <p className="text-indigo-400 font-medium">{experience.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                Team: {experience.team}
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            {experience.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-6 border-l-2 border-indigo-500/30 hover:border-indigo-500 transition-colors cursor-hover group"
              >
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />

                <div className="mb-3">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
