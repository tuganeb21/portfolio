import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      company: 'Independent',
      role: 'Product Designer & Creative Developer',
      period: 'Present',
      description: 'Designing and building digital products, brand systems, and web interfaces for clients.',
      location: 'Kigali, Rwanda'
    },
    {
      company: 'Freelance',
      role: 'UI/UX Designer',
      period: 'Ongoing',
      description: 'Crafting user research, interface design, and front-end implementation for web and product work.',
      location: 'Remote'
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center pointer-events-none opacity-5">
        <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-black tracking-tighter">EXPERIENCE</span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Experience</h2>
          <p className="text-gray-600 text-lg">My professional journey in design and development</p>
        </div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Experience Entry */}
              <div className="py-8 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Company and Role */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-1">
                      {experience.company}
                    </h3>
                    <p className="text-gray-700 font-medium mb-2">
                      {experience.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {experience.description}
                    </p>
                  </div>

                  {/* Period and Location */}
                  <div className="md:text-right">
                    <p className="text-sm text-gray-500 mb-1">
                      {experience.period}
                    </p>
                    <p className="text-sm text-gray-400">
                      {experience.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h4 className="font-semibold text-black mb-2">Skills & Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {['Product Design', 'UI/UX', 'User Research', 'Prototyping', 'Design Systems', 'React', 'Figma', 'Adobe Creative Suite'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
