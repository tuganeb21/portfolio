import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SelectedWork = () => {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Redesign',
      category: 'Real Project',
      client: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tags: ['UI/UX', 'Mobile App'],
      description: 'Complete redesign of the mobile shopping experience',
      service: 'Product Design',
      timeline: '3 months',
      tools: ['Figma', 'React Native']
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'Real Project',
      client: 'FinanceHub',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Web App', 'Data Visualization'],
      description: 'Real-time financial analytics dashboard',
      service: 'UI Design',
      timeline: '2 months',
      tools: ['Figma', 'D3.js']
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'Exploration',
      client: 'Personal Project',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80',
      tags: ['Branding', 'Identity'],
      description: 'Modern brand identity exploration',
      service: 'Brand Design',
      timeline: '1 month',
      tools: ['Illustrator', 'Figma']
    },
    {
      id: 4,
      title: 'Travel App Concept',
      category: 'Exploration',
      client: 'Concept',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      tags: ['Mobile', 'UX Research'],
      description: 'Innovative travel booking experience',
      service: 'UX Design',
      timeline: '4 weeks',
      tools: ['Figma', 'Principle']
    }
  ]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="work" className="py-24 px-6 bg-off-white relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center pointer-events-none opacity-5">
        <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-black tracking-tighter">PORTFOLIO</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Selected Work</h2>
          <p className="text-gray-600 text-lg">A collection of projects that showcase my design approach</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['All', 'Real Project', 'Exploration'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                filter === filterOption
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-black'
              }`}
            >
              {filterOption}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="h-48 md:h-64 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</span>
                  <span className="text-xs text-gray-500">{project.client}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/tuganeb21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            View more on GitHub
            <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
