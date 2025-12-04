import React from 'react';
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
                <h1 className="text-6xl md:text-8xl font-bold text-[#FFC107] mb-4 tracking-tight uppercase" style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}>
                    WORKHORSE WORKSHOPS
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                    Hands-on design education in a functioning studio environment.
                </p>

                {/* Down Arrow */}
                <button
                    onClick={scrollToWorkshops}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black transition-all duration-300 animate-bounce"
                    aria-label="Scroll to workshops"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default DesignCourseHero;
