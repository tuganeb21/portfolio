import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-off-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Availability Indicator */}
        <motion.div 
          className="flex items-center justify-center space-x-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-gray-600 font-medium">Available for New Project</span>
        </motion.div>

        {/* Main CTA */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          HAVE A PROJECT IN MIND?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Let's create something clear and impactful together. I'm always excited to collaborate on meaningful projects that make a difference.
        </motion.p>

        {/* Contact Button */}
        <motion.a 
          href="mailto:tuganeb@gmail.com"
          className="inline-flex items-center bg-black text-white px-10 py-5 rounded-full text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
          <span className="ml-2">↗</span>
        </motion.a>

        {/* Alternative Contact Methods */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
          <a href="mailto:tuganeb@gmail.com" className="hover:text-black transition-colors">
            tuganeb@gmail.com
          </a>
          <span className="hidden md:block text-gray-300">•</span>
          <a href="tel:+250795816644" className="hover:text-black transition-colors">
            +250 795 816 644
          </a>
        </div>

        {/* Quick Contact Info */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { icon: '📍', title: 'Location', desc: 'Kigali, RW' },
            { icon: '⏰', title: 'Response Time', desc: 'Within 24 hours' },
            { icon: '🎯', title: 'Focus Areas', desc: 'Product Design, UI/UX, Branding' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-semibold text-black mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
