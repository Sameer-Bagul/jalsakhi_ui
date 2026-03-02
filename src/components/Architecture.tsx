import { useState } from 'react';
import { motion } from 'framer-motion';

const Architecture = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const diagrams = [
        {
            title: "User Flow Journey",
            description: "A comprehensive map of the user experience, from onboarding to AI-driven farm management for both Farmers and Village Administrators.",
            image: "/images/appflow.png",
            tag: "Process Flow"
        },
        {
            title: "AI & ML Intelligence",
            description: "Exploring the core 'Brain' of JalSakhi. Multiple FastAPI microservices powering Crop Water predictions, Soil Moisture forecasting, and Water Allocation.",
            image: "/images/MLservice.png",
            tag: "System Architecture"
        },
        {
            title: "Local Server Simulation",
            description: "Our innovative development environment using Ngrok to expose local services, ensuring seamless integration testing between mobile apps and ML backends.",
            image: "/images/ngrok.png",
            tag: "Infrastructure"
        }
    ];

    return (
        <section id="architecture" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-outfit"
                    >
                        System Architecture & <span className="text-emerald-500">Intelligence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Behind the intuitive interface lies a robust ecosystem of AI models and scalable architecture designed for precision agriculture.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {diagrams.map((diagram, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
                        >
                            <div 
                                className="relative overflow-hidden rounded-2xl mb-6 bg-slate-200 dark:bg-slate-700 aspect-[4/3] cursor-pointer"
                                onClick={() => setSelectedImage(diagram.image)}
                            >
                                <img
                                    src={diagram.image}
                                    alt={diagram.title}
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 p-2"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
                                        {diagram.tag}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full">
                                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Click to Enlarge</span>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 pb-4">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-outfit group-hover:text-emerald-500 transition-colors">
                                    {diagram.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {diagram.description}
                                </p>

                                <button
                                    onClick={() => setSelectedImage(diagram.image)}
                                    className="inline-flex items-center text-emerald-500 font-semibold text-sm group/btn"
                                >
                                    View Full Diagram
                                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h4 className="text-2xl font-bold dark:text-white mb-4 font-outfit">Open Source & Scalable</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Our architecture is fully open-source and leverages modern microservices patterns. We use FastAPI for localized inference and MongoDB Atlas for distributed data management, ensuring that JalSakhi can scale to serve thousands of farm communities.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg mb-2">
                                    <img src="https://img.icons8.com/color/48/python.png" className="w-6 h-6" alt="Python" />
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold">FastAPI</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg mb-2">
                                    <img src="https://img.icons8.com/color/48/nodejs.png" className="w-6 h-6" alt="Node.js" />
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold">Node.js</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg mb-2">
                                    <img src="https://img.icons8.com/color/48/mongodb.png" className="w-6 h-6" alt="MongoDB" />
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold">MongoDB</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg mb-2">
                                    <img src="https://img.icons8.com/color/48/react-native.png" className="w-6 h-6" alt="React Native" />
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold">React</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Full-size Image Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full size diagram"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Architecture;

