import React from 'react';
import { motion } from 'motion/react';
import heroImage from '../assets/hero-vintage-photo.jpg';

const DesignCourseHero: React.FC = () => {
    const scrollToWorkshops = () => {
        const workshopsSection = document.querySelector('#workshops');
        workshopsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}></div>

            {/* Halftone Texture Overlay */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
                    backgroundSize: '4px 4px'
                }}
            ></div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold text-[#FFC107] mb-4 tracking-tight uppercase"
                    style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
                >
                    WORKHORSE WORKSHOPS
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                >
                    Hands-on design education in a functioning studio environment.
                </motion.p>

                {/* Down Arrow */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    onClick={scrollToWorkshops}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black transition-all duration-300 animate-bounce"
                    aria-label="Scroll to workshops"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </motion.button>
            </div>
        </section>
    );
};

export default DesignCourseHero;
