import React from 'react';
import type { Workshop } from '../data/workshops';

interface WorkshopItemProps {
    workshop: Workshop;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ workshop }) => {
    // Render seat icons (filled or empty)
    const renderSeatIcons = (total: number = 8, available: number = 0) => {
        const filled = total - available;
        return (
            <div className="flex gap-1 items-center">
                {[...Array(total)].map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={index < filled ? "#FFC107" : "none"}
                        stroke={index < filled ? "#FFC107" : "#666"}
                        strokeWidth={1.5}
                        className="w-4 h-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="workshop-item bg-[#1a1a1a] border border-gray-800 hover:border-[#FFC107] transition-colors duration-300 group flex flex-col h-full">
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
                                    {workshop.sessions} session{workshop.sessions > 1 ? 's' : ''}
                                    <span className="text-xs ml-1">({workshop.sessions * 90} min)</span>
                                </div>
                            )}
                        </div>

                        {workshop.seatsAvailable !== undefined && workshop.available && (
                            <div className="text-right">
                                <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                                    {workshop.seatsAvailable}/{8} seats
                                </div>
                                {renderSeatIcons(8, workshop.seatsAvailable)}
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
