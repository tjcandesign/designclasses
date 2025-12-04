import React from 'react';
import WorkshopItem from './WorkshopItem';
import { workshops } from '../data/workshops';

const WorkshopList: React.FC = () => {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="mb-16 border-b border-gray-800 pb-8">
                    <h2 className="text-4xl font-bold mb-4">UPCOMING WORKSHOPS</h2>
                    <p className="text-gray-400 max-w-2xl">
                        Spaces are limited to 8 students per course to ensure personalized instruction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workshops.map((workshop) => (
                        <WorkshopItem key={workshop.id} workshop={workshop} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkshopList;
