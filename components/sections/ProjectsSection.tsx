'use client';

import { motion } from 'framer-motion';
import { Rocket, Shield, ExternalLink, Github, Bot, Globe, Building, Factory } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
  // Helper function to get color values from gradient
  const getColorValues = (gradient: string) => {
    const colorMap: { [key: string]: { hover: string; text: string; bg: string; border: string } } = {
      'indigo-500': { hover: '#6366f1', text: '#818cf8', bg: 'rgba(99, 102, 241, 0.1)', border: 'rgba(99, 102, 241, 0.2)' },
      'purple-500': { hover: '#a855f7', text: '#c084fc', bg: 'rgba(168, 85, 247, 0.1)', border: 'rgba(168, 85, 247, 0.2)' },
      // 'pink-500': { hover: '#ec4899', text: '#f472b6', bg: 'rgba(236, 72, 153, 0.1)', border: 'rgba(236, 72, 153, 0.2)' },
      'blue-500': { hover: '#3b82f6', text: '#60a5fa', bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.2)' },
      'cyan-500': { hover: '#06b6d4', text: '#22d3ee', bg: 'rgba(6, 182, 212, 0.1)', border: 'rgba(6, 182, 212, 0.2)' },
      'emerald-500': { hover: '#10b981', text: '#34d399', bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.2)' },
      'teal-500': { hover: '#14b8a6', text: '#2dd4bf', bg: 'rgba(20, 184, 166, 0.1)', border: 'rgba(20, 184, 166, 0.2)' },
      'orange-500': { hover: '#f97316', text: '#fb923c', bg: 'rgba(249, 115, 22, 0.1)', border: 'rgba(249, 115, 22, 0.2)' },
      'red-500': { hover: '#ef4444', text: '#f87171', bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.2)' },
      'slate-600': { hover: '#475569', text: '#64748b', bg: 'rgba(71, 85, 105, 0.1)', border: 'rgba(71, 85, 105, 0.2)' },
      'gray-700': { hover: '#374151', text: '#4b5563', bg: 'rgba(55, 65, 81, 0.1)', border: 'rgba(55, 65, 81, 0.2)' },
    };
    
    const match = gradient.match(/from-(\w+-\d+)/);
    if (match) {
      const color = match[1];
      return colorMap[color] || colorMap['indigo-500'];
    }
    return colorMap['indigo-500'];
  };

  const projects = [
    {
      title: 'Pharos',
      description:
        "Pharos is a decentralized raffle platform that enables fair, verifiable raffles for physical goods, digital assets, and crypto prizes. It uses Pyth Network's entropy for on-chain randomness, so winners are provable and cannot be predicted or manipulated.",
      icon: Rocket,
      image: '/pharos.png',
      gradient: 'from-slate-600 to-gray-700',
      tags: ['Web3', 'DeFi', 'Pyth Network', 'Smart Contracts'],
      category: 'Personal Project',
      liveLink: 'https://pharos-mvp.vercel.app', 
      codeLink: 'https://github.com/lunaria05/pharos', 
    },
    {
      title: 'GovLens',
      description:
        'GovLens is a platform designed to provide a comprehensive governance health score and insights into the performance of Decentralized Autonomous Organizations (DAOs). By aggregating and analyzing critical governance data, GovLens empowers DAO members, leaders, and stakeholders to make informed decisions.',
      icon: Shield,
      image: '/govlens.webp',
      gradient: 'from-slate-600 to-gray-700',
      tags: ['DAO', 'Governance', 'Analytics', 'Web3','Optimism'],
      category: 'Personal Project',
      liveLink: 'https://govlens.vercel.app', 
      codeLink: 'https://github.com/GovLens/GovLens', 
    },
    {
      title: 'Chora Club',
      description:
        'A comprehensive DAO exploration platform that makes blockchain governance accessible to everyone. Built custom Subgraphs for Optimism and Arbitrum networks to power real-time proposal tracking and delegate analytics for 500+ DAO delegates.',
      icon: Globe,
      image: '/choraclub.png',
      gradient: 'from-slate-600 to-gray-700',
      tags: ['Next.js', 'The Graph', 'Web3', 'Optimism', 'Arbitrum'],
      category: 'Lampros Tech',
      company: 'Lampros Tech',
      liveLink: 'https://www.chora.club', 
      codeLink: 'https://github.com/ChoraClub', 
    },
    {
      title: 'Pravahini',
      description:
        'An AI-powered marketplace platform with integrated frontend for data visualization, code editor, and decentralized task management. Streamlined workflow for 200+ AI researchers with modern React architecture and intuitive design.',
      icon: Bot,
      image: '/pravahini.png',
      gradient: 'from-slate-600 to-gray-700',
      tags: ['React', 'Tailwind CSS', 'AI', 'Task Management'],
      category: 'Lampros Tech',
      company: 'Lampros Tech',
      liveLink: 'https://pravahini.vercel.app', 
      codeLink: 'https://github.com/prajapati-yash/pravahini', 
    },
    {
      title: 'GovPunk - AI Delegate',
      description:
        'An intelligent governance assistant for Optimism that analyzes proposals using RAG architecture. Processes 1,000+ governance proposals with 95% accuracy using vector search, web scraping, and FastAPI backend with MongoDB integration.',
      icon: Building,
      image: '/govpunk-logo.png',
      gradient: 'from-slate-600 to-gray-700',
      tags: ['RAG', 'Pinecone', 'FastAPI', 'MongoDB', 'AI'],
      category: 'Lampros Tech',
      company: 'Lampros Tech',
      liveLink: 'https://optimism.govpunk.com', 
      codeLink: 'https://github.com/GovPunk-AI-Delegate', 
    },
    {
      title: 'Naresh Steel',
      description:
        'A modern corporate website for Jamnagar\'s leading alloy steel stockist, established in 1968. Features product showcases, company information, and contact details.',
      icon: Factory,
      image: '/nareshsteel.png',
      gradient: 'from-slate-600 to-gray-700',
      tags: ['Next.js', 'Frontend', 'Corporate Website', 'SEO'],
      category: 'Client Project',
      liveLink: 'https://www.nareshsteel.in',
      codeLink: 'https://github.com/Vinit5994/nsc',
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 py-8 px-2 overflow-y-auto scrollbar-hide max-h-[60vh] sm:max-h-[65vh]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-hover cursor-pointer px-3"
            >
              {/* Background gradient */}
              <div
                className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 blur-xl`}
              />

              <div className="relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-full transition-all duration-300 glow-effect">
                {/* Header with Image/Icon */}
                <div className="flex items-start justify-between mb-3 sm:mb-4 md:mb-6">
                  <div
                    className={`relative inline-flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                    style={{ 
                      minWidth: '64px', 
                      minHeight: '64px',
                      maxWidth: '64px',
                      maxHeight: '64px',
                      backgroundImage: project.image ? `url(${project.image})` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {!project.image && (
                      <project.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = getColorValues(project.gradient).text}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, tagIndex) => {
                    const colors = getColorValues(project.gradient);
                    return (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: colors.bg,
                          color: colors.text,
                          borderColor: colors.border,
                          borderWidth: '1px',
                          borderStyle: 'solid'
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 sm:gap-3 mt-auto">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium cursor-hover cursor-pointer gradient-button"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Live</span>
                      <span className="sm:hidden">Live</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-500/50 cursor-not-allowed text-xs sm:text-sm font-medium opacity-50"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Live</span>
                      <span className="sm:hidden">Live</span>
                    </button>
                  )}
                  {project.codeLink ? (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium cursor-hover cursor-pointer border border-gray-400 dark:border-gray-600 bg-transparent hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      Code
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass cursor-not-allowed text-xs sm:text-sm font-medium opacity-50"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      Code
                    </button>
                  )}
                </div>

                {/* Decorative corner */}
                <div 
                  className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(to bottom right, ${getColorValues(project.gradient).hover}15, transparent)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
