import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import portrait from './portait.jpeg'

const socials = [
  { name: 'GitHub', href: 'https://github.com/tuganeb21' },
  { name: 'Email', href: 'mailto:tuganeb@gmail.com' }
]

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const scrollYTransform = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-24 pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative">
          <motion.div
            className="lg:hidden flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={portrait}
                alt="Tugane Brian"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y: scrollYTransform }}
          >
            <motion.h1
              className="text-[3.25rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-bold leading-none tracking-tighter text-center lg:text-left"
              animate={{ x: mousePosition.x, y: mousePosition.y }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            >
              <motion.span
                className="text-transparent stroke-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                TUGANE
              </motion.span>
              <motion.span
                className="text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {' '}BRIAN
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="w-64 lg:w-80 h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={portrait}
                alt="Tugane Brian"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            className="relative z-30 mt-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Product Designer & Creative Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I craft digital experiences that blend aesthetics with functionality.
              Specializing in minimalist design systems and interactive interfaces.
            </p>

            <motion.a
              href="#contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
              <span className="ml-2" aria-hidden="true">↗</span>
            </motion.a>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-black hover:text-black transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href="#services" className="flex flex-col items-center text-gray-400 hover:text-gray-600">
          <span className="text-xs mb-2 tracking-widest uppercase">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
