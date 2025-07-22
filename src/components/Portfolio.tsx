import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Star, Zap, Sparkles } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern, responsive e-commerce website with advanced filtering, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        live: '#',
        github: '#'
      },
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Brand Identity Package',
      description: 'Complete visual identity redesign including logo, color palette, typography, and brand guidelines.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Branding',
      technologies: ['Figma', 'Illustrator', 'Photoshop'],
      links: {
        live: '#',
        github: '#'
      },
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Marketing Video Campaign',
      description: 'High-impact promotional videos with motion graphics, professional editing, and compelling storytelling.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Video Production',
      technologies: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
      links: {
        live: '#',
        github: '#'
      },
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Intuitive dashboard design with data visualization, user management, and real-time analytics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      technologies: ['Vue.js', 'D3.js', 'Firebase', 'Tailwind'],
      links: {
        live: '#',
        github: '#'
      },
      color: 'from-green-500 to-teal-600'
    }
  ];

  const categories = ['All', 'Web Development', 'Branding', 'Video Production'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing our best work and the success stories we've created with our clients
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ 
                scale: 1.08,
                y: -2,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-xl border-2 border-blue-200 dark:border-blue-400'
                  : 'bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-500'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"
                  style={{ zIndex: -1 }}
                />
              )}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: 5,
              }}
              className="group relative bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay with glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.links.live}
                      className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </motion.div>
                  <motion.a
                    initial={{ scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.links.github}
                    className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <motion.span 
                    className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                
                {/* Success indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center space-x-1 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/30">
                    <Star className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">Featured</span>
                  </div>
                </motion.div>
              </div>

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

              {/* Project Info */}
              <div className="relative p-8 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-900/50 backdrop-blur-sm">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-current rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0.5, 1, 0.5],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow cursor-default`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 relative z-10">
                  <motion.a
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.live}
                    className={`group/btn flex-1 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-bold text-center hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                    />
                    <Eye size={20} className="relative z-10" />
                    View Project
                  </motion.a>
                  <motion.a
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(0,0,0,0.05)",
                      borderColor: project.color.includes('blue') ? '#3B82F6' : project.color.includes('purple') ? '#8B5CF6' : project.color.includes('orange') ? '#F97316' : '#10B981'
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.github}
                    className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Want to See More?
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block ml-2"
            >
              <Star className="w-8 h-8 text-yellow-500" />
            </motion.div>
          </motion.h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Check out our complete portfolio and case studies
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3 mx-auto relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            />
            <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;