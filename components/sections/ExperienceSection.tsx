'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import ScrollIndicator from '../ScrollIndicator';
import StoryTransition from '../StoryTransition';
import { RocketDoodle, LightbulbDoodle } from '../DoodleElements';

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
      className="w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden grid-bg"
    >
      <div className="max-w-6xl w-full h-full flex flex-col justify-center py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
            Professional journey and contributions
          </p>
        </motion.div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10"
          >
            {/* Company header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-6 md:mb-8 pb-4 sm:pb-6 border-b border-gray-300 dark:border-gray-700">
              <div className="w-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shrink-0">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">{experience.company}</h3>
                    <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm sm:text-base">{experience.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-xs sm:text-sm">
                  Team: {experience.team}
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {experience.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-4 sm:pl-6 border-l-2 border-indigo-500/30 hover:border-indigo-500 transition-colors cursor-hover group"
                >
                  <div className="absolute left-[-5px] sm:left-[-9px] top-1 sm:top-2 w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />

                  <div className="mb-2 sm:mb-3">
                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 flex items-center gap-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20"
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
      </div>

      {/* Doodle Art Elements */}
      <RocketDoodle className="absolute top-20 right-20 opacity-60" />
      <LightbulbDoodle className="absolute bottom-28 left-16 opacity-50" />

      {/* Story Transition */}
      <StoryTransition
        story="From building AI-powered governance tools to crafting DAO platforms, my professional journey has been about turning innovative ideas into reality. Now, let's dive into the projects I'm most proud of..."
        nextSection="Projects"
        position="right"
      />

      {/* Scroll Indicator */}
      <ScrollIndicator message="See my projects" position="bottom" />
    </section>
  );
};

export default ExperienceSection;
