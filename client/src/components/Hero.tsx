import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-black flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/40 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-emerald-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-slate-600/20 to-gray-700/20 rounded-full blur-3xl"
        />
        
        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-24 h-24 border border-blue-500/30 rounded-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-16 h-16 border border-emerald-400/30 rounded-none rotate-45"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-mono font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-400 bg-clip-text text-transparent bg-300% inline-block"
              >
                Digital
              </motion.span>
              <br />
              <span className="bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 dark:from-slate-200 dark:via-gray-100 dark:to-white bg-clip-text text-transparent relative">
                Team
                <span className="absolute -top-1 -right-8 text-emerald-400 text-2xl font-mono">_</span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-mono"
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {'> '} Make digital transformation accessible && affordable
              </motion.span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base text-gray-500 dark:text-gray-400 mb-12 font-mono"
            >
              // Transforming businesses through code, creativity & innovation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-400 text-white rounded-none font-mono font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden border border-blue-500/20"
              >
                {'> '} init_project()
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  borderColor: "rgb(16, 185, 129)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#portfolio')}
                className="group px-8 py-4 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-none font-mono font-bold text-lg backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {'< '} portfolio {' />'}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotateY: [0, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-slate-800/20 via-gray-900/10 to-blue-900/20 dark:from-slate-900/40 dark:via-gray-800/30 dark:to-blue-900/40 rounded-none backdrop-blur-xl border border-blue-500/20 shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                
                {/* Floating elements inside */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-emerald-400/30 rounded-none blur-sm"
                />
                <motion.div
                  animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-r from-slate-500/30 to-gray-600/30 rounded-none blur-sm"
                />
                
                <div className="text-center">
                  <motion.div 
                    className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-emerald-400 rounded-none flex items-center justify-center mb-8 shadow-2xl border border-blue-500/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-white font-mono text-4xl font-bold">{'<>'}</div>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-mono font-bold text-gray-800 dark:text-white mb-4"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {'{ code: "excellence" }'}
                  </motion.h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 font-mono">
                    // Crafted with precision
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, 40, 0], 
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-10 w-16 h-16 bg-gradient-to-r from-blue-500/40 to-emerald-400/40 rounded-none blur-lg"
            />
            <motion.div
              animate={{ 
                x: [0, -30, 0], 
                y: [0, 30, 0],
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-10 w-12 h-12 bg-gradient-to-r from-slate-500/40 to-gray-600/40 rounded-none blur-lg"
            />
            
            {/* Additional floating stars */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="absolute"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${10 + i * 5}%`,
                }}
              >
                <div className="w-2 h-2 bg-emerald-400/60 rounded-none rotate-45" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;