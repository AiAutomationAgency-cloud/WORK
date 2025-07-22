import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe digital transformation should be accessible to everyone, regardless of size or budget.'
    },
    {
      icon: Heart,
      title: 'Passion-Fueled',
      description: 'Every project is crafted with genuine care and attention to detail that shows in the final result.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We work as an extension of your team to achieve your goals.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-mono font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-gray-500 dark:text-gray-400">{'// '}</span>
            About <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">DigitalTeam</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
            {'> '} Born from a vision to democratize digital excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-slate-800 rounded-none p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-mono font-bold text-gray-900 dark:text-white mb-6">{'> '} Our Story</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                {'// '} DigitalTeam was founded with a simple yet powerful belief: exceptional digital solutions 
                shouldn't be a luxury reserved for big corporations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                {'// '} We started as passionate developers and creators who saw businesses struggling 
                to establish their digital presence.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono text-sm">
                {'// '} Today, we help businesses transform through clean code and innovative solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-none shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-none flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-mono font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-500 to-emerald-400 rounded-none p-12 text-white border border-blue-500/30"
        >
          <h3 className="text-2xl font-mono font-bold mb-4">{'> '} Ready to Transform Your Digital Presence?</h3>
          <p className="text-lg mb-8 opacity-90 font-mono">
            {'// '} Join hundreds of satisfied clients
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-mono font-bold mb-2">200+</div>
              <div className="text-base opacity-90 font-mono">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold mb-2">98%</div>
              <div className="text-base opacity-90 font-mono">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold mb-2">24/7</div>
              <div className="text-base opacity-90 font-mono">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;