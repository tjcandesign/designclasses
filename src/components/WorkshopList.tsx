import React from 'react';
import WorkshopItem from './WorkshopItem';
import { workshops } from '../data/workshops';

const WorkshopList: React.FC = () => {
    // Show only the first 3 workshops
    const displayedWorkshops = workshops.slice(0, 3);

    return (
        <section id="workshops" className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="mb-16 pb-8">
                    <h2 className="text-4xl font-bold mb-4">Upcoming Workshops</h2>
                    <p className="text-gray-400 max-w-2xl" style={{ fontFamily: "'DM Mono', monospace" }}>
                        Spaces are limited to 8 students per course to ensure personalized instruction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {displayedWorkshops.map((workshop) => (
                        <WorkshopItem key={workshop.id} workshop={workshop} />
                    ))}
                </div>

                {/* New Courses Coming Soon Section */}
                <div className="mt-24 pt-16 border-t border-gray-800">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-4 text-white">New Courses Coming Soon</h3>
                        <p className="text-gray-400 mb-8">
                            We're always developing new workshops based on community needs. Have an idea for a course you'd like to see?
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Suggest a course topic..."
                                className="flex-grow px-4 py-3 bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC107] transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-[#FFC107] text-black font-bold hover:bg-white transition-all uppercase text-sm tracking-widest whitespace-nowrap"
                            >
                                Submit Idea
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkshopList;
