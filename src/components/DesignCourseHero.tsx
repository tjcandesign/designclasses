import React from 'react';
import heroImage from '../assets/hero-vintage-photo.jpg';

const DesignCourseHero: React.FC = () => {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}></div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                    WORKHORSE <span className="text-[#FFC107]">WORKSHOPS</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                    Hands-on design education in a functioning studio environment.
                </p>
                <button className="bg-[#FFC107] text-black font-bold py-4 px-10 rounded-none hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm">
                    View Workshops
                </button>
            </div>
        </section>
    );
};

export default DesignCourseHero;
