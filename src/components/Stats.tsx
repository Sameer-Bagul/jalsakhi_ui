import { motion } from 'framer-motion'
import { Github, GitFork, Star, Users, Code, Zap, Database, Cpu } from 'lucide-react'

export default function Stats() {
  const repoUrl = 'https://github.com/Sameer-Bagul/jalsakhi-ai-powered-precision-agriculture-platform'
  
  const stats = [
    { icon: Code, label: 'Microservices', value: '4', color: 'from-emerald-500 to-teal-600' },
    { icon: Users, label: 'Tech Stack', value: '8+', color: 'from-green-500 to-emerald-600' },
    { icon: GitFork, label: 'API Endpoints', value: '20+', color: 'from-teal-500 to-cyan-600' },
    { icon: Database, label: 'Database', value: 'MongoDB', color: 'from-yellow-400 to-orange-500' },
    { icon: Zap, label: 'ML Algorithms', value: '6', color: 'from-purple-500 to-pink-600' },
    { icon: Cpu, label: 'Frameworks', value: 'FastAPI', color: 'from-red-500 to-rose-600' },
  ]

  return (
    <section id="opensource" className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 mb-4"
          >
            <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Open Source Project</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] text-slate-800 dark:text-white mb-4">
            System <span className="gradient-text">Architecture</span> & <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Scalable microservices architecture with independent ML services, RESTful APIs, real-time data processing, and cross-platform mobile deployment.
          </p>
          <motion.a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </motion.a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-lg text-center"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Activity Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Repository Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">GitHub Repository</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Open Source & Free</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-slate-700/50 rounded-xl">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Backend</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Node.js + Express</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-slate-700/50 rounded-xl">
                <span className="text-slate-700 dark:text-slate-300 font-medium">ML Services</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">Python + FastAPI</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-slate-700/50 rounded-xl">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Mobile</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">React Native + Expo SDK 54</span>
              </div>
            </div>
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all"
            >
              <Star className="w-5 h-5" />
              Star on GitHub
            </motion.a>
          </motion.div>

          {/* Contribution Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Microservices</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Independent Services</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Each ML service runs independently with its own FastAPI instance, enabling isolated scaling, deployment, and fault tolerance.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>Crop Water Recommendation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>Soil Moisture Prediction</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>Village Water Allocation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>AI Chatbot (Groq Llama 3.1)</span>
              </div>
            </div>
            <motion.a
              href={`${repoUrl}/tree/main/ml-services`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-semibold transition-all"
            >
              <Code className="w-5 h-5" />
              View ML Services
            </motion.a>
          </motion.div>
        </div>

        {/* Architecture Diagrams Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 text-center">
            System <span className="gradient-text">Architecture</span> Diagrams
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto text-center">
            Detailed architecture diagrams showing microservices communication, data flow, and system design patterns.
          </p>
          
          {/* Placeholder for Architecture Diagrams */}
          <div className="space-y-8">
            {/* Diagram 1 Placeholder */}
            <div className="bg-slate-100 dark:bg-slate-700/50 rounded-2xl p-8 md:p-16 border-2 border-dashed border-slate-300 dark:border-slate-600 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Database className="w-16 h-16 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-2">Microservices Architecture Diagram</h4>
                <p className="text-slate-500 dark:text-slate-500">Full system architecture showing all services, databases, and communication patterns</p>
              </div>
            </div>

            {/* Diagram 2 Placeholder */}
            <div className="bg-slate-100 dark:bg-slate-700/50 rounded-2xl p-8 md:p-16 border-2 border-dashed border-slate-300 dark:border-slate-600 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <GitFork className="w-16 h-16 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-2">User Flow & Data Pipeline</h4>
                <p className="text-slate-500 dark:text-slate-500">End-to-end user journey and data processing flow through the system</p>
              </div>
            </div>

            {/* Diagram 3 Placeholder */}
            <div className="bg-slate-100 dark:bg-slate-700/50 rounded-2xl p-8 md:p-16 border-2 border-dashed border-slate-300 dark:border-slate-600 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Code className="w-16 h-16 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-2">ML Pipeline Architecture</h4>
                <p className="text-slate-500 dark:text-slate-500">Machine learning model training, deployment, and inference pipeline</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.a
              href={`${repoUrl}/tree/main/docs`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 dark:bg-slate-700/50 text-emerald-700 dark:text-emerald-400 rounded-full font-semibold border-2 border-emerald-200 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-all"
            >
              <Github className="w-5 h-5" />
              View Documentation
            </motion.a>
            <motion.a
              href={`${repoUrl}/tree/main/server`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
            >
              <Code className="w-5 h-5" />
              Backend Source Code
            </motion.a>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h4 className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-6">Technology Stack & Frameworks</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['React Native + Expo SDK 54', 'Node.js 18 + Express', 'Python 3.10 + FastAPI', 'MongoDB Atlas', 'Scikit-learn + TensorFlow', 'JWT Authentication', 'REST APIs', 'TypeScript'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
