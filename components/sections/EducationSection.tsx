'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      school: 'LD College of Engineering',
      location: 'Ahmedabad, India',
      degree: 'Bachelor of Engineering in Information Technology',
      gpa: 'CGPA 8.4/10',
      period: '2020 - 2024',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      school: 'Prime Science School',
      location: 'Jamnagar, India',
      degree: 'Higher Secondary Education – Science Stream',
      gpa: '',
      period: '2018 - 2020',
      color: 'from-purple-500 to-pink-500',
    },
    {
      school: "Bhavan's Shree A. K. Doshi Vidhyalaya",
      location: 'Jamnagar, India',
      degree: 'Secondary School Certificate (10th Grade)',
      gpa: '',
      period: '2018',
      color: 'from-pink-500 to-orange-500',
    },
  ];

  return (
    <section
      id="education"
      className="w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative grid-bg"
    >
      {/* Subtle floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-16 w-2 h-2 rounded-full opacity-40 animate-float delay-100" style={{ backgroundColor: '#4A70A9' }} />
        <div className="absolute bottom-1/4 right-24 w-2 h-2 rounded-full opacity-40 animate-float delay-300" style={{ backgroundColor: '#8FABD4' }} />
      </div>

      <div className="max-w-4xl w-full h-full flex flex-col py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-1">
            Academic journey and qualifications
          </p>
          <p className="text-xs sm:text-sm italic text-indigo-600 dark:text-indigo-400 opacity-80">
            Building the foundation — where theory met curiosity
          </p>
        </motion.div>

        <div className="relative flex-1 flex items-center justify-center">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-orange-500 hidden md:block" />

          <div className="space-y-4 sm:space-y-6 w-full">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-16"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 top-4 w-4 h-4 rounded-full bg-gradient-to-br hidden md:block"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${
                      edu.color.split(' ')[1]
                    }, ${edu.color.split(' ')[3]})`,
                  }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                />

                <motion.div
                  className="glass rounded-xl p-4 sm:p-5 group hover:bg-white/5"
                  whileHover={{ scale: 1.01, x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div
                          className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${edu.color} bg-opacity-20 shrink-0`}
                        >
                          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-indigo-400 transition-colors truncate">
                          {edu.school}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                        <span className="text-xs sm:text-sm">{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400 mt-2 sm:mt-0 shrink-0">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base mb-1">{edu.degree}</p>
                  {edu.gpa && (
                    <p className="text-indigo-400 font-semibold text-sm">{edu.gpa}</p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
