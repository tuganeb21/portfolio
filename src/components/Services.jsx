import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: 'Product Design',
      description: 'Creating intuitive and visually appealing digital products that solve real user problems.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting seamless user experiences with attention to detail and accessibility.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      features: ['Interface Design', 'User Flows', 'Interaction Design', 'Accessibility']
    },
    {
      title: 'Brand Identity',
      description: 'Building memorable brand identities that communicate your unique value proposition.',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      title: 'Web Development',
      description: 'Developing responsive and performant web applications using modern technologies.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      features: ['React', 'Responsive Design', 'Performance', 'SEO']
    }
  ]

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center pointer-events-none opacity-5">
        <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-black tracking-tighter">SERVICES</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive design and development solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* Service Image */}
              <div className="h-48 md:h-56 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-3 border-2 border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Discuss Your Project
            <span className="ml-2">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
