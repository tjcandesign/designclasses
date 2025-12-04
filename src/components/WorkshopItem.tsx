import React from 'react';
import type { Workshop } from '../data/workshops';

interface WorkshopItemProps {
    workshop: Workshop;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ workshop }) => {
    return (
        <div className="workshop-item bg-[#1a1a1a] border border-gray-800 hover:border-[#FFC107] transition-colors duration-300 group flex flex-col h-full">
            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#FFC107] transition-colors mb-2">
                        {workshop.title}
                    </h3>
                    {workshop.seatsAvailable !== undefined && workshop.available && (
                        <div className="flex items-center gap-2 text-sm">
                            <span className={`font-bold ${workshop.seatsAvailable <= 3 ? 'text-red-400' : 'text-[#FFC107]'}`}>
                                {workshop.seatsAvailable} {workshop.seatsAvailable === 1 ? 'seat' : 'seats'} remaining
                            </span>
                        </div>
                    )}
                </div>

                <p className="text-gray-400 mb-6 flex-grow">{workshop.description}</p>

                <div className="space-y-6 mb-6">
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-800 pb-2">What You'll Learn</h4>
                        <ul className="space-y-2">
                            {workshop.learns.map((item, index) => (
                                <li key={index} className="text-sm text-gray-400 flex items-start">
                                    <span className="text-[#FFC107] mr-2">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-800 pb-2">Outcomes</h4>
                        <ul className="space-y-2">
                            {workshop.outcomes.map((item, index) => (
                                <li key={index} className="text-sm text-gray-400 flex items-start">
                                    <span className="text-[#FFC107] mr-2">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="mt-auto pt-6 border-t border-gray-800">
                    {workshop.price && (
                        <div className="flex items-baseline justify-between mb-4">
                            <div className="text-3xl font-bold text-[#FFC107]">${workshop.price}</div>
                            {workshop.sessions && (
                                <div className="text-sm text-gray-400">
                                    {workshop.sessions} session{workshop.sessions > 1 ? 's' : ''}
                                </div>
                            )}
                        </div>
                    )}

                    {workshop.available ? (
                        <button className="w-full py-3 bg-[#FFC107] text-black font-bold hover:bg-white transition-all uppercase text-sm tracking-widest">
                            Register Now
                        </button>
                    ) : (
                        <button className="w-full py-3 border border-gray-700 text-gray-400 hover:border-[#FFC107] hover:text-[#FFC107] font-bold transition-all uppercase text-sm tracking-widest">
                            {workshop.registrationDate || 'Join Waitlist'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkshopItem;
