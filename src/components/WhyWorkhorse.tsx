import React from 'react';

const WhyWorkhorse: React.FC = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why Workhorse?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-[#1a1a1a] p-8 border border-gray-800 hover:border-[#FFC107] transition-colors duration-300 shadow-2xl">
                        <div className="mb-6 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">Real Studio Environment</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Learn inside a functioning design studio, not a classroom. See how projects move from concept to completion in real-time.
                        </p>
                    </div>

                    <div className="bg-[#1a1a1a] p-8 border border-gray-800 hover:border-[#FFC107] transition-colors duration-300 shadow-2xl">
                        <div className="mb-6 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">Hands-On Production</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We believe in making. Our curriculum emphasizes physical production, from print to fabrication, ensuring you understand the medium.
                        </p>
                    </div>

                    <div className="bg-[#1a1a1a] p-8 border border-gray-800 hover:border-[#FFC107] transition-colors duration-300 shadow-2xl">
                        <div className="mb-6 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">Professional Network</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Connect with working professionals, guest lecturers, and fellow designers. Build relationships that can launch your career.
                        </p>
                    </div>

                    <div className="bg-[#1a1a1a] p-8 border border-gray-800 hover:border-[#FFC107] transition-colors duration-300 shadow-2xl">
                        <div className="mb-6 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">Real-World Experience</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            It's not just theory. From years of mistakes, we'll help fast-track you through and get you on your way to making, faster.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkhorse;
