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
  ];

  return (
    <section
      id="education"
      className="w-screen h-screen flex items-center justify-center px-8 md:px-16 relative grid-bg"
    >
      {/* Subtle floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-16 w-2 h-2 bg-purple-500 rounded-full opacity-40 animate-float delay-100" />
        <div className="absolute bottom-1/4 right-24 w-2 h-2 bg-indigo-500 rounded-full opacity-40 animate-float delay-300" />
      </div>

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-400">
            Academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br hidden md:block"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${
                      edu.color.split(' ')[1]
                    }, ${edu.color.split(' ')[3]})`,
                  }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />

                <motion.div
                  className="glass rounded-2xl p-6 md:p-8 cursor-hover group hover:bg-white/5"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${edu.color} bg-opacity-20`}
                        >
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">
                          {edu.school}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-lg mb-2">{edu.degree}</p>
                  {edu.gpa && (
                    <p className="text-indigo-400 font-semibold">{edu.gpa}</p>
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
