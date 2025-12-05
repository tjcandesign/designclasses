import React from 'react';
import { motion } from 'motion/react';
import type { Workshop } from '../data/workshops';

interface WorkshopItemProps {
    workshop: Workshop;
    index?: number;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ workshop, index = 0 }) => {
    const borderClass = 'border-[#FFC107]';
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" as any }}
                className={`workshop-item bg-[#1a1a1a] border ${borderClass} hover:bg-[#222] transition-colors duration-300 group flex flex-col h-full shadow-2xl rounded-lg`}
            >
                <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#FFC107] group-hover:text-white transition-colors mb-2">
                            {workshop.title}
                        </h3>
                    </div>

                    <p className="text-gray-400 mb-6 flex-grow">{workshop.description}</p>

                    <div className="space-y-6 mb-6">
                        <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-800 pb-2">What You'll Learn</h4>
                            <ul className="space-y-2">
                                {workshop.learns.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-400 flex items-start" style={{ fontFamily: "'DM Mono', monospace" }}>
                                        <span className="text-[#FFC107] mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-800 pb-2">Outcomes</h4>
                            <ul className="space-y-2">
                                {workshop.outcomes.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-400 flex items-start" style={{ fontFamily: "'DM Mono', monospace" }}>
                                        <span className="text-[#FFC107] mr-2">→</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Pricing and Seat Availability Section */}
                    <div className="mt-auto pt-6 border-t border-gray-800">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                {workshop.price && (
                                    <div className="text-2xl font-bold text-[#FFC107]" style={{ fontFamily: "'DM Mono', monospace" }}>
                                        ${workshop.price}
                                    </div>
                                )}
                            </div>

                            <div className="text-right">
                                {workshop.sessions && (
                                    <div className="text-sm text-gray-400 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                                        90-minute session
                                    </div>
                                )}
                                {workshop.seatsAvailable !== undefined && workshop.available && (
                                    <div className="text-sm text-gray-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                                        {workshop.seatsAvailable}/{8} seats Remaining
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={openModal}
                            className="w-full py-3 border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black font-bold transition-all uppercase text-sm tracking-widest rounded-lg"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={closeModal}></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative bg-[#1a1a1a] border border-[#FFC107] p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
                    >
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 className="text-3xl font-bold text-[#FFC107] mb-2">{workshop.title}</h2>
                        <p className="text-gray-400 mb-8 text-lg">{workshop.description}</p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Prerequisites & Experience</h3>
                                <p className="text-gray-300">
                                    This workshop is designed for {workshop.id === 'intro-graphic-design' ? 'beginners with little to no prior experience.' : 'designers looking to expand their skillset.'}
                                    Come with an open mind and a willingness to learn.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Required Equipment</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Laptop (Mac or PC) capable of running design software</li>
                                    <li>Mouse or trackpad</li>
                                    <li>Notebook and pen for sketching</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Pre-Class Preparation</h3>
                                <p className="text-gray-300 mb-4">
                                    To get the most out of our session, please review the following materials:
                                </p>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-[#FFC107] hover:underline flex items-center gap-2">
                                            <span>📄</span> Workshop Syllabus & Schedule
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-[#FFC107] hover:underline flex items-center gap-2">
                                            <span>📚</span> Recommended Reading List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-[#FFC107] hover:underline flex items-center gap-2">
                                            <span>💻</span> Software Installation Guide
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-800 flex justify-end">
                            <button
                                onClick={() => alert('Registration flow would continue here.')}
                                className="w-full py-3 bg-[#FFC107] text-black font-bold hover:bg-white transition-all uppercase text-sm tracking-widest rounded"
                            >
                                Proceed to Registration
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default WorkshopItem;
