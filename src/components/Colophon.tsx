```javascript
import React from 'react';

const Colophon: React.FC = () => {
    return (
        <section className="py-16 bg-black text-gray-500 border-t border-gray-900 text-sm">
            <div className="container mx-auto px-6">
                <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white uppercase tracking-wider">Colophon</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{ fontFamily: "'DM Mono', monospace" }}>

                    
          <div>
            <p className="mb-2">
              This site was designed and developed to serve as a living example of the principles taught in our workshops: clarity, structure, and purpose.
            </p>
          </div>

          <div>
            <h4 className="text-white uppercase mb-4 tracking-wider text-xs">Tech Stack</h4>
            <ul className="space-y-1">
              <li>React 18</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>Tailwind CSS v4</li>
              <li>Netlify</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase mb-4 tracking-wider text-xs">Typography</h4>
            <ul className="space-y-1">
              <li><span className="text-[#FFC107]">Headings:</span> <a href="https://fonts.google.com/specimen/Big+Shoulders+Display" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Big Shoulders Display</a></li>
              <li><span className="text-[#FFC107]">Body:</span> <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Inter</a></li>
              <li><span className="text-[#FFC107]">Details:</span> <a href="https://fonts.google.com/specimen/DM+Mono" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DM Mono</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase mb-4 tracking-wider text-xs">Development</h4>
            <p>Built with <a href="https://deepmind.google/technologies/antigravity/" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:text-white transition-colors">Antigravity</a> by Google DeepMind</p>
          </div>              
                </div>
            </div>
        </section>
    );
};

export default Colophon;
