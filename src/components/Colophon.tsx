import React from 'react';

const Colophon: React.FC = () => {
    return (
        <section className="py-16 bg-black text-gray-500 border-t border-gray-900 text-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{ fontFamily: "'DM Mono', monospace" }}>

                    <div>
                        <h4 className="text-white uppercase mb-4 tracking-wider">Colophon</h4>
                        <p className="mb-2">
                            This site was designed and developed to serve as a living example of the principles taught in our workshops: clarity, structure, and purpose.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white uppercase mb-4 tracking-wider">Tech Stack</h4>
                        <ul className="space-y-1">
                            <li>React 18</li>
                            <li>TypeScript</li>
                            <li>Vite</li>
                            <li>Tailwind CSS v4</li>
                            <li>Netlify</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white uppercase mb-4 tracking-wider">Typography</h4>
                        <ul className="space-y-1">
                            <li><span className="text-[#FFC107]">Headings:</span> <a href="https://fonts.google.com/specimen/Big+Shoulders+Display" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Big Shoulders Display</a></li>
                            <li><span className="text-[#FFC107]">Body:</span> <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Inter</a></li>
                            <li><span className="text-[#FFC107]">Details:</span> <a href="https://fonts.google.com/specimen/DM+Mono" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DM Mono</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white uppercase mb-4 tracking-wider">Development</h4>
                        <p className="mb-2">
                            Built with <span className="text-white">Antigravity</span>, an advanced AI coding agent by Google DeepMind.
                        </p>
                        <p>
                            Version 1.0.0
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Colophon;
