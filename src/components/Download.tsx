import { motion } from 'framer-motion'
import { Github, GitFork, BookOpen, Code } from 'lucide-react'

const repoUrl = 'https://github.com/Sameer-Bagul/jalsakhi-ai-powered-precision-agriculture-platform'

const getInvolvedOptions = [
  { icon: BookOpen, label: 'API Documentation', description: 'RESTful API endpoints, request/response schemas', action: `${repoUrl}/tree/main/docs`, available: true, color: 'from-emerald-500 to-teal-600' },
  { icon: Code, label: 'Architecture Docs', description: 'System design, microservices, data flow diagrams', action: `${repoUrl}/blob/main/docs/ARCHITECTURE.md`, available: true, color: 'from-blue-500 to-cyan-600' },
  { icon: Github, label: 'Setup & Deployment', description: 'Local development setup and cloud deployment', action: `${repoUrl}/blob/main/docs/DEVELOPMENT.md`, available: true, color: 'from-purple-500 to-pink-600' },
  { icon: GitFork, label: 'Source Code', description: 'Browse backend, ML services, and mobile app code', action: repoUrl, available: true, color: 'from-slate-700 to-slate-900' },
]

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 mb-4">
            <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Get Involved</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] text-slate-800 dark:text-white mb-4">
            Technical <span className="gradient-text">Documentation</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive documentation covering system architecture, API specifications, deployment guides, and contribution workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {getInvolvedOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.action}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-lg text-center group hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${option.color} shadow-lg group-hover:scale-110 transition-transform`}>
                <option.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{option.label}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{option.description}</p>
              <span className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
                View Documentation
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Explore the Technical Implementation</h3>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
              Dive into the codebase, understand the system architecture, review ML models, and see how microservices communicate in this full-stack AgriTech platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href={`${repoUrl}/tree/main/ml-services`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Code className="w-5 h-5" />
                View ML Services
              </motion.a>
              <motion.a 
                href={`${repoUrl}/tree/main/server`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700/30 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold hover:bg-emerald-700/50 transition-all"
              >
                <Github className="w-5 h-5" />
                Backend Source
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
