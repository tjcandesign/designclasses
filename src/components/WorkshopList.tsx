import React from 'react';
import WorkshopItem from './WorkshopItem';
import { workshops } from '../data/workshops';

const WorkshopList: React.FC = () => {
    const featuredCourse = workshops.find(w => w.featured);
    const availableCourses = workshops.filter(w => !w.featured && w.available !== false && w.id !== 'creative-entrepreneurship');
    const entrepreneurCourse = workshops.find(w => w.id === 'creative-entrepreneurship');

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="mb-16 border-b border-gray-800 pb-8">
                    <h2 className="text-4xl font-bold mb-4">UPCOMING WORKSHOPS</h2>
                    <p className="text-gray-400 max-w-2xl">
                        Spaces are limited to 8 students per course to ensure personalized instruction.
                    </p>
                </div>

                {/* Featured Primary Course */}
                {featuredCourse && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-[#FFC107] mb-6 uppercase">Now Enrolling</h3>
                        <div className="grid grid-cols-1 gap-8">
                            <WorkshopItem workshop={featuredCourse} isPrimary={true} />
                        </div>
                    </div>
                )}

                {/* Other Available Courses - Coming Soon */}
                {availableCourses.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-400 mb-6 uppercase">Coming Soon</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {availableCourses.map((workshop) => (
                                <WorkshopItem key={workshop.id} workshop={workshop} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Creative Entrepreneurship - Full Width */}
                {entrepreneurCourse && (
                    <div>
                        <div className="grid grid-cols-1 gap-8">
                            <WorkshopItem workshop={entrepreneurCourse} isWide={true} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WorkshopList;
