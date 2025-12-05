import React from 'react';
import WorkshopItem from './WorkshopItem';
import { workshops } from '../data/workshops';

const WorkshopList: React.FC = () => {
    // Show only the first 3 workshops
    const displayedWorkshops = workshops.slice(0, 3);

    return (
        <section className="py-24 bg-[#0a0a0a] text-white border-b border-gray-800">
            <div className="container mx-auto px-6">
                <div className="mb-16 pb-8">
                    <h2 className="text-4xl font-bold mb-4">Upcoming Workhorse Workshop Courses</h2>
                    <p className="w-full text-[#FFC107] text-base md:text-lg font-medium mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                        Spaces are limited to 8 students per course to ensure personalized instruction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {displayedWorkshops.map((workshop, index) => (
                        <WorkshopItem
                            key={workshop.id}
                            workshop={workshop}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkshopList;
