import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Linkedin, Github, Twitter, MapPin, Award, Code } from 'lucide-react';
import type { TeamMember } from '@shared/schema';

export function Team() {
  const { data: teamMembers, isLoading, error } = useQuery<TeamMember[]>({
    queryKey: ['/api/team'],
  });

  if (isLoading) {
    return (
      <section id="team" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Loading our team...</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="team" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-red-600 dark:text-red-400">Failed to load team members. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate professionals dedicated to bringing your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-3">
                      {member.linkedinUrl && member.linkedinUrl !== '#' && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.githubUrl && member.githubUrl !== '#' && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={member.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-gray-800 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.twitterUrl && member.twitterUrl !== '#' && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={member.twitterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-400 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                >
                  {member.name}
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-blue-600 dark:text-emerald-400 font-medium text-sm mb-3"
                >
                  <Award className="w-4 h-4 mr-1" />
                  {member.role}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4"
                >
                  {member.bio}
                </motion.p>

                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    <Code className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 text-blue-700 dark:text-emerald-300 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-12">
            <MapPin className="w-12 h-12 text-blue-600 dark:text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Based in India, Working Globally
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our team combines local expertise with global standards, delivering world-class 
              digital solutions to clients around the world. Ready to collaborate with us?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}