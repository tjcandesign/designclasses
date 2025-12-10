import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
    return (
        <section className="py-24 bg-[#FFC107] text-black relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left side – animated steps */}
                    <div>
                        <div className="max-w-xl">
                            <div className="mb-12 text-left">
                                <h2 className="text-5xl font-bold mb-4 text-black">Ready to Start?</h2>
                                <p className="text-black text-xl" style={{ fontFamily: "'DM Mono', monospace" }}>
                                    Secure your spot in an upcoming workshop.
                                </p>
                            </div>

                            <div className="flex flex-col space-y-8">
                                {/* Step 1 */}
                                <motion.div
                                    className="flex items-center gap-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold text-black shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>
                                        1
                                    </div>
                                    <h3 className="text-xl text-black font-bold">Select your workshop</h3>
                                </motion.div>
                                {/* Step 2 */}
                                <motion.div
                                    className="flex items-center gap-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold text-black shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>
                                        2
                                    </div>
                                    <h3 className="text-xl text-black font-bold">Register your details</h3>
                                </motion.div>
                                {/* Step 3 */}
                                <motion.div
                                    className="flex items-center gap-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold text-black shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>
                                        3
                                    </div>
                                    <h3 className="text-xl text-black font-bold">We'll confirm your enrollment</h3>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right side – Register Now button */}
                    <div className="bg-[#FFC107] p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative z-20 rounded-lg">
                        <h3 className="text-2xl font-bold text-black mb-6">Ready to register for a workshop?</h3>
                        <Link
                            to="/register"
                            className="block w-full text-center bg-black text-[#FFC107] font-bold py-4 hover:bg-gray-900 transition-colors uppercase tracking-widest text-sm rounded-lg"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
