import React from 'react';
import type { Workshop } from '../data/workshops';

interface WorkshopItemProps {
    workshop: Workshop;
    highlighted?: boolean;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ workshop, highlighted = false }) => {
    const borderClass = highlighted ? 'border-[#FFC107]' : 'border-gray-800';

    return (
        <div className={`workshop-item bg-[#1a1a1a] border ${borderClass} hover:border-[#FFC107] transition-colors duration-300 group flex flex-col h-full shadow-2xl rounded-lg`}>
            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#FFC107] transition-colors mb-2">
                        {workshop.title}
                    </h3>
                </div>

                <p className="text-gray-400 mb-6 flex-grow">{workshop.description}</p>

                <div className="space-y-6 mb-6">
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-800 pb-2">What You'll Learn</h4>
                        <ul className="space-y-2">
                            {workshop.learns.map((item, index) => (
                                <li key={index} className="text-sm text-gray-400 flex items-start" style={{ fontFamily: "'DM Mono', monospace" }}>
                                    <span className="text-[#FFC107] mr-2">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-800 pb-2">Outcomes</h4>
                        <ul className="space-y-2">
                            {workshop.outcomes.map((item, index) => (
                                <li key={index} className="text-sm text-gray-400 flex items-start" style={{ fontFamily: "'DM Mono', monospace" }}>
                                    <span className="text-[#FFC107] mr-2">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Pricing and Seat Availability Section */}
                <div className="mt-auto pt-6 border-t border-gray-800">
                    <div className="flex items-baseline justify-between mb-4">
                        <div>
                            {workshop.price && (
                                <div className="text-3xl font-bold text-[#FFC107]" style={{ fontFamily: "'DM Mono', monospace" }}>
                                    ${workshop.price}
                                </div>
                            )}
                            {workshop.sessions && (
                                <div className="text-sm text-gray-400 mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                                    {workshop.sessions === 1 ? '1 90-minute session' : `${workshop.sessions} x 90-minute sessions`}
                                </div>
                            )}
                        </div>

                        {workshop.seatsAvailable !== undefined && workshop.available && (
                            <div className="text-right">
                                <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                                    {workshop.seatsAvailable}/{8} seats Remaining
                                </div>
                            </div>
                        )}
                    </div>

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
