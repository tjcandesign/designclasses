import React from 'react';

const WhyWorkhorse: React.FC = () => {
    return (
        <section className="py-24 bg-black text-white border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">WHY WORKHORSE?</h2>
                    <div className="w-24 h-1 bg-[#FFC107]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-[#111111] p-8 border border-gray-800 hover:border-[#FFC107] transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">Real Studio Environment</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Learn inside a functioning design studio, not a classroom. See how projects move from concept to completion in real-time.
                        </p>
                    </div>

                    <div className="bg-[#111111] p-8 border border-gray-800 hover:border-[#FFC107] transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">Hands-On Production</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We believe in making. Our curriculum emphasizes physical production, from print to fabrication, ensuring you understand the medium.
                        </p>
                    </div>

                    <div className="bg-[#111111] p-8 border border-gray-800 hover:border-[#FFC107] transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">MLK Fab Lab Access</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Gain access to state-of-the-art tools including laser cutters, 3D printers, and CNC machines through our partnership with MLK Library.
                        </p>
                    </div>

                    <div className="bg-[#111111] p-8 border border-gray-800 hover:border-[#FFC107] transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">Professional Network</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Connect with working professionals, guest lecturers, and fellow designers. Build relationships that can launch your career.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkhorse;
