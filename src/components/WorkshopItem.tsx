import React from 'react';
import type { Workshop } from '../data/workshops';

interface WorkshopItemProps {
    workshop: Workshop;
    isPrimary?: boolean;
    isWide?: boolean;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ workshop, isPrimary = false, isWide = false }) => {
    const gridClass = isWide ? 'md:grid-cols-2' : '';
    const cardBg = isPrimary ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]';
    const borderColor = isPrimary ? 'border-[#FFC107]' : 'border-gray-800';

    return (
        <div className={`workshop-item ${cardBg} border ${borderColor} hover:border-[#FFC107] transition-colors duration-300 group flex flex-col h-full`}>
            <div className={`grid ${gridClass} gap-0 h-full`}>
                {/* Thumbnail */}
                <div className="h-64 md:h-full bg-gray-900 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                        {workshop.featured && (
                            <span className="bg-[#FFC107] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">Featured</span>
                        )}
                        {workshop.registrationDate && (
                            <span className="bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">{workshop.registrationDate}</span>
                        )}
                        {!workshop.available && !workshop.registrationDate && (
                            <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Coming Soon</span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className={`${isPrimary ? 'text-3xl' : 'text-2xl'} font-bold text-white group-hover:text-[#FFC107] transition-colors`}>
                            {workshop.title}
                        </h3>
                        {workshop.price && (
                            <div className="text-right ml-4">
                                <div className="text-3xl font-bold text-[#FFC107]">${workshop.price}</div>
                                {workshop.sessions && (
                                    <div className="text-sm text-gray-400">{workshop.sessions} session{workshop.sessions > 1 ? 's' : ''}</div>
                                )}
                            </div>
                        )}
                    </div>

                    <p className="text-gray-400 mb-6 flex-grow">{workshop.description}</p>

                    <div className={`grid ${isWide ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6`}>
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

                    <div className="mt-8 pt-6 border-t border-gray-800">
                        {workshop.available ? (
                            <button className="w-full py-3 bg-[#FFC107] text-black font-bold hover:bg-white transition-all uppercase text-sm tracking-widest">
                                Register Now
                            </button>
                        ) : (
                            <button className="w-full py-3 border border-gray-700 text-gray-500 font-bold cursor-not-allowed uppercase text-sm tracking-widest" disabled>
                                {workshop.registrationDate ? workshop.registrationDate : 'Registration Opens Soon'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopItem;
