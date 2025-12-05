import React from 'react';

const Overview: React.FC = () => {
    return (
        <section className="py-24 bg-[#111111] text-white border-b border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-bold mb-6 text-[#FFC107]">Upcoming Workhorse Workshops Series</h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-lg md:text-xl leading-relaxed font-light text-gray-300 mb-8">
                            Workhorse Studio Workshops are designed to bridge the gap between academic theory and professional practice.
                            We offer intensive, hands-on courses that focus on real-world skills, production techniques, and the business of design.
                        </p>
                        <p className="text-base text-[#FFC107]" style={{ fontFamily: "'DM Mono', monospace" }}>
                            Whether you're a student looking to expand your portfolio or a professional wanting to learn new tools,
                            our workshops provide direct access to industry expertise and equipment.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFC107] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
