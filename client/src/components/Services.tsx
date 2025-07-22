import React from 'react';
import { motion } from 'framer-motion';
import { Code, Video, Image, Sparkles, Zap, Star, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development'],
      gradient: 'from-blue-500 to-indigo-600',
      bgPattern: 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, social media, and corporate content.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Social Media Formats'],
      gradient: 'from-purple-500 to-pink-600',
      bgPattern: 'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      icon: Image,
      title: 'Image Editing',
      description: 'High-quality photo editing and graphic design for all your visual content needs.',
      features: ['Photo Retouching', 'Background Removal', 'Brand Graphics', 'Social Media Assets'],
      gradient: 'from-orange-500 to-red-600',
      bgPattern: 'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      icon: Sparkles,
      title: 'Personal Branding',
      description: 'Complete branding solutions to help you stand out and build a strong digital presence.',
      features: ['Logo Design', 'Brand Guidelines', 'Social Media Strategy', 'Content Planning'],
      gradient: 'from-green-500 to-teal-600',
      bgPattern: 'from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to help your business thrive in the digital world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: 5,
              }}
              className={`group relative bg-gradient-to-br ${service.bgPattern} backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(3)].map((_, i) => (
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

              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
                className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`group/btn w-full py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                />
                Learn More
                <ArrowRight size={20} className="relative z-10" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 shadow-lg overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-current rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0.5, 1.2, 0.5],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
            
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Star className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Need Something Custom?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              We love unique challenges and custom solutions. Let's discuss your specific needs.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-12 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3 mx-auto relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              />
              <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;