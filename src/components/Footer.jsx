import React from 'react'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tuganeb21' },
    { name: 'Email', url: 'mailto:tuganeb@gmail.com' }
  ]

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Tugane Brian</h3>
            <p className="text-gray-400 text-sm">Product Designer & Creative Developer</p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 border-t border-white/10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Tugane Brian. All rights reserved.</p>
          <a href="#top" className="hover:text-white transition-colors">Back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
