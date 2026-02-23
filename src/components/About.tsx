import { motion } from 'framer-motion'
import { Sprout, Leaf, Award, Target, Eye, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 mb-4">
            <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Technical Implementation</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] text-slate-800 dark:text-white mb-4">
            System <span className="gradient-text">Design</span> Principles
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Distributed microservices architecture with independent ML services, scalable backend infrastructure, and cross-platform mobile deployment.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: 'Microservices', description: 'Each ML model runs as an independent FastAPI service. Enables isolated scaling, deployment, and fault tolerance. Services communicate via REST APIs with JWT authentication.' },
            { icon: Eye, title: 'Scalability', description: 'Horizontal scaling of ML services. MongoDB Atlas for distributed database. Load balancing across service instances. Stateless API design for easy replication.' },
            { icon: Heart, title: 'Data Pipeline', description: 'Real-time data ingestion from IoT sensors. Preprocessing with pandas and NumPy. Model inference with scikit-learn and TensorFlow. Results cached in MongoDB for performance.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Technical Stack & Architecture</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Backend:</strong> Node.js 18+ with Express framework, JWT-based authentication, MongoDB Atlas for distributed database, RESTful API design with proper error handling.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>ML Services:</strong> Python 3.10+ with FastAPI for high-performance APIs. Independent services for Crop Water Model, Soil Moisture Prediction, Village Water Allocation, and AI Chatbot.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                <strong>Mobile:</strong> React Native with Expo SDK 54 for cross-platform deployment. TypeScript for type safety. Context API for state management. Offline-first architecture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Sprout, label: 'Random Forest Classifier' },
                { icon: Leaf, label: 'LSTM Time Series' },
                { icon: Award, label: 'Facebook Prophet' },
                { icon: Target, label: 'Groq Llama 3.1' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-slate-700/50 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
