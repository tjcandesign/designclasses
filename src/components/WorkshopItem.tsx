import React from 'react';
import type { Workshop } from '../data/workshops';

interface WorkshopItemProps {
    workshop: Workshop;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ workshop }) => {
    return (
        <div className="workshop-item bg-[#1a1a1a] border border-gray-800 hover:border-[#FFC107] transition-colors duration-300 group flex flex-col h-full">
            {/* Thumbnail Placeholder */}
            <div className="h-48 bg-gray-900 w-full relative overflow-hidden">
                {/* In a real app, use the actual image path. For now, a colored placeholder or stock URL */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute bottom-4 left-4">
                    <span className="bg-[#FFC107] text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">Workshop</span>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFC107] transition-colors">{workshop.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{workshop.description}</p>

                <div className="space-y-6">
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
                    <button className="w-full py-3 border border-white text-white font-bold hover:bg-white hover:text-black transition-all uppercase text-sm tracking-widest">
                        Details & Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkshopItem;
